import { addDays, addMinutes, getHours } from 'date-fns';
import {
  ICustomObject,
  IUser,
  IWorkplace,
} from '@shared/http/models/database.model';
import {
  IMarkItem,
  MarkItemLogicType,
} from '@base/map/map-mark/map-mark.model';
import { Observable, of } from 'rxjs';

export const nowRang = (): Date[] => {
  const now = new Date();
  return [now, addMinutes(now, 1)];
};
export const dayRange = (now: Date): [Date, Date] => {
  return [
    new Date(now.getFullYear(), now.getMonth(), now.getDate()),
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59),
  ];
};
export const breakdownDate = (range: Date[], step: number): number[] => {
  const [start, end] = range.map((date) => date.getTime());
  if (start >= end) {
    console.error(`Invalid range`, range);
    return;
  }
  const result = [];
  let iterable = start;
  while (iterable < end) {
    result.push(iterable);
    iterable += step;
  }
  return result;
};

export const findDateRange = (date: Date[], timeRange: number[]): Date[] => {
  const result = [new Date(date[0]), date[1] ? new Date(date[1]) : null];
  const [startTime, endTime] = timeRange;
  if (!date[1]) {
    result[1] = new Date(result[0]);
  }
  result[0].setHours(
    new Date(startTime).getHours(),
    new Date(startTime).getMinutes(),
    0,
    0
  );
  result[1].setHours(
    new Date(endTime).getHours(),
    new Date(endTime).getMinutes(),
    0,
    0
  );
  return result;
};
export const findSliderRange = (date: Date[]): number[] => {
  const result: [Date, Date] = [new Date(), new Date()];
  result[0].setHours(date[0]?.getHours(), date[0]?.getMinutes(), 0, 0);
  result[1].setHours(date[1]?.getHours(), date[1]?.getMinutes(), 0, 0);
  return result.map((data) => data.getTime());
};
export const workDateRange = (workHours: number[]): Date[] => {
  const [startWorkHour, endWorkHour] = workHours;
  const result = [new Date(), new Date()];
  result[0].setHours(startWorkHour, 0, 0, 0);
  result[1].setHours(endWorkHour, 0, 0, 0);
  return result;
};
export const getSliderLimitValue = (range: number[]): number[] => {
  const [startWorkHour, endWorkHour] = range;
  const sliderLimitDate: Date[] = [new Date(), new Date()];
  sliderLimitDate[0].setHours(startWorkHour, 0, 0, 0);
  sliderLimitDate[1].setHours(endWorkHour, 0, 0, 0);
  return sliderLimitDate.map((date) => date.getTime());
};
export const getInitDate = (
  workHours: number[],
  minDuration: number
): Date[] => {
  const now = new Date();
  const nowHour: number = now.getHours();
  const nowWithMinDuration: Date = new Date(now.getTime() + minDuration);
  const time = getSliderLimitValue(workHours);
  const [startWorkHour, endWorkHour] = time.map((t) => getHours(new Date(t)));
  const endDate: Date = setHours(now, workHours[1]);

  if (nowHour < endWorkHour && nowHour <= startWorkHour) {
    return [setHours(now, startWorkHour), endDate];
  } else if (nowHour < endWorkHour) {
    return [now, endDate];
  } else if (nowWithMinDuration > endDate) {
    const nextDay = addDays(now, 1);
    return [setHours(nextDay, startWorkHour), setHours(nextDay, endWorkHour)];
  }
};
export const setHours = (date: Date, hours: number): Date => {
  const newDate = new Date(date);
  newDate.setHours(hours, 0, 0, 0);
  return newDate;
};

export const disableWorkplaceFromNeighborsIds = (
  workplace: IWorkplace,
  neighborsIds: number[]
): IWorkplace => {
  workplace.disabled = neighborsIds.includes(workplace.id);
  return workplace;
};
