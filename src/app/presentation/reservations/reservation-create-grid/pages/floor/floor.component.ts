import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { IBookingItemAction } from '@src/app/base/booking-list/booking-item/booking-item.model';
import { IBookingItems } from '@src/app/base/booking-list/booking-list.model';
import { IMarks, MarkItemLogicType } from '@src/app/base/map/map-mark/map-mark.model';
import { IMapSize } from '@src/app/base/map/map.model';
import { MarkForCheck } from '@src/app/core/decorators/async.decorator';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { ConfigService } from '@src/app/core/services/config.service';
import { ReservationMarksService } from '@src/app/core/services/reservation-marks.service';
import { IAppointment, IArea, IBuilding, IFloor, IWorkplace } from '@src/app/shared/http/models/database.model';
import { ReservationType } from '@src/app/shared/http/models/meta.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject, combineLatest, fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FilterService } from '../../services/filter.service';
import { ReservationCreateGridService } from '../../services/reservation-create-grid.service';
import { FloorService } from './floor.service';
import { checkReservedNeighbors, getDistanceCheckConfirmModal } from '@presentation/reservations/utils/reservation';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';
const HEIGHT_EXCEPT_MAP: number = 335;
const HEIGHT_EXCEPT_MAP_MOBILE: number = 300;

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ReservationMarksService, FloorService],
})
export class FloorComponent implements OnInit, AfterViewInit {
  resize$: Observable<any> = fromEvent(window, 'resize');

  public formGroup: FormGroup = this._filterService.formGroup;

  id: number;

  isLoading: boolean;
  buildingsList: any[] = [];
  type: ReservationType;
  allReservations: any[];

  @Subscriptions()
  sub: Subscription;

  @ViewChild('modalTitleTpl') modalTitleTpl: TemplateRef<any>;
  @ViewChild('modalContentTpl') modalContentTpl: TemplateRef<any>;
  @ViewChild('reservationModalTpl') reservationModalTpl: TemplateRef<any>;

  @MarkForCheck
  mapHeight: number = 0;

  image: string;
  areas: IArea[];
  imageSize: IMapSize;
  hiddenControls = [];
  areasVisible: boolean = false;
  hiddenMarksTypes: MarkItemLogicType[] = [];
  centeredItemId: number;
  currentWorkplace$ = new BehaviorSubject<Record<string, any>>(null);
  showAdvancedCard = false; // Показывать расширенную карточку вместо фильтров
  closeAdvcardTimerId; // Задержка скрытия карточки при клике поп пустому месту карты
  nornikAplana = false;
  bookingItems: IBookingItems;
  marks: IMarks = [];
  currentFloor: IFloor;
  currentBuild: Record<string, any>;
  currentReservation: Record<string, string | number> = {};
  reservations: Record<string, Array<any>> = {
    success: [],
    errors: [],
  };
  currentDates: Record<string, string>;

  isModalVisible = false;

  _isAdvancedCardLoading$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  set isAdvancedCardLoading(value: boolean) {
    this._isAdvancedCardLoading$.next(value);
  }
  get isAdvancedCardLoading() {
    return this._isAdvancedCardLoading$.getValue();
  }

