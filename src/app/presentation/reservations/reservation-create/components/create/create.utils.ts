import { IOpenStreetMapOptions } from '@base/open-street-map/open-street-map.model';
import { IBookingItemAction } from '@base/booking-list/booking-item/booking-item.model';
import { IBookingItems } from '@base/booking-list/booking-list.model';
import { IDictionary, IDictionaryBuildings, IDictionaryBuildingsItem, IDictionaryFloorMaps } from '@shared/dictionaries/dictionaries.model';
import { ReservationType } from '@shared/http/models/meta.model';
import { LiveDataKey } from '@shared/http/models/live-data.model';
import { BuildingsListData } from '@presentation/reservations/reservation-create/models';
import { TemplateRef } from '@angular/core';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';

export const OSM_OPTIONS: IOpenStreetMapOptions = {
  x: 56.8587214,
  y: 35.9175965,
  zoom: 6,
};

export function getBusyType(placeType: DictionaryName | string): LiveDataKey | null {
  switch (placeType) {
    case 'rooms':
      return 'busyRooms';

    case 'workplaces':
      return 'busyWorkplaces';
  }

  return null;
}

export function mapBuildingListData(
  data: BuildingsListData,
  content: TemplateRef<unknown>,
  handler: (id) => void
): IBookingItems {
  const buildings: IDictionaryBuildings = data[0];

  return buildings.map((building, index) => ({
      ...building,
      content,
      coordinates: {
        x: building.latitude,
        y: building.longitude
      },
      actions: [ getBookingItemAction(building.id, handler.bind(null, building.id)) ],
      contentContext: mapBusyLiveData(building, data[1], data[2], data[3])
    })
  );
}

export function getBookingItemAction(id: number, handler: () => void): IBookingItemAction {
  return {
    id,
    title: 'SelectOffice',
    type: 'primary',
    handler
  };
}

export function mapBuildingsToBookingItems(buildings: IDictionaryBuildings, content: TemplateRef<unknown>, handler: (id: number) => void): IBookingItems {
  return buildings.map((building, index) => ({
      ...building,
      content,
      coordinates: {
        x: building.latitude,
        y: building.longitude
      },
      actions: [ getBookingItemAction(building.id, handler.bind(null, building.id)) ],
    })
  );
}

export function mapBusyLiveData(
  building: IDictionaryBuildingsItem,
  floors: IDictionaryFloorMaps,
  places: IDictionary,
  busyData: Record<string, any>
): Record<string, any> {
  const floorsIds = floors.filter(f => f.buildingId === building.id).map(f => f.id);
  const buildPlaces = places.filter(w => floorsIds.includes(w.floorMapId));
  const buildIds = buildPlaces.map(build => build.id);
  const busyWorkplaces = busyData.map(w => w.id) || [];
  const busyNum = new Set(busyWorkplaces.filter(id => buildIds.includes(id))).size;

  return {
    $implicit: {
      free: buildPlaces.length - busyNum,
      busy: busyNum,
      freePercents: Math.trunc(100 * (buildPlaces.length - busyNum) / buildPlaces.length)
    }
  };
}
