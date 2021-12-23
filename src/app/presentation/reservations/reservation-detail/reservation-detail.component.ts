import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {Observable, of} from 'rxjs';
import {map, pluck, switchMap} from 'rxjs/operators';
import {ReservationsApiService} from '@shared/http/services/reservations-api.service';
import {StatusesService} from '@shared/dictionaries/services/statuses.service';
import {IHttpResponse} from '@core/models/http.model';
import {DictionariesService} from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationDetailComponent implements OnInit, OnDestroy {

  //#region Variable declaration
  reservation: any;
  workPlaceId: number;
  dateTimeFormat: string;
  //#endregion

   //#region constructor
  constructor(private _api: ReservationsApiService,
              private $statuses: StatusesService,
              private _dictionaries: DictionariesService,
              private _measurementsService: MeasurementsService,
              private _route: ActivatedRoute,
              private _cdr: ChangeDetectorRef) {
    this.dateTimeFormat = this._measurementsService.getMeasurementByName('dateTime');
  }
  //#endregion

  //#region Angular inbuilt functions e.g. ngOnInit
  ngOnInit(): void {
    this._route.params.subscribe(response => {
      this.workPlaceId = response.id;
    });
    this._reservationReq$(this.workPlaceId).subscribe((response) => {
      this.reservation = response[0];
      this._cdr.markForCheck();
    });
    const element  = document.querySelector('.section-content');
    if (element){
      element.classList.add('active');
    }
  }

  ngOnDestroy() {
    const element  = document.querySelector('.section-content');
    if (element){
      element.classList.remove('active');
    }
  }
  //#endregion

  //#region private functions

  /**
   * @param id
   * get reservation data from resrvation Id
   */
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
  //#endregion
}
