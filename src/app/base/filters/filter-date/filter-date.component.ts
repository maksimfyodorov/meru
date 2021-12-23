import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { WORK_HOURS } from '@src/app/base/filters/utils/filter-date.constants';
import { SupportTimeOptions } from 'ng-zorro-antd/date-picker/standard-types';
import {
  disableDate,
  disableTime,
  getDisabledHours,
  getRangeDateFrom,
  getRangeDateTo,
  getRangeTimeFrom,
  getRangeTimeTo,
  timePickerDefaultOptions,
} from '@src/app/base/filters/utils/filter-date.utils';
import { DisabledTimeConfig, DisabledTimeFn } from 'ng-zorro-antd/date-picker';
import { Debounce } from '@core/decorators/debounce.decorator';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { setHours } from '@presentation/offices/offices-map/offices-map.utils';
import { addMilliseconds, differenceInCalendarDays } from 'date-fns';

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterDateComponent),
      multi: true,
    },
  ],
  host: {
    '[class.filter-date]': `true`,
    '[class._horizontal]': `layout === "horizontal"`,
    '[class._vertical]': `layout === "vertical"`,
  },
})
export class FilterDateComponent implements ControlValueAccessor, OnInit {
  disableAllDay = false;

  @MarkForCheck
  public allDay: boolean = false;
  private _value: Array<Date | null> = [null, null];

  @Input()
  public nzMinuteStep: number | null = null;

  @Input()
  public minDateTime: Date | null = null;

  @Input()
  public maxDateTime: Date | null = null;

  @Input()
  public layout: 'vertical' | 'horizontal' = 'vertical';

  @Input()
  public format: string = 'yyyy-MM-dd';

  @Input()
  public workHours: number[] = WORK_HOURS;

  @Input()
  public minDuration: number = 300000;

  @Input()
  public allowAllDay: boolean = false;

  @Input()
  public autoUpdateDateTo: boolean = false;

  @Input()
  public autoUpdateDateToFullDay: boolean = false;

  @Input()
  public staticDisabled: boolean = false;

  private _rangeDateFrom: Array<Date | null> = [null, null];
  private _rangeTimeFrom: Array<Date | null> = [null, null];
  private _rangeDateTo: Array<Date | null> = [null, null];
  private _rangeTimeTo: Array<Date | null> = [null, null];
  private _disabledHours: number[] = [];
  private _timePickerOptions: SupportTimeOptions;

  constructor(private cdr: ChangeDetectorRef) {}

