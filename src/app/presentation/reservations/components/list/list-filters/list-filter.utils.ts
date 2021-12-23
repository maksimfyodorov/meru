import { FormControl } from '@angular/forms';
import { IFilterCheckboxGroups, IFilterCheckBoxOptions } from '@base/filters/models/filter-checkbox.model';
import { mapCheckBoxOptions } from '@shared/common/utils/filter.util';
import { IDictionary, IDictionaryBuildings, IDictionaryFloorMaps, IDictionaryItem, IDictionaryRooms } from '@shared/dictionaries/dictionaries.model';
import { IStatuses } from '@shared/dictionaries/models/statuses.model';
import { ReservationType } from '@shared/http/models/meta.model';
import { sortByFactory } from '@core/utils/sort.util';

const listFilterFields: Record<ReservationType, Record<string, any>> = {
  appointment: {
    requestAppointmentLabelIds: [],
    requestAppointmentRoomIds: []
  },
  locker: {
    floorMapIds: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null
  },
  parking: {
    floorMapIds: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null
  },
  workplace: {
    floorMapIds: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null
  }
};

export const TIME_PICKER_OPTIONS: Record<string, any> = {
  nzDefaultOpenValue: new Date(),
  nzFormat: 'HH:mm',
  nzMinuteStep: 5,
  nzOpen: true
};

export function getListFilterFieldsByType(type: ReservationType): Record<string, any> | null {
  return listFilterFields[type] || null;
}

export function mapBuildingsOptions(
  buildings: IDictionaryBuildings,
  buildingIdControl: FormControl
): IFilterCheckBoxOptions {
  return mapCheckBoxOptions(buildings, 'id', 'name', buildingIdControl);
}

export function mapFloorMapsOptions(
  floorMaps: IDictionaryFloorMaps,
  buildings: IDictionaryBuildings,
  floorMapIdsControl: FormControl
): IFilterCheckboxGroups {
  floorMaps.sort(sortByFactory<IDictionaryItem>('floorNumber'));

  return buildings
    .map(({ name: label, id: value }) => {
      const options: IFilterCheckBoxOptions = mapCheckBoxOptions(
        floorMaps.filter(({ buildingId }) => buildingId === value),
        'id',
        'name',
        floorMapIdsControl
      );
      const checked: boolean = isCheckedGroup(options);
      const indeterminate: boolean = isIndeterminateGroup(checked, options);
      return { label, value, checked, indeterminate, options };
    })
    .filter(group => !!group.options.length);
}

export function mapRoomsOptions(rooms: IDictionaryRooms, floorMapIds: number[], roomsIdControl: FormControl): IFilterCheckBoxOptions {
  if (floorMapIds?.length > 0) {
    rooms = rooms.filter(({ floorMapId }) => floorMapIds.includes(floorMapId));
  }

  return mapCheckBoxOptions(rooms, 'id', 'name', roomsIdControl);
}

export function mapStatusesOptions(statuses: IStatuses, excludeStatuses: string[], statusesControl: FormControl): IFilterCheckBoxOptions {
  if (excludeStatuses.length) {
    statuses = statuses.filter(({ code }) => !excludeStatuses.includes(code));
  }

  return mapCheckBoxOptions(statuses, 'code', 'name', statusesControl);
}

export function mapRoomGroups(
  buildings: IDictionaryBuildings,
  floorMaps: IDictionaryFloorMaps,
  rooms: IDictionaryRooms,
  roomsIdControl: FormControl
): IFilterCheckboxGroups {
  return buildings
    .map(({ name: label, id: value }) => {
      const _floorMaps: IDictionaryFloorMaps = floorMaps.filter(({ buildingId }) => buildingId === value);
      const _rooms: IDictionaryBuildings = rooms.filter(({ floorMapId }) =>
        _floorMaps.some(({ id }) => id === floorMapId)
      );
      const options: IFilterCheckBoxOptions = mapCheckBoxOptions(_rooms, 'id', 'name', roomsIdControl);
      const checked: boolean = isCheckedGroup(options);
      const indeterminate: boolean = isIndeterminateGroup(checked, options);

      return { label, value, checked, indeterminate, options };
    })
    .filter(group => !!group.options.length);
}

export function mapLabelsOptions(labels: IDictionary, labelsIdsControl: FormControl): IFilterCheckBoxOptions {
  return mapCheckBoxOptions(labels, 'mail', 'name', labelsIdsControl);
}

function isCheckedGroup(options: IFilterCheckBoxOptions): boolean {
  return options.every(({ checked }) => checked);
}

function isIndeterminateGroup(checkedGroup: boolean, options: IFilterCheckBoxOptions): boolean {
  return !checkedGroup && options.some(({ checked }) => checked);
}

