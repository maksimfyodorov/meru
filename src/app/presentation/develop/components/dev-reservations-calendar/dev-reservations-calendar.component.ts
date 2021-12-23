import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { addHours, subHours } from 'date-fns';
import { CalendarView } from 'angular-calendar';
import { ICalendarEvents } from '@base/calendar/calendar.model';

@Component({
  selector: 'app-dev-reservations-calendar',
  templateUrl: './dev-reservations-calendar.component.html',
  styleUrls: [ './dev-reservations-calendar.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevReservationsCalendarComponent implements OnInit {
  public mode: CalendarView = CalendarView.Month;
  public modes: CalendarView[] = [ CalendarView.Month, CalendarView.Day, CalendarView.Week ];
  public events: ICalendarEvents = [ {
    start: subHours(new Date(), 1),
    end: new Date(),
    title: 'Бронь красивая переговорная',
    meta: {
      name: 'Name 2',
    }
  }, {
    start: new Date(),
    end: addHours(new Date(), 1),
    title: 'Бронь красивая переговорная',

    data: {
      anydata: 1
    },
    meta: {
      name: 'Name 1',
    }
  } ];

  eventHandler(ev): void {
    console.log(ev);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
