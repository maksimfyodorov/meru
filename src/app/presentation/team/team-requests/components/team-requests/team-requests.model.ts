import { IListMeta, IListRows } from '@base/list/models/list.model';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { IActions } from '@core/models/actions.model';

export interface IRequestsList {
  data: IListRows;
  meta: IRequestsMeta;
}

export interface IRequestsMeta extends IListMeta {
  actions?: IActions;
  dictionaries?: IRequestsMetaDictionaries;
}

export interface IRequestsMetaDictionaries extends Array<IRequestsMetaDictionariesItem> {
}

export interface IRequestsMetaDictionariesItem {
  order: number;
  name: DictionaryName;
  fieldId: string;
  maps: Array<{
    fieldFrom: string;
    fieldTo: string;
  }>;
}
