import {
  IDictionary,
  IDictionaryBuildings,
  IDictionaryBuildingsItem,
  IDictionaryFloorMaps,
  IDictionaryFloorMapsItem,
  IDictionaryItem,
} from '@shared/dictionaries/dictionaries.model';
import { isEmpty } from '@core/utils/common.util';
import {
  GlobalSearchType,
  IGlobalSearchResultGroup,
} from './global-search.model';

const TAG_REGEXP: RegExp = /<[^>]*>/g;

export const ITEMS_ROUTES: Record<GlobalSearchType, string[]> = {
  user: ['team', 'profiles'],
  customObject: ['office'],
  workplace: ['office'],
  room: ['office'],
  parkingLot: ['office'],
};

const FILTER_FIELDS: Record<GlobalSearchType, string[]> = {
  user: ['name', 'mail', 'mainPhone', 'phones'],
  customObject: ['name', 'description'],
  workplace: ['name', 'uniqueCode'],
  room: ['name', 'description'],
  parkingLot: ['name', 'description'],
};

const MAP_DATA_FIELDS: Record<GlobalSearchType, string[]> = {
  user: ['name', 'mail', 'mainPhone', 'phones'],
  customObject: ['name', 'description', 'floor', 'buildingId', 'floorId'],
  workplace: ['name', 'building', 'floor', 'buildingId', 'floorId'],
  room: ['name', 'description', 'building', 'floor', 'buildingId', 'floorId'],
  parkingLot: [
    'name',
    'description',
    'building',
    'floor',
    'buildingId',
    'floorId',
  ],
};

const DEFAULT_IMAGE: Record<GlobalSearchType, string> = {
  user: './assets/images/avatar-def.png',
  workplace: './assets/images/workplace-card-default.jpg',
  room: './assets/images/workplace-card-default.jpg',
  customObject: './assets/icons/printer.svg',
  parkingLot: './assets/icons/parkinglots.svg',
};

const IMAGE_FIELDS: Record<GlobalSearchType, string> = {
  user: 'avatarImageUrl',
  workplace: 'no-image',
  room: 'avatarImageUrl',
  customObject: 'imageNormalUrl',
  parkingLot: 'no-image',
};

export function filterDictionaryItems<T extends IDictionary>(
  items: T,
  query: string,
  type: GlobalSearchType
): T {
  return items.filter((item) =>
    FILTER_FIELDS[type].some((field) =>
      item[field]?.toLocaleLowerCase().includes(query)
    )
  ) as T;
}

export function mapItemsToFloorMaps<T extends IDictionary = IDictionary>(
  items: T,
  floorMaps: IDictionaryFloorMaps
): T {
  return items.map((item) => {
    const floorMap: IDictionaryFloorMapsItem = floorMaps.find(
      ({ id }) => item.floorMapId === id
    );

    if (floorMap) {
      Object.assign(item, {
        floor: floorMap.name || '',
        buildingId: floorMap.buildingId,
        floorId: floorMap.id,
      });
    }

    return item;
  }) as T;
}

export function mapItemsToBuildings<T extends IDictionary = IDictionary>(
  items: T,
  buildings: IDictionaryBuildings
): T {
  return items
    .filter(({ buildingId }) => !isEmpty(buildingId))
    .map((item) => {
      const building: IDictionaryBuildingsItem = buildings.find(
        ({ id }) => item.floorMapId === id
      );

      if (building) {
        Object.assign(item, { building: building.name });
      }

      return item;
    }) as T;
}

export function mapSearchResult(
  items: IDictionary,
  title: string,
  type: GlobalSearchType
): IGlobalSearchResultGroup {
  return {
    type,
    title,
    items: items.map((item: IDictionaryItem) => ({
      $implicit: type,
      title: item.name,
      img: item[IMAGE_FIELDS[type]] || DEFAULT_IMAGE[type],
      data: reduceItemData(item, MAP_DATA_FIELDS[type]),
    })),
  };

  function reduceItemData(
    item: IDictionaryItem,
    fields: string[]
  ): Record<string, any> {
    return fields
      .map((key) => {
        const value: any =
          typeof item[key] === 'string'
            ? item[key].replace(TAG_REGEXP, '')
            : item[key];

        return [key, value];
      })
      .reduce((data, [key, value]) => Object.assign(data, { [key]: value }), {
        id: item.id,
      });
  }
}
