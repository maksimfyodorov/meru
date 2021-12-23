import { Injectable, Injector, TemplateRef } from '@angular/core';
import { BaseService } from '@shared/common/base/base.service';
import { QueryParamsBuilder } from '@shared/common/utils/query-params-builder.util';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { ReservationsMessagesService } from '@shared/messages/services/reservations-messages.service';
import { LayoutSharedService } from '@app/layout/layout-shared.service';
import { StatusesService } from '@shared/dictionaries/services/statuses.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { UserService } from '@core/services/user.service';
import { MetaApiService } from '@shared/http/services/meta-api.service';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { User } from '@core/models/user.model';
import {
  filterActionsColumn,
  initQueryParams,
  mapActions,
  mapDictionaryValues,
  prepareUrlQueryParams
} from '@shared/common/utils/reservations.util';
import { IBodyQueryParams, IQueryParams, UrlQueryParams } from '@shared/common/models/query-params.model';
import { ReservationType } from '@shared/http/models/meta.model';
import { catchError, debounceTime, delay, filter, map, pluck, switchMap, tap } from 'rxjs/operators';
import { getRequestsMetaNameByType } from '@presentation/team/team-reservations/team-reservations.utils';
import { IList, IReservationsMeta } from '@presentation/reservations/models/list.model';
import { IListRows, IReservationsActionParams } from '@base/list/models/list.model';
import { IListPaging } from '@base/list/models/list-paging.model';
import { IListSort } from '@base/list/models/list-sort.model';
import { IFilterValues } from '@base/filters/filters.model';
import { ActionParams, IActionNavigateParams, IActionRequestParams } from '@core/models/actions.model';
import { Complete } from '@core/decorators/complete.decorator';
import { AppError } from '@core/models/app-errorl.model';
import { IWorkplaceReservation } from '@shared/http/models/database.model';
import { Params } from '@angular/router';
import { IRequestsMeta } from '@presentation/team/team-requests/components/team-requests/team-requests.model';
import {mapRequestBody} from '@base/action/action.utils';
import { IWorkplaceReservationsMassActionResponse, IWorkplaceReservationsMassActionResponseMeta } from '@shared/http/models/response.model';
import { IWorkplaceReservationsMassActionRequest } from '@shared/http/models/request.model';
import { mapMassActionRequest, prepareMassActionRequest } from '@presentation/reservations/components/list/list.utils';
import { IHttpResponse } from '@core/models/http.model';
import { MessageService } from '@core/services/message.service';

