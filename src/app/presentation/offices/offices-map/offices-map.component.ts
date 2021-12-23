import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  ViewChild,
  TemplateRef,
  AfterViewInit,
  OnDestroy,
  ElementRef,
} from '@angular/core';
import { OfficesMapService } from '@presentation/offices/offices-map/offices-map.service';
import { OfficesMapFilter } from '@presentation/offices/offices-map/offices-map.model';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { SafeUrl } from '@angular/platform-browser';
import { findDateRange, findSliderRange, nowRang } from '@presentation/offices/offices-map/offices-map.utils';
import { debounceTime, first, map, tap } from 'rxjs/operators';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { IAppointment, IArea, IUser, IWorkplaceReservation } from '@shared/http/models/database.model';
import { NzOptionComponent } from 'ng-zorro-antd/select';
import { DEFAULT_USER_AVATAR } from '@shared/http/utils/images.const';
import { MarkItemLogicType } from '@base/map/map-mark/map-mark.model';
import { IDropdownSelectValue } from '@base/dropdown-select/dropdown-select.model';
import { Router } from '@angular/router';
import { NotificationsService } from '@core/services/notifications.service';
import { IOfficesMapSwitcher } from '@presentation/offices/offices-map/offices-map.model';
import { TranslatePipe } from '@ngx-translate/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ReservationMarksService } from '@src/app/core/services/reservation-marks.service';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';

const HEIGHT_PAGE_TITLE: number = 72;
const SECTION_CONTENT_PADDING: number = 48;
const HEADER_HEIGHT: number = 64;
const MOBILE_BOTTOM_NAV_HEIGHT: number = 61;

