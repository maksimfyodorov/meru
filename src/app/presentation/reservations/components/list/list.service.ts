import { Injectable, Injector } from '@angular/core';
import { Complete } from '@core/decorators/complete.decorator';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { Params } from '@angular/router';
import { IList, IReservationsMeta } from '@presentation/reservations/models/list.model';
import { IListRow, IListRows, IReservationsActionParams } from '@base/list/models/list.model';
import { catchError, debounceTime, delay, filter, map, pluck, switchMap, tap } from 'rxjs/operators';
import { IListPaging } from '@base/list/models/list-paging.model';
import { IListSort } from '@base/list/models/list-sort.model';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { ActionParams, IActionNavigateParams, IActionRequestParams } from '@core/models/actions.model';
import { ReservationsMessagesService } from '@shared/messages/services/reservations-messages.service';
import {
  initQueryParams,
  mapDictionaryValues,
  mapStatusDictionary,
  maxFilterButtonVisibleWindowWidth,
  maxFilterHideWindowWith,
  prepareUrlQueryParams,
} from '@shared/common/utils/reservations.util';
import { BaseService } from '@shared/common/base/base.service';
import { QueryParamsBuilder } from '@shared/common/utils/query-params-builder.util';
import { IBodyQueryParams, IQueryParams, UrlQueryParams } from '@shared/common/models/query-params.model';
import { IFilterValues } from '@base/filters/filters.model';
import { StatusesService } from '@shared/dictionaries/services/statuses.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { UserService } from '@core/services/user.service';
import { MetaApiService } from '@shared/http/services/meta-api.service';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { AppError } from '@core/models/app-errorl.model';
import { IWorkplaceReservation } from '@shared/http/models/database.model';
import { ReservationType } from '@shared/http/models/meta.model';
import {
  getMetaNameByReservationType,
  mapMassActionRequest,
  prepareMassActionRequest,
} from '@presentation/reservations/components/list/list.utils';
import { endOfMonth, startOfMonth } from 'date-fns';
import { IStatusesMap } from '@shared/dictionaries/models/statuses.model';
import { IWorkplaceReservationsMassActionRequest } from '@shared/http/models/request.model';
import { MessageService } from '@core/services/message.service';
import { IWorkplaceReservationsMassActionResponse, IWorkplaceReservationsMassActionResponseMeta } from '@shared/http/models/response.model';
import { IHttpResponse } from '@core/models/http.model';
import { mapRequestBody } from '@base/action/action.utils';

@Injectable()
export class ListService extends BaseService {
  private _htmlElement: HTMLElement = document.documentElement;
  private _selectedRow: IListRow | null;
  private _queryParamsBuilder: QueryParamsBuilder = QueryParamsBuilder.default();
  private _previousType: string | null = null;

  @Subscriptions('destroy')
  private _subscriptions: Subscription;

  public constructor(
    protected injector: Injector,
    private $messages: ReservationsMessagesService,
    private $statuses: StatusesService,
    private $measurements: MeasurementsService,
    private $user: UserService,
    private $metaApi: MetaApiService,
    private $reservationsApi: ReservationsApiService,
    private $message: MessageService,
  ) {
    super(injector);
    this._queryParamsBuilder.currentLang = this.$localization.currentLang;
    this._queryParamsBuilder.dateFormat = this.filterDateFormat;
  }

  public get statusesMap(): IStatusesMap {
    return this.$statuses.statusesMap;
  }

  private get clientWidth(): number {
    return this._htmlElement.clientWidth;
  }

  public get showFiltersVisibleButton(): boolean {
    return this.clientWidth < maxFilterButtonVisibleWindowWidth;
  }

  public get queryParams$(): Observable<IQueryParams> {
    return this._queryParamsBuilder.paramsChange;
  }

  public get queryParams(): IQueryParams {
    return this._queryParamsBuilder.params;
  }

  public get urlQueryParams(): UrlQueryParams {
    return prepareUrlQueryParams(this._queryParamsBuilder.urlQueryParams, this.filterDateFormat, this.$localization.currentLang);
  }

  public get bodyQueryParams(): IBodyQueryParams {
    return this._queryParamsBuilder.bodyQueryParams;
  }

  public get type$(): Observable<ReservationType> {
    return this.routeParams$.pipe(pluck('type'));
  }

  public get list$(): Observable<IList> {
    return this.reservationsMeta$.pipe(
      switchMap((metaRes) => this.reservations$.pipe(map((dataRes) => [metaRes, dataRes]))),
      map(([meta, data]) => ({ meta, data })),
      switchMap(({ meta, data }) => mapDictionaryValues(this.$dictionaries, meta as IReservationsMeta, data as IListRows)),
      this.loadingOperator(false),
      catchError((e) => {
        console.log(e);
        return of(null);
      }),
    );
  }

  public isFilterVisible(filterVisible: boolean): boolean {
    return this.clientWidth < maxFilterHideWindowWith ? false : filterVisible;
  }

  public changePaging(paging: IListPaging): void {
    this.updateQueryParams(paging);
  }

  public changeSort(sort: IListSort): void {
    this.updateQueryParams(sort);
  }

  public changeFilters(filters: IFilterValues): void {
    this._queryParamsBuilder.set({ updateData: true });
    this.updateQueryParams(filters);
  }

  public callAction({ params, data }: IReservationsActionParams): void {
    if (params?.route) {
      this.callNavigationAction(params as IActionNavigateParams, data);
    }

    if (params?.url) {
      this.callActionRequest(params as IActionRequestParams, data);
    }
  }

