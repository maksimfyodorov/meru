import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { DictionariesService } from '@src/app/shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';
import {
  IFloor,
  IRoom,
  ITag,
  IUser,
  IWorkplace,
  IWorkplaceGroup,
  IBuilding,
  IWorkplaceReservation,
} from '@shared/http/models/database.model';
import { ReservationsApiService } from '@src/app/shared/http/services/reservations-api.service';
import { DEFAULT_WORKPLACE_CARD } from '@src/app/shared/http/utils/images.const';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of } from 'rxjs';
import { switchMap, map, take, tap, merge, shareReplay } from 'rxjs/operators';
import {
  addEmptyZones,
  getParkDescriptionList,
  getRoomsDescriptionList,
  getTags,
  getWorkplaceDescriptionList,
  getWorkplaceGroupsNames,
} from './calendar.utils';
import { IListRows } from '@src/app/base/list/models/list.model';
import { UserService } from '@src/app/core/services/user.service';
import { ImageBlobService } from '@src/app/shared/images/services/image-blob.service';

@Injectable()
export class CalendarService {
  private _start: Date;
  private _fin: Date;
  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _reservationAllowedFrom: number[] = [6, 0];
  private _reservationAllowedTo: number[] = [23, 0];

  constructor(
    private route: ActivatedRoute,
    private dictionariesService: DictionariesService,
    private reservationsApiService: ReservationsApiService,
    private datePipe: DatePipe,
    private measurementsService: MeasurementsService,
    private translatePipe: TranslatePipe,
    private userService: UserService,
    private images: ImageBlobService,
  ) {
    this.startFin = new Date();
  }

  getCard$(): Observable<any> {
    switch (this.type) {
      case 'appointment':
        return this.getRoomCard$();
      case 'workplace':
        return this.getWorkplaceCard$(true);
      case 'parking':
        return this.getParkingLotCard$(true);

      default:
        break;
    }
  }

  getReservations$(workHours: number[]): Observable<IListRows> {
    switch (this.type) {
      case 'appointment':
        return this.getRoomAppointments$();
      case 'workplace':
        this._reservationAllowedFrom = [workHours[0], 0];
        this._reservationAllowedTo = [workHours[1], 0];
        return this.getWorkplaceReservations$();
      case 'parking':
        this._reservationAllowedFrom = [workHours[0], 0];
        this._reservationAllowedTo = [workHours[1], 0];
        return this.getParkingLotReservations$();

      default:
        break;
    }
  }

  getParkingLotReservations$() {
    this._isLoading$.next(true);
    return combineLatest([
      this.reservationsApiService.getParkingLotsReservations({
        parkingLotId: this.placeId,
        dateTimeFrom: this._getApiDate(this.start),
        dateTimeTo: this._getApiDate(this.fin),
      }),
      this.dictionariesService.getDictionary<IUser[]>('labels'),
    ]).pipe(
      switchMap(([reservations, users]) => {
        const appointmentsEvents = reservations.map((item, index) => ({
          id: index + 1,
          reservationId: item.id,
          start: new Date(item.dateTimeFrom),
          end: new Date(item.dateTimeTo),
          title: `${this.translatePipe.transform('Busy')} ${users.find((u) => u.id === item.labelId)?.name} ${this._getShortTime(
            new Date(item.dateTimeFrom),
          )} - ${this._getShortTime(new Date(item.dateTimeTo))}`,
          data: item,
          cssClass: 'calendar-busy-area-parking',
        }));

        const appointmentsEventsExt = [];
        if (Array.isArray(appointmentsEvents)) {
          appointmentsEvents.forEach((e, i) => {
            const start = new Date(e.start);
            const end = new Date(e.end);
            start.setHours(0, 0, 0, 0);
            end.setHours(0, 0, 0, 0);
            if (start !== end) {
              const start = new Date(e.start);
              const end = new Date(e.end);
              let idx = 0;
              while (start < end) {
                const _end = new Date(start);
                _end.setHours(end.getHours(), end.getMinutes(), end.getSeconds(), 0);
                appointmentsEventsExt.push({
                  id: i + ++idx,
                  reservationId: e.reservationId,
                  start: new Date(start),
                  end: _end,
                  title: e.title,
                  data: e.data,
                  cssClass: 'calendar-busy-area-parking',
                });
                start.setDate(start.getDate() + 1);
              }
            } else {
              appointmentsEventsExt.push(e);
            }
          });
        }
        const result = addEmptyZones(
          this.start,
          this.fin,
          appointmentsEventsExt,
          this._reservationAllowedFrom,
          this._reservationAllowedTo,
          true,
          this.type,
        );
        this._isLoading$.next(false);
        return [result];
      }),
    );
  }

