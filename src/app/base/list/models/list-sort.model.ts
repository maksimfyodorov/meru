import { ISort } from '@core/models/sort.model';

export interface IListSort extends ISort {
  serverSide?: boolean;
}
