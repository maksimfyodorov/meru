import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';

export interface IEnrichmentData extends Array<IEnrichmentDataItem>{
}

export interface IEnrichmentDataItem {
  order: number;
  name: DictionaryName;
  filedId: string;
  map: Record<string, string>;
}
