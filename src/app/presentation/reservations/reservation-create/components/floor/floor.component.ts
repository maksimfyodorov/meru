import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBookingItemAction } from '@base/booking-list/booking-item/booking-item.model';
import { IBookingItems } from '@base/booking-list/booking-list.model';
import { IMarks, MarkItemLogicType } from '@base/map/map-mark/map-mark.model';
import { IMapSize } from '@base/map/map.model';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { TranslatePipe } from '@ngx-translate/core';
import { FloorService } from '@presentation/reservations/reservation-create/components/floor/floor.service';
import { IFloor, IWorkplace } from '@presentation/reservations/reservation-create/models';
import { checkReservedNeighbors, getDistanceCheckConfirmModal } from '@presentation/reservations/utils/reservation';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { IAppointment, IArea, IBuilding } from '@shared/http/models/database.model';
import { ReservationType } from '@shared/http/models/meta.model';
import { ConfigService } from '@src/app/core/services/config.service';
import { ReservationMarksService } from '@src/app/core/services/reservation-marks.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject, combineLatest, fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const HEIGHT_EXCEPT_MAP: number = 335;

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ReservationMarksService, FloorService],
})
export class FloorComponent implements AfterViewInit, OnDestroy {
  areas: IArea[];
  areasVisible: boolean = false;
  activeMarkIndex = null;
  allReservations: any[];
  floorsList: IFloor[];
  currentFloor: IFloor;
  currentBuild: Record<string, any>;
  image: string;
  imageSize: IMapSize;
  marks: IMarks = [];
  currentReservation: Record<string, string | number> = {};
  select = { value: { label: '', value: null }, values: [] };
  bookingItems: IBookingItems;
  hiddenMarksTypes: MarkItemLogicType[] = [];
  centeredItemId: number;
  reservations: Record<string, Array<any>> = {
    success: [],
    errors: [],
  };
  shortDateTimeFormat = this._measurements.getMeasurementByName('shortDateTime');
  currentWorkplace$ = new BehaviorSubject<Record<string, any>>(null);
  @MarkForCheck
  mapHeight: number = 0;
  resize$: Observable<any> = fromEvent(window, 'resize');
  nornikAplana = false;
  hiddenControls = [];

  meetingSubject: string;

  @Subscriptions()
  sub: Subscription;

  @ViewChild('modalTitleTpl') modalTitleTpl: TemplateRef<any>;
  @ViewChild('modalContentTpl') modalContentTpl: TemplateRef<any>;
  @ViewChild('reservationModalTpl') reservationModalTpl: TemplateRef<any>;
  @ViewChild('popupTpl') popupTpl: TemplateRef<any>;
  toggleAreasVisible(): void {
    this.areasVisible = !this.areasVisible;
  }

  showAdvancedCard = false; // Показывать расширенную карточку вместо фильтров
  closeAdvcardTimerId; // Задержка скрытия карточки при клике поп пустому месту карты
  _isAdvancedCardLoading$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  set isAdvancedCardLoading(value: boolean) {
    this._isAdvancedCardLoading$.next(value);
  }
  get isAdvancedCardLoading() {
    return this._isAdvancedCardLoading$.getValue();
  }

  constructor(
    private _service: FloorService,
    private _cdr: ChangeDetectorRef,
    private _modal: NzModalService,
    private _translatePipe: TranslatePipe,
    private _measurements: MeasurementsService,
    private _route: ActivatedRoute,
    private _config: ConfigService,
  ) {
    this.nornikAplana = this._config.get<boolean>('nornikAplana') === true;
    if (this._route.snapshot.params.type === 'appointment') {
      this.hiddenControls.push('Users');
    }
    this.sub = this._service.floors$.subscribe(({ currentFloor, floorsList, currentBuild }) => {
      this.floorsList = floorsList;
      this.currentFloor = currentFloor;
      this.currentBuild = currentBuild;
      this.select = {
        value: { label: currentFloor.name, value: currentFloor },
        values: this.floorsList.map((floor) => ({
          label: floor.name,
          value: floor,
        })),
      };
      this._cdr.markForCheck();
    });
    this.sub = this._service.floorImage$.subscribe(({ image, imageSize, areas }) => {
      this.imageSize = imageSize;
      this.areas = areas;
      this.image = image;
      this._cdr.markForCheck();
    });
    this.sub = combineLatest([this._service.mapMarks$, this._service.filterDates$, this._service.floors$]).subscribe(
      ([marks, dates, floors]) => {
        this.marks = marks.map((mark) => ({
          ...mark,
          onClick: () => {
            clearTimeout(this.closeAdvcardTimerId);
            if (mark.relativePlace) {
              mark.relativePlace.disabled =
                mark.relativePlace.disabled ||
                !this._ifReservationAllowed(<IAppointment>mark.relativePlace, dates, <IBuilding>floors.currentBuild);
              this.currentWorkplace$.next(mark.relativePlace);
              this.activeMarkIndex = this.bookingItems.findIndex((i) => i.id === mark.id);
            } else {
              this.currentWorkplace$.next(null);
            }
            this.showAdvancedCard = !!mark.relativePlace;
            this._cdr.markForCheck();
          },
        }));
        this._cdr.markForCheck();
      },
    );
    this.sub = combineLatest([this._service.notReservWorkplaces$, this._service.filterDates$, this._service.floors$]).subscribe(
      ([places, dates, floors]) => {
        this.bookingItems = places
          .filter((place) => {
            const aplanaAllows = (this.nornikAplana && !place.isEwsReadOnly) || !this.nornikAplana;
            return aplanaAllows && this._ifReservationAllowed(<IAppointment>place, dates, <IBuilding>floors.currentBuild);
          })
          .map((place) => ({
            id: place.id,
            name: place.name,
            tags: place.tags,
            label: `${this._translatePipe.transform('Floor')} ${this.currentFloor.floorNumber}`,
            actions: [this.getAction(place)],
          }));
      },
    );
    this.sub = this.resize$.pipe(debounceTime(500)).subscribe((_e) => {
      this.setMapHeight();
    });
    this.sub = this._service.reservations$.subscribe((reservs) => {
      this.allReservations = reservs;
    });
  }

