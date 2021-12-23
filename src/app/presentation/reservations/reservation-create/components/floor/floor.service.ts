import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@core/services/user.service';
import { IFloor, IFloorsInfo, IWorkplace } from '@presentation/reservations/reservation-create/models';
import { checkReservedNeighbors, disablePlace, filterFloors } from '@presentation/reservations/utils/reservation';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { IAppointment, IArea, IAreaPolygon, IBuilding } from '@shared/http/models/database.model';
import { ReservationType } from '@shared/http/models/meta.model';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { MAP_POINT_BUSY_SVG, MAP_POINT_DISABLED_SVG, MAP_POINT_SVG, ROOM_DISABLED_COLOR } from '@shared/http/utils/images.const';
// @ts-ignore
import { addWeeks, areIntervalsOverlapping, getDay, getHours, isAfter, isSameDay, setHours } from 'date-fns';
// @ts-ignore
import nextDay from 'date-fns/nextDay';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { ImageBlobService } from '@shared/images/services/image-blob.service';
import { mapPlacesToMArks } from '@presentation/reservations/reservation-create/components/floor/floors.utils';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { getPlaceTypeByReserveType } from '@presentation/reservations/reservation-create/utils/common.util';
import { FloorMapsService } from '@shared/dictionaries/services/floor-maps.service';
import { BuildingsService } from '@shared/dictionaries/services/buildings.service';
import { IMarks } from '@base/map/map-mark/map-mark.model';
import { ReservationMarksService } from '@src/app/core/services/reservation-marks.service';
import { constants } from 'http2';

@Injectable()
export class FloorService {
  private readonly _workplaces$: Observable<IWorkplace[]>;
  private readonly _rooms$: Observable<any[]>;
  private readonly _parkings$: Observable<any[]>;
  private readonly _floors$: Observable<IFloorsInfo>;
  private readonly _filters$ = new BehaviorSubject<Record<string, any>>({});
  private readonly _reload$ = new BehaviorSubject<null>(null);
  private readonly _loading$ = new BehaviorSubject<boolean>(false);
  private readonly _type: ReservationType = 'workplace';
  private _floorId: number;

  reservations$: Observable<Record<string, any>[]>;

