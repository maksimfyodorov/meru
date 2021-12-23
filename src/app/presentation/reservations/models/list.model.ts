import { IListMeta, IListRows } from '@base/list/models/list.model';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { IActions } from '@core/models/actions.model';

export interface IList {
  data: IListRows;
  meta: IReservationsMeta;
}

export interface IReservationsMeta extends IListMeta {
  actions?: IActions;
  dictionaries?: IReservationsMetaDictionaries;
}

export interface IReservationsMetaDictionaries extends Array<IReservationsMetaDictionariesItem> {
}

export interface IReservationsMetaDictionariesItem {
  order: number;
  name: DictionaryName;
  fieldId: string;
  maps: Array<{
    fieldFrom: string;
    fieldTo: string;
  }>;
}