  private _ifReservationAllowed(place: IAppointment, filter: Record<string, string>, building: IBuilding): boolean {
    let res = true;
    if (
      place.reservationAllowedFrom !== undefined &&
      place.reservationAllowedTo !== undefined &&
      place.reservationAllowedFrom !== null &&
      place.reservationAllowedTo !== null
    ) {
      const timeFromFilter = filter.dateTimeFrom.split(' ')[1].split(':');
      const timeToFilter = filter.dateTimeTo.split(' ')[1].split(':');

      const timeFrom = (<IAppointment>place).reservationAllowedFrom
        ? (<IAppointment>place).reservationAllowedFrom.split(':')
        : [building.workDayBeginHour ? +building.workDayBeginHour : 6, 0];
      const timeTo = (<IAppointment>place).reservationAllowedTo
        ? (<IAppointment>place).reservationAllowedTo.split(':')
        : [building.workDayEndHour ? +building.workDayEndHour : 23, 0];

      const dateFromFilter = new Date();
      dateFromFilter.setHours(+timeFromFilter[0], +timeFromFilter[1]);
      const dateToFilter = new Date();
      dateToFilter.setHours(+timeToFilter[0], +timeToFilter[1]);
      const dateFrom = new Date();
      dateFrom.setHours(+timeFrom[0], +timeFrom[1]);
      const dateTo = new Date();
      dateTo.setHours(+timeTo[0], +timeTo[1]);

      res = dateFromFilter.getTime() >= dateFrom.getTime() && dateToFilter.getTime() <= dateTo.getTime();
    }
    return res;
  }

  ngAfterViewInit(): void {
    this.setMapHeight();
    const workplaceId = this._route.snapshot.queryParams.workplaceId;
    if (workplaceId) {
      this.centerPlace(workplaceId);
    }
  }

  ngOnDestroy(): void {}

  get filterDates$(): Observable<Record<string, string>> {
    return this._service.filterDates$;
  }

  get repeatFilter$(): Observable<any> {
    return this._service.repeatFilter$;
  }

  get loading$(): Observable<boolean> {
    return this._service.loading$;
  }

  get type(): ReservationType {
    return this._route.snapshot.params.type || 'workplace';
  }
  get calendarLink(): string {
    switch (this._route.snapshot.params.type) {
      case 'appointment':
        return 'reservations/calendar/appointment/';
      case 'workplace':
        return 'reservations/calendar/workplace/';
      case 'parking':
        return 'reservations/calendar/parking/';
      default:
        return null;
    }
  }

  get emptyText(): string {
    switch (this.type) {
      case 'parking':
        return 'No match parkings';
      case 'appointment':
        return 'No match appointments';
      default:
        return 'No match workplaces';
    }
  }

  setCurrentFloor(floor): void {
    this._service.changeFloor(floor.id);
  }

  goBuildingSelect(): void {
    this._service.backToSelectBuildings();
  }

  changeFilters(filters): void {
    this._service.setFilters(filters);
  }

  centerPlace(id: number): void {
    this.centeredItemId = id;
    this.currentWorkplace$.next(this.bookingItems.find((p) => p.id === id));
  }
  get height(): string {
    return this.mapHeight + 'px';
  }

