import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TAutoMode } from '@base/booking-list/booking-list.model';
import { IFloor, IFloorsInfo, IWorkplace } from '@presentation/reservations/reservation-create/models';
import { checkReservedNeighbors, filterFloors } from '@presentation/reservations/utils/reservation';
import { IDictionary } from '@shared/dictionaries/dictionaries.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { IArea, IAreaPolygon } from '@shared/http/models/database.model';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
// @ts-ignore
import { addWeeks, areIntervalsOverlapping, getDay, getHours, isAfter, isSameDay, setHours } from 'date-fns';
// @ts-ignore
import nextDay from 'date-fns/nextDay';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { ImageBlobService } from '@shared/images/services/image-blob.service';
import { FloorMapsService } from '@shared/dictionaries/services/floor-maps.service';
import { BuildingsService } from '@shared/dictionaries/services/buildings.service';
import { ReservationMarksService } from '@src/app/core/services/reservation-marks.service';

@Injectable()
export class FloorService {
  private readonly _workplaces$: Observable<IWorkplace[]>;
  private readonly _floors$: Observable<IFloorsInfo>;
  private readonly _filters$ = new BehaviorSubject<Record<string, any>>({});
  private readonly _reload$ = new BehaviorSubject<null>(null);
  private readonly _loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private $dicts: DictionariesService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _measurements: MeasurementsService,
    private _img: ImageBlobService,
    private _api: ReservationsApiService,
    private $floorMaps: FloorMapsService,
    private $buildings: BuildingsService,
    private $reservationMarks: ReservationMarksService,
  ) {
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

    this._floors$ = this._route.params.pipe(
      // tap(() => this.changeLoader(true)),
      switchMap((params) =>
        combineLatest([
          this.$floorMaps.getFloorMaps$('workplaces'),
          this.$buildings.getBuildingsByPlaceType$('workplaces'),
          of(+params?.floorId),
        ]),
      ),
      map(([floors, builds, floorId]) => {
        const currentFloor = floors.find((floor) => floor.id === floorId) as IFloor;
        const floorsList = filterFloors(floors, currentFloor.buildingId);
        const currentBuild = builds.find((build) => build.id === currentFloor.buildingId);

        return { currentFloor, floorsList, currentBuild };
      }),
      shareReplay(1),
    );
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

  get floors$(): Observable<IFloorsInfo> {
    return this._floors$;
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

  get currentWorkplaces$(): Observable<IWorkplace[]> {
    return combineLatest([this._workplaces$, this.currentFloor$, this.reservations$]).pipe(
      map(([workplaces, floor, reservations]) => {
        let places = workplaces.filter((place) => place.floorMapId === floor.id);
        places = places.map((place) => {
          if (floor.workplaceReservationSocialDistanceCheck === 'FORBIDDEN') {
            return {
              ...place,
              disabled: !place.disabled ? checkReservedNeighbors(place, reservations) : place.disabled,
            };
          } else {
            return place;
          }
        });
        return places;
      }),
    );
  }

  get notReservWorkplaces$(): Observable<IWorkplace[]> {
    return combineLatest([this.floorItems$, this.tagsFilter$, this.repeatRange$, this.typesFilter$]).pipe(
      map(([{ places, reservs }, tags, repeat, types]) => {
        return this._checkFilters(places, reservs, tags, repeat, types).filter((p) => !p.disabled);
      }),
    );
  }

  get floorItems$(): Observable<any> {
    return this.currentWorkplaces$.pipe(switchMap((places) => this.reservations$.pipe(map((reservs) => ({ places, reservs })))));
  }

  get reservations$(): Observable<Record<string, any>[]> {
    return combineLatest([this.currentFloor$, this.datesFilter$, this._reload$]).pipe(
      tap(() => this.changeLoader(true)),
      switchMap(([{ id }, { dateTimeFrom, dateTimeTo }]) =>
        this._api.getWorkplaceReservations({
          floorMapId: id,
          dateTimeFrom: this._getApiDate(dateTimeFrom),
          dateTimeTo: this._getApiDate(dateTimeTo),
        }),
      ),
    );
  }

  get mapMarks$(): Observable<any> {
    return combineLatest([this.floorItems$, this.tagsFilter$, this.repeatRange$, this.typesFilter$, this.$reservationMarks.mapMarks$]).pipe(
      tap(() => this.changeLoader(true)),
      switchMap(([{ places, reservs }, tags, repeat, types, reservationMarks]) => {
        places = this._checkFilters(places, reservs, tags, repeat, types);

        const images = places
          .map((place) => [place.id, this._img.getImageBlob(place.img)])
          .reduce((acc, [id, _img]) => ({ ...acc, [id as number]: _img }), {});
        return forkJoin(images).pipe(map((imgs) => ({ places, images: imgs, reservationMarks })));
      }),
      map(({ places, images, reservationMarks }) => {
        const localMarks = places.map((place) => {
          return {
            id: place.id,
            img: images[place.id],
            disabled: place.disabled,
            relativePlace: place,
            tooltip: place.name,
            logicType: 'Workplace',
            coordinates: {
              x: place.x,
              y: place.y,
              size: place.width,
            },
          };
        });
        return [...localMarks, ...reservationMarks.filter((reservationMark) => reservationMark.logicType !== 'Workplace')];
      }),
      tap(() => this.changeLoader(false)),
    );
  }

  get filterDates$(): Observable<Record<string, string>> {
    return this._filters$.pipe(
      switchMap((filters) =>
        this._measurements.getMeasurementByName$('shortDateTime').pipe(
          map((dateFormat) => ({
            dateTimeFrom: formatDate(filters.dateTimeFrom, dateFormat, 'ru'),
            dateTimeTo: formatDate(filters.dateTimeTo, dateFormat, 'ru'),
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

  get repeatFilter$(): Observable<Record<string, any>> {
    return this._filters$.pipe(
      switchMap((filters) =>
        this._measurements.getMeasurementByName$('shortDate').pipe(
          map((dateFormat) => {
            if (filters.repeat) {
              return {
                ...filters.repeat,
                end: formatDate(filters.repeat.end, dateFormat, 'ru'),
              };
            } else {
              return filters.repeat;
            }
          }),
        ),
      ),
    );
  }

  get labelsFilter$(): Observable<Record<string, any>[]> {
    return this._filters$.pipe(
      distinctUntilChanged((p, q) => p.labels?.length === q.labels?.length),
      switchMap((filters) => this.$dicts.getDictionary('labels').pipe(map((labels) => ({ labels, labelIds: filters.labels })))),
      map(({ labels, labelIds }) => labels.filter(({ id }) => labelIds.includes(id))),
    );
  }

  get groupFilter$(): Observable<number> {
    return this._filters$.pipe(
      distinctUntilChanged((p, q) => p.group === q.group),
      map(({ group }) => group),
    );
  }

  get groupDisabledPlaces$(): Observable<Record<string, number[] | number>> {
    return this.groupFilter$.pipe(
      switchMap((group) => this._api.getWorkplacesDisabledExpanded({ labelGroupId: group })),
      pluck('data'),
    );
  }

  get typesFilter$(): Observable<string[]> {
    return this._filters$.pipe(
      distinctUntilChanged((p, q) => p.types?.length === q.types?.length),
      map(({ types }) => types),
    );
  }

  get autoModeFilter$(): Observable<TAutoMode> {
    return this._filters$.pipe(
      pluck('autoMode'),
      distinctUntilChanged(),
      map((autoMode: boolean) => (autoMode ? 'throughOne' : 'oneByOne')),
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
                .getWorkplaceReservations({
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
    this.$reservationMarks.reload();
    this._reload$.next(null);
  }

  reservationPlace(selected: Record<number, IWorkplace>): Promise<any> {
    return this._filters$
      .pipe(
        switchMap((filters) => this.repeatRange$.pipe(map((repeat) => [filters, repeat]))),
        switchMap(([filters, repeat]) => {
          const reservations = Object.entries(selected).reduce((acc, [userId, place]) => {
            const arr = [this._setWorkplacesReservation(place.id, [filters.dateTimeFrom, filters.dateTimeTo], `${userId}-${0}`, userId)];
            if (repeat && repeat[0] && repeat[0].length) {
              repeat[0].forEach((_dates, index) => {
                arr.push(this._setWorkplacesReservation(place.id, [_dates[0], _dates[1]], `${userId}-${index + 1}`, userId));
              });
            }
            return [...acc, ...arr];
          }, []);

          return this._api
            .putWorkplaceReservations({
              reservations,
            })
            .pipe(
              map(({ data }) => {
                let dates = [[filters.dateTimeFrom, filters.dateTimeTo]];
                if (repeat && repeat[0]) {
                  dates = [...dates, ...repeat[0]];
                }

                return {
                  data,
                  dates,
                  filters,
                };
              }),
            );
        }),
        take(1),
      )
      .toPromise();
  }

  private _getApiDate(date: Date): string {
    return formatDate(date, this._measurements.getMeasurementByName('filterDate'), 'ru');
  }

  private _checkFilters(places, reservations, tags, repeat, types): IWorkplace[] {
    let filteredPlaces = [...places];
    filteredPlaces = filteredPlaces.map((place) => {
      const newPlace = { ...place };
      const reservation = reservations.find((r) => r.workplaceId === place.id);
      newPlace.img = newPlace.imageFreeUrl;

      if (newPlace.disabled) {
        newPlace.img = newPlace.imageDisabledUrl || newPlace.img;
      }

      if (reservation) {
        newPlace.reservation = reservation;
        newPlace.disabled = true;
        newPlace.img = newPlace.imageReservedByUserUrl;
      }

      if (repeat) {
        const [repeatDates, repeatReservations] = repeat;
        const _reservations = repeatReservations.filter((r) => r.workplaceId === place.id);
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
          newPlace.img = newPlace.imageReservedByUserUrl;
        }
      }

      if (tags && tags.length) {
        if (!tags.every((tag) => place.tags.includes(tag))) {
          newPlace.disabled = true;
          newPlace.img = newPlace.imageDisabledUrl || newPlace.img;
        }
      }

      if (types && Array.isArray(types)) {
        if (!types.includes(newPlace.type)) {
          newPlace.disabled = true;
          newPlace.img = newPlace.imageDisabledUrl || newPlace.img;
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

  private _setWorkplacesReservation(id, dates, recordCode, labelId): Record<string, any> {
    return {
      recordCode: `${recordCode}`,
      workplaceId: id,
      labelId,
      dateTimeFrom: this._getApiDate(dates[0]),
      dateTimeTo: this._getApiDate(dates[1]),
    };
  }
}
