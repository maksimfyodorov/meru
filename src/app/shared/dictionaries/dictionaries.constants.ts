import { ObjectStoreMeta } from 'ngx-indexed-db/lib/ngx-indexed-db.meta';

export type DictionaryName = typeof DICTIONARIES[number];
export type CustomDictionaryName = Exclude<DictionaryName, Exclude<DictionaryName, 'statuses' | 'measurements'>>;
export const DICTIONARY_PREFIX_NAME: string = 'dict_';
export const LAST_CACHE_TIME_KEY: string = 'dictionariesLastCacheTime';

export const dbConfigItem: Partial<ObjectStoreMeta> = {
  storeConfig: { keyPath: 'id', autoIncrement: false },
  storeSchema: [{ name: 'id', keypath: 'id', options: { unique: true } }],
};

export const dbConfigStatusItem: ObjectStoreMeta = {
  store: `${DICTIONARY_PREFIX_NAME}statuses`,
  storeConfig: { keyPath: 'id', autoIncrement: false },
  storeSchema: [
    { name: 'id', keypath: 'id', options: { unique: true } },
    { name: 'code', keypath: 'code', options: { unique: true } },
  ],
};

export const dbCustomDictionariesConfig: ObjectStoreMeta[] = [
  {
    store: `${DICTIONARY_PREFIX_NAME}statuses`,
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: true } },
      { name: 'lang', keypath: 'lang', options: { unique: true } },
      { name: 'default', keypath: 'default', options: { unique: false } },
    ],
  },
  {
    store: `${DICTIONARY_PREFIX_NAME}measurements`,
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: true } },
      { name: 'lang', keypath: 'lang', options: { unique: true } },
      { name: 'default', keypath: 'default', options: { unique: false } },
    ],
  },
];

export const DICTIONARIES = [
  'buildings',
  'floorMaps',
  'rooms',
  'workplaceGroups',
  'workplaces',
  'labelGroups',
  'labels',
  'tags',
  'gateways',
  'beacons',
  'customObjects',
  'serviceDeskItemCategories',
  'serviceDeskItems',
  'statuses',
  'measurements',
  'areas',
  'parkingLots',
  'areaPolygons',
] as const;

export const CUSTOM_DICTIONARIES: Array<CustomDictionaryName> = ['statuses', 'measurements'];
