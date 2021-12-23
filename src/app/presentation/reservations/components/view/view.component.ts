import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalLoaderService } from '@core/services/global-loader.service';
import { TranslatePipe } from '@ngx-translate/core';
import { ViewService } from '@presentation/reservations/components/view/view.service';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ReservationType } from '@shared/http/models/meta.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { IAppointment, IRoom } from '@shared/http/models/database.model';
import { AddMembersService } from '@base/add-members/add-members.service';
import { Location } from '@angular/common';
import { ConfigService } from '@src/app/core/services/config.service';

@Component({
  selector: 'app-reservations-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less'],
  providers: [ViewService],
})
export class ViewComponent implements OnInit {
  adminCancelReservation = false;
  reservation: any;
  workplace: any;
  appointment: IAppointment;
  rooms: IRoom[];
  placeType: ReservationType;

  @Subscriptions()
  sub: Subscription;
  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  set isLoading(value: boolean) {
    this._isLoading$.next(value);
  }
  get isLoading() {
    return this._isLoading$.getValue();
  }
  constructor(
    private _service: ViewService,
    private _router: Router,
    private cdr: ChangeDetectorRef,
    private _api: ReservationsApiService,
    private _modal: NzModalService,
    private _translate: TranslatePipe,
    private _loader: GlobalLoaderService,
    private _addMembers: AddMembersService,
    private _location: Location,
    private _configService: ConfigService,
  ) {
    this.adminCancelReservation = this._configService.get<boolean>('adminCancelReservation') === true;
    this.sub = this._service.placeType$.subscribe((type) => (this.placeType = type));
    this.sub = this._service.fetchingData$.subscribe((data) => {
      if (this.placeType === 'appointment') {
        this.appointment = data[0];
        this.rooms = data[1];
        this.cdr.markForCheck();
      }
      if (this.placeType === 'workplace') {

        console.log(data)

        this.reservation = data[0];
        this.workplace = data[1];
        this.cdr.markForCheck();
      }
      if (this.placeType === 'parking') {
        this.reservation = data[0];
        this.workplace = data[1];
        this.workplace.type = 'PARKING_LOT';
        this.cdr.markForCheck();
      }
      if (data[0] && data[1]) {
        this._loader.contentLoading$.next(false);
      }
    });
  }

  ngOnInit(): void {}

  checkReservationStatus(statuses: string[]): boolean {
    return this.reservation && statuses.includes(this.reservation.status);
  }

  clickAction(question: string, action: () => void): void {
    this._modal.confirm({
      nzTitle: this._translate.transform(question),
      nzOnOk: () => {
        action();
      },
      nzOnCancel: () => {
        this.isLoading = false;
        this._loader.contentLoading$.next(false);
      },
      nzMaskClosable: true,
    });
  }

  approve(): void {
    this.isLoading = true;
    this.clickAction('Do you want to approve reservation?', () => {
      this._loader.contentLoading$.next(true);
      this._api.confirmReservation(this.placeType, this.reservation.id).subscribe(() => {
        this._service.reload();
        this._loader.contentLoading$.next(false);
        this.isLoading = false;
      });
    });
  }

  complete(): void {
    this.isLoading = true;
    this.clickAction('Do you want to close reservation?', () => {
      this._loader.contentLoading$.next(true);
      this._api.cancelReservation(this.placeType, this.reservation.id).subscribe(() => {
        this._service.reload();
        this._loader.contentLoading$.next(false);
        this.isLoading = false;
      });
    });
  }

  get isAppointmentOrganizer(): boolean {
    return this.appointment?.isAppointmentOrganizer;
  }

  get appointmentAttendeeStatus(): string {
    return this.appointment?.appointmentAttendeeStatus;
  }

  get appointmentStatus(): string {
    return this.appointment?.appointmentStatus;
  }

  saveEmailsAppointment(): void {
    this.isLoading = true;
  }

  closeAppointment(): void {
    this.isLoading = true;
    this.sub = this._api.closeAppointment(this.appointment.appointmentId).subscribe(() => this._location.back());
  }

  deleteAppointment(): void {
    this.isLoading = true;
    this.clickAction('Do you want to delete reservation?', () => {
      this.sub = this._api.deleteAppointment(this.appointment.appointmentId).subscribe(() => this._location.back());
    });
  }

  confirmAppointment(): void {
    this.isLoading = true;
    this.sub = this._api.confirmAppointment(this.appointment.appointmentId).subscribe(() => {
      this._service.reload();
      this._loader.contentLoading$.next(false);
      this.isLoading = false;
    });
  }
}