  constructor(
    private _reservationCreateGridService: ReservationCreateGridService,
    private _filterService: FilterService,
    private _floorService: FloorService,
    private _translatePipe: TranslatePipe,
    private _route: ActivatedRoute,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _modal: NzModalService,
    private _config: ConfigService,
    private _innerWidthService: InnerWidthService,
  ) {
    this.nornikAplana = this._config.get<boolean>('nornikAplana') === true;
    this.sub = this._route.params.subscribe((params) => {
      this.id = +params.floorId;
    });
    this.sub = this.resize$.pipe(debounceTime(500)).subscribe((_e) => {
      this.setMapHeight();
    });
    this.sub = combineLatest([
      this._floorService.mapMarks$,
      this._floorService.filterDates$,
      this._floorService.floors$,
      this._route.params,
    ]).subscribe(([marks, dates, floors, params]) => {
      this.marks = marks.map((mark) => ({
        ...mark,
        onClick: () => {
          clearTimeout(this.closeAdvcardTimerId);
          mark.relativePlace.disabled =
            mark.relativePlace.disabled ||
            !this._ifReservationAllowed(<IAppointment>mark.relativePlace, dates, <IBuilding>floors.currentBuild);
          this.currentWorkplace$.next(mark.relativePlace);
          this.showAdvancedCard = !!mark.relativePlace;
          this._cdr.markForCheck();
        },
      }));

      this._cdr.markForCheck();
    });
    this.sub = combineLatest([
      this._floorService.notReservWorkplaces$,
      this._floorService.filterDates$,
      this._floorService.floors$,
      this._route.params,
    ]).subscribe(([places, dates, floors, params]) => {
      this.currentDates = dates;
      this.bookingItems = places
        .filter((place) => {
          const aplanaAllows = (this.nornikAplana && !place.isEwsReadOnly) || !this.nornikAplana;
          return aplanaAllows && this._ifReservationAllowed(<IAppointment>place, dates, <IBuilding>floors.currentBuild);
        })
        .map((place) => ({
          id: place.id,
          name: place.name,
          tags: place.tags,
          label: `Этаж ${this.currentFloor.floorNumber}`,
          actions: [this.getAction(place)],
        }));
    });
    this.sub = this._floorService.floorImage$.subscribe(({ image, imageSize, areas }) => {
      this.imageSize = imageSize;
      this.areas = areas;
      this.image = image;
      this._cdr.markForCheck();
    });
    this.sub = this._floorService.floors$.subscribe(({ currentFloor, currentBuild }) => {
      this.currentFloor = currentFloor;
      this.currentBuild = currentBuild;
      this._cdr.markForCheck();
    });
    this.sub = this._floorService.filterDatesClean$.subscribe((f) => this.changeFiltersDate(f));
  }

  get loading$(): Observable<boolean> {
    return this._floorService.loading$;
  }

  get repeatFilter$(): Observable<any> {
    return this._filterService.repeatFilterStr$;
  }

  getDays(days: number[]): string {
    return days.map((day) => this._translatePipe.transform(`Days.${day}`)).join(', ');
  }

  setCurrentFloor(floor): void {
    this._floorService.changeFloor(floor.id);
  }

  centerPlace(id: number): void {
    this.centeredItemId = id;
    this.currentWorkplace$.next(this.bookingItems.find((p) => p.id === id));
  }

  preventClose() {
    if (this.closeAdvcardTimerId) {
      clearTimeout(this.closeAdvcardTimerId);
    }
  }

  onCloseAdvcard(delay = 0) {
    clearTimeout(this.closeAdvcardTimerId);
    this.closeAdvcardTimerId = setTimeout(() => {
      this.showAdvancedCard = false;
      this.currentWorkplace$.next(null);
    }, delay);
  }

  onHiddenMarksChange(hiddenMarksTypes: MarkItemLogicType[]) {
    this.hiddenMarksTypes = hiddenMarksTypes;
  }

  onAreaVisibilityChange(visible: boolean) {
    this.areasVisible = visible;
    this._cdr.markForCheck();
  }

  ngOnInit(): void {
    const { type } = this._route.snapshot.parent.params;
    if (type) {
      if (type === 'appointment') {
        this.hiddenControls.push('Users');
      }
      this.type = type;
      this._filterService.createFormGroup(type);
      this.sub = this._reservationCreateGridService.getBuildingsList$(type).subscribe((s) => {
        this.buildingsList = s;
        this._cdr.markForCheck();
      });
    }
  }

  ngAfterViewInit(): void {
    this.setMapHeight();
  }

  get floorTitle() {
    const floor = this.buildingsList[this._filterService.currentBuildingIndex].items.find((item) => item.floorId === this.id);
    return floor ? floor.title : '';
  }

