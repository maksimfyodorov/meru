import { IPaging } from '@core/models/paging.model';
import { ISort } from '@core/models/sort.model';

export const PAGING: IPaging = {
  enable: true,
  pageIndex: 1,
  pageSize: 10,
  pageSizeOptions: [ 10, 20, 30, 40, 50 ]
};
export const SORT: ISort = {
  sortBy: null,
  sortDirection: null
}