  getWorkplaceReservations$() {
    this._isLoading$.next(true);
    return combineLatest([
      this.reservationsApiService.getWorkplaceReservations({
        workplaceId: this.placeId,
        dateTimeFrom: this._getApiDate(this.start),
        dateTimeTo: this._getApiDate(this.fin),
      }),
      this.dictionariesService.getDictionary<IUser[]>('labels'),
    ]).pipe(
      switchMap(([reservations, users]) => {
        const appointmentsEvents = reservations.map((item, index) => ({
          id: index + 1,
          reservationId: item.id,
          start: new Date(item.dateTimeFrom),
          end: new Date(item.dateTimeTo),
          title: `${this.translatePipe.transform('Busy')} ${users.find((u) => u.id === item.labelId)?.name} ${this._getShortTime(
            new Date(item.dateTimeFrom),
          )} - ${this._getShortTime(new Date(item.dateTimeTo))}`,
          data: item,
          cssClass: 'calendar-busy-area-workplace',
        }));
        const appointmentsEventsExt = [];
        if (Array.isArray(appointmentsEvents)) {
          appointmentsEvents.forEach((e, i) => {
            const start = new Date(e.start);
            const end = new Date(e.end);
            start.setHours(0, 0, 0, 0);
            end.setHours(0, 0, 0, 0);
            if (start !== end) {
              const start = new Date(e.start);
              const end = new Date(e.end);
              let idx = 0;
              while (start < end) {
                const _end = new Date(start);
                _end.setHours(end.getHours(), end.getMinutes(), end.getSeconds(), 0);
                appointmentsEventsExt.push({
                  id: i + ++idx,
                  reservationId: e.reservationId,
                  start: new Date(start),
                  end: _end,
                  title: e.title,
                  data: e.data,
                  cssClass: 'calendar-busy-area-workplace',
                });
                start.setDate(start.getDate() + 1);
              }
            } else {
              appointmentsEventsExt.push(e);
            }
          });
        }
        const result = addEmptyZones(
          this.start,
          this.fin,
          appointmentsEventsExt,
          this._reservationAllowedFrom,
          this._reservationAllowedTo,
          true,
          this.type,
        );
        this._isLoading$.next(false);
        return [result];
      }),
    );
  }