  onSelectFloorId(id: number) {
    const f = this._filterService.filters;
    f.floorsId = [id];
    this._filterService.setFilters(f);
    this.onLink(id);
  }

  onSelectBuildingIndex(index: number) {
    this._filterService.currentBuildingIndex = index;
    this._cdr.markForCheck();
  }

  get currentBuildingIndex() {
    return this._filterService.currentBuildingIndex;
  }

  onLink(id?: number) {
    const routes = this._router.url.split('/');
    routes.pop();
    if (id) {
      routes.push(String(id));
    }
    this._router.navigate(routes);
  }

  setMapHeight(): void {
    const body = document.querySelector('body').offsetHeight;
    this.mapHeight = body - (this._innerWidthService.isSmallScreen ? HEIGHT_EXCEPT_MAP_MOBILE : HEIGHT_EXCEPT_MAP);
  }
  get height(): string {
    return this.mapHeight + 'px';
  }

  getAction(place: IWorkplace): IBookingItemAction {
    return {
      id: place.id,
      title: this._translatePipe.transform(`${this._route.snapshot.params.type}-reservation`) || 'Забронировать место',
      type: 'primary',
      handler: () => {
        this.handleReservation(place);
      },
    };
  }

  handleReservation(_place = null): void {
    const place = _place ? _place : this.currentWorkplace$.getValue();
    if (place.labelIdPermanentAssignment > 0) {
      this._modal.create({
        nzTitle: this._translatePipe.transform('Reservation information'),
        nzContent: this._translatePipe.transform('This place is assigned to another user, are you sure you want to book it?'),
        nzFooter: [
          {
            label: this._translatePipe.transform('Cancel'),
            onClick: () => {
              this._modal.closeAll();
            },
          },
          {
            label: 'Ок',
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

      res = +timeFromFilter[0] >= +timeFrom[0] && (+timeToFilter[0] < +timeTo[0] || (+timeToFilter[0] === +timeTo[0] && +timeTo[1] === 0));
    }
    return res;
  }

  get calendarLink(): string {
    switch (this.type) {
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

  reservationPlace(place): void {
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
          label: this._translatePipe.transform('Approve'),
          type: 'primary',
          loading: loading,
          onClick: () => {
            this._modal.closeAll();
            loading = true;
            this._floorService.reservationPlace(place.id).then(({ data, dates, filters, error }) => {
              loading = false;
              this.isAdvancedCardLoading = false;
              if (!data) {
                this._modal.error({
                  nzTitle: this._translatePipe.transform('Failed to book'),
                  nzContent: error.message,
                });
                return;
              }
              const main = data.find((r) => r.meta.recordCode === 'main');
              if (data.length === 1) {
                if (main.meta.isOk) {
                  this._modal.success({
                    nzTitle: this._translatePipe.transform('Booked successfully'),
                    nzContent: main.meta.message,
                  });
                } else {
                  this._modal.error({
                    nzTitle: this._translatePipe.transform('Failed to book'),
                    nzContent: main.meta.message,
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
                  nzTitle: this._translatePipe.transform('Reservation information'),
                  nzContent: this.reservationModalTpl,
                  nzFooter: [
                    {
                      label: 'Ок',
                      type: 'primary',
                      onClick: () => {
                        this._modal.closeAll();
                      },
                    },
                  ],
                });
              }
              this._floorService.reloadReservations();
            });
          },
        },
      ],
    });
  }

  changeFiltersDate(filters): void {
    this._floorService.setFiltersDate(filters);
  }

  onUpdateMap() {
    this._floorService.reloadReservations();
  }

  get shortDateTime() {
    return this._filterService.shortDateTime;
  }

  get isSmallScreen() {
    return this._innerWidthService.isSmallScreen;
  }

  showFilter() {
    this.isModalVisible = true;
  }

  handleOk(): void {
    this.isModalVisible = false;
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }
}
