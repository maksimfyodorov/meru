import { IDictionary, IDictionaryItem } from '@shared/dictionaries/dictionaries.model';
import { FormControl } from '@angular/forms';
import { ReservationType } from '@shared/http/models/meta.model';
import { IFilterCheckBoxOptions } from '@base/filters/models/filter-checkbox.model';

const listFilterFields: Record<ReservationType, Record<string, any>> = {
  appointment: {
    floorMapId: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null
  },
  locker: {
    floorMapId: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null
  },
  parking: {
    floorMapId: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null
  },
  workplace: {
    dateTimeFrom: null,
    dateTimeTo: null,
    tags: [],
    repeat: null,
    group: null,
    labels: [],
    types: ['DEFAULT', 'COMPLEMENTARY'],
    autoMode: true,
  }
};

export function getListFilterFieldsByType(type: ReservationType): Record<string, any> | null {
  return listFilterFields[type] || null;
}

export function mapCheckBoxOptions<T extends IDictionaryItem = IDictionaryItem>(
  items: IDictionary<T>,
  valueField: keyof T,
  labelField: keyof T,
  control: FormControl
): IFilterCheckBoxOptions {
  return items.map((item: T) => {
    const value: any = item[valueField];
    const label: any = item[labelField];

    const checked: boolean = Boolean(control.value?.includes(value));

    return { ...item, label, value, checked };
  });
}
