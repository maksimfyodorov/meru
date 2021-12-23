import { DBConfig } from 'ngx-indexed-db';
import { indexedDbMigrationFactory } from './indexed-db-migration.factory';
import {
  DB_STORE_OPTIONS,
  DB_STORE_RESPONSE,
  DB_STORE_SETTINGS,
  DB_STORE_VERSION
} from '@app/shared/indexed-db/indexed-db.utils';
import { getDictionariesDbConfig } from '@app/shared/dictionaries/dictionaries.utils';

export const indexedDbConfig: DBConfig = {
  name: 'smartOfficeDb',
  version: 3,
  objectStoresMeta: [
    {
      store: DB_STORE_RESPONSE,
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'url', keypath: 'url', options: { unique: true } },
        { name: 'data', keypath: 'data', options: { unique: false } }
      ]
    },
    {
      store: DB_STORE_OPTIONS,
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: true } }
      ]
    },
    {
      store: DB_STORE_SETTINGS,
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: true } }
      ]
    },
    {
      store: DB_STORE_VERSION,
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'version', keypath: 'version', options: { unique: true } }
      ]
    },
    ...getDictionariesDbConfig()
  ],
  migrationFactory: indexedDbMigrationFactory
};
