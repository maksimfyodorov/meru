import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { IBookingItemAction } from '@base/booking-list/booking-item/booking-item.model';
import { IBookingItems, TAutoMode } from '@base/booking-list/booking-list.model';
import { BookingListService } from '@base/booking-list/booking-list.service';
import { IMarks, MarkItemLogicType } from '@base/map/map-mark/map-mark.model';
import { IMapSize } from '@base/map/map.model';
import { MapService } from '@base/map/map.service';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { MessagesService } from '@core/services/messages.service';
import { TranslatePipe } from '@ngx-translate/core';
import { debounceTime } from 'rxjs/operators';
import { FloorService } from './floor.service';
import { IFloor, IWorkplace } from '@presentation/reservations/reservation-create/models';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';
import { checkNeighbors, checkReservedNeighbors, getDistanceCheckConfirmModal } from '@presentation/reservations/utils/reservation';
import { IArea } from '@shared/http/models/database.model';
import { ReservationMarksService } from '@src/app/core/services/reservation-marks.service';

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
  imageSize: IMapSize = { width: null, height: null };
  marks: IMarks = [];
  currentReservation: Record<string, string | number | Array<any>> = {};
  select = { value: { label: '', value: null }, values: [] };
  bookingItems: IBookingItems;
  centeredItemId: number;
  hiddenMarksTypes: MarkItemLogicType[] = [];
  reservations: Record<string, Array<any>> = {
    success: [],
    errors: [],
  };
  shortDateTimeFormat = this._measurements.getMeasurementByName('shortDateTime');
  currentWorkplace$ = new BehaviorSubject<Record<string, any>>(null);
  selected: Record<number, IWorkplace>;
  labels: Record<number, any>;
  @MarkForCheck
  mapHeight: number = 0;
  resize$: Observable<any> = fromEvent(window, 'resize');

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
  currentType: 'workplace' | 'appointment' | 'parking' = 'workplace';
  closeAdvcardTimerId; // Задержка скрытия карточки при клике поп пустому месту карты

  constructor(
    private _service: FloorService,
    private _cdr: ChangeDetectorRef,
    private _messages: MessagesService,
    private _modal: NzModalService,
    private _translatePipe: TranslatePipe,
    private _measurements: MeasurementsService,
    private _map: MapService,
    private _bookingList: BookingListService,
  ) {
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
      this._bookingList.clearSelectedPlaces();
      this._cdr.markForCheck();
    });
    this.sub = this._service.floorImage$.subscribe(({ image, imageSize, areas }) => {
      this.image = image;
      this.imageSize = imageSize;
      this.areas = areas;
      this._cdr.markForCheck();
    });
    this.sub = this._service.mapMarks$.subscribe((marks) => {
      this.marks = marks.map((mark) => ({
        ...mark,
        // popup: mark.logicType !== 'POI' ? this.popupTpl : null,
        onClick: () => {
          this.currentWorkplace$.next(mark.relativePlace);
          this.activeMarkIndex = this.bookingItems.findIndex((i) => i.id === mark.id);
          switch (mark.logicType) {
            case 'Room':
              this.currentType = 'appointment';
              break;
            case 'Workplace':
              this.currentType = 'workplace';
              break;
            case 'ParkingLot':
              this.currentType = 'parking';
              break;

            default:
              this.currentType = null;
              break;
          }
          this.showAdvancedCard = !!mark.relativePlace;
          clearTimeout(this.closeAdvcardTimerId);
          this._cdr.markForCheck();
        },
      }));
      this._cdr.markForCheck();
    });
    this.sub = this._service.labelsFilter$.subscribe((labels) => {
      this.labels = labels.reduce((acc, label) => ({ ...acc, [label.id]: label }), {});
      this.bookingItems =
        (labels &&
          labels.map((label) => ({
            id: label.id,
            name: label.name,
            select: true,
          }))) ||
        [];
      this._cdr.markForCheck();
    });
    this.sub = this._service.notReservWorkplaces$.subscribe((places) => {
      this._bookingList.setPlaces(places);
    });
    this.sub = this._bookingList.selectedPlaces$.subscribe((selected) => {
      this.selected = selected;
    });
    this.sub = this.resize$.pipe(debounceTime(500)).subscribe((_e) => {
      this.setMapHeight();
    });
    this.sub = this._service.groupDisabledPlaces$.subscribe((disabled) => {
      this._bookingList.setDisabled(disabled);
    });
    this.sub = this._service.reservations$.subscribe((reservs) => {
      this.allReservations = reservs;
    });
  }

  get filterDates$(): Observable<Record<string, string>> {
    return this._service.filterDates$;
  }

  get repeatFilter$(): Observable<any> {
    return this._service.repeatFilter$;
  }

  get loading$(): Observable<boolean> {
    return this._service.loading$;
  }

  get autoModeFilter$(): Observable<TAutoMode> {
    return this._service.autoModeFilter$;
  }

  ngAfterViewInit(): void {
    this.setMapHeight();
  }

  ngOnDestroy(): void {}

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

  reservationTeamPlaces(): void {
    const places = Object.entries(this.selected).reduce((acc, [key, value]) => {
      if (value) {
        acc[key] = value;
      }
      return acc;
    }, {});
    if (!Object.keys(places).length) {
      this._messages.error('Please select a place');
      return;
    }

    if (this.currentFloor.workplaceReservationSocialDistanceCheck === 'CONFIRMATION') {
      const placesValues = Object.values(places);
      const distanceCheck = placesValues.some((place) => checkReservedNeighbors(place, this.allReservations));
      const placesCross = checkNeighbors(placesValues);
      if (distanceCheck || placesCross) {
        this._modal.confirm(
          getDistanceCheckConfirmModal(() => {
            this.reservationPlace(places);
          }),
        );
        return;
      }
    }

    this.reservationPlace(places);
  }

  reservationPlace(places): void {
    const _places = Object.entries<IWorkplace>(places)
      .filter(([labelId]) => Object.keys(this.labels).includes(labelId))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    this.currentReservation.buildName = this.currentBuild.name;
    this.currentReservation.floorNumber = this.currentFloor.floorNumber;
    this.currentReservation.places = Object.entries<IWorkplace>(_places).map(([labelId, place]) => ({
      label: this.labels[labelId].name,
      place: place.name,
    }));
    let loading = false;
    this._modal.create({
      nzTitle: this.modalTitleTpl,
      nzContent: this.modalContentTpl,
      nzFooter: [
        {
          label: this._translatePipe.transform('Cancel'),
          onClick: () => {
            this._modal.closeAll();
          },
        },
        {
          label: this._translatePipe.transform('Confirm'),
          type: 'primary',
          loading,
          onClick: () => {
            loading = true;
            this._service.reservationPlace(_places).then(({ data, dates, filters }) => {
              loading = false;
              this._modal.closeAll();
              this.reservations.success = data
                .filter((r) => r.meta.isOk)
                .map((r) => {
                  const [labelId, index] = r.meta.recordCode.split('-');
                  return {
                    label: this.labels[labelId].name,
                    place: places[labelId].name,
                    dates: dates[index],
                    message: r.meta.message,
                  };
                });
              this.reservations.errors = data
                .filter((r) => !r.meta.isOk)
                .map((r) => {
                  const [labelId, index] = r.meta.recordCode.split('-');
                  return {
                    label: this.labels[labelId].name,
                    place: places[labelId].name,
                    dates: dates[index],
                    message: r.meta.message,
                  };
                });
              this._modal.create({
                nzTitle: this._translatePipe.transform('Reservation details'),
                nzContent: this.reservationModalTpl,
                nzWidth: 1000,
                nzFooter: [
                  {
                    label: this._translatePipe.transform('Ок'),
                    type: 'primary',
                    onClick: () => {
                      this._modal.closeAll();
                    },
                  },
                ],
              });
              this._service.reloadReservations();
              this._bookingList.clearSelectedPlaces();
            });
          },
        },
      ],
    });
  }

  getAction(place: IWorkplace): IBookingItemAction {
    return {
      id: place.id,
      title: this._translatePipe.transform('workplace-reservation'),
      type: 'primary',
      handler: () => {
        this.reservationPlace(place);
      },
    };
  }

  getDays(days: number[]): string {
    return days.map((day) => this._translatePipe.transform(`Days.${day}`)).join(', ');
  }

  handleReservation(): void {
    const place = this.currentWorkplace$.getValue();
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

  setMapHeight(): void {
    const body = document.querySelector('body').offsetHeight;
    this.mapHeight = body - HEIGHT_EXCEPT_MAP;
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

  get currentWorkplace() {
    return this.currentWorkplace$.getValue();
  }
}
