import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalLoaderService } from '@core/services/global-loader.service';
import { UserService } from '@core/services/user.service';
import { TeamProfileWorkplaceTableMeta } from '@presentation/team/team-profile/team-profile.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { IBuilding, IFloor, IRoom, IUser, IWorkplace, IWorkplaceReservation } from '@shared/http/models/database.model';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { UserOfficesService } from '@src/app/core/services/user-offices.service';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class TeamProfileService {
  shortDateTimeFormat = this.$measurements.getMeasurementByName('shortDateTime');
  constructor(
    private $route: ActivatedRoute,
    private $dictionaries: DictionariesService,
    private $measurements: MeasurementsService,
    private $user: UserService,
    private $reservationsApi: ReservationsApiService,
    private datePipe: DatePipe,
  ) {}

  get userId$(): Observable<number> {
    return this.$route.paramMap.pipe(switchMap((params) => of(Number(params.get('userId') || this.$user.info.id))));
  }

  getReservations$(dateFrom: Date, dateTo: Date) {
    return this.userId$.pipe(
      switchMap((labelId) => {
        return combineLatest([
          this.$dictionaries.getDictionary<IFloor[]>('floorMaps'),
          this.$reservationsApi.getWorkplaceReservations({
            labelId: labelId,
            statuses: ['CLOSED', 'NEW', 'CONFIRMED', 'CLOSED', 'APPROVED'],
            dateTimeFrom: this._getApiDate(dateFrom),
            dateTimeTo: this._getApiDate(dateTo),
          }),
          this.$dictionaries.getDictionary<IWorkplace[]>('workplaces'),
          this.$reservationsApi.getUserAppointments({
            requestAppointmentUserId: labelId,
            requestAppointmentDateFrom: this._getApiDate(dateFrom),
            requestAppointmentDateTo: this._getApiDate(dateTo),
          }),
          this.$dictionaries.getDictionary<IRoom[]>('rooms'),
          this.$reservationsApi.getParkingLotsReservations({
            labelIds: [labelId],
            dateTimeFrom: this._getApiDate(dateFrom),
            dateTimeTo: this._getApiDate(dateTo),
          }),
          this.$dictionaries.getDictionary<any[]>('parkingLots'),
        ]).pipe(
          map(([floorMaps, reservations, workplaces, appointments, rooms, parkinglotsReservations, parkingLots]) => {
            workplaces.forEach((workplace) => {
              workplace.floor = floorMaps.find((f) => f.id === workplace.floorMapId);
            });
            rooms.forEach((room) => {
              room.floor = floorMaps.find((f) => f.id === room.floorMapId);
            });
            parkingLots.forEach((parkingLot) => {
              parkingLot.floor = floorMaps.find((f) => f.id === parkingLot.floorMapId);
            });
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
                  parkingLot: parkingLots.find((_w) => {
                    return _w.id === parkinglotsReservation.parkingLotId;
                  }),
                })),
            };
          }),
        );
      }),
    );
  }

  private _getApiDate(date: Date): string {
    return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
  }
}
