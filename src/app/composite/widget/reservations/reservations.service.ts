import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { IBuilding, IFloor, IRoom, IWorkplace, WorkplaceReservationStatus } from '@shared/http/models/database.model';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { IDescription } from '@src/app/base/card/card.model';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import {map, shareReplay, switchMap, tap} from 'rxjs/operators';
import { IReservationAmount } from './reservations-amount.model';

@Injectable()
export class ReservationsService {
  constructor(
    private $reservationsApi: ReservationsApiService,
    private $user: UserService,
    private $dictionaries: DictionariesService,
    private $measurements: MeasurementsService,
    private datePipe: DatePipe,
  ) {}
  getReservationAmount(isManager: boolean): Observable<IReservationAmount> {
    return combineLatest([
      this.$reservationsApi.getWorkplaceReservations({
        labelId: this.$user.info.id,
      }),
      this.$reservationsApi.getParkingLotsReservations({
        labelId: this.$user.info.id,
      }),
    ]).pipe(
      map(([workplaceReservations, parkingLotReservations]) => {
        const amount: IReservationAmount = {};
        amount.forApprove =
          workplaceReservations.filter((item) => item.status === 'NEW').length +
          parkingLotReservations.filter((item) => item.status === 'NEW').length;
        amount.forConfirm =
          workplaceReservations.filter((item) => item.status === 'APPROVED').length +
          parkingLotReservations.filter((item) => item.status === 'APPROVED').length;
        return amount;
      }),
    );
  }

  private _getDictionariesData$() {
    return combineLatest([
      this.$dictionaries.getDictionary<IWorkplace[]>('workplaces'),
      this.$dictionaries.getDictionary<IRoom[]>('rooms'),
      this.$dictionaries.getDictionary<IWorkplace[]>('parkingLots'),
      this.$dictionaries.getDictionary('statuses'),
      this.$dictionaries.getDictionary<IBuilding[]>('buildings'),
      this.$dictionaries.getDictionary<IFloor[]>('floorMaps'),
    ]).pipe(
      map(([workplaces, rooms, parkingLots, statuses, buildings, floors]) => ({
        workplaces,
        rooms,
        parkingLots,
        statuses,
        buildings,
        floors,
      })),
    );
  }

  getReservations$() {
    const dateFrom = new Date();
    const dateTo = new Date();
    dateTo.setMonth(dateFrom.getMonth() + 1);
    return combineLatest([
      this._getDictionariesData$(),
      this.$reservationsApi.getWorkplaceReservations({
        labelId: this.$user.info.id,
        statuses: ['NEW', 'CONFIRMED', 'APPROVED'],
        dateTimeFrom: this._getApiDate(dateFrom),
        dateTimeTo: this._getApiDate(dateTo),
      }),
      this.$reservationsApi.getUserAppointments({
        requestAppointmentUserId: this.$user.info.id,
        requestAppointmentDateFrom: this._getApiDate(dateFrom),
        requestAppointmentDateTo: this._getApiDate(dateTo),
      }),
      this.$reservationsApi.getParkingLotsReservations({
        labelIds: [this.$user.info.id],
        dateTimeFrom: this._getApiDate(dateFrom),
        dateTimeTo: this._getApiDate(dateTo),
      }),
    ]).pipe(
      map(([{ workplaces, rooms, parkingLots, statuses, buildings, floors }, reservations, appointments, parkinglotsReservations]) => {
        return {
          workplacereservetions: reservations.map((_r) => {
            const workplace = workplaces.find((_w) => _w.id === _r.workplaceId);
            const floor = floors.find((f) => f.id === workplace.floorMapId);
            const building = buildings.find((b) => b.id === floor.buildingId);
            const descriptionList: IDescription[] = [
              {
                name: 'Place',
                value: workplace.name,
              },
              {
                name: 'Offices.Floor',
                value: floor.name,
              },
              {
                name: 'Office',
                value: building.name,
              },
            ];
            return {
              reservation: _r,
              workplace,
              floor,
              building,
              descriptionList,
            };
          }),
          roomAppointments: appointments.map((_a) => {
            // console.log(_r);
            const room = rooms.find((_r) => _r.id === _a.appointmentLocationIds[0]);
            const floor = floors.find((f) => f.id === room?.floorMapId);
            const building = buildings.find((b) => b.id === floor?.buildingId);
            const descriptionList: IDescription[] = [
              {
                name: 'Place',
                value: room?.name,
              },
              {
                name: 'Offices.Floor',
                value: floor?.name,
              },
              {
                name: 'Office',
                value: building?.name,
              },
            ];
            return {
              reservation: _a,
              room,
              floor,
              building,
              descriptionList,
            };
          }),
          parkinglots: parkinglotsReservations
            .filter(
              (parkinglotsReservation) =>
                parkinglotsReservation.status === 'NEW' ||
                parkinglotsReservation.status === 'CONFIRMED' ||
                parkinglotsReservation.status === 'APPROVED',
            )
            .map((parkinglotsReservation) => {
              const parkingLot = parkingLots.find((_w) => _w.id === parkinglotsReservation.parkingLotId);
              const floor = floors.find((f) => f.id === parkingLot.floorMapId);
              const building = buildings.find((b) => b.id === floor.buildingId);
              const descriptionList: IDescription[] = [
                {
                  name: 'Place',
                  value: parkingLot.name,
                },
                {
                  name: 'Offices.Floor',
                  value: floor.name,
                },
                {
                  name: 'Office',
                  value: building.name,
                },
              ];
              return {
                reservation: parkinglotsReservation,
                parkingLot,
                floor,
                building,
                descriptionList,
              };
            }),
          statuses: statuses[0].statuses.reduce((acc, status) => {
            acc[status.code] = {
              value: status.name,
              color: status.color,
            };
            return acc;
          }, {}),
        };
      }),
    );
  }

  private _getApiDate(date: Date): string {
    return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
  }
}
