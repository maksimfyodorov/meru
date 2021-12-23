import { DEFAULT_TIME_PICKER_OPTIONS, HOURS, MINUTES } from '@src/app/base/filters/utils/filter-date.constants';
import { getEndDate, getMinDate, getStartDate } from '@core/utils/date.utils';
import { DisabledTimeConfig, SupportTimeOptions } from 'ng-zorro-antd/date-picker';

export function timePickerDefaultOptions(options: SupportTimeOptions): SupportTimeOptions {
  return {
    ...DEFAULT_TIME_PICKER_OPTIONS,
    ...options,
  };
}

export function getDisabledHours(workHours: number[]): number[] {
  return HOURS.filter((hour) => hour < workHours[0] || hour > workHours[1]);
}

export function getRangeDateFrom(
  minDate: Date | null,
  maxDate: Date | null,
  dateTo: Date | null,
  minDuration: number = 0,
  workHours: number[] = [],
  notUseDateTo: boolean = false,
): Array<Date | null> {
  if (!notUseDateTo) {
    maxDate = getMinDate(maxDate, dateTo);
  }

  if (maxDate) {
    const maxDateWithoutDurationHours: number = new Date(maxDate.getTime() - minDuration).getHours();

    if (typeof workHours[0] !== 'undefined' && maxDateWithoutDurationHours < workHours[0]) {
      maxDate.setDate(maxDate.getDate() - 1);
    }

    maxDate = new Date(getEndDate(maxDate));
  }

  if (minDate) minDate = new Date(getStartDate(minDate));

  return [minDate, maxDate];
}

export function getRangeTimeFrom(
  minDate: Date | null,
  maxDate: Date | null,
  dateTo: Date | null,
  minDuration: number = 0,
  notUseDateTo: boolean = false,
): Array<Date | null> {
  const range: Array<Date | null> = [null, null];

  if (!notUseDateTo) {
    maxDate = getMinDate(maxDate, dateTo);
  }

  if (minDate) range[0] = minDate;
  if (maxDate) range[1] = new Date(maxDate.getTime() - minDuration);

  return range;
}

export function getRangeDateTo(
  minDate: Date | null,
  maxDate: Date | null,
  dateFrom: Date | null,
  minDuration: number = 0,
  workHours: number[] = [],
): Array<Date | null> {
  minDate = getMinDate(minDate, dateFrom);

  if (minDate) {
    const minDateWithDurationHours: number = new Date(minDate.getTime() + minDuration).getHours();

    if (typeof workHours[1] !== 'undefined' && minDateWithDurationHours >= workHours[1]) {
      minDate.setDate(minDate.getDate() + 1);
    }

    minDate = new Date(getStartDate(minDate));
  }

  if (maxDate) maxDate = new Date(getEndDate(maxDate));

  return [minDate, maxDate];
}

export function getRangeTimeTo(
  minDate: Date | null,
  maxDate: Date | null,
  dateFrom: Date | null,
  minDuration: number = 0,
): Array<Date | null> {
  const range: Array<Date | null> = [null, null];

  if (maxDate) range[1] = maxDate;
  if ((!minDate && dateFrom) || (minDate && dateFrom && dateFrom > minDate)) minDate = dateFrom;
  if (minDate) range[0] = new Date(minDate.getTime() + minDuration);

  return range;
}

export function disableDate(date: Date, [from, to]: Array<Date | null>): boolean {
  return (from && date < from) || (to && date > to);
}

