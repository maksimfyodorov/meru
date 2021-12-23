import { IDictionary, IDictionaryItem } from '@shared/dictionaries/dictionaries.model';
import { FormControl } from '@angular/forms';
import { IFilterCheckBoxOptions } from '@base/filters/models/filter-checkbox.model';

export function mapCheckBoxOptions<T extends Record<string, any> = IDictionaryItem>(
  items: IDictionary<T>,
  valueField: keyof T,
  labelField: keyof T,
  control: FormControl
): IFilterCheckBoxOptions {
  return items.map((item: T) => {
    const value: any = item[valueField];
    const label: any = item[labelField];
    const checked: boolean = Boolean(control?.value?.includes?.(value));

    return { ...item, label, value, checked };
  });
}
