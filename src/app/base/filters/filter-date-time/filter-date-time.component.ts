import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { setHours } from '@presentation/offices/offices-map/offices-map.utils';
import { Debounce } from '@src/app/core/decorators/debounce.decorator';
import { SupportTimeOptions } from 'ng-zorro-antd/date-picker/standard-types';
import { DisabledTimeConfig, DisabledTimeFn } from 'ng-zorro-antd/date-picker';
import { WORK_HOURS } from '../utils/filter-date.constants';
import {
  disableDateFrom,
  disableDateTo,
  disableHoursFrom,
  disableHoursTo,
  disableMinutesFrom,
  disableMinutesTo,
  getDisabledHours,
  getRangeDateTo,
  getRangeTimeTo,
  timePickerDefaultOptions,
} from '../utils/filter-date.utils';
import { addMilliseconds, differenceInCalendarDays, isSameDay } from 'date-fns';

@Component({
  selector: 'app-filter-date-time',
  templateUrl: './filter-date-time.component.html',
  styleUrls: ['./filter-date-time.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterDateTimeComponent),
      multi: true,
    },
  ],
  host: {
    '[class.filter-date]': `true`,
    '[class._horizontal]': `layout === "horizontal"`,
    '[class._vertical]': `layout === "vertical"`,
  },
})
export class FilterDateTimeComponent implements ControlValueAccessor, OnInit {
  disableAllDay = false;

  @MarkForCheck
  public allDay: boolean = false;
  private _value: Array<Date | null> = [null, null];

  @Input()
  public nzAllowClear: boolean = true;

  @Input()
  public nzMinuteStep: number | null = null;

  @Input()
  public minDateTime: Date | null = null;

  @Input()
  public maxDateTime: Date | null = null;

  @Input()
  public format: string = 'yyyy-MM-dd';

  @Input()
  public workHours: number[] = WORK_HOURS;

  @Input()
  public minDuration: number = 3600000;

  @Input()
  public layout: 'vertical' | 'horizontal' = 'vertical';

  @Input()
  public allowAllDay: boolean = false;

  @Input()
  public autoUpdateDateTo: boolean = false;

  @Input()
  public autoUpdateDateToFullDay: boolean = false;

  @Input()
  public staticDisabled: boolean = false;

  private _disabledHours: number[] = [];
  private _timePickerOptions: SupportTimeOptions;

  constructor(private cdr: ChangeDetectorRef) {}