export function disableTime(date: Date, [from, to]: Array<Date | null>, disabledHours: number[]): DisabledTimeConfig {
  const dateHours: number = date?.getHours();
  let disabledMinutes: number[] = [];

  if (from && getStartDate(date) === getStartDate(from)) {
    const fromHours: number = from.getHours();
    disabledHours = HOURS.filter((hour) => disabledHours.includes(hour) || hour < fromHours);

    if (dateHours === fromHours) {
      const fromMinutes: number = from.getMinutes();
      disabledMinutes = MINUTES.filter((minute) => minute < fromMinutes);
    }
  }

  if (to && getEndDate(date) === getEndDate(to)) {
    const toHours: number = to.getHours();
    disabledHours = HOURS.filter((hour) => disabledHours.includes(hour) || hour > toHours);

    if (dateHours === toHours) {
      const toMinutes: number = to.getMinutes();
      disabledMinutes = MINUTES.filter((minute) => minute > toMinutes);
    }
  }

  return {
    nzDisabledHours(): number[] {
      return disabledHours;
    },
    nzDisabledMinutes(hour: number): number[] {
      return disabledHours.includes(hour) ? MINUTES : disabledMinutes;
    },
    nzDisabledSeconds(hour: number, minute: number): number[] {
      return [];
    },
  };
}

export function disableDateFrom(date: Date, min?: Date, max?: Date): boolean {
  const minDate = min ? new Date(min) : undefined;
  const maxDate = max ? new Date(max) : undefined;
  minDate?.setDate(minDate.getDate() - 1);
  return (minDate && date?.getTime() < minDate?.getTime()) || (maxDate && date?.getTime() > maxDate?.getTime());
}

export function disableDateTo(date: Date, min?: Date, max?: Date, fromDate?: Date): boolean {
  const maxDate = max ? new Date(max) : undefined;
  const minDate =
    fromDate == undefined && min == undefined
      ? undefined
      : fromDate == undefined
      ? new Date(min)
      : min == undefined
      ? new Date(fromDate)
      : fromDate > min
      ? new Date(fromDate)
      : new Date(min);
  const oneDayBefore = minDate ? new Date(minDate) : undefined;
  oneDayBefore?.setDate(oneDayBefore.getDate() - 1);
  return (oneDayBefore && date?.getTime() < oneDayBefore?.getTime()) || (maxDate && date?.getTime() > maxDate?.getTime());
}

export function disableHoursFrom(from: Date, to: Date, disabledHours: number[]): number[] {
  if (isSameday(from, to)) {
    const fromHours = from?.getHours();
    disabledHours = HOURS.filter((hour) => disabledHours.includes(hour) || hour < fromHours);
  }

  return disabledHours;
}

export function disableHoursTo(from: Date, to: Date, disabledHours: number[]): number[] {
  if (isSameday(from, to)) {
    const fromDate = from?.getHours();
    disabledHours = HOURS.filter((hour) => disabledHours.includes(hour) || hour < fromDate);
  }

  return disabledHours;
}

export function disableMinutesFrom(dateHour: number, from: Date, to: Date, disabledHours: number[]): number[] {
  if (disabledHours.includes(dateHour)) {
    return MINUTES;
  }

  let disabledMinutes: number[] = [];
  if (isSameday(from, to)) {
    const toHours = to?.getHours();
    const fromHours = from?.getHours();
    if (toHours === dateHour) {
      const toMinutes: number = to?.getMinutes();
      disabledMinutes = MINUTES.filter((minute) => minute > toMinutes);
    }
    if (fromHours === dateHour) {
      const fromMinutes: number = from?.getMinutes();
      disabledMinutes = MINUTES.filter((minute) => minute < fromMinutes);
    }
  }
  return disabledMinutes;
}

export function disableMinutesTo(dateHour: number, from: Date, to: Date, disabledHours: number[]): number[] {
  if (disabledHours.includes(dateHour)) {
    return MINUTES;
  }

  let disabledMinutes: number[] = [];
  if (isSameday(from, to)) {
    if (to?.getHours() === dateHour) {
      const toMinute = to?.getMinutes();
      disabledMinutes = MINUTES.filter((minute) => minute > toMinute);
    }
  }

  return disabledMinutes;
}

export function isSameday(from: Date, to: Date): boolean {
  return from?.getDate() == to?.getDate() && from?.getMonth() == to?.getMonth() && from?.getFullYear() == to?.getFullYear();
}
