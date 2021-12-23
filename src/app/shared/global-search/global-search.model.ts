export type GlobalSearchType = 'user' | 'workplace' | 'room' | 'customObject' | 'parkingLot';

export interface IGlobalSearchResult extends Array<IGlobalSearchResultGroup> {
}

export interface IGlobalSearchResultGroup {
  type: GlobalSearchType;
  title: string;
  items: IGlobalSearchResultItem[];
}

export interface IGlobalSearchResultItem {
  $implicit: GlobalSearchType;
  title: string;
  img?: string;
  icon?: string;
  data: Record<string, any>;
}


