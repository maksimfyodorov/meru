export interface IOpenStreetMapOptions {
  zoom: number;
  x: number; // широта
  y: number; // долгота
}
export interface IOpenStreetMapMark {
  id: number;
  name?: string;
  x: number;
  y: number;
}
