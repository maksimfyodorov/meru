import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, Injector, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingsService } from '@src/app/shared/settings/settings.service';
import { FilterService } from '../../../services/filter.service';
import { MIN_DURATION, WORK_HOURS } from '../../../utils/reservation-create-grid.util';
import { addDays, isSameDay } from 'date-fns';
import { ITagObjectType } from '@src/app/shared/http/models/database.model';
import { IReservationTab } from '../../../models';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { Subscription } from 'rxjs';
import { FilterComponent } from '@src/app/base/filters/filters/filter.component';
import { debounceTime, first } from 'rxjs/operators';
import { IFilterCheckBoxOptions } from '@src/app/base/filters/models/filter-checkbox.model';
import { mapCheckBoxOptions } from '@shared/common/utils/filter.util';
import { WorkplaceTypesMap } from '@shared/common/utils/workplace.utils';
import { getInitDate } from '@src/app/base/reservation-by-qr/reservation-by-qr.util';
import { roundTimeMinPartHourCeil } from '@src/app/presentation/reservations/reservation-calendar/pages/calendar/calendar.utils';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-workplace',
  templateUrl: './filter-workplace.component.html',
  styleUrls: ['./filter-workplace.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterWorkplaceComponent extends FilterComponent implements OnInit {
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
  now = new Date();
  floorsIdControl: FormControl;

  workHours = WORK_HOURS;
  minDuration = MIN_DURATION['appointment'];

  repeatControl: FormControl;
  typesControl: FormControl;

  typesCheckBoxOptions: IFilterCheckBoxOptions;

  repeat = false;
  repeatData = {
    weekNum: 1,
    days: [],
    end: null,
  };
  repeatDisable: boolean;
  weekNums = [1, 2, 3, 4, 5];
  daysNaming = [
    { label: 'Days.1', value: 1, checked: false },
    { label: 'Days.2', value: 2, checked: false },
    { label: 'Days.3', value: 3, checked: false },
    { label: 'Days.4', value: 4, checked: false },
    { label: 'Days.5', value: 5, checked: false },
    { label: 'Days.6', value: 6, checked: false },
    { label: 'Days.0', value: 0, checked: false },
  ];

  tagsControl: FormControl;
  tagsStatus: Record<string, boolean> = {};
  tags;

  id: number;
  selectedIds: number[] = [];
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
    const startHour = this._settingsService.getSettingByName('workplaceReservationBeginHourDefault');
    const endHour = this._settingsService.getSettingByName('workplaceReservationEndHourDefault');

    this.workHours = [startHour, endHour];
    let reservedValues: Record<string, string>;
    if (this._filterService.type === 'workplace') {
      reservedValues = this._filterService.formGroup.value;
    }
    this._filterService.formGroup = this.formGroup;
    this.assignControls();
    this._setFullDay();
    this._getWorkplaceTypes();
    this._getFieldOptions();
    this._watchDateTimeFrom();
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
          this.selectedIds = [this.buildings[this.currentBuildingIndex].items[0].floorId];
        }
        this.chooseFloors(this.selectedIds);
        this._cdr.markForCheck();
      }
    });
    this.sub = this.formGroup.valueChanges.pipe(this.realtime ? debounceTime(200) : first()).subscribe((v) => {
      this._filterService.setFilters(v);
    });

    setTimeout(() => {
      if (this._filterService.type === 'workplace' && reservedValues.dateTimeFrom && reservedValues.dateTimeTo) {
        delete reservedValues.types;
        this.formGroup.patchValue(reservedValues);
        this._getWorkplaceTypes();
        this.formGroup.value.tags.forEach((tag) => {
          this.updateTags(tag);
        });
        if (this.mode === 'checkbox') {
          this.selectedIds = this.formGroup.value.floorsId;
        } else {
          this.selectedIds = [this.id];
        }
        if (this.formGroup.value.repeat) {
          this.repeatData = this.formGroup.value.repeat;
          this.repeat = true;
          this.repeatData.days.forEach((day) => {
            if (day > 0) {
              this.daysNaming[day - 1].checked = true;
            } else {
              this.daysNaming[6].checked = true;
            }
          });
        }
      }
      this._filterService.type = 'workplace';
    }, 100);
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
        startDay = roundTimeMinPartHourCeil(startDay, 'workplace');
      }
      this.dateTimeFromControl.setValue(startDay);
      this.dateTimeToControl.setValue(dateTime[1]);
    } else {
      this.dateTimeFromControl.setValue(dateTime[0]);
      this.dateTimeToControl.setValue(dateTime[1]);
    }
    this.repeatDisable = !isSameDay(dateTime[0], dateTime[1]);
  }

  updateTags(name: string): void {
    this.tagsStatus[name] = !this.tagsStatus[name];
    const tags = Object.entries(this.tagsStatus)
      .filter(([_, status]) => status)
      .map(([key]) => key);
    this.tagsControl.setValue(tags);
  }

  private _setFullDay(): void {
    const [start, end] = getInitDate(this.workHours, this.minDuration);
    this.dateTimeFromControl.setValue(start);
    this.dateTimeToControl.setValue(end);
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

  chooseDays(event): void {
    this.repeatData.days = event;
    this.updateRepeatDays();
  }

  updateRepeatDays(): void {
    const end = this.repeatData.end || '';
    if (this.repeat) {
      this.repeatControl.setValue({
        ...this.repeatData,
        end,
      });
    } else {
      this.repeatControl.setValue(null);
    }
  }

  private _getWorkplaceTypes(): void {
    const workplaceTypesMap = WorkplaceTypesMap.filter((wtm) => wtm.value !== 'PARKING_LOT');
    this.typesCheckBoxOptions = mapCheckBoxOptions(workplaceTypesMap, 'value', 'name', this.typesControl);
  }

  endMaxDate: (date: Date) => boolean = () => true;
  private _watchDateTimeFrom(): void {
    this.dateTimeFromControl.valueChanges.subscribe((value) => {
      const date = addDays(new Date(value), this._settingsService.getSettingByName('workplaceReservationDurationMaxDays'));
      this.repeatData.end = date;
      this.endMaxDate = (_date: Date) => {
        return _date > date;
      };
    });
  }

  clear() {
    this._setFullDay();

    this.tagsControl.setValue([]);

    this.tagsStatus = this.tags.reduce((acc, el) => ({ ...acc, [el.name]: false }), {});

    const workplaceTypesMap = WorkplaceTypesMap.filter((wtm) => wtm.value !== 'PARKING_LOT');
    this.typesControl.setValue(workplaceTypesMap.map((t) => t.value));

    this.repeat = false;
    this.repeatData = {
      weekNum: 1,
      days: [],
      end: null,
    };
    this.repeatControl.setValue(null);
  }
}