  getRoomAppointments$() {
    this._isLoading$.next(true);
    return combineLatest([
      this.reservationsApiService.getRoomAppointments({
        requestAppointmentRoomId: this.placeId,
        requestAppointmentDateFrom: this._getApiDate(this.start),
        requestAppointmentDateTo: this._getApiDate(this.fin),
      }),
      this.getRoomCard$(),
    ]).pipe(
      switchMap(([appointments, card]) => {
        if (card.room.reservationAllowedFrom) {
          this._reservationAllowedFrom = card.room.reservationAllowedFrom.split(':').map((val) => +val);
        } else if (card.building && card.building.workDayBeginHour) {
          this._reservationAllowedFrom = [card.building.workDayBeginHour, 0];
        }
        if (card.room.reservationAllowedTo) {
          this._reservationAllowedTo = card.room.reservationAllowedTo.split(':').map((val) => +val);
        } else if (card.building && card.building.workDayEndHour) {
          this._reservationAllowedTo = [card.building.workDayEndHour, 0];
        }
        appointments = appointments.appointmentsByRoomList || appointments;
        const appointmentsEvents = appointments.map((item, index) => ({
          id: index + 1,
          reservationId: item.appointmentId,
          start: new Date(item.appointmentDateFrom),
          end: new Date(item.appointmentDateTo),
          title: `${this.translatePipe.transform('Busy')} ${this._getShortTime(item.appointmentDateFrom)} - ${this._getShortTime(
            item.appointmentDateTo,
          )}`,
          data: item,
          cssClass: 'calendar-busy-area-room',
        }));

        const appointmentsEventsExt = [];
        if (Array.isArray(appointmentsEvents)) {
          appointmentsEvents.forEach((e, i) => {
            const start = new Date(e.start);
            const end = new Date(e.end);
            start.setHours(0, 0, 0, 0);
            end.setHours(0, 0, 0, 0);
            if (start !== end) {
              const start = new Date(e.start);
              const end = new Date(e.end);
              let idx = 0;
              while (start < end) {
                const _end = new Date(start);
                _end.setHours(end.getHours(), end.getMinutes(), end.getSeconds(), 0);
                appointmentsEventsExt.push({
                  id: i + ++idx,
                  reservationId: e.reservationId,
                  start: new Date(start),
                  end: _end,
                  title: e.title,
                  data: e.data,
                  cssClass: 'calendar-busy-area-room',
                });
                start.setDate(start.getDate() + 1);
              }
            } else {
              appointmentsEventsExt.push(e);
            }
          });
        }

        const result = addEmptyZones(
          this.start,
          this.fin,
          appointmentsEventsExt,
          this._reservationAllowedFrom,
          this._reservationAllowedTo,
          true,
          this.type,
        );
        this._isLoading$.next(false);

        return [result];
      }),
    );
  }

  getParkingLotCard$(showPermanentAssignment: boolean): Observable<any> {
    return this.dictionariesService.getDictionaryItemByKey<IWorkplace>('parkingLots', this.placeId).pipe(
      switchMap((w) => {
        w.type = 'PARKING_LOT';
        return forkJoin({
          workplace: of(w),
          floor: this.dictionariesService.getDictionaryItemByKey<IFloor>('floorMaps', w.floorMapId),
          tags: this.dictionariesService.getDictionary<ITag[]>('tags'),
          labelIdPermanentAssignment:
            w.labelIdPermanentAssignment > 0 && showPermanentAssignment
              ? this.dictionariesService.getDictionaryItemByKey<IUser>('labels', w.labelIdPermanentAssignment)
              : of(undefined),
          buildings: this.dictionariesService.getDictionary<IBuilding[]>('buildings'),
        });
      }),
      map(({ workplace, floor, tags, labelIdPermanentAssignment, buildings }) => {
        return {
          title: workplace.name,
          image: DEFAULT_WORKPLACE_CARD,
          descriptionList: getParkDescriptionList(workplace, floor, labelIdPermanentAssignment),
          tags: getTags(workplace.tags, tags),
          floor,
          building: buildings.find((_b) => _b.id === floor.buildingId),
          workplace,
        };
      }),
      shareReplay(1),
    );
  }

  getWorkplaceCard$(showPermanentAssignment: boolean): Observable<any> {
    return this.dictionariesService.getDictionaryItemByKey<IWorkplace>('workplaces', this.placeId).pipe(
      switchMap((w) => {
        return forkJoin({
          workplace: of(w),
          floor: this.dictionariesService.getDictionaryItemByKey<IFloor>('floorMaps', w.floorMapId),
          labelIdPermanentAssignment:
            w.labelIdPermanentAssignment > 0 && showPermanentAssignment
              ? this.dictionariesService.getDictionaryItemByKey<IUser>('labels', w.labelIdPermanentAssignment)
              : of(undefined),
          tags: this.dictionariesService.getDictionary<ITag[]>('tags'),
          workplaceGroups: this.dictionariesService.getDictionary<IWorkplaceGroup[]>('workplaceGroups'),
          buildings: this.dictionariesService.getDictionary<IBuilding[]>('buildings'),
        });
      }),
      map(({ workplace, floor, tags, workplaceGroups, buildings, labelIdPermanentAssignment }) => {
        return {
          title: workplace.name,
          image: DEFAULT_WORKPLACE_CARD,
          descriptionList: getWorkplaceDescriptionList(
            workplace,
            floor,
            getWorkplaceGroupsNames(workplace.workplaceGroups, workplaceGroups),
            labelIdPermanentAssignment,
          ),
          tags: getTags(workplace.tags, tags),
          floor,
          building: buildings.find((_b) => _b.id === floor.buildingId),
          workplace,
        };
      }),
      shareReplay(1),
    );
  }