@Component({
  selector: 'app-offices-map',
  templateUrl: './offices-map.component.html',
  styleUrls: ['./offices-map.component.less'],
  providers: [ReservationMarksService, OfficesMapService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficesMapComponent implements OnInit, AfterViewInit, OnDestroy {
  now: Date;
  get modeLabel(): string {
    return this.mode.items[this.mode.value].tooltip;
  }

  get currentFloorMap(): Record<string, any> {
    return this._currentFloorMap;
  }

  set currentFloorMap(value) {
    this._currentFloorMap = value;
    if (value) {
      this.dropdownSelect = this.$service.dropdownSelect({
        label: value.name,
        value: value.id,
      });
    } else {
      this.sub = this.$service.floors$.subscribe((floors) => {
        this._dropdownSelect.values = floors.map((_f) => ({
          label: _f.name,
          value: _f.id,
        }));
        this.cdr.markForCheck();
      });
      this.$notifications.error(
        this._translatePipe.transform('OfficesMap.Error'),
        this._translatePipe.transform('OfficesMap.Floor not found'),
      );
    }
  }

  @Input()
  set filter(value) {
    this._filter = value;
  }

  get filter(): OfficesMapFilter {
    return this._filter;
  }

  set dropdownSelect(value) {
    this._dropdownSelect = value;
  }

  get dropdownSelect(): Record<string, any> {
    return this._dropdownSelect;
  }

  @ViewChild('popup', { read: TemplateRef })
  set popup(value: TemplateRef<any>) {
    this._popup = value;
    this.$service.popup$.next(value);
  }

  showAdvancedCard = false; // Показывать расширенную карточку вместо фильтров
  closeAdvcardTimerId; // Задержка скрытия карточки при клике поп пустому месту карты
  currentPlaceReservation: IAppointment | IWorkplaceReservation;

  showFilterModal = false;

  @ViewChild('topControlsEl', { read: ElementRef }) topControlsEl: ElementRef;
  @ViewChild('bottomControlsEl', { read: ElementRef }) bottomControlsEl: ElementRef;

  constructor(
    private $service: OfficesMapService,
    private cdr: ChangeDetectorRef,
    private $router: Router,
    private $notifications: NotificationsService,
    private _modal: NzModalService,
    private _translatePipe: TranslatePipe,
    private _innerWidthService: InnerWidthService,
  ) {
    this.now = new Date();
    this.now.setHours(1, 0, 0, 0);
    this._filter = $service.filter;
    this._dropdownSelect = $service.dropdownSelect;
    this.image$ = $service.mapImageUrl$;
    this.loading$ = $service.loading$;
    this.marks$ = $service.mapMarksWithPopup$;
    this.selectedWorkplace$ = $service.selectedWorkplace$;
    this.users$ = $service.users$;
    this.defaultAvatar = DEFAULT_USER_AVATAR;
    this.sub = $service.areas$.subscribe((areas) => {
      this.areas = areas;
    });
  }

  get isReservation(): boolean {
    return this.mode.value === 1 || this.workplaceDisabled;
  }
  areas: IArea[];
  workplaceId: number;
  type: 'workplace' | 'parking' | 'appointment' = 'workplace';
  isEwsReadOnly: boolean;
  visibleWorkplaceId: number;
  visibleWorkplaceLogicType: 'Room' | 'Workplace' | 'POI' | 'User';
  workplaceLogicType: 'Room' | 'Workplace' | 'POI' | 'User';
  workplaceDisabled: boolean;
  areasVisible: boolean;
  hiddenMarksTypes: MarkItemLogicType[] = [];
  search: Record<string, any> = {
    value: null,
    placeHolder: this._translatePipe.transform(`Enter user name`),
    showArrow: false,
    filterOption: (input: string, option: NzOptionComponent) => String(option.nzLabel).trim().toLowerCase().includes(input.toLowerCase()),
    loading: false,
    beforeImg: null,
    beforeId: null,
  };
  defaultAvatar: string;
  mode: IOfficesMapSwitcher = this.$service.switcher;

  private _filter: OfficesMapFilter;
  private _filterPreviousDateValue: Date[] = [];
  @MarkForCheck
  private _dropdownSelect: Record<string, any>;
  private _popup: TemplateRef<any>;
  @Subscriptions()
  sub: Subscription;
  private _currentFloorMap: Record<string, any>;
  @MarkForCheck
  mapHeight: number = 0;

  image$: Observable<SafeUrl>;
  loading$: Observable<boolean>;
  filterValue$: Subject<any>;
  marks$: Observable<any>;
  selectedWorkplace$: Observable<Record<string, any>>;
  resize$: Observable<any> = fromEvent(window, 'resize');
  users$: Observable<IUser[]>;

  setMapHeight(): void {
    const bodyHeight = document.querySelector('body').offsetHeight;
    const topControlsHeight = this.topControlsEl?.nativeElement?.offsetHeight ? this.topControlsEl.nativeElement.offsetHeight : 0;
    const bottomControlsHeight = this.bottomControlsEl?.nativeElement?.offsetHeight ? this.bottomControlsEl.nativeElement.offsetHeight : 0;

    if (this.isSmallScreen) {
      this.mapHeight = bodyHeight - (topControlsHeight + HEADER_HEIGHT + MOBILE_BOTTOM_NAV_HEIGHT);
    } else {
      this.mapHeight =
        bodyHeight - (topControlsHeight + bottomControlsHeight + HEADER_HEIGHT + HEIGHT_PAGE_TITLE + SECTION_CONTENT_PADDING);
    }
  }

  ngOnInit(): void {
    this.sub = this.resize$.pipe(debounceTime(500)).subscribe((_e) => {
      this.setMapHeight();
    });
    this.sub = this.$service.currentFloor$.subscribe((data) => {
      this.currentFloorMap = data;
    });
    this.sub = this.$service.allFloorsInBuilding$.subscribe((values) => {
      this.dropdownSelect = { ...this.dropdownSelect, values };
    });
    this.sub = this.$service.selectedWorkplace$.subscribe((place) => {
      if (place) {
        clearTimeout(this.closeAdvcardTimerId);
        this.currentPlaceReservation = place.relativePlace ? place.relativePlace.reservation : null;
        this.workplaceId = place.id;
        this.workplaceLogicType = place.logicType;
        this.isEwsReadOnly = place.isEwsReadOnly || place.relativePlace ? place.relativePlace.isEwsReadOnly : null;
        const logicType: MarkItemLogicType = place.logicType;
        switch (logicType) {
          case 'Workplace':
            this.type = 'workplace';
            break;
          case 'ParkingLot':
            this.type = 'parking';
            break;
          default:
            this.type = 'appointment';
            break;
        }
        this.showAdvancedCard = !!place.relativePlace;
        this.workplaceDisabled = place.disabled;
        this.cdr.markForCheck();
      }
    });
    this.sub = this.$service.currentPlaceId$.subscribe(([place, marksR, mapR]) => {
      if (place && marksR && mapR) {
        this.visibleWorkplaceId = place.id;
        this.visibleWorkplaceLogicType = place.logicType;
        this.workplaceId = place.id;
        this.workplaceDisabled = place.disabled;
        this.isEwsReadOnly = place.isEwsReadOnly || place.relativePlace ? place.relativePlace.isEwsReadOnly : null;
        const logicType: MarkItemLogicType = place.logicType;
        switch (logicType) {
          case 'Workplace':
            this.type = 'workplace';
            break;
          case 'ParkingLot':
            this.type = 'parking';
            break;
          default:
            this.type = 'appointment';
            break;
        }
        this.showAdvancedCard = !!place.relativePlace;
        this.currentPlaceReservation = place.relativePlace ? place.relativePlace.reservation : null;
        this.cdr.markForCheck();
      }
    });
    this.sub = this.$service.userComplexData$.subscribe((data) => {
      if (data.floor) {
        this.$router.navigate(['/office', data.floor.id]).catch(console.error);
      }
      if (data.user && data.workplace) {
        this.visibleWorkplaceId = data.workplace.id;
        this.workplaceId = data.workplace.id;
        this.visibleWorkplaceLogicType = 'Workplace';
      } else if (data.user) {
        this.$notifications.error('OfficesMap.Error', 'User not found on map');
      }
    });
  }

  ngAfterViewInit(): void {
    this.setMapHeight();
  }

  ngOnDestroy(): void {}

  onHiddenMarksChange(hiddenMarksTypes: MarkItemLogicType[]) {
    if (this.mode.value === 1 && !hiddenMarksTypes.includes('Users')) {
      this.hideMark('Users');
      return;
    }
    this.hiddenMarksTypes = hiddenMarksTypes;
  }

  onAreaVisibilityChange(visible: boolean) {
    this.areasVisible = visible;
  }

  private hideMark(markType: MarkItemLogicType) {
    if (!this.hiddenMarksTypes.includes(markType)) {
      this.hiddenMarksTypes = [...this.hiddenMarksTypes, markType];
    } else {
      this.hiddenMarksTypes = [...this.hiddenMarksTypes];
    }
  }

  filterValueChange(flag: 'date' | 'time'): void {
    if (flag === 'time') {
      const updateDate = findDateRange(this.filter?.date?.value, this.filter?.slider?.value);
      this.filter.date.value = updateDate;
      this.$service.setDateFilterValue(updateDate);
    }
    if (flag === 'date') {
      if (this.filter?.date?.value?.length === 2) {
        if (!this._compareCurrentAndPreviousDateSelect()) {
          this.filter.date.value[0]?.setHours(this.filter.date.workHours[0], 0, 0, 0);
          this.filter.date.value[1]?.setHours(this.filter.date.workHours[1], 0, 0, 0);
        }
        this.filter.slider.value = findSliderRange(this.filter.date.value);
        this.$service.setDateFilterValue(this.filter.date.value);
        this._filterPreviousDateValue = [...this.filter.date.value];
      }
    }
    this.cdr.markForCheck();
  }

  /**
   * Функция сравнивает предыдущий выбор даты с текущим без учета времени
   * @returns
   */
  private _compareCurrentAndPreviousDateSelect(): boolean {
    if (this._filterPreviousDateValue.length !== 2 || this.filter.date.value.length !== 2) {
      return true;
    } else {
      const pStart = new Date(this._filterPreviousDateValue[0]);
      pStart.setHours(0, 0, 0, 0);
      const pEnd = new Date(this._filterPreviousDateValue[1]);
      pEnd.setHours(0, 0, 0, 0);
      const start = new Date(this.filter.date.value[0]);
      start.setHours(0, 0, 0, 0);
      const end = new Date(this.filter.date.value[1]);
      end.setHours(0, 0, 0, 0);
      return +start === +pStart && +end === +pEnd;
    }
  }

  onSelectSearch(value: IUser): void {
    if (value.id !== this.search.beforeImg) {
      this.search.loading = true;
    }
    this.search.beforeImg = value.avatarImageUrl;
    this.search.beforeId = value.id;
    this.$service.userSelected$.next(value);
  }

  onLoadSearchAvatar(): void {
    this.search.loading = false;
  }

  changeMode(value: string | number): void {
    if (value === 1) {
      this.$service.setDateFilterValue(nowRang());
      this.hideMark('Users');
    }
    if (value === 0) {
      this.$service.setDateFilterValue(this.filter.date.value);
      this.search.value = null;
      this.$service.userSelected$.next(null);
    }
  }

  reservationPlace(id: number): void {
    if (this.type === 'workplace') {
      if (this.$service.isConfirmation(id)) {
        this.$service.confirmationModal(id);
      } else {
        this.$service.reservationWorkplace(id).then((res) => {
          if (res.success) {
            this.$notifications.success('Success', res.data.RESULT_SUCCESS);
            this.$service.reload();
          } else {
            this.$notifications.error('OfficesMap.Error', res.error.message);
          }
        });
      }
    } else if (this.type === 'parking') {
      if (this.$service.isConfirmation(id)) {
        this.$service.confirmationModal(id);
      } else {
        this.$service.reservationParkingLot(id).then((res) => {
          if (res.success) {
            this.$notifications.success('Success', res.data.RESULT_SUCCESS);
            this.$service.reload();
          } else {
            this.$notifications.error('OfficesMap.Error', res.error.message);
          }
        });
      }
    } else if (this.type === 'appointment') {
      this.$router.navigate([this.calendarLink, id], {
        queryParams: { mode: 'day' },
      });
    }
  }
  handleReservation(id: number): void {
    this.onCloseAdvcard();
    if (
      (this.type === 'workplace' && this.$service.currentWorkplace(id).labelIdPermanentAssignment > 0) ||
      (this.type === 'parking' && this.$service.currentParkingLot(id).labelIdPermanentAssignment > 0)
    ) {
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
            label: this._translatePipe.transform('Ок'),
            type: 'primary',
            onClick: () => {
              this.reservationPlace(id);
              this._modal.closeAll();
            },
          },
        ],
      });
    } else {
      this.reservationPlace(id);
    }
  }

  changeDropdownSelect(value: IDropdownSelectValue): void {
    this.$router.navigate(['/office', value.value]).catch(console.error);
    this.mode.value = 0;
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

  onUpdateMap() {
    this.$service.reload();
  }

  onCloseAdvcard(delay = 0) {
    clearTimeout(this.closeAdvcardTimerId);
    this.closeAdvcardTimerId = setTimeout(() => {
      this.showAdvancedCard = false;
      this.workplaceId = null;
      this.cdr.detectChanges();
    }, delay);
  }

  preventClose() {
    if (this.closeAdvcardTimerId) {
      clearTimeout(this.closeAdvcardTimerId);
    }
  }

  showModal(): void {
    this.showFilterModal = true;
  }

  applyFilter(filterDateValue: Date[]): void {
    this.filter.date.value = filterDateValue;
    this.filterValueChange('date');
    this.showFilterModal = false;
  }

  get isSmallScreen() {
    return this._innerWidthService.isSmallScreen;
  }

  handleOk(): void {
    this.showFilterModal = false;
  }

  handleCancel(): void {
    this.showFilterModal = false;
  }
}
