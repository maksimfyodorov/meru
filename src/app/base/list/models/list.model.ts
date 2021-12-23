import { IListColumns } from './list-column.model';
import { IListPaging } from './list-paging.model';
import { IListSort } from './list-sort.model';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ActionParams } from '@core/models/actions.model';

export interface IListMeta {
  columns: IListColumns;
  paging: IListPaging;
  sort: IListSort;
}

export interface IListQueryParams extends NzTableQueryParams {
}

export interface IReservationsActionParams {
  data: IListRow;
  params: ActionParams;
}

export interface IListRows extends Array<IListRow> {
}

export interface IListRow extends Record<string, any> {
}

export interface IListScroll {
  x?: string | null;
  y?: string | null;
}