@Injectable()
export class TeamRequestsService extends BaseService {
  private _queryParamsBuilder: QueryParamsBuilder = QueryParamsBuilder.default();

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
    private $message: MessageService
  ) {
    super(injector);
    this._queryParamsBuilder.currentLang = this.$localization.currentLang;
    this._queryParamsBuilder.dateFormat = this.filterDateFormat;
  }

  public get user(): User {
    return this.$user.info as User;
  }

  public get queryParams$(): Observable<IQueryParams> {
    return this._queryParamsBuilder.paramsChange;
  }

  public get queryParams(): IQueryParams {
    return this._queryParamsBuilder.params;
  }

  public get urlQueryParams(): UrlQueryParams {
    return prepareUrlQueryParams(
      this._queryParamsBuilder.urlQueryParams,
      this.filterDateFormat,
      this.$localization.currentLang
    );
  }

  public get bodyQueryParams(): IBodyQueryParams {
    return this._queryParamsBuilder.bodyQueryParams;
  }

  public get type$(): Observable<ReservationType> {
    return this.routeParams$.pipe(pluck('type'));
  }

  public get metaName$(): Observable<string> {
    return this.type$.pipe(map(getRequestsMetaNameByType));
  }

  public get requestsList$(): Observable<IList> {
    return this.requestsMeta$.pipe(
      switchMap((metaRes) =>
        this.requestsData$.pipe(map(dataRes => [ metaRes, dataRes ]))
      ),
      this.loadingOperator(),
      map(([ meta, data ]) => ({ meta, data })),
      switchMap(({ meta, data }) => mapDictionaryValues(this.$dictionaries, meta as IReservationsMeta, data as IListRows)),
      switchMap(({ meta, data }) => mapActions(this.$dictionaries, meta, data, this.user)),
      this.loadingOperator(false),
      catchError((e) => {
        console.log(e);
        return of(null);
      })
    );
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

  @Complete
  public destroy(): void {
    this._queryParamsBuilder.destroy();
  }

  private get filterDateFormat(): string {
    return this.$measurements.getMeasurementByName('filterDate');
  }

  private get requestsMeta$(): Observable<IRequestsMeta | AppError> {
    return combineLatest([
      this.metaName$,
      this.reset$,
    ]).pipe(
      this.readyOperator(),
      this.resetErrorOperator(),
      this.loadingOperator(true),
      switchMap(([ name ]) =>
        this.$metaApi.getMeta<IRequestsMeta>(name, this.$messages.loadingMetaErrorNotification)
      ),
      this.readyOperator(true),
      filter((meta) => this.processMeta(meta)),
      switchMap((meta) => this.initQueryParams(meta as IRequestsMeta)),
      tap(() => this.updateQueryParams({}, false))
    );
  }

  private get requestsData$(): Observable<IWorkplaceReservation[]> {
    return combineLatest([
      this.type$,
      this.routeQueryParams$,
      this.reload$
    ]).pipe(
      filter(([ , { updateData }, ]) => updateData === 'true'),
      this.loadingOperator(true),
      debounceTime(750),
      switchMap(([ type ]) =>
        this.$reservationsApi.getReservationsByType(type, this.bodyQueryParams)
      ),
      tap(() => this._queryParamsBuilder.setProperty('updateData', null))
    );
  }

  private callNavigationAction(
    {relativeRoute, route}: IActionNavigateParams,
    data: Record<string, any>
  ): void {
    this.$nav.goToUrl(this.$url.createUrl(route, data), {
      relativeTo: relativeRoute ? this.$route : null,
      queryParams: {},
    });
  }

  private callMassActionRequest({url, method, body}: IActionRequestParams, reservations: IListRows): Observable<IWorkplaceReservationsMassActionResponseMeta[]> {
    const requestData: IWorkplaceReservationsMassActionRequest = prepareMassActionRequest(reservations, body);

    this.loading = true;

    return this.$reservationsApi
      .callReservationAction<IWorkplaceReservationsMassActionRequest, IWorkplaceReservationsMassActionResponse>(url, method, requestData, {})
      .pipe(
        tap(({success}) => this.finishCallAction(success)),
        map((response: IHttpResponse<IWorkplaceReservationsMassActionResponse>) =>
          mapMassActionRequest(response, reservations, this.$message)
        )
      );
  }

  private finishCallAction(result: boolean): void {
    result ? this.reload() : this.loading = false;
  }

  private updateQueryParams(params: Params, update: boolean = true): void {
    if (update) {
      this._queryParamsBuilder.updateQueryParams(params);
    }

    this.$nav.go([], { queryParams: this.urlQueryParams });
  }

  private callActionRequest(
    { url, method, messages, body }: IActionRequestParams,
    data: Record<string, any>
  ): void {
    const requestData: Record<string, any> = mapRequestBody(data, body);
    url = this.$url.createUrl(url, data);
    messages = this.$messages.getActionNotificationsMessages(messages);

    of(url).pipe(
      this.loadingOperator(true),
      debounceTime(250),
      switchMap((url: string) =>
        this.$reservationsApi.callReservationAction(url, method, requestData, messages)
      ),
      delay(1000)
    ).subscribe(({ success }) => {
        success
          ? this.reload()
          : this.loading = false;
      }
    );
  }

  private processMeta(meta: IReservationsMeta | AppError): meta is IReservationsMeta {
    if (meta instanceof AppError) {
      this.error = this.$messages.getLoadingMetaError(meta);
      this.loading = false;
      return false;
    }

    filterActionsColumn(meta, this.user);

    return true;
  }

  private initQueryParams(meta: IRequestsMeta): Observable<IRequestsMeta> {
    const labelGroupsManager: number[] = this.user.labelGroupsManager;

    return this.$dictionaries.getDictionary('labels').pipe(
      map(labels =>
        labels
          .filter(({ labelGroups }) =>
            labelGroups.some(({ id }) => labelGroupsManager.includes(id))
          )
          .map(({ id }) => id)
      ),
      tap((labelIds) =>
        initQueryParams(this._queryParamsBuilder, meta, this.routeQueryParams, { labelIds, statuses: ['NEW'] })
      ),
      map(() => meta)
    );
  }
}
