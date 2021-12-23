import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrls: ['./reservation-calendar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
