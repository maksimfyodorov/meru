import { DatePipe } from '@angular/common';
import { Injectable, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMarkItem } from '@src/app/base/map/map-mark/map-mark.model';
import { MapService } from '@src/app/base/map/map.service';
import { UserService } from '@src/app/core/services/user.service';
import {
  forkJoinObjectEmpty,
  generateCustomObjectMark,
  generateParkingLotMark,
  generateRoomMark,
  generateUserMark,
  generateWorkplaceMark,
} from './reservation-marks.utils';
import { checkReservedNeighbors } from '@src/app/presentation/reservations/utils/reservation';
import { DictionariesService } from '@src/app/shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';
import {
  ICustomObject,
  IFloor,
  ReservationSocialDistanceCheck,
  IUser,
  IWorkplace,
  IWorkplaceReservation,
  IRoom,
} from '@src/app/shared/http/models/database.model';
import { ReservationsApiService } from '@src/app/shared/http/services/reservations-api.service';
import { DEFAULT_MAP_POINT, DEFAULT_USER_AVATAR } from '@src/app/shared/http/utils/images.const';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of, Subject } from 'rxjs';
import { debounceTime, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { ImageBlobService } from '@src/app/shared/images/services/image-blob.service';
import { ReservationType } from '@src/app/shared/http/models/meta.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationMarksService {
  constructor(
    private $measurements: MeasurementsService,
    private $dictionary: DictionariesService,
    private $route: ActivatedRoute,
    private $images: ImageBlobService,
    private $api: ReservationsApiService,
    private $user: UserService,
    private datePipe: DatePipe,
    private $map: MapService,
  ) {}
  reload() {
    this._reload.next();
  }

  get currentFloor$(): Observable<IFloor> {
    return this.$route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('floorId'));
        return this.$dictionary.getDictionaryItemByKey<IFloor>('floorMaps', id).pipe(
          tap((floor) => (this._floorWorkplaceReservationSocialDistanceCheck = floor?.workplaceReservationSocialDistanceCheck)),
          tap(() => this.$map.marksReady$.next(false)),
        );
      }),
    );
  }

  getFilterValue(): Date[] {
    return this._filter.getValue();
  }
  setDateFilterValue(range: Date[]) {
    this._filter.next(range);
  }

  get filterValueOptimize$(): Observable<any> {
    return this._filter.pipe(debounceTime(500));
  }
  private get parkingLots$(): Observable<IWorkplace[]> {
    return this.$dictionary.getDictionary<IWorkplace[]>('parkingLots');
  }
  private get rooms$(): Observable<IRoom[]> {
    return this.$dictionary.getDictionary<IRoom[]>('rooms');
  }
  private get workplaces$(): Observable<IWorkplace[]> {
    return this.$dictionary.getDictionary<IWorkplace[]>('workplaces');
  }

  private getCurrentRooms(
    floor: IFloor,
    places: IRoom[],
  ): Observable<{
    rooms: IRoom[];
  }> {
    return of({
      rooms: places.filter((place) => place.floorMapId === floor?.id),
    });
  }

  private getCurrentWorkplacesAndReservations(
    floor: IFloor,
    dates: Date[],
    places: IWorkplace[],
    disabledWorkplaces: number[],
  ): Observable<{
    workplaces: IWorkplace[];
    reservations: IWorkplaceReservation[];
  }> {
    return this.getReservations(floor, dates, 'workplace').pipe(
      switchMap((reservations) =>
        of(floor).pipe(
          map((floor) => places.filter((place) => place.floorMapId === floor?.id)),
          map((workplaces) =>
            workplaces.map((workplace) => {
              workplace.disabled =
                disabledWorkplaces.includes(workplace.id) || Boolean(reservations.find((r) => r.workplaceId === workplace.id));
              return workplace;
            }),
          ),
          map((workplaces) => ({ workplaces, reservations })),
        ),
      ),
    );
  }
  private getCurrentParkingLotsAndReservations(
    floor: IFloor,
    dates: Date[],
    places: IWorkplace[],
    disabledWorkplaces: number[],
  ): Observable<{
    parkingLots: IWorkplace[];
    parkingLotReservations: IWorkplaceReservation[];
  }> {
    return this.getReservations(floor, dates, 'parking').pipe(
      switchMap((parkingLotReservations) =>
        of(floor).pipe(
          map((floor) => places.filter((place) => place.floorMapId === floor?.id)),
          map((parkingLots) =>
            parkingLots.map((parkingLot) => {
              parkingLot.disabled =
                disabledWorkplaces.includes(parkingLot.id) ||
                Boolean(parkingLotReservations.find((r: any) => r.parkingLotId === parkingLot.id));
              return parkingLot;
            }),
          ),
          map((parkingLots) => ({ parkingLots, parkingLotReservations })),
        ),
      ),
    );
  }
  private getReservations(floor: IFloor, dates: Date[], type: ReservationType): Observable<IWorkplaceReservation[]> {
    if (floor && dates) {
      return this.$api
        .getMapReservationsByType(type, {
          floorMapId: floor.id,
          dateTimeFrom: this._getApiDate(dates[0]),
          dateTimeTo: this._getApiDate(dates[1]),
        })
        .pipe(shareReplay(1));
    } else {
      return of([]);
    }
  }

  get mapMarks$(): Observable<IMarkItem[]> {
    return combineLatest([
      this.workplaces$,
      this.$api.getWorkplacesDisabled$,
      this.currentFloor$,
      this.filterValueOptimize$,
      this.rooms$,
      this.parkingLots$,
      this.$api.getParkingLotsDisabled$,
      this._reload,
    ]).pipe(
      switchMap(([workplaces, disabledWorkplaces, floor, dates, rooms, parkingLots, disabledParkingLots]) =>
        forkJoin([
          this.getCurrentWorkplacesAndReservations(floor, dates, workplaces, disabledWorkplaces),
          this.getCurrentUsersWithWorkplace(floor, dates),
          this.getCurrentCustomObject(floor),
          this.getCurrentRooms(floor, rooms),
          this.getCurrentParkingLotsAndReservations(floor, dates, parkingLots, disabledParkingLots),
        ]),
      ),
      switchMap(
        ([{ workplaces, reservations }, usersWithWorkplaces, customObjects, { rooms }, { parkingLots, parkingLotReservations }]) => {
          const roomImages: Record<number, any> = rooms
            .map((room) => {
              return [room.id, this.$images.getImageBlob(room.avatarImageUrl)];
            })
            .reduce((acc, [id, _img]) => ({ ...acc, [id as number]: _img }), {});

          const workplaceImages: Record<number, any> = workplaces
            .map((place) => {
              const reservation = reservations.find((r) => r.workplaceId === place.id);
              place.reservation = reservation;
              if (this._floorWorkplaceReservationSocialDistanceCheck === 'FORBIDDEN') {
                place.disabled = checkReservedNeighbors(place, reservations);
              }
              const img = this._markDistributionImage(reservation, place);
              return [place.id, this.$images.getImageBlob(img)];
            })
            .reduce((acc, [id, _img]) => ({ ...acc, [id as number]: _img }), {});
          const parkingLotImages: Record<number, any> = parkingLots
            .map((place) => {
              const reservation = parkingLotReservations.find((r: any) => r.parkingLotId === place.id);
              place.disabled = !!reservation || place.disabled;
              place.reservation = reservation;
              const img = this._markDistributionImage(reservation, place);
              return [place.id, this.$images.getImageBlob(img)];
            })
            .reduce((acc, [id, _img]) => ({ ...acc, [id as number]: _img }), {});
          const usersImages: Record<number, Observable<any>> = usersWithWorkplaces.reduce(
            (acc, item) => ({
              ...acc,
              [item.workplace.id as number]: this.$images.getImageBlob(item.user.avatarImageUrl || DEFAULT_USER_AVATAR),
            }),
            {},
          );

          // tslint:disable-next-line:max-line-length
          const customObjectsImages: Record<number, Observable<any>> = customObjects.reduce(
            (acc, customObject) => ({
              ...acc,
              [customObject.id as number]: this.$images.getImageBlob(customObject.imageNormalUrl || DEFAULT_MAP_POINT),
            }),
            {},
          );
          return combineLatest([
            forkJoin(forkJoinObjectEmpty(workplaceImages)),
            forkJoin(forkJoinObjectEmpty(usersImages)),
            forkJoin(forkJoinObjectEmpty(customObjectsImages)),
            forkJoin(forkJoinObjectEmpty(roomImages)),
            forkJoin(forkJoinObjectEmpty(parkingLotImages)),
          ]).pipe(
            map(([wImages, uImages, coImages, rImages, pImages]) => ({
              workplaceImages: wImages,
              usersImages: uImages,
              customObjectsImages: coImages,
              places: workplaces,
              usersWithWorkplaces,
              customObjects,
              rooms,
              roomImages: rImages,
              parkingLots,
              parkingLotImages: pImages,
            })),
          );
        },
      ),
      map(
        ({
          workplaceImages,
          usersImages,
          customObjectsImages,
          places,
          usersWithWorkplaces,
          customObjects,
          rooms,
          roomImages,
          parkingLots,
          parkingLotImages,
        }) => {
          const marks: IMarkItem[] = [];
          if (places?.length > 0) {
            places.forEach((place) => {
              marks.push(generateWorkplaceMark(place, workplaceImages[place.id]));
            });
          }
          if (parkingLots?.length > 0) {
            parkingLots.forEach((parkingLot) => {
              marks.push(generateParkingLotMark(parkingLot, parkingLotImages[parkingLot.id]));
            });
          }

          if (rooms?.length > 0) {
            rooms.forEach((room) => {
              marks.push(generateRoomMark(room, roomImages[room.id]));
            });
          }

          if (usersWithWorkplaces?.length > 0) {
            usersWithWorkplaces.forEach(({ user: rUser, workplace }) => {
              if (workplace && rUser) {
                marks.push(generateUserMark(workplace, rUser, usersImages[workplace.id], 'Users'));
              }
            });
          }
          if (customObjects?.length > 0) {
            customObjects.forEach((cObj) => {
              marks.push(generateCustomObjectMark(cObj, customObjectsImages[cObj.id]));
            });
          }
          return marks;
        },
      ),
      // tap(() => this._loading.next(false)),
      shareReplay(1),
    );
  }

  private getCurrentCustomObject(floor: IFloor): Observable<ICustomObject[]> {
    return of(floor).pipe(
      switchMap((floor) => {
        if (!floor) {
          return of(null);
        }
        return this.$dictionary
          .getDictionary<ICustomObject[]>('customObjects')
          .pipe(map((objs) => objs.filter((obj) => obj.floorMapId === floor?.id)));
      }),
      filter((data) => Boolean(data)),
    );
  }
  private getCurrentUsersWithWorkplace(floor: IFloor, dates: Date[]): Observable<{ user: IUser; workplace: IWorkplace }[]> {
    if (floor && dates) {
      return forkJoin([
        this.$dictionary.getDictionary<IUser[]>('labels'),
        this.$api.getWorkplaceReservations({
          floorMapId: floor.id,
          dateTimeFrom: this._getApiDate(dates[0]),
          dateTimeTo: this._getApiDate(dates[1]),
        }),
        this.$dictionary.getDictionary<IWorkplace[]>('workplaces'),
      ]).pipe(
        map(([users, reservations, workplaces]) => {
          return reservations.map((r) => ({
            user: users.find((u) => u.id === r.labelId),
            workplace: workplaces.find((w) => w.id === r.workplaceId),
          }));
        }),
        shareReplay(1),
      );
    } else {
      return of([]);
    }
  }

  private _floorWorkplaceReservationSocialDistanceCheck: ReservationSocialDistanceCheck = null;
  private readonly _filter: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private readonly _reload: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);

  private _markDistributionImage(reservation: IWorkplaceReservation, workplace: IWorkplace): string {
    let img = workplace.imageFreeUrl;
    if (workplace.disabled) {
      img = workplace.imageDisabledUrl;
    }
    if (reservation) {
      if (reservation.labelId === this.$user.info.id) {
        img = reservation.status === 'CONFIRMED' ? workplace.imageReservedByMeUrl : workplace.imageReservedByMeNotConfirmedUrl;
      } else {
        img = workplace.imageReservedByUserUrl;
      }
    }
    return img || DEFAULT_MAP_POINT;
  }
  private _getApiDate(date: Date): string {
    return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
  }
}
