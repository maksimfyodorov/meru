import { ChangeDetectorRef, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { ConfigService } from '@src/app/core/services/config.service';
import { UserService } from '@src/app/core/services/user.service';
import { IAppointment, IWorkplace, IWorkplaceReservation } from '@src/app/shared/http/models/database.model';
import { ReservationsApiService } from '@src/app/shared/http/services/reservations-api.service';
import { CALENDAR_ICON } from '@src/app/shared/http/utils/images.const';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { IAdvCard } from './workplace-card-advanced.model';
import { WorkplaceCardAdvancedService } from './workplace-card-advanced.service';
const HEIGHT_EXCEPT_CARD: number = 195;
@Component({
  selector: 'app-workplace-card-advanced',
  templateUrl: './workplace-card-advanced.component.html',
  styleUrls: ['./workplace-card-advanced.component.less'],
  providers: [WorkplaceCardAdvancedService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkplaceCardAdvancedComponent {
  CALENDAR_ICON = CALENDAR_ICON;

  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _workplaceId$: BehaviorSubject<number> = new BehaviorSubject(null);
  private _placeReservation$: BehaviorSubject<IAppointment | IWorkplaceReservation> = new BehaviorSubject(null);

  card$: Observable<IAdvCard>;
  aplanaUrl: string; // Ссылка на внешнюю систему бронирования (аплана)
  nornikAplana = false; // Использовать аплана (из конфига)
  adminCancelReservation = false; // Использовать аплана (из конфига)

  @Output() readonly close = new EventEmitter<null>(); // закрываем карточку
  @Output() readonly reservation = new EventEmitter<number>();
  @Output() readonly updateMap = new EventEmitter<null>();

  @Input() type: 'workplace' | 'appointment' | 'parking' = 'workplace';
  @Input() calendarLink: string; // Ссылка на компонент календаря бронирования
  @Input() showPermanentAssignment: boolean = false; // Показывать закрепленного за местом пользователя
  @Input() hideQuickActionsBtns: boolean = false; // Прятать кнопки для быстрых действий
  @Input() readOnly: boolean = false;
  @Input() disabled: boolean = false;
  @Input()
  set isLoading(value: boolean) {
    this._isLoading$.next(value);
  }
  get isLoading() {
    return this._isLoading$.getValue();
  }
  @Input()
  set workplaceId(value: number) {
    this._workplaceId$.next(value);
  }
  get workplaceId(): number {
    return this._workplaceId$.getValue();
  }
  @Input('reservation')
  set placeReservation(value: IAppointment | IWorkplaceReservation) {
    this._placeReservation$.next(value);
  }
  get placeReservation(): IAppointment | IWorkplaceReservation {
    return this._placeReservation$.getValue();
  }

  @ViewChild('header') header: ElementRef;
  @ViewChild('image') image: ElementRef;
  @ViewChild('footer') footer: ElementRef;

  @Subscriptions() subs: Subscription;
  constructor(
    private workplaceCardAdvancedService: WorkplaceCardAdvancedService,
    private configService: ConfigService,
    private reservationsApiService: ReservationsApiService,
    private modal: NzModalService,
    private translate: TranslatePipe,
    private userService: UserService,
    private route: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.nornikAplana = this.configService.get<boolean>('nornikAplana') === true;
    this.adminCancelReservation = this.configService.get<boolean>('adminCancelReservation') === true;
    this.aplanaUrl = this.configService.get<string>('aplanaUrl');
    this.card$ = workplaceCardAdvancedService.default;
    this._watchPlaceId();
  }

  private _watchPlaceId() {
    this.subs = combineLatest([this._workplaceId$, this._placeReservation$])
      .pipe(filter((res) => Boolean(res[0])))
      .subscribe((res) => {
        switch (this.type) {
          case 'appointment':
            this.card$ = this.workplaceCardAdvancedService.getRoomCard$(res[0]);
            break;
          case 'parking':
            this.card$ = this.workplaceCardAdvancedService.getParkingLotCard$(res[0], this.showPermanentAssignment);
            break;
          case 'workplace':
            this.card$ = this.workplaceCardAdvancedService.getWorkplaceCard$(
              res[0],
              this.showPermanentAssignment,
              <IWorkplaceReservation>res[1],
            );
          default:
        }
      });
  }

  reservationPlace() {
    this.reservation.emit(this.workplaceId);
  }

  onClose() {
    this.close.emit(null);
  }

  onLinkReservation() {
    const routes: string[] = [];
    switch (this.type) {
      case 'appointment':
        routes.push('reservations', 'appointment', 'view', decodeURIComponent((<IAppointment>this.placeReservation).appointmentId));
        break;
      case 'parking':
        routes.push('reservations', 'parking', 'view', String((<IWorkplaceReservation>this.placeReservation).id));
        break;

      default:
        routes.push('reservations', 'workplace', 'view', String((<IWorkplaceReservation>this.placeReservation).id));
        break;
    }

    this.route.navigate(routes);
  }

  onLink(link: string, id: number) {
    const routes = [link];
    if (id) {
      routes.push(String(id));
    }
    this.route.navigate(routes);
  }

  get isConfirmed() {
    return (<IWorkplaceReservation>this.placeReservation).status === 'CONFIRMED';
  }

  get isOrganizer() {
    switch (this.type) {
      case 'appointment':
        return this.userService.isAppointmentOrganizer(<IAppointment>this.placeReservation);
      default:
        return this.userService.isReservationOrganizer(<IWorkplaceReservation>this.placeReservation);
    }
  }

  approveReservation() {
    this.isLoading = true;
    this.clickAction('Do you want to approve reservation?', () => {
      this.reservationsApiService
        .confirmReservation(this.type, String((<IWorkplaceReservation>this.placeReservation).id))
        .pipe(first())
        .subscribe(() => {
          this.isLoading = false;
          this.onClose();
          this.updateMap.emit();
        });
    });
  }
  deleteReservation() {
    this.isLoading = true;
    this.clickAction('Do you want to close reservation?', () => {
      this.reservationsApiService
        .cancelReservation(this.type, String((<IWorkplaceReservation>this.placeReservation).id))
        .pipe(first())
        .subscribe(() => {
          this.isLoading = false;
          this.onClose();
          this.updateMap.emit();
        });
    });
  }

  deleteAppointment() {
    this.isLoading = true;
    this.clickAction('Do you want to delete reservation?', () => {
      this.reservationsApiService
        .deleteAppointment((<IAppointment>this.placeReservation).appointmentId)
        .pipe(first())
        .subscribe(() => {
          this.isLoading = false;
          this.onClose();
          this.updateMap.emit();
        });
    });
  }

  clickAction(question: string, action: () => void): void {
    this.modal.confirm({
      nzTitle: this.translate.transform(question),
      nzZIndex: 9999,
      nzOnOk: () => {
        action();
      },
      nzOnCancel: () => {
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      nzMaskClosable: true,
    });
  }

  get descriptionHeight() {
    let body = document.querySelector('body').offsetHeight;
    body -= HEIGHT_EXCEPT_CARD;
    if (this.footer) {
      body -= this.footer.nativeElement.offsetHeight;
    }
    if (this.header) {
      body -= this.header.nativeElement.offsetHeight;
    }
    if (this.image) {
      body -= this.image.nativeElement.offsetHeight;
    }
    return `${body}px`;
  }
}
