export type SortDirection = 'ascend' | 'descend' | null;

export interface ISort {
  sortBy: string;
  sortDirection: SortDirection;
}
