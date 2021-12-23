import { ObjectStoreMeta } from 'ngx-indexed-db/lib/ngx-indexed-db.meta';
import { CUSTOM_DICTIONARIES, dbConfigItem, dbCustomDictionariesConfig, DICTIONARIES, DICTIONARY_PREFIX_NAME, DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { IDictionary, IDictionaryBuildings, IDictionaryFloorMaps } from '@shared/dictionaries/dictionaries.model';

export function getDictionariesDbStoreNames(): string[] {
  return DICTIONARIES.map(getDictionaryDbStoreName);
}

export function getDictionariesDbConfig(): ObjectStoreMeta[] {
  return getLoadableDictionariesDbStoreNames()
    .map(store => ({ ...dbConfigItem, store } as ObjectStoreMeta))
    .concat(dbCustomDictionariesConfig);
}

export function getDictionaryDbStoreName(name: DictionaryName | string): string {
  return name.startsWith(DICTIONARY_PREFIX_NAME) ? name : `${DICTIONARY_PREFIX_NAME}${name}`;
}

export function getLoadableDictionaries(): DictionaryName[] {
  return DICTIONARIES.filter((name: any) => !CUSTOM_DICTIONARIES.includes(name));
}

export function getLoadableDictionariesDbStoreNames(): string[] {
  return getLoadableDictionaries().map(getDictionaryDbStoreName);
}

export function filterFloorMaps(floorMaps: IDictionaryFloorMaps, items: IDictionary): IDictionaryFloorMaps {
  return floorMaps.filter(({ id }) =>
    items.some(({ floorMapId }) => floorMapId === id)
  );
}

export function filterFloorMapsByBuildingId(floorMaps: IDictionaryFloorMaps, id: number): IDictionaryFloorMaps {
  return floorMaps.filter(({ buildingId }) => buildingId === id);
}

export function filterBuildingsByFloorMaps(buildings: IDictionaryBuildings, floorMaps: IDictionaryFloorMaps): IDictionaryBuildings {
  return buildings.filter(({ id }) =>
    floorMaps.some(({ buildingId }) => buildingId === id)
  );
}

export function sortItemsBySequence<T extends Array<unknown> = IDictionary>(items: T, fieldName: string, sequence: unknown[]): T {
  if (!sequence?.length || !fieldName) return items;

  return items.sort((item1, item2) =>
    sequence.indexOf(item1?.[fieldName]) - sequence.indexOf(item2?.[fieldName])
  );
}



