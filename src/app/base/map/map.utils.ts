import { IMapDragPosition, IMapFactor } from '@base/map/map.model';

export const coordinatesToPairValues = (coordinates: IMapDragPosition[]): Array<Array<IMapDragPosition>> => coordinates.map((pos, index, arr) => {
  const next = arr[index + 1] ?? arr[0];
  return [ pos, next ];
});

export const polygonPointsTransform = (str: string, factor: IMapFactor): IMapDragPosition[] => {
  if (typeof str !== 'string') {
    return str;
  }

  const arrNumbs = str.split(',').map((s) => Number(s));

  if (arrNumbs.length % 2 === 1) {
    arrNumbs.push(0);
  }

  const result = [];
  let pos: IMapDragPosition;
  arrNumbs.forEach((num, index) => {
    if (index % 2 === 0) {
      pos = { x: num * factor.width, y: 0 };
    }
    if (index % 2 === 1) {
      pos = { ...pos, y: num * factor.height };
      result.push(pos);
    }
  });
  return result;
};
