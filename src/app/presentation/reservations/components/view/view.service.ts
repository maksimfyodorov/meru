import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IHttpResponse} from '@core/models/http.model';
import {GlobalLoaderService} from '@core/services/global-loader.service';
import {DictionariesService} from '@shared/dictionaries/dictionaries.service';
import {StatusesService} from '@shared/dictionaries/services/statuses.service';
import {IAppointment, IFloor, IRoom} from '@shared/http/models/database.model';
import {ReservationType} from '@shared/http/models/meta.model';
import {ReservationsApiService} from '@shared/http/services/reservations-api.service';
import {DictionaryName} from '@src/app/shared/dictionaries/dictionaries.constants';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {map, pluck, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private _reload = new BehaviorSubject<null>(null);

  constructor(
    private _api: ReservationsApiService,
    private $route: ActivatedRoute,
    private _dictionaries: DictionariesService,
    private $statuses: StatusesService,
    private _loader: GlobalLoaderService,
  ) {
  }

  get reservation$(): Observable<any> {
    return combineLatest([this._routeId$, this._reload]).pipe(switchMap(([{id}, _r]) => this._reservationReq$(+id, _r)));
  }

  appointment$(id, type): Observable<IAppointment> {
    switch (type) {
      case 'appointment':
        return this._api.getAppointmentById(id);
      case 'parking':
        return this._reservationReq$(Number(id), 'parking');
      case 'workplace':
        return this._reservationReq$(Number(id), 'workplace');
      default:
        return of(null);
    }
  }

  appointmentAndRooms$(id): Observable<[IAppointment, IRoom[]]> {
    return this._api
      .getAppointmentById(id)
      .pipe(switchMap((app) => combineLatest([of(app ? app : null), app ? this.getRoomsByIds$(app.appointmentLocationIds) : of(null)])));
  }

  get placeType$(): Observable<ReservationType> {
    return this._routeId$.pipe(pluck('type'));
  }

  reload(): void {
    this._reload.next(null);
  }

  private get _routeId$(): Observable<Record<string, any>> {
    return this.$route.params;
  }

  private _reservationReq$(id: number, type: ReservationType): Observable<any> {
    return this._api
      .getReservationsByType(type, {
        id,
        statuses: this.$statuses.allStatusesCodes,
      })
      .pipe(
        pluck<any, any>('0'),
        switchMap((reservation) => {
          if (reservation) {
            switch (type) {
              case 'parking':
                return this._parkingReq$(reservation.parkingLotId).pipe(map((parkingLot) => [reservation, parkingLot]));
              default:
                return combineLatest([
                  of(reservation),
                  this._workplaceReq$(reservation.workplaceId),
                  this._dictionaries.getDictionary<IFloor[]>('floorMaps'),
                ]).pipe(
                  tap(data => {
                    const currentReservation = data[0];
                    const workplace = data[1];
                    const floors = data[2];
                    const floor = floors.find((f) => f.id === workplace.floorMapId);
                    currentReservation.floor = floor.name;
                    data.pop();
                  })
                )
            }
          } else {
            return of([null, null]);
          }
        }),
      );
  }

  private _workplaceReq$(id: number): Observable<IHttpResponse<any>> {
    return this._dictionaries.getDictionaryItemByKey('workplaces', id);
  }

  private _parkingReq$(id: number): Observable<IHttpResponse<any>> {
    return this._dictionaries.getDictionaryItemByKey('parkingLots', id);
  }

  getRoomsByIds$(ids: number[]): Observable<IRoom[]> {
    return this._dictionaries.getDictionary<IRoom[]>('rooms').pipe(map((rooms) => rooms.filter((r) => ids.includes(r.id))));
  }

  get fetchingData$(): Observable<any> {
    return combineLatest([this.$route.params, this._reload]).pipe(
      tap(() => this._loader.contentLoading$.next(true)),
      switchMap(([{id, type}, _r]) => {
        switch (type) {
          case 'appointment':
            return this.appointmentAndRooms$(decodeURIComponent(id));
          case 'parking':
            return this._reservationReq$(Number(id), 'parking');
          case 'workplace':
            return this._reservationReq$(Number(id), 'workplace');
          default:
            return of(null);
        }
      }),
    );
  }
}
