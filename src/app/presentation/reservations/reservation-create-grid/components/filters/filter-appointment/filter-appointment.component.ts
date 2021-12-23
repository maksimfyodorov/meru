import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, Injector, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingsService } from '@src/app/shared/settings/settings.service';
import { FilterService } from '../../../services/filter.service';
import { MIN_DURATION, WORK_HOURS } from '../../../utils/reservation-create-grid.util';
import { ITagObjectType } from '@src/app/shared/http/models/database.model';
import { IReservationTab } from '../../../models';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { Subscription } from 'rxjs';
import { FilterComponent } from '@src/app/base/filters/filters/filter.component';
import { debounceTime, first } from 'rxjs/operators';
import { roundTimeMinPartHourCeil } from '@src/app/presentation/reservations/reservation-calendar/pages/calendar/calendar.utils';
import { addHours, isSameDay } from 'date-fns';
import { ActivatedRoute, Router } from '@angular/router';
const MIN_DURATION_IN_HOUR: number = 1;
@Component({
  selector: 'app-filter-appointment',
  templateUrl: './filter-appointment.component.html',
  styleUrls: ['./filter-appointment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterAppointmentComponent extends FilterComponent implements OnInit {
  @Input() realtime = true;
  @Input() mode: 'checkbox' | 'link';
  @Input() buildings: IReservationTab[];
  @Input()
  tagObjectType: ITagObjectType | null = null;

  @Output() link: EventEmitter<number> = new EventEmitter();

  @Subscriptions()
  sub: Subscription;

  currentBuildingIndex: number;

  dateTimeFromControl: FormControl;
  dateTimeToControl: FormControl;

  floorsIdControl: FormControl;

  workHours = WORK_HOURS;
  minDuration = MIN_DURATION['appointment'];

  tagsControl: FormControl;
  tagsStatus: Record<string, boolean> = {};
  tags;
  now = new Date();
  seatCountControl: FormControl;
  selectedIds: number[] = [];
  id: number;
  constructor(
    protected injector: Injector,
    private _filterService: FilterService,
    private _settingsService: SettingsService,
    private _cdr: ChangeDetectorRef,
    private _route: ActivatedRoute,
  ) {
    super(injector);
    this.sub = this._route.params.subscribe((params) => {
      this.id = +params.floorId;
      this.selectedIds = [this.id];
    });
  }

  ngOnInit(): void {
    let reservedValues: Record<string, string>;
    if (this._filterService.type === 'appointment') {
      reservedValues = this._filterService.formGroup.value;
    }
    this._filterService.formGroup = this.formGroup;
    this.assignControls();
    this._setFullDay();
    this._getFieldOptions();
    this.sub = this._filterService.currentBuildingIndex$.subscribe((index) => {
      this.currentBuildingIndex = index;
      if (!this.buildings[index]) {
        this.currentBuildingIndex = 0;
        this._filterService.currentBuildingIndex = 0;
        return;
      }
      if (this.buildings[this.currentBuildingIndex]) {
        if (this.mode === 'checkbox') {
          this.selectedIds = this.buildings[this.currentBuildingIndex].items.map((i) => i.floorId);
        } else if (this.mode === 'link') {
          const floor = this.buildings[this.currentBuildingIndex].items.find((i) => i.floorId === this.id);
          if (floor) {
            this.selectedIds = [this.id];
          } else {
            this.selectedIds = [this.buildings[this.currentBuildingIndex].items[0].floorId];
          }
        }
        this.chooseFloors(this.selectedIds);
        this._cdr.markForCheck();
      }
    });
    this.sub = this.formGroup.valueChanges.pipe(this.realtime ? debounceTime(200) : first()).subscribe((v) => {
      this._filterService.setFilters(v);
    });
    setTimeout(() => {
      if (this._filterService.type === 'appointment' && reservedValues.dateTimeFrom && reservedValues.dateTimeTo) {
        this.formGroup.patchValue(reservedValues);
        this.formGroup.value.tags.forEach((tag) => {
          this.updateTags(tag);
        });
        if (this.mode === 'checkbox') {
          this.selectedIds = this.formGroup.value.floorsId;
        } else {
          this.selectedIds = [this.id];
        }
      }
      this._filterService.type = 'appointment';
    }, 100);
  }
  private _setFullDay(): void {
    const start = roundTimeMinPartHourCeil(new Date(), 'appointment');
    const end: Date = addHours(start, MIN_DURATION_IN_HOUR);

    this.dateTimeFromControl.setValue(start);
    this.dateTimeToControl.setValue(end);
  }

  get dateFormat(): string {
    return this._filterService.dateFormat;
  }

  updateDateTime(dateTime: Date[]): void {
    if (dateTime[0].getDate() !== this.dateTimeFromControl.value.getDate()) {
      let startDay = new Date(dateTime[0]);
      if (!isSameDay(dateTime[0], new Date())) {
        startDay.setHours(this.workHours[0], 0, 0, 0);
      } else {
        const now = new Date();
        startDay.setHours(now.getHours(), now.getMinutes(), 0, 0);
        startDay = roundTimeMinPartHourCeil(startDay, 'appointment');
      }
      const end = new Date(startDay);
      end.setHours(end.getHours() + 1);
      this.dateTimeFromControl.setValue(startDay);
      this.dateTimeToControl.setValue(end);
    } else {
      this.dateTimeFromControl.setValue(dateTime[0]);
      this.dateTimeToControl.setValue(dateTime[1]);
    }
  }

  updateTags(name: string): void {
    this.tagsStatus[name] = !this.tagsStatus[name];
    const tags = Object.entries(this.tagsStatus)
      .filter(([_, status]) => status)
      .map(([key]) => key);
    this.tagsControl.setValue(tags);
  }

  private _getFieldOptions(): void {
    this._filterService.tags$.subscribe((tags) => {
      tags = this.tagObjectType ? tags.filter((tag) => tag.objectType === this.tagObjectType) : tags;
      this.tagsStatus = tags.reduce((acc, el) => ({ ...acc, [el.name]: false }), {});
      this.tags = tags;
      this._cdr.markForCheck();
    });
  }

  chooseFloors(ids: number[]) {
    this.floorsIdControl.setValue(ids);
    if (this.mode === 'link') {
      this.link.emit(ids[0]);
    }
  }

  clear() {
    this.seatCountControl.setValue(1);
    this.tagsControl.setValue([]);
    this._setFullDay();
    this.tagsStatus = this.tags.reduce((acc, el) => ({ ...acc, [el.name]: false }), {});
  }

  endMaxDate: (date: Date) => boolean = () => true;
}
