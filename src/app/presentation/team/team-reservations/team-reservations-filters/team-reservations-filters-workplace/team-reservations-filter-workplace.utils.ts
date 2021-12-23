import { FormControl } from '@angular/forms';
import { IFilterCheckboxGroups, IFilterCheckBoxOptions } from '@base/filters/models/filter-checkbox.model';
import { mapCheckBoxOptions } from '@shared/common/utils/filter.util';
import {
  IDictionary,
  IDictionaryBuildings,
  IDictionaryFloorMaps
} from '@shared/dictionaries/dictionaries.model';
import { IStatuses } from '@shared/dictionaries/models/statuses.model';

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
  return buildings.map(({ name: label, id }) => {
    const floorMapOptions: IFilterCheckBoxOptions = mapCheckBoxOptions(
      floorMaps.filter(({ buildingId }) => buildingId === id),
      'id',
      'name',
      floorMapIdsControl
    );
    const checked: boolean = floorMapOptions.every(({ checked }) => checked);

    return {
      label,
      value: id,
      checked,
      indeterminate: !checked && floorMapOptions.some(({ checked }) => checked),
      options: floorMapOptions
    }
  }).filter(group => !!group.options.length);
}

export function mapUserOptions(labels: IDictionary, labelIdsControl: FormControl): IFilterCheckBoxOptions {
  return mapCheckBoxOptions(labels, 'id', 'name', labelIdsControl).map((userOption) =>
    ({ ...userOption, checked: true })
  );
}

export function mapStatusesOptions(statuses: IStatuses, statusesControl: FormControl): IFilterCheckBoxOptions {
  return mapCheckBoxOptions(statuses, 'code', 'name', statusesControl)
}






