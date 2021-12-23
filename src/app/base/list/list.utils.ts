import { SortDirection } from '@core/models/sort.model';

export function sortFnFactory(key: string): Function {
  return (a: any, b: any, _order: SortDirection): number =>
    a[key] < b[key]
      ? -1 : a[key] > b[key]
      ? 1 : 0;
}
