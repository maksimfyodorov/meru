import { ParamsBuilder } from '@core/utils/params-builder.util';
import {
  IBodyQueryParams,
  IQueryParams,
  IQueryParamsFilters,
  UrlQueryParams
} from '@shared/common/models/query-params.model';
import { PAGING, SORT } from '@core/utils/constants.util';
import { ISort } from '@core/models/sort.model';
import { IPaging } from '@core/models/paging.model';
import { formatDate } from '@angular/common';
import { isEmpty } from '@core/utils/common.util';

export class QueryParamsBuilder extends ParamsBuilder<IQueryParams> {
  private _dateFormat: string;
  private _currentLang: string = '';
  public ready: boolean = false;

  public static default(): QueryParamsBuilder {
    return this.create<QueryParamsBuilder>()
      .withPaging()
      .withSort()
      .withFilters();
  }

  constructor() {
    super();
  }

  public get paging(): IPaging {
    return this.params.paging;
  }

  public get urlQueryParams(): UrlQueryParams {
    return {
      ...this.partial(this.params.paging, 'pageIndex', 'pageSize'),
      ...this.partial(this.params.sort, 'sortBy', 'sortDirection'),
      ...this.filters,
      updateData: this.params.updateData
    };
  }

  public get bodyQueryParams(): IBodyQueryParams {
    const bodyQueryParams: IBodyQueryParams = { ...this.filters };

    Object.entries(bodyQueryParams)
      .filter(([ , value ]) => !isEmpty(value))
      .forEach(([ key, value ]) => {
        if (value instanceof Date) {
          bodyQueryParams[key] = formatDate(value, this._dateFormat, this._currentLang);
        }
      });

    return bodyQueryParams;
  }

  public set paging(paging: IPaging) {
    this.set({ paging });
  }

  public get sort(): ISort {
    return this.params.sort;
  }

  public set sort(sort: ISort) {
    this.set({ sort });
  }

  public get filters(): IQueryParamsFilters {
    return this.params.filters;
  }

  public set filters(filters: IQueryParamsFilters) {
    this.set({ filters });
  }

  public set dateFormat(dateFormat: string) {
    this._dateFormat = dateFormat;
  }

  public set currentLang(currentLang: string) {
    this._currentLang = currentLang;
  }

  public withPaging(paging: IPaging = PAGING): this {
    return this.withParams({
      paging: { ...PAGING, ...paging }
    });
  }

  public withSort(sort: ISort = SORT): this {
    return this.withParams({
      sort: { ...SORT, ...sort }
    });
  }

  public withFilters(filters: IQueryParamsFilters = {}): this {
    return this.withParams({ filters });
  }

  public updateQueryParams(queryParams: UrlQueryParams): this {
    const {
      pageIndex, pageSize, sortBy, sortDirection, serverSide, enable, pageSizeOptions,
      ...filters
    }: UrlQueryParams = { ...queryParams };

    this.setProperty('pageIndex', pageIndex, this.paging)
      .setProperty('pageSize', pageSize, this.paging)
      .setProperty('sortBy', sortBy, this.sort)
      .setProperty('sortDirection', sortDirection, this.sort)
      .set(filters, this.filters);

    return this;
  }
}
