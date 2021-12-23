import { DatePipe } from '@angular/common';
import { Injectable, TemplateRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSelectValue, IDropdownSelectValues } from '@base/dropdown-select/dropdown-select.model';
import { IMarkItem, MarkItemLogicType } from '@base/map/map-mark/map-mark.model';
import { MapService } from '@base/map/map.service';
import { NotificationsService } from '@core/services/notifications.service';
import { UserService } from '@core/services/user.service';
import { IOfficesMapControl, IOfficesMapSwitcher, OfficesMapFilter } from '@presentation/offices/offices-map/offices-map.model';
import {
  breakdownDate,
  findSliderRange,
  getInitDate,
  getSliderLimitValue,
  workDateRange,
} from '@presentation/offices/offices-map/offices-map.utils';
import { checkReservedNeighbors, getDistanceCheckConfirmModal } from '@presentation/reservations/utils/reservation';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import {
  IArea,
  ICustomObject,
  IFloor,
  ReservationSocialDistanceCheck,
  IUser,
  IWorkplace,
  IWorkplaceReservation,
  IRoom,
  IAppointment,
  IAreaPolygon,
} from '@shared/http/models/database.model';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { DEFAULT_MAP_POINT, DEFAULT_USER_AVATAR } from '@shared/http/utils/images.const';
import { SettingsService } from '@shared/settings/settings.service';
import { UserOfficesService } from '@src/app/core/services/user-offices.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of, Subject, zip } from 'rxjs';
import { concatMap, debounceTime, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { ImageBlobService } from '@shared/images/services/image-blob.service';
import { ReservationMarksService } from '@src/app/core/services/reservation-marks.service';
import { forkJoinObjectEmpty, generateUserMark } from '@src/app/core/services/reservation-marks.utils';

@Injectable()
export class OfficesMapService {
  constructor(
    private $measurements: MeasurementsService,
    private $date: DatePipe,
    private $dictionary: DictionariesService,
    private $userOffices: UserOfficesService,
    private $route: ActivatedRoute,
    private $settings: SettingsService,
    private $images: ImageBlobService,
    private $api: ReservationsApiService,
    private $reservationMarks: ReservationMarksService,
    private $user: UserService,
    private datePipe: DatePipe,
    private $map: MapService,
    private $modal: NzModalService,
    private $notifications: NotificationsService,
  ) {
    this.reload();
  }

  reload() {
    this.$reservationMarks.reload();
    this._loading.next(true);
  }
  get filter(): OfficesMapFilter {
    const minReservationDuration: number = this.$settings.getSettingByName<number>('workplaceReservationDurationMinSeconds') * 1000;
    const workHours: number[] = [
      this.$settings.getSettingByName<number>('workplaceReservationBeginHourDefault'),
      this.$settings.getSettingByName<number>('workplaceReservationEndHourDefault'),
    ];
    const [sliderMin, sliderMax] = getSliderLimitValue(workHours);
    const dates = getInitDate(workHours, minReservationDuration);
    const marks = breakdownDate(workDateRange(workHours), minReservationDuration).reduce((acc, val) => {
      acc[val] = '';
      return acc;
    }, {});
    return {
      date: {
        value: dates,
        format: this.$measurements.getMeasurementByName('shortDate'),
        workHours,
      },
      slider: {
        value: findSliderRange(dates),
        step: minReservationDuration,
        min: sliderMin,
        max: sliderMax,
        tipFormatter: (value: number) => this.$date.transform(new Date(value), 'HH:mm'),
        disabled: false,
        tooltipVisible: 'default',
        marks,
      },
    };
  }

  get switcher(): IOfficesMapSwitcher {
    return {
      value: 0,
      items: [
        {
          icon: 'history',
          tooltip: 'Seat reservation',
        },
        {
          icon: 'user',
          tooltip: 'User search',
        },
      ],
    };
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
  // get currentPlaceId$(): Observable<[IWorkplace, boolean, boolean, any]> {
  //   return this.$route.paramMap.pipe(
  //     switchMap((params) => {
  //       const id = Number(params.get('placeId'));
  //       return combineLatest([
  //         this.$dictionary.getDictionaryItemByKey<IWorkplace>('workplaces', id),
  //         this.$map.marksReady$,
  //         this.$map.mapReady$,
  //         this.mapMarksWithPopup$,
  //       ]).pipe(debounceTime(500));
  //     }),
  //     map(([place, marksR, mapR, marks]) => {
  //       return [place, marksR, mapR, marks];
  //     })
  //   );
  // }

  get currentPlaceId$(): Observable<[Record<string, any>, boolean, boolean, any]> {
    return this.$route.paramMap.pipe(
      switchMap((params) => {
        if (params.get('type')) {
          return combineLatest([of(params), this.$map.marksReady$, this.$map.mapReady$, this.mapMarks$]).pipe(debounceTime(500));
        } else {
          return forkJoin([of(params), of(null), of(null), of([])]);
        }
      }),
      map(([params, marksR, mapR, marks]) => {
        const id = Number(params.get('placeId'));
        let type = params.get('type');
        if (type === 'customObject') {
          type = 'poi';
        }
        const place = marks.find((m) => m.id === id && m.logicType && m.logicType.toLowerCase() === type);
        return [place, marksR, mapR, marks];
      }),
    );
  }

  get allFloorsInBuilding$(): Observable<IDropdownSelectValues> {
    return combineLatest([this.currentFloor$, this.floors$]).pipe(
      map(([currentFloorMap, floorMaps]) => {
        const buildingId = currentFloorMap?.buildingId;
        return floorMaps
          .filter((floor) => floor.buildingId === buildingId)
          .map((floor) => {
            return {
              label: floor.name,
              value: floor.id,
            };
          });
      }),
      shareReplay(1),
    );
  }
  get mapImageUrl$(): Observable<SafeUrl> {
    return this.currentFloor$.pipe(
      tap(() => this._loading.next(true)),
      switchMap((floorMap) => {
        return floorMap ? this.$images.getImageBlob(floorMap.mapImageUrl) : of(null);
      }),
    );
  }
  get loading$(): Observable<boolean> {
    return this._loading.asObservable();
  }
  getFilterValue(): Date[] {
    return this.$reservationMarks.getFilterValue();
  }

  setDateFilterValue(range: Date[]) {
    this.$reservationMarks.setDateFilterValue(range);
  }

  get filterValueOptimize$(): Observable<any> {
    return this._filter.pipe(debounceTime(500));
  }
  get parkingLots$(): Observable<IWorkplace[]> {
    return this.$dictionary.getDictionary<IWorkplace[]>('parkingLots').pipe(tap((parkingLots) => (this._parkingLots = parkingLots)));
  }
  get workplaces$(): Observable<IWorkplace[]> {
    return this.$dictionary.getDictionary<IWorkplace[]>('workplaces').pipe(tap((workplaces) => (this._workplaces = workplaces)));
  }
  get rooms$(): Observable<IRoom[]> {
    return this.$dictionary.getDictionary<IRoom[]>('rooms').pipe(tap((rooms) => (this._rooms = rooms)));
  }
  get floors$(): Observable<IFloor[]> {
    return this.$userOffices.getMyOrderedFloors<IFloor[]>();
  }

  get mapMarks$(): Observable<any> {
    return combineLatest([this.$reservationMarks.mapMarks$, this.userComplexData$, this.workplaces$, this.rooms$, this.parkingLots$]).pipe(
      switchMap(([marks, { user, workplace }]) => {
        const userImage: Record<number, Observable<any>> = {
          [workplace?.id || 0]: this.$images.getImageBlob(user?.avatarImageUrl || DEFAULT_USER_AVATAR),
        };
        return forkJoin(forkJoinObjectEmpty(userImage)).pipe(
          map((userImage) => {
            marks = marks.filter((m) => m.logicType !== 'User');
            if (user && workplace) {
              marks.push(generateUserMark(workplace, user, userImage[workplace.id]));
            }
            return marks;
          }),
        );
      }),
      shareReplay(1),
      tap(() => this._loading.next(false)),
    );
  }
  get popup$(): Subject<TemplateRef<any>> {
    return this._popup;
  }
  get mapMarksWithPopup$(): Observable<any> {
    return combineLatest([this.popup$, this.mapMarks$]).pipe(
      map(([templateRef, marks]) => {
        return marks.map((_m) => {
          if (_m.logicType === 'Workplace' || _m.logicType === 'Room' || _m.logicType === 'ParkingLot') {
            // _m.popup = templateRef;
          }
          return _m;
        });
      }),
    );
  }
  get selectedWorkplace$(): Observable<Record<string, any>> {
    return this.$map.mark$;
  }
  // TODO shareReplay не помогает и запрос летит 6 раз (withLatestFrom)
  get userReservation$(): Observable<IWorkplaceReservation> {
    return this.userSelected$.pipe(
      switchMap((user) => {
        if (user) {
          return this.$api
            .getWorkplaceReservations({
              labelId: user.id,
            })
            .pipe(map((data) => (data?.length > 0 ? data[0] : null)));
        }
        return of(null);
      }),
      shareReplay(1),
    );
  }
  get userWorkplace$(): Observable<IWorkplace> {
    return this.userReservation$.pipe(
      switchMap((reservation) => {
        if (reservation) {
          return this.workplaces$.pipe(map((workplaces) => workplaces.find((w) => reservation.workplaceId === w.id)));
        }
        return of(null);
      }),
      shareReplay(1),
    );
  }
  get userFloor$(): Observable<IFloor> {
    return this.userWorkplace$.pipe(
      switchMap((workplace) => {
        if (workplace) {
          return this.floors$.pipe(map((floors) => floors.find((f) => f.id === workplace.floorMapId)));
        }
        return of(null);
      }),
    );
  }
  get userSelected$(): BehaviorSubject<IUser> {
    return this._userSelected;
  }
  get userComplexData$(): Observable<{
    user: IUser;
    reservation: IWorkplaceReservation;
    workplace: IWorkplace;
    floor: IFloor;
  }> {
    return zip(this.userSelected$, this.userReservation$, this.userWorkplace$, this.userFloor$).pipe(
      map(([user, reservation, workplace, floor]) => ({
        user,
        reservation,
        workplace,
        floor,
      })),
    );
  }
  get users$(): Observable<IUser[]> {
    return this.$dictionary.getDictionary('labels');
  }
  get currentCustomObject$(): Observable<ICustomObject[]> {
    return this.currentFloor$.pipe(
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
  get currentUsersWithWorkplace$(): Observable<{ user: IUser; workplace: IWorkplace }[]> {
    return combineLatest([this.currentFloor$, this.filterValueOptimize$]).pipe(
      switchMap(([floor, dates]) => {
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
          );
        } else {
          return of(null);
        }
      }),
    );
  }
  private _floorWorkplaceReservationSocialDistanceCheck: ReservationSocialDistanceCheck = null;
  private _workplaceReservations: IWorkplaceReservation[] = null;
  private _workplaces: IWorkplace[] = null;
  private _parkingLots: IWorkplace[] = null;
  private _rooms: IRoom[] = null;
  private readonly _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly _filter: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private readonly _popup: Subject<TemplateRef<any>> = new Subject<TemplateRef<any>>();
  private readonly _reload: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private readonly _userSelected: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  get areas$(): Observable<IArea[]> {
    return this.currentFloor$.pipe(
      switchMap((floor) =>
        forkJoin([this.$dictionary.getDictionary<IArea[]>('areas'), this.$dictionary.getDictionary<IAreaPolygon[]>('areaPolygons')]).pipe(
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

  currentRoom(id: number) {
    return this._rooms.find((w) => w.id === id);
  }
  currentWorkplace(id: number) {
    return this._workplaces.find((w) => w.id === id);
  }
  currentParkingLot(id: number) {
    return this._parkingLots.find((p) => p.id === id);
  }

  isConfirmation(workplaceId: number): boolean {
    if (this._floorWorkplaceReservationSocialDistanceCheck === 'CONFIRMATION') {
      const currentWorkplace = this._workplaces.find((w) => w.id === workplaceId);
      return checkReservedNeighbors(currentWorkplace, this._workplaceReservations);
    } else {
      return false;
    }
  }
  confirmationModal(id: number): void {
    const nzOnOk = () => {
      this.reservationWorkplace(id).then((res) => {
        if (res.success) {
          this.$notifications.success('Success', res.data.RESULT_SUCCESS);
          this.reload();
        } else {
          this.$notifications.error('OfficesMap.Error', res.error.message);
        }
      });
    };
    this.$modal.confirm(getDistanceCheckConfirmModal(nzOnOk));
  }
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
  dropdownSelect(value: IDropdownSelectValue = { label: 0, value: 0 }): Record<string, any> {
    return {
      values: [],
      value,
    };
  }
  getImageBlob(url: string): Observable<SafeUrl> {
    return this.$images.getImageBlob(url);
  }
  reservationParkingLot(id: number): Promise<any> {
    const [startDate, endDate] = this.getFilterValue();
    const params: Record<string, any> = {
      parkingLotId: id,
      labelId: this.$user.info.id,
      dateTimeFrom: this._getApiDate(startDate),
      dateTimeTo: this._getApiDate(endDate),
      tokenUUID: this.$user.info.tokenUUID,
    };
    return this.$api.putParkingLotReservation(params).toPromise();
  }
  reservationWorkplace(id: number): Promise<any> {
    const [startDate, endDate] = this.getFilterValue();
    const params: Record<string, any> = {
      workplaceId: id,
      labelId: this.$user.info.id,
      dateTimeFrom: this._getApiDate(startDate),
      dateTimeTo: this._getApiDate(endDate),
      tokenUUID: this.$user.info.tokenUUID,
    };
    return this.$api.putWorkplaceReservation(params).toPromise();
  }
  reservationRoom(id: number): Promise<any> {
    const [startDate, endDate] = this.getFilterValue();
    const reservations = [
      {
        appointmentRoomsList: [id],
        appointmentDateFrom: this._getApiDate(startDate),
        appointmentDateTo: this._getApiDate(endDate),
        recordCode: 'main',
        labelId: this.$user.info.id,
      },
    ];

    let params = { appointments: reservations };

    return this.$api.putReservationsByType('appointment', params).toPromise();
  }
}
