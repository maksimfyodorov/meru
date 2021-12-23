import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TeamProfileService } from '@presentation/team/team-profile/team-profile.service';
import { Observable, Subscription } from 'rxjs';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { TeamProfileWorkplaceTableMeta } from '@presentation/team/team-profile/team-profile.model';
import { Router } from '@angular/router';
import { MetaApiService } from '@shared/http/services/meta-api.service';
import { filter } from 'rxjs/operators';
import { AppError } from '@core/models/app-errorl.model';
import { IListRows } from '@src/app/base/list/models/list.model';
import { SettingsService } from '@src/app/shared/settings/settings.service';
import { IAppointment, IRoom, IWorkplaceReservation } from '@src/app/shared/http/models/database.model';
import { TranslatePipe } from '@ngx-translate/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.less'],
  providers: [TeamProfileService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamProfileComponent implements OnDestroy, OnInit {
  id$: Observable<number>;
  data: IListRows = [];
  minDate = new Date();
  isLoading = false;
  @Subscriptions() sub: Subscription;

  tabs: Record<string, any> = [
    {
      title: 'Workplaces',
      events: [],
    },
    {
      title: 'Meeting rooms',
      events: [],
    },
    {
      title: 'ParkingLots',
      events: [],
    },
    {
      title: 'Lockers',
      events: [],
    },
  ];

  currentReservation: any;

  @ViewChild('modalTitleTpl') modalTitleTpl: TemplateRef<any>;
  @ViewChild('modalContentTpl') modalContentTpl: TemplateRef<any>;
  @ViewChild('modalFooterTpl') modalFooterTpl: TemplateRef<any>;

  constructor(
    private _service: TeamProfileService,
    private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _meta: MetaApiService,
    private _settingsService: SettingsService,
    private _translatePipe: TranslatePipe,
    private _modal: NzModalService,
  ) {
    this.id$ = _service.userId$;
  }
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
    this.sub = this._service.getReservations$(dateFrom, dateTo).subscribe((result) => {
      this.data = [];
      const now = new Date();
      if (Array.isArray(result.roomAppointments)) {
        this.tabs[1].events.push(
          ...result.roomAppointments
            .filter((a) => a.room)
            .map((roomAppointment) => {
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
                linkFloor: `/office/${roomAppointment.room.floor.id}/room/${roomAppointment.room.id}`,
                floor: roomAppointment.room.floor,
              };
            }),
        );
      }
      if (Array.isArray(result.parkinglots)) {
        this.tabs[2].events.push(
          ...result.parkinglots
            // .filter((a) => a.parkinglot)
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
                linkFloor: `/office/${parkinglot.parkingLot.floor.id}/parkinglot/${parkinglot.parkingLot.id}`,
                floor: parkinglot.parkingLot.floor,
              };
            }),
        );
      }
      if (Array.isArray(result.workplacereservetions)) {
        this.tabs[0].events.push(
          ...result.workplacereservetions
            .filter((a) => a.workplace)
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
                linkFloor: `/office/${workplacereservetion.workplace.floor.id}/workplace/${workplacereservetion.workplace.id}`,
                floor: workplacereservetion.workplace.floor,
              };
            }),
        );
      }
      this.isLoading = false;
      this._cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {}

  eventHandler(ev) {
    this.currentReservation = ev;
    this._modal.create({
      nzTitle: this.modalTitleTpl,
      nzContent: this.modalContentTpl,
      nzFooter: this.modalFooterTpl,
    });
  }
  monthSelectHandler(ev) {}

  onClose() {
    this._modal.closeAll();
  }

  onLinkMap() {
    this._router.navigate([this.currentReservation.linkFloor]);
    this._modal.closeAll();
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

  get shortDateTimeFormat() {
    return this._service.shortDateTimeFormat;
  }
}
