import { Injectable } from '@angular/core';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import {  IRoom, IWorkplace } from '@shared/http/models/database.model';
import { UserService } from '@core/services/user.service';
import { map } from 'rxjs/operators';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { DatePipe } from '@angular/common';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';

@Injectable()
export class CalendarnewService {
  constructor(
    private $reservationsApi: ReservationsApiService,
    private $user: UserService,
    private $dictionaries: DictionariesService,
    private datePipe: DatePipe,
    private $measurements: MeasurementsService,
  ) {}

  getReservations$(dateFrom: Date, dateTo: Date) {
    return combineLatest([
      this.$reservationsApi.getWorkplaceReservations({
        labelId: this.$user.info.id,
        statuses: ['CLOSED', 'NEW', 'CONFIRMED', 'CLOSED', 'APPROVED'],
        dateTimeFrom: this._getApiDate(dateFrom),
        dateTimeTo: this._getApiDate(dateTo),
      }),
      this.$dictionaries.getDictionary<IWorkplace[]>('workplaces'),
      this.$reservationsApi.getUserAppointments({
        requestAppointmentUserId: this.$user.info.id,
        requestAppointmentDateFrom: this._getApiDate(dateFrom),
        requestAppointmentDateTo: this._getApiDate(dateTo),
      }),
      this.$dictionaries.getDictionary<IRoom[]>('rooms'),
      this.$reservationsApi.getParkingLotsReservations({
        labelIds: [this.$user.info.id],
        dateTimeFrom: this._getApiDate(dateFrom),
        dateTimeTo: this._getApiDate(dateTo),
      }),
      this.$dictionaries.getDictionary<any[]>('parkingLots'),
    ]).pipe(
      map(([reservations, workplaces, appointments, rooms, parkinglotsReservations, parkingLots]) => {
        return {
          workplacereservetions: reservations.map((_r) => ({
            reservation: _r,
            workplace: workplaces.find((_w) => _w.id === _r.workplaceId),
          })),
          roomAppointments: appointments.map((_a) => ({
            appointment: _a,
            room: rooms.find((_r) => _r.id === _a.appointmentLocationIds[0]),
          })),
          parkinglots: parkinglotsReservations
            .filter(
              (parkinglotsReservation) =>
                parkinglotsReservation.status === 'NEW' ||
                parkinglotsReservation.status === 'CONFIRMED' ||
                parkinglotsReservation.status === 'CLOSED' ||
                parkinglotsReservation.status === 'APPROVED',
            )
            .map((parkinglotsReservation) => ({
              parkinglotsReservation,
              parkingLot: parkingLots.find((_w) => _w.id === parkinglotsReservation.parkingLotId),
            })),
        };
      }),
    );
  }

  private _getApiDate(date: Date): string {
    return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
  }
}
