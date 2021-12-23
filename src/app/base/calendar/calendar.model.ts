import { CalendarEvent } from 'angular-calendar';
import { MonthViewDay } from 'calendar-utils';

export interface ICalendarEvent extends CalendarEvent {
  [key: string]: any;
}

export interface ICalendarEvents extends Array<ICalendarEvent> {}

export interface ICalendarMonthViewDayClickEvent {
  day: MonthViewDay;
  sourceEvent: Event;
}

export interface ICalendarMonthViewEventClickEvent {
  event: CalendarEvent;
  sourceEvent: Event;
}

export interface ICalendarMonth {
  value: number;
  caption: string;
}
