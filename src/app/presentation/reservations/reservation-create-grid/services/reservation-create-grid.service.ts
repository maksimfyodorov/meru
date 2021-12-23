import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { UserOfficesService } from '@src/app/core/services/user-offices.service';
import { UserService } from '@src/app/core/services/user.service';
import { DictionariesService } from '@src/app/shared/dictionaries/dictionaries.service';
import { BuildingsService } from '@src/app/shared/dictionaries/services/buildings.service';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';
import { IAppointment, IBuilding, IFloor, IRoom, IWorkplace } from '@src/app/shared/http/models/database.model';
import { ReservationType } from '@src/app/shared/http/models/meta.model';
import { LiveDataApiService } from '@src/app/shared/http/services/live-data-api.service';
import { ReservationsApiService } from '@src/app/shared/http/services/reservations-api.service';
import { areIntervalsOverlapping } from 'date-fns';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of } from 'rxjs';
import { catchError, debounceTime, map, pluck, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { IFloorsInfo, IReservationCardPlace, IReservationTab } from '../models';
import { FilterService } from './filter.service';
import {
  DEFAULT_WORKPLACE_CARD,
  MAP_POINT_BUSY_SVG,
  MAP_POINT_DISABLED_SVG,
  MAP_POINT_SVG,
  ROOM_DISABLED_COLOR,
} from '@shared/http/utils/images.const';
import { disablePlace } from '../../utils/reservation';
import { ImageBlobService } from '@src/app/shared/images/services/image-blob.service';
import { forkJoinObjectEmpty } from '@src/app/core/services/reservation-marks.utils';
import { IUser } from '@src/app/core/models/user.model';

@Injectable()
export class ReservationCreateGridService {
  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly _workplaces$: Observable<IWorkplace[]>;
  private readonly _rooms$: Observable<any[]>;
  private readonly _parkings$: Observable<any[]>;

  get isLoading(): boolean {
    return this._isLoading$.getValue();
  }
  get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }

  constructor(
    private _measurementsService: MeasurementsService,
    private _datePipe: DatePipe,
    private _dictionariesService: DictionariesService,
    private _buildingsService: BuildingsService,
    private _liveDataApiService: LiveDataApiService,
    private _userOfficesService: UserOfficesService,
    private _filterService: FilterService,
    private _reservationsApiService: ReservationsApiService,
    private _userService: UserService,
    private _imageBlobService: ImageBlobService,
  ) {
    this._rooms$ = forkJoin({
      rooms: this._dictionariesService.getDictionary('rooms'),
      tags: this._dictionariesService.getDictionary('tags'),
    }).pipe(
      map(({ rooms, tags }) =>
        rooms.map((room) => ({
          ...room,
          disabled: !Boolean((room.isBookingAllowed ?? true) && room.ewsMail),
          tags: room.tags.map((tagId) => tags.find((t) => t.id === tagId).name),
        })),
      ),
      shareReplay(1),
    );
    this._workplaces$ = forkJoin({
      places: this._dictionariesService.getDictionary('workplaces'),
      tags: this._dictionariesService.getDictionary('tags'),
      disabled: this._reservationsApiService.getWorkplacesDisabled$,
    }).pipe(
      map(({ places, tags, disabled }) => {
        return places.map((place) => ({
          ...place,
          tags: place.tags.map((tagId) => tags.find((t) => t.id === tagId).name),
          disabled: disabled.includes(place.id),
        })) as IWorkplace[];
      }),
      shareReplay(1),
    );
    this._parkings$ = forkJoin({
      places: this._dictionariesService.getDictionary('parkingLots'),
      tags: this._dictionariesService.getDictionary('tags'),
      disabled: this._reservationsApiService.getReservationsByType('parking', {
        isFirstPerson: true,
      }),
    }).pipe(
      map(({ places, tags, disabled }) => {
        return places.map((place) => ({
          ...place,
          tags: place.tags.map((tagId) => tags.find((t) => t.id === tagId).name),
          disabled: disabled.includes(place.id),
        })) as IWorkplace[];
      }),
      shareReplay(1),
    );
  }

  getCurrentItems$(placeType: ReservationType): Observable<any[]> {
    let source: Observable<any>;
    switch (placeType) {
      case 'appointment':
        source = this._rooms$;
        break;

      case 'parking':
        source = this._parkings$;
        break;

      case 'workplace':
      default:
        source = this._workplaces$;
    }

    return source;
  }

  getResultList$(placeType: ReservationType): Observable<any> {
    return combineLatest([
      this._filterService.getRepeatRange$(placeType),
      this._filterService.itemsFilter$,
      this.getCurrentItems$(placeType),
      this._dictionariesService.getDictionary<IFloor[]>('floorMaps'),
      this._dictionariesService.getDictionary<IBuilding[]>('buildings'),
      this._dictionariesService.getDictionary<IUser[]>('labels'),
    ]).pipe(
      tap(() => this._isLoading$.next(true)),
      switchMap(([repeat, filters, items, floors, buildings, users]) => {
        if (!filters.dateTimeFrom) {
          return [];
        }
        let params: Record<string, any>;
        items = items.filter((i) => filters.floorsId.includes(i.floorMapId));
        items.forEach((i) => {
          i.floor = floors.find((f) => f.id === i.floorMapId);
          i.building = buildings.find((f) => f.id === i.floor.buildingId);
        });
        switch (placeType) {
          case 'appointment':
            params = {
              requestAppointmentRoomIds: items.filter((i) => !i.disabled && filters.floorsId.includes(i.floorMapId)).map((i) => i.id),
              requestAppointmentDateFrom: this._getApiDate(filters.dateTimeFrom),
              requestAppointmentDateTo: this._getApiDate(filters.dateTimeTo),
            };
            break;
          case 'workplace':
          default:
            params = {
              floorMapId: [],
              dateTimeFrom: this._getApiDate(filters.dateTimeFrom),
              dateTimeTo: this._getApiDate(filters.dateTimeTo),
            };
        }

        const itemImages: Record<number, any> = items
          .map((item) => {
            return item.avatarImageUrl ? [item.id, this._imageBlobService.getImageBlob(item.avatarImageUrl)] : [item.id, of(null)];
          })
          .reduce((acc, [id, _img]) => ({ ...acc, [id as number]: _img }), {});
        return combineLatest([
          forkJoin(forkJoinObjectEmpty(itemImages)),
          of(filters),
          of(items),
          this._reservationsApiService.getMapReservationsByType(placeType, params),
        ]).pipe(
          switchMap(([images, filters, items, reservs]) => {
            let results = this._checkFilters(items, reservs, filters.tags, repeat, filters.types, filters.seatCount, placeType).filter(
              (r) => !r.disabled,
            );
            results.forEach((result) => {
              result.avatarImageUrl = images[result.id];
            });
            if (placeType === 'appointment') {
              results = results.filter((r) => this._ifReservationAllowed(r, filters, r.building));
            }
            if (placeType === 'workplace') {
              results.forEach((result) => {
                if (result.labelIdPermanentAssignment > 0) {
                  result.labelIdPermanentAssignment = users.find((u) => u.id === result.labelIdPermanentAssignment);
                }
              });
            }
            return [results];
          }),
          tap(() => this._isLoading$.next(false)),
        );
      }),
    );
  }

  getBuildingsList$(placeType: ReservationType): Observable<IReservationTab[]> {
    this._isLoading$.next(true);
    return combineLatest([
      this._userOfficesService.getUserWorkplaceGroups(),
      this._buildingsService.allBuildingsWithFloorMaps$,
      this.getCurrentItems$(placeType),
      this._filterService.itemsFilter$,
    ]).pipe(
      debounceTime(50),
      switchMap(([userWorkplaceGroup, [builds, floors], items, filters]) => {
        if (filters.dateTimeFrom && filters.dateTimeTo) {
          let params: Record<string, any>;
          switch (placeType) {
            case 'appointment':
              params = {
                requestAppointmentRoomIds: items.filter((i) => !i.disabled).map((i) => i.id),
                requestAppointmentDateFrom: this._getApiDate(filters.dateTimeFrom),
                requestAppointmentDateTo: this._getApiDate(filters.dateTimeTo),
              };
              break;
            case 'workplace':
            default:
              params = {
                floorMapId: [],
                dateTimeFrom: this._getApiDate(filters.dateTimeFrom),
                dateTimeTo: this._getApiDate(filters.dateTimeTo),
              };
          }
          return combineLatest([
            of(userWorkplaceGroup),
            of(builds),
            of(floors),
            of(items),
            this._reservationsApiService.getMapReservationsByType(placeType, params),
          ]);
        } else {
          return combineLatest([of(userWorkplaceGroup), of(builds), of(floors), of(items), of([])]);
        }
      }),
      map(([userWorkplaceGroup, builds, floors, items, reservs]) => {
        const tabs: IReservationTab[] = builds.map((build) => ({
          buildId: build.id,
          name: build.name,
        }));

        const allBusyWorkplaceIds: any[] = reservs.map((r) => r.workplaceId);
        const allBusyParkingLotsIds: any[] = reservs.map((r) => r.parkingLotId);
        const allBusyRoomIds: any[] = reservs.map((r) => r.roomId);

        return tabs
          .map((tab) => {
            tab.items = floors
              .filter((floor) => floor.buildingId === tab.buildId)
              .map((floor) => {
                let place: IReservationCardPlace;
                switch (placeType) {
                  case 'workplace':
                    const allFloorWorkplaces = items.filter((w) => w.floorMapId === floor.id);
                    const busyWorkplace: IWorkplace[] = [];
                    const freeWorkplace: IWorkplace[] = [];
                    allFloorWorkplaces.forEach((place) => {
                      if (allBusyWorkplaceIds.includes(place.id)) {
                        busyWorkplace.push(place);
                      } else {
                        freeWorkplace.push(place);
                      }
                    });
                    const availableWorkplace: IWorkplace[] = [];

                    freeWorkplace.forEach((place) => {
                      for (const group of place.workplaceGroups) {
                        if (userWorkplaceGroup.includes(group)) {
                          availableWorkplace.push(place);
                          break;
                        }
                      }
                    });

                    place = {
                      type: 'workplace',
                      freePlaceAmount: freeWorkplace.length,
                      availablePlaceAmount: availableWorkplace.length,
                      busyPlaceAmount: busyWorkplace.length,
                    };
                    break;
                  case 'appointment':
                    const allFloorRooms = items.filter((w) => w.floorMapId === floor.id);
                    const busyRoom: IRoom[] = [];
                    const freeRoom: IRoom[] = [];
                    allFloorRooms.forEach((place) => {
                      if (allBusyRoomIds.includes(place.id)) {
                        busyRoom.push(place);
                      } else {
                        freeRoom.push(place);
                      }
                    });
                    place = {
                      type: 'appointment',
                      freePlaceAmount: freeRoom.length,
                      availablePlaceAmount: busyRoom.length + freeRoom.length,
                      busyPlaceAmount: busyRoom.length,
                    };
                    break;
                  case 'parking':
                    const allFloorParkingLots = items.filter((w) => w.floorMapId === floor.id);
                    const busyParkingLots: IWorkplace[] = [];
                    const freeParkingLots: IWorkplace[] = [];
                    allFloorParkingLots.forEach((place) => {
                      if (allBusyParkingLotsIds.includes(place.id)) {
                        busyParkingLots.push(place);
                      } else {
                        freeParkingLots.push(place);
                      }
                    });
                    place = {
                      type: 'parking',
                      freePlaceAmount: freeParkingLots.length,
                      availablePlaceAmount: allFloorParkingLots.length,
                      busyPlaceAmount: busyParkingLots.length,
                    };
                    break;
                }
                return {
                  floorId: floor.id,
                  title: floor.name,
                  floor: floor.floorNumber,
                  place,
                };
              });
            tab.items = tab.items.filter(
              (item) => item.place.availablePlaceAmount + item.place.availablePlaceAmount + item.place.busyPlaceAmount,
            );
            return tab;
          })
          .filter((tab) => tab.items.length);
      }),
      tap(() => this._isLoading$.next(false)),
    );
  }

  get dateTimeFormat() {
    return this._measurementsService.getMeasurementByName('dateTime');
  }

  private _getApiDate(date: Date): string {
    return this._datePipe.transform(date, this._measurementsService.getMeasurementByName('filterDate'));
  }

  private _checkFilters(places, reservations, tags, repeat, types, seatCount, placeType: ReservationType): any[] {
    let filteredPlaces = [...places];
    filteredPlaces = filteredPlaces.map((place) => {
      let newPlace = { ...place };
      newPlace.img = newPlace.imageFreeUrl || MAP_POINT_SVG;

      if (newPlace.disabled) {
        newPlace.img = newPlace.imageDisabledUrl || MAP_POINT_DISABLED_SVG;
      }
      if (reservations?.length && placeType === 'appointment') {
        const reservation = reservations?.find((r) => r.roomId === place.id);
        newPlace.reservation = reservation;
      }
      if (reservations?.length && (placeType === 'workplace' || placeType === 'parking')) {
        const reservation =
          placeType === 'parking'
            ? reservations?.find((r) => r.parkingLotId === place.id)
            : reservations?.find((r) => r.workplaceId === place.id);
        if (reservation) {
          newPlace.reservation = reservation;
          newPlace.disabled = true;
          if (reservation.labelId === this._userService.info.id) {
            newPlace.img = reservation.status === 'CONFIRMED' ? newPlace.imageReservedByMeUrl : newPlace.imageReservedByMeNotConfirmedUrl;
          } else {
            newPlace.img = newPlace.imageReservedByUserUrl;
          }
        }
      }

      if (placeType === 'appointment') {
        const isBusy: boolean = reservations?.some((r) => r.roomId === place.id);
        newPlace.disabled = newPlace.disabled || isBusy;

        if (newPlace.disabled && !isBusy) {
          newPlace.color = ROOM_DISABLED_COLOR;
        } else if (isBusy) {
          newPlace.color = newPlace.roomTabletColorBusyUI;
        } else {
          newPlace.color = newPlace.roomTabletColorFreeUI;
        }
      }

      if (reservations?.length && placeType === 'appointment') {
        const reservation = reservations?.find((r) => r.roomId === place.id);
        if (reservation) {
          newPlace.disabled = true;
          newPlace.img = MAP_POINT_BUSY_SVG;
        }
      }

      if (repeat) {
        const [repeatDates, repeatReservations] = repeat;
        const _reservations =
          placeType === 'parking'
            ? repeatReservations.filter((r) => r.parkingLotId === place.id)
            : repeatReservations.filter((r) => r.workplaceId === place.id);
        let overlap: any = false;
        for (const rv of _reservations) {
          for (const _date of repeatDates) {
            overlap = areIntervalsOverlapping(
              { start: _date[0], end: _date[1] },
              { start: new Date(rv.dateTimeFrom), end: new Date(rv.dateTimeTo) },
            )
              ? rv
              : false;
            if (overlap) break;
          }
          if (overlap) break;
        }
        if (overlap) {
          newPlace.disabled = true;
          newPlace.img = overlap.labelId === this._userService.info.id ? newPlace.imageReservedByMeUrl : newPlace.imageReservedByUserUrl;
        }
      }

      if (tags && tags.length) {
        if (!tags.every((tag) => place.tags.includes(tag))) {
          newPlace = disablePlace(newPlace);
        }
      }

      if (types && Array.isArray(types)) {
        if (!types.includes(newPlace.type)) {
          newPlace = disablePlace(newPlace);
        }
      }

      if (seatCount && Number.isInteger(seatCount)) {
        if (newPlace.seatCount < seatCount) {
          newPlace = disablePlace(newPlace);
        }
      }
      return newPlace;
    });

    return filteredPlaces;
  }

  reservationPlace(id: number, placeType: ReservationType): Promise<any> {
    this._isLoading$.next(true);
    return this._filterService.filters$
      .pipe(
        switchMap((filters) => {
          return this._filterService.getRepeatRange$(placeType).pipe(map((repeat) => [filters, repeat]));
        }),
        switchMap(([filters, repeat]) => {
          const reservations = [
            this._setReservationByType(placeType, 'main', {
              id,
              dates: [filters.dateTimeFrom, filters.dateTimeTo],
            }),
          ];
          if (repeat && repeat[0] && repeat[0].length) {
            repeat[0].forEach((_dates, index) => {
              reservations.push(
                this._setReservationByType(placeType, index, {
                  id,
                  dates: [_dates[0], _dates[1]],
                }),
              );
            });
          }

          let params: any;
          switch (placeType) {
            case 'appointment':
              params = { appointments: reservations };
              break;
            case 'parking':
              params = { reservations };
              break;
            default:
              params = { reservations };
              break;
          }

          return this._reservationsApiService.putReservationsByType(placeType, params).pipe(
            map(({ data, error }) => {
              return {
                data,
                dates: repeat && repeat[0],
                filters,
                error,
              };
            }),
          );
        }),
        tap(() => this._isLoading$.next(false)),
        take(1),
      )
      .toPromise();
  }

  private _setReservationByType(type: ReservationType, recordCode: string, data): Record<string, any> {
    return {
      recordCode: `${recordCode}`,
      ...((type === 'workplace' && {
        workplaceId: data.id,
        labelId: this._userService.info.id,
        dateTimeFrom: this._getApiDate(data.dates[0]),
        dateTimeTo: this._getApiDate(data.dates[1]),
      }) ||
        {}),
      ...((type === 'parking' && {
        parkingLotId: data.id,
        labelId: this._userService.info.id,
        dateTimeFrom: this._getApiDate(data.dates[0]),
        dateTimeTo: this._getApiDate(data.dates[1]),
      }) ||
        {}),
      ...((type === 'appointment' && {
        appointmentRoomsList: [data.id],
        appointmentDateFrom: this._getApiDate(data.dates[0]),
        appointmentDateTo: this._getApiDate(data.dates[1]),
      }) ||
        {}),
    };
  }

  private _ifReservationAllowed(place: IAppointment, filter: Record<string, Date>, building: IBuilding): boolean {
    let res = true;

    if (
      place.reservationAllowedFrom !== undefined &&
      place.reservationAllowedTo !== undefined &&
      place.reservationAllowedFrom !== null &&
      place.reservationAllowedTo !== null
    ) {
      const timeFromFilter = [filter.dateTimeFrom.getHours(), filter.dateTimeFrom.getMinutes()];
      const timeToFilter = [filter.dateTimeTo.getHours(), filter.dateTimeTo.getMinutes()];

      const timeFrom = (<IAppointment>place).reservationAllowedFrom
        ? (<IAppointment>place).reservationAllowedFrom.split(':')
        : [building.workDayBeginHour ? +building.workDayBeginHour : 6, 0];
      const timeTo = (<IAppointment>place).reservationAllowedTo
        ? (<IAppointment>place).reservationAllowedTo.split(':')
        : [building.workDayEndHour ? +building.workDayEndHour : 23, 0];

      const dateFromFilter = new Date();
      dateFromFilter.setHours(+timeFromFilter[0], +timeFromFilter[1]);
      const dateToFilter = new Date();
      dateToFilter.setHours(+timeToFilter[0], +timeToFilter[1]);
      const dateFrom = new Date();
      dateFrom.setHours(+timeFrom[0], +timeFrom[1]);
      const dateTo = new Date();
      dateTo.setHours(+timeTo[0], +timeTo[1]);

      res = dateFromFilter.getTime() >= dateFrom.getTime() && dateToFilter.getTime() <= dateTo.getTime();
    }
    return res;
  }
}