  public get timePickerOptions(): SupportTimeOptions | null {
    return this._timePickerOptions;
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
  public onChange: (value: Date[]) => void = (_value: Date[]) => {};
  public onTouched: () => void = () => {};

  @Debounce(100)
  public toggleAllDay(allDay: boolean): void {
    this.allDay = allDay;

    if (this.allDay) {
      this.setAllDay();
    }
  }

  public updateDateFrom(dateFrom: Date): void {
    this.value[0] = dateFrom;
    this.checkAllDayEnabled(dateFrom);
    if (this.allDay) {
      this.setAllDay();
    } else if (this.autoUpdateDateTo && this.value[1] < dateFrom) {
      this.updateDateTo(
        this.autoUpdateDateToFullDay
          ? setHours(new Date(this.value[0]), this.workHours[1])
          : addMilliseconds(this.value[0], this.minDuration),
      );
    } else {
      this.updateValue();
    }
  }

  public updateDateTo(dateTo: Date): void {
    this.value[1] = dateTo;
    this.updateValue();
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

  public ngOnInit(): void {
    this._timePickerOptions = timePickerDefaultOptions(this.timePickerOptions);
    if (this.nzMinuteStep) {
      this._timePickerOptions.nzMinuteStep = this.nzMinuteStep;
    }
    this._disabledHours = getDisabledHours(this.workHours);
    this.checkAllDayEnabled(this.value[0]);
  }

  timePickerPopupClass(idName: string): string {
    const popupHeight = 300;
    const windowHeight = window.outerHeight;
    let toTimePicker = document?.getElementById(idName)?.getBoundingClientRect();
    if (toTimePicker && windowHeight - toTimePicker.bottom > popupHeight) {
      return 'time-picker-popup popup-bottom';
    } else {
      return 'time-picker-popup popup-top';
    }
  }

  public checkAllDayEnabled(dateFrom: Date): void {
    const checkDateFrom = new Date(dateFrom);
    const now = new Date();

    checkDateFrom.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    if (+checkDateFrom <= +now) {
      this.allDay = false;
      this.disableAllDay = true;
    } else {
      this.disableAllDay = false;
    }
  }

  public disableDateFrom: (date: Date) => boolean = (date: Date): boolean => {
    return disableDateFrom(date, this.minDateTime, this.maxDateTime);
  };

  public disableDateTo: (date: Date) => boolean = (date: Date): boolean => {
    return disableDateTo(date, this.minDateTime, this.maxDateTime, this.value[0]);
  };

  public disableHoursFrom: () => number[] = (): number[] => {
    let disableHours: number[] = [];
    if (this.staticDisabled) {
      const startHour = this.minDateTime.getHours();
      const endHour = this.maxDateTime.getHours();
      disableHours = [...FilterDateTimeComponent.range(0, startHour), ...FilterDateTimeComponent.range(endHour, 24)];
    } else {
      disableHours = disableHoursFrom(this.minDateTime, this.value[0], this._disabledHours);
    }
    return disableHours;
  };

  public disableHoursTo: () => number[] = (): number[] => {
    let disableHours: number[] = [];
    if (this.staticDisabled) {
      const startHour = this.minDateTime.getHours();
      const endHour = this.maxDateTime.getHours();
      disableHours = [...FilterDateTimeComponent.range(0, startHour), ...FilterDateTimeComponent.range(endHour, 24)];
    } else {
      disableHours = disableHoursTo(this.value[0], this.value[1], this._disabledHours);
    }
    return disableHours;
  };

  public disableMinutesFrom: (hour: number) => number[] = (hour: number): number[] => {
    let minutesRange: number[] = [];
    if (this.staticDisabled) {
      if (hour) {
        if (hour > this.minDateTime.getHours() && hour < this.maxDateTime.getHours()) {
          minutesRange = FilterDateTimeComponent.range(0, 0);
        } else if (hour === this.minDateTime.getHours()) {
          minutesRange = FilterDateTimeComponent.range(0, this.minDateTime.getMinutes() - 1);
        } else if (hour === this.maxDateTime.getHours()) {
          minutesRange = FilterDateTimeComponent.range(this.maxDateTime.getMinutes() + 1, 60);
        } else {
          minutesRange = FilterDateTimeComponent.range(0, 0);
        }
      }
    } else {
      minutesRange = disableMinutesFrom(hour, this.minDateTime, this.value[0], this.disableHoursFrom());
    }
    return minutesRange;
  };

  public disableMinutesTo: (hour: number) => number[] = (hour: number): number[] => {
    let minutesRange: number[] = [];
    if (this.staticDisabled) {
      if (hour) {
        if (hour > this.minDateTime.getHours() && hour < this.maxDateTime.getHours()) {
          minutesRange = FilterDateTimeComponent.range(0, 0);
        } else if (hour === this.minDateTime.getHours()) {
          minutesRange = FilterDateTimeComponent.range(0, this.minDateTime.getMinutes() - 1);
        } else if (hour === this.maxDateTime.getHours()) {
          minutesRange = FilterDateTimeComponent.range(this.maxDateTime.getMinutes() + 1, 60);
        }
      }
    } else {
      minutesRange = disableMinutesTo(hour, this.value[0], this.value[1], this._disabledHours);
    }
    return minutesRange;
  };

  private setAllDay(): void {
    const startHours: number = this.workHours[0] || 0;
    const endHours: number = this.workHours[1] || 23;
    const startDate: Date = this.value[0] || new Date();

    this.value[0] = new Date(startDate.setHours(startHours, 0, 0, 0));
    this.value[1] = new Date(startDate.setHours(endHours, 0, 0, 0));

    this.updateValue();
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
      this.value = value.map((item) =>
        item instanceof Date || typeof item === 'string' || typeof item === 'number' ? new Date(item) : null,
      );
    } catch (e) {
      console.error(e);
    }
  }

  private static range(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  public disabledDate = (current: Date): boolean =>
    differenceInCalendarDays(current, this.minDateTime) < 0 || differenceInCalendarDays(current, this.maxDateTime) > 0;

  public disabledDateTime: DisabledTimeFn = (current: Date) => {
    let minutesRange: number[] = [];
    if (current) {
      if (current.getHours() > this.minDateTime.getHours() && current.getHours() < this.maxDateTime.getHours()) {
        minutesRange = FilterDateTimeComponent.range(0, 0);
      } else if (current.getHours() === this.minDateTime.getHours()) {
        minutesRange = FilterDateTimeComponent.range(0, this.minDateTime.getMinutes() - 1);
      } else if (current.getHours() === this.maxDateTime.getHours()) {
        minutesRange = FilterDateTimeComponent.range(this.maxDateTime.getMinutes() + 1, 60);
      }
    }
    return {
      nzDisabledHours: () => [
        ...FilterDateTimeComponent.range(0, this.minDateTime.getHours()),
        ...FilterDateTimeComponent.range(this.maxDateTime.getHours() + 1, 24),
      ],
      nzDisabledMinutes: () => minutesRange,
      nzDisabledSeconds: () => [],
    };
  };
}
