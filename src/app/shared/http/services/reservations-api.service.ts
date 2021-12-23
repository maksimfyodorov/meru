import { Injectable, Injector } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';
import { HttpMethod, IHttpResponse, IHttpResponseNotificationMessages } from '@core/models/http.model';
import {pluck, tap} from 'rxjs/operators';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';
import { IWorkplaceReservation, ReservationsType } from '@shared/http/models/database.model';
import { BaseApi } from '@shared/common/base/base.api';
import { ReservationType } from '@shared/http/models/meta.model';
import { IOrganizerAppointmentsRequest, IParkingLotsReservationsRequest } from '@shared/http/models/request.model';
import { IOrganizerAppointmentsResponse, IParkingLotsReservationsResponse } from '@shared/http/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationsApiService extends BaseApi {
  private _apiUrl = environment.apiUrl;
  private _getOrganizerAppointmentsUrl: string;
  private _getParkingLotReservationsUrl: string;

  constructor(protected injector: Injector, private _user: UserService) {
    super(injector);

    this.$config.getOne$<any>('metaUrl').subscribe(() => {
      this._getOrganizerAppointmentsUrl = this.$config.get<string>('getOrganizerAppointmentsUrl');
      this._getParkingLotReservationsUrl = this.$config.get<string>('getParkingLotReservationsUrl');
    });
  }

  getQRAction(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/getQRAction', params, {}, {}).pipe(filterNoProgressHttpEvent());
  }

  get getWorkplacesDisabled$(): Observable<number[]> {
    return this.$http.post(this._apiUrl + '/getWorkplacesDisabled').pipe(filterNoProgressHttpEvent(), pluck('data'));
  }

  get getParkingLotsDisabled$(): Observable<number[]> {
    return this.$http.post(this._apiUrl + '/getParkingLotsDisabled').pipe(filterNoProgressHttpEvent(), pluck('data'));
  }

  putReservationsByType<T = any>(type: ReservationType, params: Record<string, any> = {}): Observable<IHttpResponse<T>> {
    switch (type) {
      case 'appointment':
        return this.putAppointments(params);
      case 'parking':
        return this.putParkingLotReservations(params);
      case 'workplace':
      default:
        return this.putWorkplaceReservations(params);
    }
  }

  putWorkplaceReservations<T = any>(params: Record<string, any> = {}): Observable<IHttpResponse<T>> {
    return this.$http.post<T>(this._apiUrl + '/putWorkplaceReservations', params).pipe(filterNoProgressHttpEvent());
  }

  putParkingLotReservations(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/putParkingLotReservations', params).pipe(filterNoProgressHttpEvent());
  }

  putAppointments(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/putAppointments', params).pipe(filterNoProgressHttpEvent());
  }

  putWorkplaceReservation(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/putWorkplaceReservation', params).pipe(filterNoProgressHttpEvent());
  }

  putParkingLotReservation(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/putParkingLotReservation', params).pipe(filterNoProgressHttpEvent());
  }

  // TODO What is the difference between getOrganizerAppointments and getRoomsAppointments
  getReservationsByType(type: ReservationType, params: Record<string, any> = {}): Observable<ReservationsType<typeof type>> {
    switch (type) {
      case 'appointment':
        return this.getOrganizerAppointments(params as IOrganizerAppointmentsRequest);
      case 'parking':
        return this.getParkingLotsReservations(params as IParkingLotsReservationsRequest);
      default:
        return this.getWorkplaceReservations(params);
    }
  }

  getMapReservationsByType(type: ReservationType, params: Record<string, any> = {}): Observable<ReservationsType<typeof type>> {
    switch (type) {
      case 'appointment':
        return this.getRoomsAppointments(params);
      case 'parking':
        return this.getParkingLotsReservations(params);
      default:
        return this.getWorkplaceReservations(params);
    }
  }

  getOrganizerAppointments(params: IOrganizerAppointmentsRequest): Observable<IOrganizerAppointmentsResponse> {
    return this.$http
      .post<IOrganizerAppointmentsResponse>(this._getOrganizerAppointmentsUrl, params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}), pluck('data'));
  }

  getRoomsAppointments(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/getRoomsAppointments', params).pipe(filterNoProgressHttpEvent(), pluck('data'));
  }

  getRoomAppointments(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/getRoomAppointments', params).pipe(filterNoProgressHttpEvent(), pluck('data'));
  }

  getParkingLotsReservations(params: IParkingLotsReservationsRequest = {}): Observable<IParkingLotsReservationsResponse> {
    return this.$http
      .post<IParkingLotsReservationsResponse>(this._getParkingLotReservationsUrl, params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}), pluck('data'));
  }

  getWorkplaceReservations(
    params: Record<string, any> = {},
    messages: IHttpResponseNotificationMessages = {},
  ): Observable<IWorkplaceReservation[]> {
    return this.$http
      .post(this._apiUrl + '/getWorkplaceReservations', params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification(messages), pluck('data'));
  }

  getWorkplacesDisabledExpanded(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/getWorkplacesDisabledExpanded', params).pipe(filterNoProgressHttpEvent());
  }

  confirmReservation(type: ReservationType, id: string): Observable<IHttpResponse<any>> {
    const params: Record<string, any> = {};
    switch (type) {
      case 'parking':
        params.parkingLotReservationId = id;
        return this.confirmParkingLotReservation(params);
      case 'workplace':
      default:
        params.workplaceReservationId = id;
        return this.confirmWorkplaceReservation(params);
    }
  }

  confirmWorkplaceReservation(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/confirmWorkplaceReservation', params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}));
  }

  confirmParkingLotReservation(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/confirmParkingLotReservation', params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}));
  }

  approveReservation(type: ReservationType, id: string): Observable<IHttpResponse<any>> {
    const params: Record<string, any> = {};
    switch (type) {
      case 'parking':
        params.parkingLotReservationId = id;
        return this.approveParkingLotReservation(params);
      case 'workplace':
      default:
        params.workplaceReservationId = id;
        return this.approveWorkplaceReservation(params);
    }
  }

  approveWorkplaceReservation(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/approveWorkplaceReservation', params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}));
  }

  approveParkingLotReservation(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/approveParkingLotReservation', params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}));
  }

  cancelReservation(type: ReservationType, id: string): Observable<IHttpResponse<any>> {
    const params: Record<string, any> = {};
    switch (type) {
      case 'parking':
        params.parkingLotReservationId = id;
        return this.cancelParkingLotReservation(params);
      case 'workplace':
      default:
        params.workplaceReservationId = id;
        return this.cancelWorkplaceReservation(params);
    }
  }

  cancelWorkplaceReservation(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/cancelWorkplaceReservation', params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}));
  }

  cancelParkingLotReservation(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/cancelParkingLotReservation', params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}));
  }

  denyReservation(type: ReservationType, id: string): Observable<IHttpResponse<any>> {
    const params: Record<string, any> = {};
    switch (type) {
      case 'parking':
        params.parkingLotReservationId = id;
        return this.denyParkingLotReservation(params);
      case 'workplace':
      default:
        params.workplaceReservationId = id;
        return this.denyWorkplaceReservation(params);
    }
  }

  denyWorkplaceReservation(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/denyWorkplaceReservation', params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}));
  }

  denyParkingLotReservation(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/denyParkingLotReservation', params)
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}));
  }

  getUserAppointments(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/getUserAppointments', params).pipe(filterNoProgressHttpEvent(), pluck('data'));
  }

  callReservationAction<T extends any = Record<string, any>, U extends any = Record<string, any>>(
    url: string,
    method: HttpMethod,
    data: T,
    messages: IHttpResponseNotificationMessages,
  ): Observable<IHttpResponse<U>> {
    return this.$http.request<U>(method, url, data).pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification(messages));
  }

  getAppointmentById(id): Observable<any> {
    return this.$http
      .post(this._apiUrl + '/getAppointmentById', {
        appointmentId: decodeURIComponent(id),
      })
      .pipe(filterNoProgressHttpEvent(), this.$httpHelper.responseNotification({}), pluck('data'));
  }

  saveAppointmentEmails(id: string, emails: string[]): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/addAppointmentAttendees', {
        appointmentId: id,
        appointmentAttendees: emails,
      })
      .pipe(
        filterNoProgressHttpEvent(),
        this.$httpHelper.responseNotification({
          successTitle: 'Success',
          successMessage: 'Members saved',
          errorTitle: 'Error',
          errorMessage: 'Failed to save members',
        }),
        pluck('data'),
      );
  }

  closeAppointment(id: string): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/closeAppointment', {
        appointmentId: id,
      })
      .pipe(
        filterNoProgressHttpEvent(),
        this.$httpHelper.responseNotification({
          successTitle: 'Success',
          successMessage: 'Appointment closed successfully',
          errorTitle: 'Error',
          errorMessage: 'Failed to close appointment',
        }),
        pluck('data'),
      );
  }

  confirmAppointment(id: string): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/confirmAppointment', {
        appointmentId: id,
      })
      .pipe(
        filterNoProgressHttpEvent(),
        this.$httpHelper.responseNotification({
          successTitle: 'Success',
          successMessage: 'Appointment confirmed successfully',
          errorTitle: 'Error',
          errorMessage: 'Failed to confirm appointment',
        }),
        pluck('data'),
      );
  }

  deleteAppointment(id: string): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/cancelAppointment', {
        appointmentId: id,
      })
      .pipe(
        filterNoProgressHttpEvent(),
        this.$httpHelper.responseNotification({
          successTitle: 'Success',
          successMessage: 'Appointment successfully deleted',
          errorTitle: 'Error',
          errorMessage: 'Failed to delete appointment"',
        }),
        pluck('data'),
      );
  }

  checkAppointmentAttendeesAvailability(from: string, to: string, emails: string[], id: string): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/checkAppointmentAttendeesAvailability', {
        requestDateFrom: from,
        requestDateTo: to,
        appointmentAttendees: emails,
        requestAppointmentId: id,
      })
      .pipe(
        filterNoProgressHttpEvent(),
        this.$httpHelper.responseNotification({
          errorTitle: 'Error',
          errorMessage: 'Failed to check user statuses',
        }),
        pluck('data'),
      );
  }

  getK2Scenarios(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/k2GetScenarios', params, {}, {}).pipe(filterNoProgressHttpEvent());
  }

  openK2Session(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/k2OpenSession', params, {}, {}).pipe(filterNoProgressHttpEvent());
  }

  putK2SessionStep(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/k2PutSessionStep', params, {}, {}).pipe(filterNoProgressHttpEvent());
  }

  commitK2Session(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/k2CommitSession', params, {}, {}).pipe(filterNoProgressHttpEvent());
  }
}