  constructor(
    private $dicts: DictionariesService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _measurements: MeasurementsService,
    private _img: ImageBlobService,
    private _api: ReservationsApiService,
    private _user: UserService,
    private datePipe: DatePipe,
    private $floorMaps: FloorMapsService,
    private $buildings: BuildingsService,
    private $reservationMarks: ReservationMarksService,
  ) {
    this._type = this._route.snapshot.params.type;
    this._floorId = this._route.snapshot.params.floorId;
    this._workplaces$ = forkJoin({
      places: this.$dicts.getDictionary('workplaces'),
      tags: this.$dicts.getDictionary('tags'),
      disabled: this._api.getWorkplacesDisabled$,
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

    this._rooms$ = forkJoin({
      rooms: this.$dicts.getDictionary('rooms'),
      tags: this.$dicts.getDictionary('tags'),
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

    this._parkings$ = forkJoin({
      places: this.$dicts.getDictionary('parkingLots'),
      tags: this.$dicts.getDictionary('tags'),
      disabled: this._api.getParkingLotsDisabled$,
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

    this._floors$ = this._route.params.pipe(
      // tap(() => this.changeLoader(true)),
      switchMap((params) => {
        const itemType: DictionaryName | string = getPlaceTypeByReserveType(params.type);

        return combineLatest([
          this.$floorMaps.getFloorMaps$(itemType),
          this.$buildings.getBuildingsByPlaceType$(itemType),
          of(+params?.floorId),
        ]);
      }),
      map(([floors, builds, floorId]) => {
        const currentFloor = floors.find((floor) => floor.id === floorId) as IFloor;
        const floorsList = filterFloors(floors, currentFloor.buildingId);
        const currentBuild = builds.find((build) => build.id === currentFloor.buildingId);

        return { currentFloor, floorsList, currentBuild };
      }),
      shareReplay(1),
    );

    this.reservations$ = combineLatest([this.currentFloor$, this.datesFilter$, this.currentItems$, this._reload$]).pipe(
      tap(() => this.changeLoader(true)),
      switchMap(([{ id }, { dateTimeFrom, dateTimeTo }, items]) => {
        let params: Record<string, any>;

        switch (this._type) {
          case 'appointment':
            params = {
              requestAppointmentRoomIds: items.filter((i) => !i.disabled).map((i) => i.id),
              requestAppointmentDateFrom: this._getApiDate(dateTimeFrom),
              requestAppointmentDateTo: this._getApiDate(dateTimeTo),
            };
            break;
          case 'workplace':
          default:
            params = {
              floorMapId: id,
              dateTimeFrom: this._getApiDate(dateTimeFrom),
              dateTimeTo: this._getApiDate(dateTimeTo),
            };
        }
        return this._api.getMapReservationsByType(this._type, params);
      }),
      shareReplay(1),
    );
  }

  get floors$(): Observable<IFloorsInfo> {
    return this._floors$;
  }

  get areas$(): Observable<IArea[]> {
    return this.currentFloor$.pipe(
      switchMap((floor) =>
        forkJoin([this.$dicts.getDictionary<IArea[]>('areas'), this.$dicts.getDictionary<IAreaPolygon[]>('areaPolygons')]).pipe(
          map(([areas, polygons]) => {
            polygons = polygons.filter((p) => p.floorMapId === floor.id);
            areas = areas
              .map((a) => {
                a.polygons = polygons.filter((p) => p.areaId === a.id);
                return a;
              })
              .filter((a) => a.polygons.length);
            return areas;
          }),
        ),
      ),
    );
  }

  get currentFloor$(): Observable<IFloor> {
    return this._floors$.pipe(map(({ currentFloor }) => currentFloor));
  }

  get floorImage$(): Observable<any> {
    return this._floors$.pipe(
      switchMap(({ currentFloor }) =>
        combineLatest([this._img.getImageBlob(currentFloor.mapImageUrl), this.areas$]).pipe(
          map(([image, areas]) => ({
            image,
            imageSize: {
              width: currentFloor.mapWidth,
              height: currentFloor.mapHeight,
            },
            areas,
          })),
        ),
      ),
    );
  }

  get loading$(): Observable<boolean> {
    return this._loading$;
  }

  get currentItems$(): Observable<IWorkplace[]> {
    let source: Observable<any>;
    switch (this._type) {
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

    return source.pipe(
      switchMap((places) => this.currentFloor$.pipe(map((floor) => places.filter((place) => place.floorMapId === floor.id)))),
    );
  }

  get itemsWithFilters$() {
    return combineLatest([
      this.currentItems$,
      this.reservations$,
      this.tagsFilter$,
      this.repeatRange$,
      this.typesFilter$,
      this.seatCountFilter$,
      this.currentFloor$,
      this.$reservationMarks.mapMarks$,
    ]).pipe(shareReplay(1));
  }
  get itemsReservationsWithFilter$() {
    return combineLatest([
      this.currentItems$,
      this.reservations$,
      this.tagsFilter$,
      this.repeatRange$,
      this.typesFilter$,
      this.seatCountFilter$,
    ]);
  }

  get notReservWorkplaces$(): Observable<any[]> {
    return this.itemsReservationsWithFilter$.pipe(
      map(([places, reservs, tags, repeat, types, seatCount]) => {
        return this._checkFilters(places, reservs, tags, repeat, types, seatCount).filter((p) => !p.disabled);
      }),
    );
  }

  get mapMarks$(): Observable<IMarks> {
    return this.itemsWithFilters$.pipe(
      tap(() => this.changeLoader(true)),
      switchMap(([places, reservs, tags, repeat, types, seatCount, floor, reservationMarks]) => {
        let images: Record<string, Observable<any>>;
        if (floor.workplaceReservationSocialDistanceCheck === 'FORBIDDEN') {
          places = places.map((place) => ({
            ...place,
            disabled: !place.disabled ? checkReservedNeighbors(place, reservs) : place.disabled,
          }));
        }

        places = this._checkFilters(places, reservs, tags, repeat, types, seatCount);
        images = places
          .map((place) => [place.id, this._img.getImageBlob(place.img)])
          .reduce((acc, [id, _img]) => ({ ...acc, [id as number]: _img }), {});

        return forkJoin(images).pipe(map((imgs) => ({ places, images: imgs, reservationMarks })));
      }),
      map(({ places, images, reservationMarks }) => {
        return [
          ...mapPlacesToMArks(places, images, this._type),
          ...reservationMarks.filter(
            (reservationMark) =>
              reservationMark.logicType !== 'Workplace' &&
              reservationMark.logicType !== 'ParkingLot' &&
              reservationMark.logicType !== 'Room',
          ),
        ];
      }),
      tap(() => this.changeLoader(false)),
    );
  }

  get filterDates$(): Observable<Record<string, string>> {
    return this._filters$.pipe(
      switchMap((filters) =>
        this._measurements.getMeasurementByName$('shortDateTime').pipe(
          map((dateFormat) => ({
            dateTimeFrom: this.datePipe.transform(filters.dateTimeFrom, dateFormat),
            dateTimeTo: this.datePipe.transform(filters.dateTimeTo, dateFormat),
          })),
        ),
      ),
    );
  }

  get datesFilter$(): Observable<Record<string, Date>> {
    return this._filters$.pipe(
      distinctUntilChanged((p, q) => p.dateTimeFrom === q.dateTimeFrom && p.dateTimeTo === q.dateTimeTo),
      map(({ dateTimeFrom, dateTimeTo }) => ({ dateTimeFrom, dateTimeTo })),
      debounceTime(1000),
    );
  }

  get tagsFilter$(): Observable<string[]> {
    return this._filters$.pipe(
      distinctUntilChanged((p, q) => p.tags?.length === q.tags?.length),
      map(({ tags }) => tags),
    );
  }

  get typesFilter$(): Observable<string[]> {
    return this._filters$.pipe(
      distinctUntilChanged((p, q) => p.types?.length === q.types?.length),
      map(({ types }) => types),
    );
  }

  get repeatFilter$(): Observable<Record<string, any>> {
    return this._filters$.pipe(
      switchMap((filters) =>
        this._measurements.getMeasurementByName$('shortDate').pipe(
          map((dateFormat) => {
            if (filters.repeat) {
              return {
                ...filters.repeat,
                end: this.datePipe.transform(filters.repeat.end, dateFormat),
              };
            } else {
              return filters.repeat;
            }
          }),
        ),
      ),
    );
  }

  get repeatRange$(): Observable<any[]> {
    return this._filters$.pipe(
      distinctUntilChanged(
        (p, q) =>
          p.repeat?.end === q.repeat?.end && p.repeat?.days.length === q.repeat?.days.length && p.repeat?.weekNum === q.repeat?.weekNum,
      ),
      switchMap(({ repeat, dateTimeFrom, dateTimeTo }) => {
        if (repeat) {
          return this.currentFloor$.pipe(
            switchMap(({ id }) => {
              return this._api
                .getReservationsByType(this._type, {
                  floorMapId: id,
                  dateTimeFrom,
                  dateTimeTo: repeat.end,
                })
                .pipe(map((reservations) => [repeat, { dateTimeFrom, dateTimeTo }, reservations]));
            }),
          );
        } else {
          return of(repeat);
        }
      }),
      map((repeat) => {
        if (repeat) {
          const [r, dates, _reservations] = repeat;
          return [this._createRepeatsDates(dates, r.weekNum, r.days, r.end), _reservations];
        } else {
          return repeat;
        }
      }),
      shareReplay(1),
    );
  }

  get seatCountFilter$(): Observable<any> {
    return this._filters$.pipe(
      map(({ seatCount }) => seatCount),
      distinctUntilChanged(),
      debounceTime(400),
    );
  }

  changeLoader(state: boolean): void {
    this._loading$.next(state);
  }

  changeFloor(id: number): void {
    this._router.navigate(['../', id], { relativeTo: this._route });
  }

  backToSelectBuildings(): void {
    this._router.navigate(['../'], { relativeTo: this._route });
  }

  setFilters(filters: Record<string, any>): void {
    this._filters$.next(filters);
    this.$reservationMarks.setDateFilterValue([filters.dateTimeFrom, filters.dateTimeTo]);
  }

  reloadReservations(): void {
    this._reload$.next(null);
    this.$reservationMarks.reload();
  }

  reservationPlace(id: number, subject: string): Promise<any> {
    return this._filters$
      .pipe(
        switchMap((filters) => {
          return this.repeatRange$.pipe(map((repeat) => [filters, repeat]));
        }),
        switchMap(([filters, repeat]) => {
          const reservations = [
            this._setReservationByType(
              this._type,
              'main',
              {
                id,
                dates: [filters.dateTimeFrom, filters.dateTimeTo],
              },
              subject,
            ),
          ];
          if (repeat && repeat[0] && repeat[0].length) {
            repeat[0].forEach((_dates, index) => {
              reservations.push(
                this._setReservationByType(
                  this._type,
                  index,
                  {
                    id,
                    dates: [_dates[0], _dates[1]],
                  },
                  subject,
                ),
              );
            });
          }

          let params: any;
          switch (this._type) {
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

          return this._api.putReservationsByType(this._type, params).pipe(
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
        take(1),
      )
      .toPromise();
  }

  private _getApiDate(date: Date): string {
    return this.datePipe.transform(date, this._measurements.getMeasurementByName('filterDate'));
  }

  private _checkFilters(places, reservations, tags, repeat, types, seatCount): IWorkplace[] {
    let filteredPlaces = [...places];
    filteredPlaces = filteredPlaces.map((place) => {
      let newPlace = { ...place };
      newPlace.img = newPlace.imageFreeUrl || MAP_POINT_SVG;

      if (newPlace.disabled) {
        newPlace.img = newPlace.imageDisabledUrl || MAP_POINT_DISABLED_SVG;
      }
      if (reservations?.length && this._type === 'appointment') {
        const reservation = reservations?.find((r) => r.roomId === place.id);
        newPlace.reservation = reservation;
      }
      if (reservations?.length && (this._type === 'workplace' || this._type === 'parking')) {
        const reservation =
          this._type === 'parking'
            ? reservations?.find((r) => r.parkingLotId === place.id)
            : reservations?.find((r) => r.workplaceId === place.id);
        if (reservation) {
          newPlace.reservation = reservation;
          newPlace.disabled = true;
          if (reservation.labelId === this._user.info.id) {
            newPlace.img = reservation.status === 'CONFIRMED' ? newPlace.imageReservedByMeUrl : newPlace.imageReservedByMeNotConfirmedUrl;
          } else {
            newPlace.img = newPlace.imageReservedByUserUrl;
          }
        }
      }

      if (this._type === 'appointment') {
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

      if (reservations?.length && this._type === 'appointment') {
        const reservation = reservations?.find((r) => r.roomId === place.id);
        if (reservation) {
          newPlace.disabled = true;
          newPlace.img = MAP_POINT_BUSY_SVG;
        }
      }

      if (repeat) {
        const [repeatDates, repeatReservations] = repeat;
        const _reservations =
          this._type === 'parking'
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
          newPlace.img = overlap.labelId === this._user.info.id ? newPlace.imageReservedByMeUrl : newPlace.imageReservedByUserUrl;
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

  private _createRepeatsDates({ dateTimeFrom, dateTimeTo }, weekNum, days, end): Date[][] {
    const result = [];
    let lastDay = dateTimeFrom;

    if (!days.length) return result;

    const weekDayHandler = (day) => {
      lastDay = nextDay(lastDay, day);
      if (isAfter(end, lastDay) || isSameDay(end, lastDay)) {
        result.push([setHours(lastDay, getHours(dateTimeFrom)), setHours(lastDay, getHours(dateTimeTo))]);
      }
    };

    const sameWeek = days.filter((day) => (day || 7) > getDay(dateTimeFrom));
    sameWeek.forEach(weekDayHandler);

    while (isAfter(end, lastDay) || isSameDay(end, lastDay)) {
      lastDay = addWeeks(lastDay, weekNum - 1);
      days.forEach(weekDayHandler);
    }

    return result;
  }

  private _setReservationByType(type: ReservationType, recordCode: string, data, subject: string): Record<string, any> {
    return {
      recordCode: `${recordCode}`,
      ...((type === 'workplace' && {
        workplaceId: data.id,
        labelId: this._user.info.id,
        dateTimeFrom: this._getApiDate(data.dates[0]),
        dateTimeTo: this._getApiDate(data.dates[1]),
      }) ||
        {}),
      ...((type === 'parking' && {
        parkingLotId: data.id,
        labelId: this._user.info.id,
        dateTimeFrom: this._getApiDate(data.dates[0]),
        dateTimeTo: this._getApiDate(data.dates[1]),
      }) ||
        {}),
      ...((type === 'appointment' && {
        appointmentSubject: subject,
        appointmentRoomsList: [data.id],
        appointmentDateFrom: this._getApiDate(data.dates[0]),
        appointmentDateTo: this._getApiDate(data.dates[1]),
      }) ||
        {}),
    };
  }

  get type() {
    return this._type;
  }
}
