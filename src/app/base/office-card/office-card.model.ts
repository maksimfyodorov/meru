export interface IOfficeCardPlace {
  type: IOfficeCardPlaceTypes;
  freePlaceAmount: number;
  availablePlaceAmount: number;
  busyPlaceAmount: number;
}
export interface IOfficeCard {
  floorId?: number;
  title: string;
  floor: number;
  places: IOfficeCardPlace[];
}
export interface IOfficeCardPlaces extends Array<IOfficeCardPlace> {}
export type IOfficeCardPlaceTypes = 'conversation' | 'workplaces' | 'wardrobes' | 'parkinglots';
