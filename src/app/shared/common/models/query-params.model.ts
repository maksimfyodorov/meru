import { IParams } from '@core/models/params.model';
import { IPaging } from '@core/models/paging.model';
import { ISort } from '@core/models/sort.model';

export type UrlQueryParams = Partial<Exclude<IQueryParamsFilters & IPaging & ISort, 'enable' | 'pageSizeOptions'>>;

export interface IQueryParams extends IParams {
  query?: string;
  paging?: IPaging;
  sort?: ISort;
  filters?: IQueryParamsFilters;
  updateData?: boolean;
}

export interface IQueryParamsFilters extends Record<string, any> {
}

export interface IBodyQueryParams extends Record<string, string | string[] | number | number[]> {
}
