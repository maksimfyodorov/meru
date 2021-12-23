export interface IBuildingItem {
  title: string;
  floor: number;
}
export interface IIBuilding extends Array<IBuildingItem> {}
export type MapPositionType = 'left' | 'right';
export interface IImage {
  title?: string;
  alt: string;
  src: string;
}
export interface IMapSize<T = string | number> {
  width: T;
  height: T;
}
export interface IMapFactor extends IMapSize<number> {
  arx: number; // aspect ratio X
  ary: number; // aspect ratio Y
}

export interface IMapDragPosition {
  x: number;
  y: number;
}
export interface IMapArea {
  pathfinderGraphVertexId: number;
  polygonPoints: string; // подобие массива в строковом виде split(',')
  color: string;
  isVisible: boolean;
}