  getRoomCard$(): Observable<any> {
    return this.dictionariesService.getDictionaryItemByKey<IRoom>('rooms', this.placeId).pipe(
      switchMap((r) => {
        return forkJoin({
          image: r.avatarImageUrl ? this.images.getImageBlob(r.avatarImageUrl) : of(DEFAULT_WORKPLACE_CARD),
          room: of(r),
          floor: this.dictionariesService.getDictionaryItemByKey<IFloor>('floorMaps', r.floorMapId),
          tags: this.dictionariesService.getDictionary<ITag[]>('tags'),
          buildings: this.dictionariesService.getDictionary<IBuilding[]>('buildings'),
        });
      }),
      map(({ image, room, floor, tags, buildings }) => {
        return {
          title: room.name,
          image,
          descriptionList: getRoomsDescriptionList(room, floor),
          tags: getTags(room.tags, tags),
          floor,
          building: buildings.find((_b) => _b.id === floor.buildingId),
          room,
        };
      }),
      shareReplay(1),
    );
  }

  reservationPlace(dates: Date[], subject: string) {
    const reservations = [];
    let params: any;

    switch (this.type) {
      case 'appointment':
        reservations.push({
          appointmentSubject: subject,
          appointmentRoomsList: [this.placeId],
          appointmentDateFrom: this._getApiDate(dates[0]),
          appointmentDateTo: this._getApiDate(dates[1]),
        });
        params = { appointments: reservations };
        break;
      case 'parking':
        reservations.push({
          parkingLotId: this.placeId,
          labelId: this.userService.info.id,
          dateTimeFrom: this._getApiDate(dates[0]),
          dateTimeTo: this._getApiDate(dates[1]),
        });
        params = { reservations };
        break;
      default:
        reservations.push({
          workplaceId: this.placeId,
          labelId: this.userService.info.id,
          dateTimeFrom: this._getApiDate(dates[0]),
          dateTimeTo: this._getApiDate(dates[1]),
        });
        params = { reservations };
        break;
    }

    return this.reservationsApiService.putReservationsByType(this.type, params);
  }

  get isLoading() {
    return this._isLoading$.value;
  }
  get type(): 'workplace' | 'appointment' | 'parking' {
    return this.route.snapshot.params.type;
  }
  get placeId(): number {
    return +this.route.snapshot.params.placeId;
  }
  get mode(): 'month' | 'day' {
    return this.route.snapshot.queryParams.mode || 'month';
  }
  get start() {
    return this._start;
  }
  get fin() {
    return this._fin;
  }
  set startFin(value: Date) {
    value.setMonth(value.getMonth() - 1, 1);
    value.setHours(0, 0, 0);
    this._start = new Date(value);
    value.setMonth(value.getMonth() + 2);
    this._fin = new Date(value);
  }
  set start(value: Date) {
    value.setDate(1);
    value.setHours(0, 0, 0);
    this._start = new Date(value);
  }
  set fin(value: Date) {
    value.setDate(1);
    value.setHours(0, 0, 0);
    this._fin = new Date(value);
  }

  private _getApiDate(date: Date): string {
    return this.datePipe.transform(date, this.measurementsService.getMeasurementByName('filterDate'));
  }
  private _getShortTime(date: Date): string {
    return this.datePipe.transform(date, this.measurementsService.getMeasurementByName('shortTime'));
  }
  get dateTimeFormat$(): Observable<string> {
    return this.measurementsService.getMeasurementByName$('shortDateTime');
  }
  get dateFormat$(): Observable<string> {
    return this.measurementsService.getMeasurementByName$('shortDate');
  }
}
