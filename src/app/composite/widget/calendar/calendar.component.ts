import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IWorkplace, IWorkplaceReservation } from '@shared/http/models/database.model';
import { CalendarService } from '@composite/widget/calendar/calendar.service';
import { isReservationsInDate, reservationsInDate } from '@composite/widget/calendar/calendar.utils';
import { ICalendarItem } from '@composite/widget/calendar/calendar.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-widget-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  providers: [CalendarService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {
  date: Date = new Date();
  complexData: { reservation: IWorkplaceReservation, workplace: IWorkplace}[] = [];
  reservations: IWorkplaceReservation[] = [];
  constructor(private $service: CalendarService, private cdr: ChangeDetectorRef, private _datePipe: DatePipe) {
    this.$service.workplaceReservations$.subscribe((res) => {
      this.complexData = res;
      this.reservations = res.map(({ reservation }) => reservation);
      this.cdr.markForCheck();
    });
  }
  isCell(date: Date): boolean {
    return isReservationsInDate(date, this.reservations);
  }
  cellItems(date: Date): ICalendarItem[] {
    return reservationsInDate(date, this.complexData, 'reservation').map(({ reservation, workplace }) => {
      return {
        time: `${this._datePipe.transform(reservation.dateTimeFrom, 'HH:mm')} - ${this._datePipe.transform(reservation.dateTimeTo, 'HH:mm')}`,
        text: workplace.name,
        workplaceId: workplace.id,
        floorId: workplace.floorMapId,
        reservationId: reservation.id
      };
    });
  }
}
