import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { IHttpResponse } from '@src/app/core/models/http.model';
import { UserService } from '@src/app/core/services/user.service';
import { DictionaryName } from '@src/app/shared/dictionaries/dictionaries.constants';
import { DictionariesService } from '@src/app/shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';
import {
  IAppointment,
  IFloor,
  IPlace,
  IWorkplaceReservation,
} from '@src/app/shared/http/models/database.model';
import { ReservationType } from '@src/app/shared/http/models/meta.model';
import { ReservationsApiService } from '@src/app/shared/http/services/reservations-api.service';
import { SettingsService } from '@src/app/shared/settings/settings.service';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  IReservationByQr,
  ReservationDateRange,
  ReservationObjectType,
} from './reservation-by-qr.model';
import { getInitDate, getReservationId } from './reservation-by-qr.util';

@Injectable()
export class ReservationByQRService {
  public constructor(
    private $api: ReservationsApiService,
    private $settings: SettingsService,
    private $measurements: MeasurementsService,
    private $dictionary: DictionariesService,
    private $user: UserService,
    private datePipe: DatePipe
  ) {}

  public reservationPlaceByType(
    objectType: ReservationObjectType,
    placeId: number,
    dates: Date[]
  ): Observable<any> {
    const reservationType = this.getReservationType(objectType);
    const reservations = [
      this.setReservationByType(reservationType, 'main', placeId, dates),
    ];

    const params: Record<string, any> = {};
    switch (reservationType) {
      case 'appointment':
        params.appointments = reservations;
        break;
      case 'parking':
        params.reservations = reservations;
        break;
      default:
        params.reservations = reservations;
        break;
    }
    return this.$api
      .putReservationsByType(reservationType, params)
      .pipe(map((response) => response?.data));
  }

  public cancelReservationByType(
    objectType: ReservationObjectType,
    placeId: number
  ): Observable<boolean> {
    const reservationType = this.getReservationType(objectType);
    let request: Observable<IHttpResponse<any>>;
    switch (reservationType) {
      case 'appointment':
        request = this.$api.deleteAppointment(placeId.toString());
      default:
        request = this.$api.cancelReservation(
          reservationType,
          placeId.toString()
        );
    }
    return request.pipe(map((response) => response.success));
  }

  public confirmReservationByType(
    objectType: ReservationObjectType,
    placeId: number
  ): Observable<boolean> {
    const reservationType = this.getReservationType(objectType);
    let request: Observable<IHttpResponse<any>>;
    switch (reservationType) {
      case 'appointment':
        request = this.$api.confirmAppointment(placeId.toString());
      default:
        request = this.$api.confirmReservation(
          reservationType,
          placeId.toString()
        );
    }
    return request.pipe(map((response) => response.success));
  }

  getReservationType(type: ReservationObjectType): ReservationType {
    switch (type) {
      case 'WORKPLACE':
        return 'workplace';
      case 'PARKING_LOT':
        return 'parking';
      case 'APPOINTMENT':
        return 'appointment';
      default:
        return 'workplace';
    }
  }

  private setReservationByType(
    type: ReservationType,
    recordCode: string,
    placeId: number,
    dates: Date[]
  ): Record<string, any> {
    return {
      recordCode: `${recordCode}`,
      ...((type === 'workplace' && {
        workplaceId: placeId,
        labelId: this.$user.info.id,
        dateTimeFrom: this._getApiDate(dates[0]),
        dateTimeTo: this._getApiDate(dates[1]),
      }) ||
        {}),
      ...((type === 'parking' && {
        parkingLotId: placeId,
        labelId: this.$user.info.id,
        dateTimeFrom: this._getApiDate(dates[0]),
        dateTimeTo: this._getApiDate(dates[1]),
      }) ||
        {}),
      ...((type === 'appointment' && {
        appointmentRoomsList: [placeId],
        appointmentDateFrom: this._getApiDate(dates[0]),
        appointmentDateTo: this._getApiDate(dates[1]),
      }) ||
        {}),
    };
  }

  private _getApiDate(date: Date): string {
    return this.datePipe.transform(
      date,
      this.$measurements.getMeasurementByName('filterDate')
    );
  }

  public getReservationByQR(qrCode: string): Observable<IReservationByQr> {
    const body: Record<string, any> = {};
    body.qrCode = qrCode;
    return this.$api.getQRAction(body).pipe(
      switchMap((response) => {
        if (response.success) {
          const reservation: IReservationByQr = response.data;
          if (
            reservation.actionType === 'WORKPLACE_RESERVATION_ALREADY_EXISTS'
          ) {
            let reservedPlaceId: number = getReservationId(reservation);
            let dicName: DictionaryName;
            if (reservation.objectType === 'APPOINTMENT') {
              dicName = 'rooms';
            } else {
              dicName = 'workplaces';
            }

            return combineLatest([
              this.$dictionary.getDictionaryItemByKey<IFloor>(
                'floorMaps',
                reservation.objectData.floorMapId
              ),
              this.$dictionary.getDictionaryItemByKey<IPlace>(
                dicName,
                reservedPlaceId
              ),
            ]).pipe(
              map(([floor, place]) => {
                reservation.floor = floor;
                reservation.objectData = place;
                return reservation;
              })
            );
          } else {
            return this.$dictionary
              .getDictionaryItemByKey<IFloor>(
                'floorMaps',
                reservation.objectData.floorMapId
              )
              .pipe(
                map((floor) => {
                  reservation.floor = floor;
                  return reservation;
                })
              );
          }
        } else {
          return of(null);
        }
      })
    );
  }

  get reservationDateRange(): ReservationDateRange {
    const minReservationDuration: number =
      this.$settings.getSettingByName<number>(
        'workplaceReservationDurationMinSeconds'
      ) * 1000;
    const workHours: number[] = [
      this.$settings.getSettingByName<number>(
        'workplaceReservationBeginHourDefault'
      ),
      this.$settings.getSettingByName<number>(
        'workplaceReservationEndHourDefault'
      ),
    ];
    const dates = getInitDate(workHours, minReservationDuration);
    return {
      value: dates,
      format: this.$measurements.getMeasurementByName('date'),
      workHours,
    };
  }
}
