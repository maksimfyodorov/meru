import { IDictionary, IDictionaryItem } from '@shared/dictionaries/dictionaries.model';

export interface IStatuses extends Array<IStatus> {
}
export interface IStatusesMap extends Map<string, IStatus> {}

export interface IStatus extends Record<string, any> {
  code: string;
  name: string;
  color: string;
  secondaryColor: string;
}

export interface IDictionaryStatuses extends IDictionary<IDictionaryStatusesItem>{}

export interface IDictionaryStatusesItem extends IDictionaryItem {
 id: number;
 lang: string;
 default: boolean;
 statuses: IStatuses;
}
