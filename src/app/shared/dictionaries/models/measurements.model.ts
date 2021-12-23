import { IDictionary, IDictionaryItem } from '@shared/dictionaries/dictionaries.model';

export type Measurement = 'date' | 'time' | 'dateTime' | 'shortDate' | 'shortTime' | 'shortDateTime' | 'filterDate';

export interface IMeasurementsList extends Array<IMeasurements> {
}

export interface IMeasurements extends Record<Measurement | string, string> {
}

export interface IDictionaryMeasurements extends IDictionary<IDictionaryMeasurementItem> {
}

export interface IDictionaryMeasurementItem extends IDictionaryItem {
  id: number;
  default: boolean;
  lang: string;
  measurements: IMeasurements;
}