  private static range(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  public get timePickerOptions(): SupportTimeOptions | null {
    return !this.allDay ? this._timePickerOptions : null;
  }

  @Input()
  public set value(value: Array<Date | null>) {
    this._value = value;
    this.onChange(this.value);
    this.cdr.markForCheck();
  }

  public get value(): Array<Date | null> {
    return this._value;
  }

  @Input('timePickerOptions')
  public set inputTimePickerOptions(timePickerOptions: SupportTimeOptions) {
    if (!timePickerOptions) {
      this._timePickerOptions = null;
      return;
    }

    this._timePickerOptions = {
      ...this.timePickerOptions,
      ...timePickerOptions,
    };
  }

  public onChange: (value: Date[]) => void = (_value: Date[]) => {};
  public onTouched: () => void = () => {};

  @Debounce(100)
  public toggleAllDay(allDay: boolean): void {
    this.allDay = allDay;

    if (this.allDay) {
      this.setAllDay();
    }

    this.updateRangeFrom();
    this.updateRangeTo();
  }

  public updateDateFrom(dateFrom: Date): void {
    this.value[0] = dateFrom;
    this.checkAllDayEnabled(dateFrom);
    if (this.allDay) {
      this.setAllDay();
    } else if (this.autoUpdateDateTo && this.value[1] < dateFrom) {
      this.updateDateTo(
        this.autoUpdateDateToFullDay ? setHours(new Date(this.value[0]), this.workHours[1]) : addMilliseconds(this.value[0], this.minDuration),
      );
    } else {
      this.updateValue();
    }

    this.updateRangeTo();
  }

  public checkAllDayEnabled(dateFrom: Date): void {
    const checkDateFrom = new Date(dateFrom);
    const now = new Date();

    checkDateFrom.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    if (+checkDateFrom === +now) {
      this.allDay = false;
      this.disableAllDay = true;
    } else {
      this.disableAllDay = false;
    }
  }

  public updateDateTo(dateTo: Date): void {
    this.value[1] = dateTo;
    this.updateValue();
    this.updateRangeFrom();
  }

  public updateValue(): void {
    this.value = this.value;
  }

  public registerOnChange(onChange: (value: Date[]) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public writeValue(value: Array<Date | null> = []): void {
    if (!value) {
      this.value = [null, null];
      return;
    }

    if (this.value[0] === value[0] && this.value[1] === value[1]) {
      return;
    }

    try {
      this.value = value.map((item) => (item instanceof Date || typeof item === 'string' || typeof item === 'number' ? new Date(item) : null));
    } catch (e) {
      console.error(e);
    }
    this.checkAllDayEnabled(this.value[0]);
  }

  public ngOnInit(): void {
    this._timePickerOptions = timePickerDefaultOptions(this.timePickerOptions);
    if (this.nzMinuteStep) {
      this._timePickerOptions.nzMinuteStep = this.nzMinuteStep;
    }
    this._disabledHours = getDisabledHours(this.workHours);
  }

  public disabledDate = (current: Date): boolean =>
    differenceInCalendarDays(current, this.minDateTime) < 0 || differenceInCalendarDays(current, this.maxDateTime) > 0;

  public disabledDateTime: DisabledTimeFn = (current: Date) => {
    let minutesRange: number[] = [];
    if (current) {
      if (current.getHours() > this.minDateTime.getHours() && current.getHours() < this.maxDateTime.getHours()) {
        minutesRange = FilterDateComponent.range(0, 0);
      } else if (current.getHours() === this.minDateTime.getHours()) {
        minutesRange = FilterDateComponent.range(0, this.minDateTime.getMinutes() - 1);
      } else if (current.getHours() === this.maxDateTime.getHours()) {
        minutesRange = FilterDateComponent.range(this.maxDateTime.getMinutes() + 1, 60);
      }
    }
    return {
      nzDisabledHours: () => [
        ...FilterDateComponent.range(0, this.minDateTime.getHours()),
        ...FilterDateComponent.range(this.maxDateTime.getHours() + 1, 24),
      ],
      nzDisabledMinutes: () => minutesRange,
      nzDisabledSeconds: () => [],
    };
  };

  public disableDateFrom: (date: Date) => boolean = (date: Date): boolean => {
    return disableDate(date, this._rangeDateFrom);
  };

  public disableDateTo: (date: Date) => boolean = (date: Date): boolean => {
    return disableDate(date, this._rangeDateTo);
  };

  public disableTimeFrom: (date: Date) => DisabledTimeConfig = (date: Date): DisabledTimeConfig => {
    return disableTime(date, this._rangeTimeFrom, this._disabledHours);
  };

  public disableTimeTo: (date: Date) => DisabledTimeConfig = (date: Date): DisabledTimeConfig => {
    return disableTime(date, this._rangeTimeTo, this._disabledHours);
  };

  public updateRangeFrom(): void {
    this._rangeDateFrom = getRangeDateFrom(
      this.minDateTime,
      this.minDateTime,
      this.value[1],
      this.minDuration,
      this.workHours,
      this.allDay || this.autoUpdateDateTo,
    );
    this._rangeTimeFrom = getRangeTimeFrom(this.minDateTime, this.minDateTime, this.value[1], this.minDuration, this.allDay || this.autoUpdateDateTo);
  }

  public updateRangeTo(): void {
    this._rangeDateTo = getRangeDateTo(this.minDateTime, this.minDateTime, this.value[0], this.minDuration, this.workHours);
    this._rangeTimeTo = getRangeTimeTo(this.minDateTime, this.minDateTime, this.value[0], this.minDuration);
  }

  private setAllDay(): void {
    const startHours: number = this.workHours[0] || 0;
    const endHours: number = this.workHours[1] || 23;
    const startDate: Date = this.value[0] || new Date();

    this.value[0] = new Date(startDate.setHours(startHours, 0, 0, 0));
    this.value[1] = new Date(startDate.setHours(endHours, 0, 0, 0));

    this.updateValue();
  }
}
