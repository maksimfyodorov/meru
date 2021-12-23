import { SupportTimeOptions } from 'ng-zorro-antd/date-picker';

export const HOURS: number[] = Array.from(Array(24)).map((_,index) => index);
export const MINUTES: number[] = Array.from(Array(60)).map((_,index) => index);
export const WORK_HOURS: number[] = [ 7, 19 ];
export const DEFAULT_TIME_PICKER_OPTIONS: SupportTimeOptions = {
  nzDefaultOpenValue: new Date(),
  nzFormat: 'HH:mm',
  nzMinuteStep: 5,
  nzHideDisabledOptions: false,
}
