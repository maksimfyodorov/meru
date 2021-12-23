import { SearchType } from '@presentation/search/search.model';

export const SEARCH_TYPES: SearchType[] = [ 'all', 'user', 'workplace', 'room', 'parkingLot', 'customObject' ];
export const TABS_TITLES: Record<SearchType, string> = {
  all: 'All',
  customObject: 'Custom objects',
  room: 'Rooms',
  user: 'Users',
  workplace: 'Workplaces',
  parkingLot: 'ParkingLots'
};
