import { IPaging } from '@core/models/paging.model';

export interface IListPaging extends IPaging {
  serverSide?: boolean;
}
