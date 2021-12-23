import {DB_CACHE_RESPONSE_HEADER} from '@shared/http/utils/constants.util';
import {DictionariesService} from '@shared/dictionaries/dictionaries.service';
import {BehaviorSubject, forkJoin, from, Observable, of, zip} from 'rxjs';
import {catchError, filter, map, switchMap, tap} from 'rxjs/operators';
import {QueryParamsBuilder} from '@shared/common/utils/query-params-builder.util';
import {IStatusRenderer, IStatusRendererMap} from '@base/renderer/renderer.model';
import {IStatuses} from '@shared/dictionaries/models/statuses.model';
import {Params} from '@angular/router';
import {IListColumns} from '@base/list/models/list-column.model';
import {IDictionaryItem} from '@shared/dictionaries/dictionaries.model';
import {formatDate} from '@angular/common';
import {IListQueryParams, IListRows} from '@base/list/models/list.model';
import {
  IList,
  IReservationsMeta,
  IReservationsMetaDictionaries,
  IReservationsMetaDictionariesItem
} from '@presentation/reservations/models/list.model';
import {User, Users} from '@core/models/user.model';

export const maxFilterButtonVisibleWindowWidth: number = 1600;
export const maxFilterHideWindowWith: number = 1366;
export const HEADERS_META: Record<string, any> = {[DB_CACHE_RESPONSE_HEADER]: 'true'};

export function mapActiveLabels<T extends Array<any>>(reservations: T, activeLabels: Record<string, any>[]) {
  return reservations.forEach(reservation =>
    reservation.online = activeLabels.some(({id}) => reservation.labelId = id)
  );
}

export function mapActions(
  $dictionaries: DictionariesService,
  meta: IReservationsMeta,
  data: IListRows,
  currentUser: User
): Observable<IList> {
  if (!data?.length) {
    return of({data, meta});
  }

  return forkJoin([
    $dictionaries.getDictionary('labels'),
    $dictionaries.getDictionary('labelGroups')
  ]).pipe(
    map(([labels, labelGroups]) =>
      (new Users(labels)).map((user) => user.setManagers(labelGroups))
    ),
    tap((users: Users) => data.forEach(item => {
      item.currentUser = currentUser.id;
      item.managers = users.getUserById(item.labelId)?.managers || [];
    })),
    map(() => ({data, meta}))
  );
}

export function mapDictionaryValues(
  $dictionaries: DictionariesService,
  meta: IReservationsMeta,
  data: IListRows
): any {
  if (!meta.dictionaries?.length || !data?.length) {
    return of({data, meta});
  }

  sortMetaDictionaries(meta.dictionaries);
  const next$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  const lastDictionaryName: string = [...meta.dictionaries].reverse().shift().name;

  return zip(from(meta.dictionaries), next$).pipe(
    switchMap(([{name, fieldId, maps}, _any]: [IReservationsMetaDictionariesItem, any]) =>
      $dictionaries.getDictionary(name).pipe(
        map((items) => {
          data.forEach(row => {
            const item: IDictionaryItem = items.find(item => item.id === row[fieldId]) || {};

            (maps || []).forEach(({fieldFrom, fieldTo}) => {
              row[fieldTo] = typeof item[fieldFrom] !== 'undefined' ? item[fieldFrom] : row[fieldTo];

              if (typeof row[fieldTo] === 'undefined') {
                row[fieldTo] = null;
              }
            });
          });

          return name;
        }),
        catchError(() => {
          return of(name);
        })
      )
    ),
    tap((dictionaryName) =>
      dictionaryName !== lastDictionaryName ? next$.next(null) : next$.complete()
    ),
    filter((dictionaryName) => dictionaryName === lastDictionaryName),
    map(() => ({data, meta}))
  );
}

function sortMetaDictionaries(dictionaries: IReservationsMetaDictionaries): IReservationsMetaDictionaries {
  return dictionaries.sort(
    (
      {order: orderA}: IReservationsMetaDictionariesItem,
      {order: orderB}: IReservationsMetaDictionariesItem
    ) => (orderA < orderB ? -1 : orderB < orderA ? 1 : 0)
  );
}

export function prepareUrlQueryParams(queryParams: Params, dateFormat: string, currentLang: string): Params {
  queryParams = {...queryParams};
  Object.entries(queryParams).forEach(([key, value]) => {
    if (value === null || value?.length === 0) {
      delete queryParams[key];
      return;
    }

    if (value instanceof Date) {
      queryParams[key] = formatDate(value, dateFormat, currentLang);
      return;
    }

    queryParams[key] = String(value);
  });

  return queryParams;
}

export function parseUrlQueryParams(queryParams: Record<string, any>): IListQueryParams {
  queryParams = {...queryParams};

  Object.entries(queryParams).forEach(([key, value]) => {
    switch (key) {
      case 'buildingId':
      case 'floorMapIds':
      case 'labelIds':
      case 'requestAppointmentRoomFloorMapIds':
      case 'requestAppointmentLabelIds':
        queryParams[key] = parseNumberArrayUrlQueryParam(value);
        return;

      case 'labelGroupId':
        queryParams[key] = parseInt(value, 10);
        return;

      case 'statuses':
      case 'requestAppointmentStatuses':
        queryParams[key] = parseStringArray(value);
        return;

      case 'dateTimeFrom':
      case 'dateTimeTo':
      case 'requestAppointmentDateFrom':
      case 'requestAppointmentDateTo':
        queryParams[key] = parseDataUrlQueryParam(value);
        return;
    }

    if (value === 'false') {
      queryParams[key] = false;
      return;
    }

    if (value === 'false') {
      queryParams[key] = true;
      return;
    }
  });

  return queryParams as IListQueryParams;
}

function parseStringArray(value: string | string[]): string[] {
  return (value instanceof Array)
    ? value
    : !value
      ? []
      : value.split(',');
}

function parseNumberArrayUrlQueryParam(value: string): number[] {
  return parseStringArray(value).map(id => parseInt(id, 10));
}

function parseDataUrlQueryParam(value: string): Date | null {
  try {
    return new Date(Date.parse(value));
  } catch (e) {
    return null;
  }
}

export function filterActionsColumn(meta: IReservationsMeta, user: User): void {
  if (user?.labelGroupsManager?.length > 0) {
    return;
  }

  meta.columns = meta.columns.filter(({renderer}) =>
    renderer?.type !== 'actions'
  );
}

export function mapStatusDictionary(columns: IListColumns, statuses: IStatuses): void {
  try {
    const statusColumnRenderer: IStatusRenderer = columns
      .find(({id}) => id === 'status')?.renderer as IStatusRenderer;

    if (statusColumnRenderer) {
      const map: IStatusRendererMap = statuses.reduce((statusRendererMap: IStatusRendererMap, status) => ({
          ...statusRendererMap,
          [status.code]: {value: status.name, color: status.color}
        }),
        {}
      );

      statusColumnRenderer.options = {map};
    }
  } catch (e) {
  }
}

export function initQueryParams(
  queryParamsBuilder: QueryParamsBuilder,
  meta: IReservationsMeta,
  routeQueryParams: Params,
  filters: Record<string, any> = {}
): void {
  queryParamsBuilder
    // .clear()
    .withPaging(meta.paging)
    .withSort(meta.sort)
    .withFilters(filters)
    .updateQueryParams(
      parseUrlQueryParams(routeQueryParams)
    )
    .withParams({updateData: true});

  queryParamsBuilder.ready = true;
}

export function copyTextToClipboard(text: string): void {
  let selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = text;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);
}