  reservationPlace(place): void {
    this.meetingSubject = null;
    this.currentReservation.buildName = this.currentBuild.name;
    this.currentReservation.placeName = place.name;
    this.currentReservation.floorNumber = this.currentFloor.floorNumber;
    let loading = false;
    this.isAdvancedCardLoading = true;
    this._modal.create({
      nzTitle: this.modalTitleTpl,
      nzContent: this.modalContentTpl,
      nzFooter: [
        {
          label: this._translatePipe.transform('Cancel'),
          onClick: () => {
            this._modal.closeAll();
            this.isAdvancedCardLoading = false;
          },
        },
        {
          label: this._translatePipe.transform('Confirm'),
          type: 'primary',
          loading: loading,
          onClick: () => {
            this._modal.closeAll();
            loading = true;
            this._service.reservationPlace(place.id, this.meetingSubject).then(({ data, dates, filters, error }) => {
              loading = false;
              this.isAdvancedCardLoading = false;
              if (!data) {
                this._modal.error({
                  nzTitle: this._translatePipe.transform('Failed to book'),
                  nzContent: error.message,
                  nzMaskClosable: true,
                });
                return;
              }
              const main = data.find((r) => r.meta.recordCode === 'main');
              if (data.length === 1) {
                if (main.meta.isOk) {
                  this._modal.success({
                    nzTitle: this._translatePipe.transform('Booked successfully'),
                    nzContent: main.meta.message,
                    nzMaskClosable: true,
                  });
                } else {
                  this._modal.error({
                    nzTitle: this._translatePipe.transform('Failed to book'),
                    nzContent: main.meta.message,
                    nzMaskClosable: true,
                  });
                }
              } else {
                this.reservations.errors = [];
                if (main.meta.isOk) {
                  this.reservations.success = [main.meta.message || place.name];
                } else {
                  const successReservation = data.find((r) => r.meta.isOk);
                  if (successReservation) {
                    this.reservations.success = [successReservation.meta.message || place.name];
                  }
                  this.reservations.errors = [
                    {
                      dates: [filters.dateTimeFrom, filters.dateTimeTo],
                      message: main.meta.message || this._translatePipe.transform('Failed to book'),
                    },
                  ];
                }

                this.reservations.errors = [
                  ...this.reservations.errors,
                  ...data
                    .filter((r) => !r.meta.isOk && r.meta.recordCode !== 'main')
                    .map((r) => ({
                      dates: dates[r.meta.recordCode],
                      message: r.meta.message || this._translatePipe.transform('Failed to book'),
                    })),
                ];
                this._modal.create({
                  nzTitle: this._translatePipe.transform('Reservation details'),
                  nzContent: this.reservationModalTpl,
                  nzFooter: [
                    {
                      label: this._translatePipe.transform('Ok'),
                      type: 'primary',
                      onClick: () => {
                        this._modal.closeAll();
                      },
                    },
                  ],
                });
              }
              this._service.reloadReservations();
            });
          },
        },
      ],
    });
  }

  getAction(place: IWorkplace): IBookingItemAction {
    return {
      id: place.id,
      title:
        this._translatePipe.transform(`${this._route.snapshot.params.type}-reservation`) ||
        this._translatePipe.transform('workplace-reservation'),
      type: 'primary',
      handler: () => {
        this.handleReservation(place);
      },
    };
  }
  setMapHeight(): void {
    const body = document.querySelector('body').offsetHeight;
    this.mapHeight = body - HEIGHT_EXCEPT_MAP;
  }

  getDays(days: number[]): string {
    return days.map((day) => this._translatePipe.transform(`Days.${day}`)).join(', ');
  }

  handleReservation(_place = null): void {
    const place = _place ? _place : this.currentWorkplace$.getValue();
    if (place.labelIdPermanentAssignment > 0) {
      this._modal.create({
        nzTitle: this._translatePipe.transform('Reservation details'),
        nzContent: this._translatePipe.transform('This place is assigned to another user, are you sure you want to book it?'),
        nzFooter: [
          {
            label: this._translatePipe.transform('Cancel'),
            onClick: () => {
              this._modal.closeAll();
            },
          },
          {
            label: this._translatePipe.transform('Ok'),
            type: 'primary',
            onClick: () => {
              this._modal.closeAll();
              this.onReservation(place);
            },
          },
        ],
      });
    } else {
      this.onReservation(place);
    }
    this.onCloseAdvcard();
  }

  onReservation(place) {
    if (this.currentFloor.workplaceReservationSocialDistanceCheck === 'CONFIRMATION') {
      const distanceCheck = checkReservedNeighbors(place, this.allReservations);
      if (distanceCheck) {
        this._modal.confirm(
          getDistanceCheckConfirmModal(() => {
            this.reservationPlace(place);
          }),
        );
        return;
      }
    }
    this.reservationPlace(place);
  }

  onAreaVisibilityChange(visible: boolean) {
    this.areasVisible = visible;
  }

  onHiddenMarksChange(hiddenMarksTypes: MarkItemLogicType[]) {
    this.hiddenMarksTypes = hiddenMarksTypes;
  }

  get currentWorkplace() {
    return this.currentWorkplace$.getValue();
  }

  onUpdateMap() {
    this._service.reloadReservations();
  }

  onCloseAdvcard(delay = 0) {
    clearTimeout(this.closeAdvcardTimerId);
    this.closeAdvcardTimerId = setTimeout(() => {
      this.showAdvancedCard = false;
      this.currentWorkplace$.next(null);
    }, delay);
  }

  preventClose() {
    if (this.closeAdvcardTimerId) {
      clearTimeout(this.closeAdvcardTimerId);
    }
  }
}
