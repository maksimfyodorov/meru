import { Renderer } from '../../renderer/renderer.model';
import { Localizable } from '@core/models/localization.model';
import { SortDirection } from '@core/models/sort.model';

export type ReservationsColumnType = 'string' | 'boolean' | 'object' | 'number' | 'datetime' | 'any';

export interface IListColumns<T extends Renderer = Renderer> extends Array<IListColumn<T>> {
}

export interface IListColumn<T extends Renderer = Renderer> {
  id: string;
  sortable?: boolean;
  title: Localizable;
  type: ReservationsColumnType;
  visible?: boolean;
  width?: string | number | 'auto';
  renderer?: T
  sortDirection?: SortDirection;
  sortFn?: Function;
}
