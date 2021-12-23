import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, pluck, switchMap, tap } from 'rxjs/operators';
import { IHttpResponse } from '@core/models/http.model';
import { StatusesService } from '@shared/dictionaries/services/statuses.service';

@Injectable()
export class ViewService {
  private _reload = new BehaviorSubject<null>(null);
  constructor(
    private _api: ReservationsApiService,
    private $route: ActivatedRoute,
    private _dictionaries: DictionariesService,
    private $statuses: StatusesService
  ) {}

  get reservation$(): Observable<any> {
    return combineLatest([this._routeId$, this._reload])
      .pipe(switchMap(([id]) => this._reservationReq$(+id)));
  }

  reload(): void {
    this._reload.next(null);
  }

  private get _routeId$(): Observable<string> {
    return this.$route.params.pipe(pluck('id'));
  }

  private _reservationReq$(id: number): Observable<any> {
    return this._api.getWorkplaceReservations({
      id,
      statuses: this.$statuses.allStatusesCodes
    }).pipe(
      pluck<any, any>('0'),
      switchMap(reservation => {
        if (reservation) {
          return this._workplaceReq$(reservation.workplaceId).pipe(
            map((workplace) => [reservation, workplace])
          );
        } else {
          return of([null, null]);
        }
      }),
    );
  }

  private _workplaceReq$(id: number): Observable<IHttpResponse<any>> {
    return this._dictionaries.getDictionaryItemByKey('workplaces', id);
  }
}
