import { IOpenStreetMapOptions } from '@base/open-street-map/open-street-map.model';
import { IBookingItemAction } from '@base/booking-list/booking-item/booking-item.model';
import { IBookingItems } from '@base/booking-list/booking-list.model';
import { IDictionary, IDictionaryBuildings, IDictionaryFloorMaps } from '@shared/dictionaries/dictionaries.model';

export const OSM_OPTIONS: IOpenStreetMapOptions = {
  x: 56.8587214,
  y: 35.9175965,
  zoom: 6,
};

export function getBookingItemAction(id: number, handler: () => void): IBookingItemAction {
  return {
    id,
    title: 'SelectOffice',
    type: 'primary',
    handler
  };
}

export function mapBuildingsToBookingItems(buildings: IDictionaryBuildings, handler: (id: number) => void
): IBookingItems {
  return buildings.map((building, index) => ({
      ...building,
      coordinates: {
        x: building.latitude,
        y: building.longitude
      },
      actions: [ getBookingItemAction(building.id, handler.bind(null, building.id)) ]
    })
  );
}

export function mapBusyLiveData(
  buildings: IDictionaryBuildings,
  floors: IDictionaryFloorMaps,
  workplaces: IDictionary,
  busyLiveData: Record<string, any>
): Record<string, any> {
  return buildings.reduce((a, c) => {
    const floorsIds = floors.filter(f => f.buildingId === c.id).map(f => f.id);
    const buildPlaces = workplaces.filter(w => floorsIds.includes(w.floorMapId));
    const buildIds = buildPlaces.map(build => build.id);
    const busyWorkplaces = busyLiveData && busyLiveData.map(w => w.id) || [];
    const busyNum = new Set(busyWorkplaces.filter(id => buildIds.includes(id))).size;

    return {
      ...a, [c.id]: {
        workplaces: {
          free: buildPlaces.length - busyNum,
          busy: busyNum,
          freePercents: Math.trunc(100 * (buildPlaces.length - busyNum) / buildPlaces.length)
        }
      }
    };
  }, {});
}
