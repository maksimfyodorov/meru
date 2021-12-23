import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationsService } from '@composite/widget/reservations/reservations.service';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { combineLatest, forkJoin, Observable, of, Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { IUser } from '@core/models/user.model';
import { UserService } from '@core/services/user.service';
import { IAppointment, IBuilding, IFloor, IRoom, IWorkplace, IWorkplaceReservation } from '@shared/http/models/database.model';

import { shareReplay, switchMap } from 'rxjs/internal/operators';
import { IReservationAmount } from './reservations-amount.model';
import { IDescription } from '@src/app/base/card/card.model';

@Component({
  selector: 'app-widget-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ReservationsService],
})
export class ReservationsComponent {
  currentUser$: Observable<IUser>;
  workplacereservetion: {
    workplace: IWorkplace;
    reservation: IWorkplaceReservation;
    floor: IFloor;
    building: IBuilding;
    descriptionList: IDescription[];
  };
  roomAppointment: { reservation: IAppointment; room: IRoom; floor: IFloor; building: IBuilding; descriptionList: IDescription[] };
  parkinglot: {
    parkingLot: IWorkplace;
    reservation: IWorkplaceReservation;
    floor: IFloor;
    building: IBuilding;
    descriptionList: IDescription[];
  };
  current: any;
  dateFormat: string;
  timeFormat: string;
  dateTimeFormat: string;
  descriptionList: any;
  tags: Observable<string[]>;
  statuses: any;
  isManager: boolean;
  reservationAmount$: Observable<IReservationAmount>;
  @Subscriptions() sub: Subscription;
  selectedType: 'workplace' | 'appointment' | 'parking' = 'workplace';

  constructor(
    private _service: ReservationsService,
    private _cdr: ChangeDetectorRef,
    private _measurementsService: MeasurementsService,
    private _dictService: DictionariesService,
    private _router: Router,
    private $user: UserService,
  ) {
    this.isManager = this.$user.isManager;
    this.sub = _service.getReservations$().subscribe(({ parkinglots, roomAppointments, workplacereservetions, statuses }) => {
      this.parkinglot = parkinglots.filter((w) => w.parkingLot)[0];
      this.roomAppointment = roomAppointments.filter((w) => w.room)[0];
      this.workplacereservetion = workplacereservetions.filter((w) => w.workplace)[0];
      this.statuses = { map: statuses };
      if (this.workplacereservetion) {
        this.chooseActive(this.workplacereservetion, 'workplace');
      } else if (this.roomAppointment) {
        this.chooseActive(this.roomAppointment, 'appointment');
      } else if (this.parkinglot) {
        this.chooseActive(this.parkinglot, 'parking');
      }
      setTimeout(() => {
        this._cdr.markForCheck();
      }, 100);
    });

    this.dateFormat = this._measurementsService.getMeasurementByName('date');
    this.timeFormat = this._measurementsService.getMeasurementByName('shortTime');
    this.dateTimeFormat = this._measurementsService.getMeasurementByName('dateTime');
    this.currentUser$ = this.$user.info$;
    this.reservationAmount$ = _service.getReservationAmount(this.isManager);
  }

  chooseActive(reservstion, type: 'workplace' | 'appointment' | 'parking'): void {
    this.selectedType = type;
    this.current = reservstion;
    switch (type) {
      case 'workplace':
        this.setTags(this.current?.workplace?.tags || []);
        break;
      case 'parking':
        this.setTags(this.current?.parkingLot?.tags || []);
        break;
      case 'appointment':
        this.setTags(this.current?.room?.tags || []);
        break;

      default:
        break;
    }
  }

  setTags(tags: number[]): void {
    if (tags?.length) {
      this.tags = forkJoin([...tags.map((tagId) => this._dictService.getDictionaryItemByKey<{ name: string }>('tags', tagId, ''))]).pipe(
        map((_tags: { name: string }[]) => _tags.map((tag) => tag.name)),
      );
    } else {
      this.tags = of([]);
    }
  }

  openReservation(id: number, type: 'workplace' | 'appointment' | 'parking'): void {
    const routes = [];
    switch (type) {
      case 'workplace':
        routes.push('reservations', 'workplace', 'view', id);
        break;
      case 'parking':
        routes.push('reservations', 'parking', 'view', id);
        break;

      default:
        routes.push('reservations', 'appointment', 'view', encodeURIComponent(id));
        break;
    }
    this._router.navigate(routes);
  }
}