  public callMassAction(actionParams: ActionParams, rows: IListRows): Observable<IWorkplaceReservationsMassActionResponseMeta[]> {
    if (actionParams?.route) {
      this.callNavigationAction(actionParams as IActionNavigateParams, rows[0] || {});
      return of([]);
    }

    if (actionParams?.url) {
      return this.callMassActionRequest(actionParams as IActionRequestParams, rows);
    }
  }

  public selectRow(row: IListRow | null, type: ReservationType): void {
    let id: any;

    switch (type) {
      case 'appointment':
        id = row.appointmentId;
        break;

      default:
        id = row.id;
    }

    id = encodeURIComponent(id);

    this._selectedRow = row;
    this.$nav.go(`view/${id}`, this.$route);
  }

  public createReservation(): void {
    this.$nav.go('create', this.$route);
  }

  @Complete
  public destroy(): void {
    this._queryParamsBuilder.destroy();
  }

  private get filterDateFormat(): string {
    return this.$measurements.getMeasurementByName('filterDate');
  }

  private get reservationsMeta$(): Observable<IReservationsMeta | AppError> {
    return combineLatest([this.type$.pipe(map(getMetaNameByReservationType)), this.reset$]).pipe(
      this.readyOperator(),
      this.resetErrorOperator(),
      this.loadingOperator(true),
      switchMap(([type]) => this.$metaApi.getMeta<IReservationsMeta>(type, this.$messages.loadingMetaErrorNotification)),
      this.readyOperator(true),
      filter((meta) => this.processMeta(meta)),
      tap(() => this.updateQueryParams({}, false)),
    );
  }

  private get reservations$(): Observable<IWorkplaceReservation[]> {
    return combineLatest([this.type$, this.routeQueryParams$, this.reload$]).pipe(
      filter(([, { updateData }]) => updateData === 'true'),
      this.loadingOperator(true),
      debounceTime(750),
      switchMap(([type]) => this.$reservationsApi.getReservationsByType(type, this.bodyQueryParams)),
      tap(() => this._queryParamsBuilder.setProperty('updateData', null)),
    );
  }

  private updateQueryParams(params: Params, update: boolean = true): void {
    if (update) {
      this._queryParamsBuilder.updateQueryParams(params);
    }

    this.$nav.go([], { queryParams: this.urlQueryParams });
  }

  private callNavigationAction({ relativeRoute, route }: IActionNavigateParams, data: Record<string, any>): void {
    this.$nav.goToUrl(this.$url.createUrl(route, data), {
      relativeTo: relativeRoute ? this.$route : null,
      queryParams: {},
    });
  }

  private callActionRequest(actionRequestParams: IActionRequestParams, data: Record<string, any>): void {
    this.actionRequest(actionRequestParams, data).subscribe((result) => this.finishCallAction(result));
  }

  private callMassActionRequest(
    { url, method, body }: IActionRequestParams,
    reservations: IListRows,
  ): Observable<IWorkplaceReservationsMassActionResponseMeta[]> {
    const requestData: IWorkplaceReservationsMassActionRequest = prepareMassActionRequest(reservations, body);
    if (Array.isArray(requestData.reservations)) {
      requestData.reservations = requestData.reservations.map((r) => {
        delete r.qr;
        return r;
      });
    }

    this.loading = true;

    return this.$reservationsApi
      .callReservationAction<IWorkplaceReservationsMassActionRequest, IWorkplaceReservationsMassActionResponse>(
        url,
        method,
        requestData,
        {},
      )
      .pipe(
        tap(({ success }) => this.finishCallAction(success)),
        map((response: IHttpResponse<IWorkplaceReservationsMassActionResponse>) =>
          mapMassActionRequest(response, reservations, this.$message),
        ),
        tap(() => (this.loading = false)),
      );
  }

  private finishCallAction(result: boolean): void {
    result ? this.reload() : (this.loading = false);
  }

  private actionRequest({ url, method, messages, body }: IActionRequestParams, data: Record<string, any>): Observable<boolean> {
    const requestData: Record<string, any> = mapRequestBody(data, body);

    url = this.$url.createUrl(url, data);
    messages = this.$messages.getActionNotificationsMessages(messages);

    return of(url).pipe(
      this.loadingOperator(true),
      debounceTime(250),
      switchMap((_url: string) => this.$reservationsApi.callReservationAction(_url, method, requestData, messages)),
      delay(1000),
      pluck('success'),
    );
  }

  private processMeta(meta: IReservationsMeta | AppError): meta is IReservationsMeta {
    const type: string = this.routeParams.type;
    const filters: Record<string, any> = {};
    const routeQueryParams: Record<string, any> = this._previousType && this._previousType !== type ? {} : this.routeQueryParams;

    if (meta instanceof AppError) {
      this.error = this.$messages.getLoadingMetaError(meta);
      this.loading = false;
      return false;
    }

    switch (this.$route.snapshot.params.type) {
      case 'workplace':
        filters.labelId = this.$user.info.id;
        break;

      case 'parking':
        filters.labelIds = [this.$user.info.id];
        break;

      case 'appointment':
        filters.requestAppointmentDateFrom = startOfMonth(new Date());
        filters.requestAppointmentDateTo = endOfMonth(new Date());
        break;
    }

    initQueryParams(this._queryParamsBuilder, meta, routeQueryParams, filters);
    mapStatusDictionary(meta.columns, this.$statuses.statuses);

    this._previousType = this.routeParams.type;

    return true;
  }
}
