import { DatePipe } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { IListRows } from '@src/app/base/list/models/list.model';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';
import { IAppointment, IRoom, IWorkplace, IWorkplaceReservation } from '@src/app/shared/http/models/database.model';
import { SettingsService } from '@src/app/shared/settings/settings.service';
import { Subscription } from 'rxjs';
import { CalendarnewService } from './calendarnew.service';

@Component({
  selector: 'app-widget-calendarnew',
  templateUrl: './calendarnew.component.html',
  styleUrls: ['./calendarnew.component.less'],
  providers: [CalendarnewService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarnewComponent implements OnInit {
  data: IListRows = [];
  minDate = new Date();
  isLoading = false;
  @Subscriptions() sub: Subscription;

  constructor(
    private _calendarService: CalendarnewService,
    private _innerWidthService: InnerWidthService,
    private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _datePipe: DatePipe,
    private _translatePipe: TranslatePipe,
    private _settingsService: SettingsService,
  ) {}

  ngOnInit(): void {
    this.minDate.setDate(this.minDate.getDate() - 1);
    let dateFrom = new Date();
    dateFrom.setDate(0);
    dateFrom.setHours(0);
    dateFrom.setMinutes(0);
    let dateTo = new Date(dateFrom);
    dateTo.setMonth(dateTo.getMonth() + 1);
    dateTo.setHours(59);
    dateTo.setMinutes(59);
    this.updateDate(dateFrom, dateTo);
  }

  updateDate(dateFrom: Date, dateTo: Date) {
    this.isLoading = true;
    dateFrom.setMonth(dateFrom.getMonth() - 1);
    this.sub = this._calendarService.getReservations$(dateFrom, dateTo).subscribe((result) => {
      this.data = [];
      const now = new Date();

      if (Array.isArray(result.roomAppointments)) {
        this.data.push(
          ...result.roomAppointments.map((roomAppointment) => {
            return {
              title: `${this._translatePipe.transform(`Meeting room reservation`)}: ${
                roomAppointment.appointment.appointmentLocationString
              }`,
              start: new Date(roomAppointment.appointment.appointmentDateFrom),
              end: new Date(roomAppointment.appointment.appointmentDateTo),
              cssClass: 'calendar-busy-area-room',
              meta: {
                incrementsBadgeTotal: true,
              },
              allDay: this._isAllDayAppointment(roomAppointment),
              link: roomAppointment.appointment.appointmentId
                ? '/reservations/appointment/view/' + encodeURIComponent(roomAppointment.appointment.appointmentId)
                : null,
            };
          }),
        );
      }
      if (Array.isArray(result.parkinglots)) {
        this.data.push(
          ...result.parkinglots
            .filter(
              (parkinglot) =>
                new Date(parkinglot.parkinglotsReservation.dateTimeTo) > now || parkinglot.parkinglotsReservation.status === 'CLOSED',
            )
            .map((parkinglot) => {
              return {
                title: `${this._translatePipe.transform(`Parking space reservation`)}: ${parkinglot.parkingLot.name}`,
                start: new Date(parkinglot.parkinglotsReservation.dateTimeFrom),
                end: new Date(parkinglot.parkinglotsReservation.dateTimeTo),
                cssClass: 'calendar-busy-area-parking',
                meta: {
                  incrementsBadgeTotal: true,
                },
                allDay: this._isAllDayParkinglot(parkinglot.parkinglotsReservation),
                link: '/reservations/parking/view/' + encodeURIComponent(parkinglot.parkinglotsReservation.id),
              };
            }),
        );
      }
      if (Array.isArray(result.workplacereservetions)) {
        this.data.push(
          ...result.workplacereservetions
            .filter(
              (workplacereservetion) =>
                new Date(workplacereservetion.reservation.dateTimeTo) > now || workplacereservetion.reservation.status === 'CLOSED',
            )
            .map((workplacereservetion) => {
              return {
                title: `${this._translatePipe.transform(`Work space reservation`)}: ${
                  workplacereservetion.workplace ? workplacereservetion.workplace.name : ''
                }`,
                start: new Date(workplacereservetion.reservation.dateTimeFrom),
                end: new Date(workplacereservetion.reservation.dateTimeTo),
                cssClass: 'calendar-busy-area-workplace',
                meta: {
                  incrementsBadgeTotal: true,
                },
                allDay: this._isAllDayWorkplace(workplacereservetion.reservation),
                link: '/reservations/workplace/view/' + encodeURIComponent(workplacereservetion.reservation.id),
              };
            }),
        );
      }
      this.isLoading = false;
      this._cdr.detectChanges();
    });
  }

  eventHandler(ev) {
    if (ev.link) {
      this._router.navigate([ev.link]);
    }
  }
  monthSelectHandler(ev) {
    this.updateDate(new Date(ev[0]), new Date(ev[1]));
  }

  private _isAllDayAppointment(roomAppointment: { appointment: IAppointment; room: IRoom }) {
    const appointmentDateFrom = new Date(roomAppointment.appointment.appointmentDateFrom);
    const appointmentDateTo = new Date(roomAppointment.appointment.appointmentDateTo);
    const appointmentAllowedFrom = new Date(roomAppointment.appointment.appointmentDateFrom);
    const appointmentAllowedTo = new Date(roomAppointment.appointment.appointmentDateTo);
    const reservationAllowedFrom = roomAppointment.room?.reservationAllowedFrom || '06:00';
    const reservationAllowedTo = roomAppointment.room?.reservationAllowedTo || '23:00';
    appointmentAllowedFrom.setHours(+reservationAllowedFrom.split(':')[0], +reservationAllowedFrom.split(':')[1]);
    appointmentAllowedTo.setHours(+reservationAllowedTo.split(':')[0], +reservationAllowedTo.split(':')[1]);
    return (
      appointmentDateFrom.getTime() <= appointmentAllowedFrom.getTime() && appointmentDateTo.getTime() >= appointmentAllowedTo.getTime()
    );
  }
  private _isAllDayWorkplace(reservation: IWorkplaceReservation) {
    const dateFrom = new Date(reservation.dateTimeFrom);
    const dateTo = new Date(reservation.dateTimeTo);
    const allowedFrom = new Date(reservation.dateTimeFrom);
    const allowedTo = new Date(reservation.dateTimeTo);
    const startHour = this._settingsService.getSettingByName('workplaceReservationBeginHourDefault');
    const endHour = this._settingsService.getSettingByName('workplaceReservationEndHourDefault');
    const reservationAllowedFrom = `${startHour}:00`;
    const reservationAllowedTo = `${endHour}:00`;
    allowedFrom.setHours(+reservationAllowedFrom.split(':')[0], +reservationAllowedFrom.split(':')[1]);
    allowedTo.setHours(+reservationAllowedTo.split(':')[0], +reservationAllowedTo.split(':')[1]);
    return dateFrom.getTime() <= allowedFrom.getTime() && dateTo.getTime() >= allowedTo.getTime();
  }
  private _isAllDayParkinglot(reservation: IWorkplaceReservation) {
    const dateFrom = new Date(reservation.dateTimeFrom);
    const dateTo = new Date(reservation.dateTimeTo);
    const allowedFrom = new Date(reservation.dateTimeFrom);
    const allowedTo = new Date(reservation.dateTimeTo);
    const startHour = this._settingsService.getSettingByName('parkingLotReservationBeginHourDefault');
    const endHour = this._settingsService.getSettingByName('parkingLotReservationEndHourDefault');
    const reservationAllowedFrom = `${startHour}:00`;
    const reservationAllowedTo = `${endHour}:00`;
    allowedFrom.setHours(+reservationAllowedFrom.split(':')[0], +reservationAllowedFrom.split(':')[1]);
    allowedTo.setHours(+reservationAllowedTo.split(':')[0], +reservationAllowedTo.split(':')[1]);
    return dateFrom.getTime() <= allowedFrom.getTime() && dateTo.getTime() >= allowedTo.getTime();
  }

  get isSmallScreen() {
    return this._innerWidthService.isSmallScreen;
  }
}
