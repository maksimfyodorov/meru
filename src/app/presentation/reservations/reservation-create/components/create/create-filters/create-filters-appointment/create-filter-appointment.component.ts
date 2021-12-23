import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalizationService } from '@core/services/localization.service';
import { CreateFilterWorkplaceService } from '@presentation/reservations/reservation-create/components/create/create-filters/create-filters-workplace/create-filter-workplace.service';
import { FilterComponent } from '@base/filters/filters/filter.component';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { SettingsService } from '@shared/settings/settings.service';
import { IFilterCheckBoxOptions } from '@base/filters/models/filter-checkbox.model';
import { addDays, addHours, isSameDay } from 'date-fns';
import { ITagObjectType } from '@src/app/shared/http/models/database.model';
import { roundTimeMinPartHourCeil } from '@src/app/presentation/reservations/reservation-calendar/pages/calendar/calendar.utils';

const MIN_DURATION_IN_HOUR: number = 1;

@Component({
  selector: 'app-create-filters-appointment, [app-create-filters-appointment]',
  templateUrl: './create-filter-appointment.component.html',
  styleUrls: ['./create-filter-appointment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-list-filter-workplace]': `true`,
  },
  providers: [CreateFilterWorkplaceService],
})
export class CreateFilterAppointmentComponent extends FilterComponent implements OnInit, OnDestroy {
  @Input()
  public tagObjectType: ITagObjectType | null = null;
  now: Date;
  floorMapIdControl: FormControl;
  dateTimeFromControl: FormControl;
  dateTimeToControl: FormControl;
  tagsControl: FormControl;
  repeatControl: FormControl;
  seatCountControl: FormControl;
  allDay = false;
  repeat = false;
  repeatData = {
    weekNum: 1,
    days: [],
    end: null,
  };
  repeatDisable: boolean;
  weekNums = [1, 2, 3, 4, 5];
  daysNaming = [
    { label: 'Days.1', value: 1 },
    { label: 'Days.2', value: 2 },
    { label: 'Days.3', value: 3 },
    { label: 'Days.4', value: 4 },
    { label: 'Days.5', value: 5 },
    { label: 'Days.6', value: 6 },
    { label: 'Days.0', value: 0 },
  ];
  workHours = [];
  minDuration: number;

  tagsStatus: Record<string, boolean> = {};
  typesCheckBoxOptions: IFilterCheckBoxOptions;

  @Subscribe<string>()
  dateFormat;

  @Subscribe<string>()
  dateTimeFormat;

  tags;
  endMaxDate: (date: Date) => boolean = () => true;

  constructor(
    protected injector: Injector,
    private $service: CreateFilterWorkplaceService,
    private $settings: SettingsService,
    private _cdr: ChangeDetectorRef,
  ) {
    super(injector);
    this.workHours = [6, 23];
    this.minDuration = 900000;
    this.now = new Date();
  }

  ngOnInit(): void {
    this.$service.formGroup = this.formGroup;
    this.assignControls();
    this.getFieldOptions();
    this._setFullDay();
    this._watchDateTimeFrom();
  }

  ngOnDestroy(): void {}

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
    this.repeatDisable = !isSameDay(dateTime[0], dateTime[1]);
  }

  updateTags(name: string): void {
    this.tagsStatus[name] = !this.tagsStatus[name];
    const tags = Object.entries(this.tagsStatus)
      .filter(([_, status]) => status)
      .map(([key]) => key);
    this.tagsControl.setValue(tags);
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

  private getFieldOptions(): void {
    this.dateFormat = this.$service.dateFormat$;
    this.dateTimeFormat = this.$service.dateTimeFormat$;
    this.$service.tags$.subscribe((tags) => {
      tags = this.tagObjectType ? tags.filter((tag) => tag.objectType === this.tagObjectType) : tags;
      this.tagsStatus = tags.reduce((acc, el) => ({ ...acc, [el.name]: false }), {});
      this.tags = tags;
      this._cdr.markForCheck();
    });
  }

  private _setFullDay(): void {
    const start = roundTimeMinPartHourCeil(new Date(), 'appointment');
    const end: Date = addHours(start, MIN_DURATION_IN_HOUR);

    this.dateTimeFromControl.setValue(start);
    this.dateTimeToControl.setValue(end);
  }

  private _watchDateTimeFrom(): void {
    this.dateTimeFromControl.valueChanges.subscribe((value) => {
      const date = addDays(new Date(value), this.$settings.getSettingByName('workplaceReservationDurationMaxDays'));
      this.repeatData.end = date;
      this.endMaxDate = (_date: Date) => {
        return _date > date;
      };
    });
  }
}
