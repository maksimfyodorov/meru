export type SortByFunction<T extends object = Record<string, any>>
  = (item1: T, item2: T) => number;

export function sortByFactory<T extends object = Record<string, any>>(
  key: keyof T,
  direction: number = 1
): SortByFunction<T> {
  return (item1: T, item2: T) =>
    direction * (
      item1[key] > item2[key] ? 1 : item1[key] < item2[key] ? -1 : 0
    );
}
