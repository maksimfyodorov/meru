import {
  IMarkItem,
  MarkItemLogicType,
} from '@src/app/base/map/map-mark/map-mark.model';
import {
  IWorkplace,
  IUser,
  ICustomObject,
  IRoom,
} from '@src/app/shared/http/models/database.model';
import { Observable, of } from 'rxjs';

export const generateRoomMark = (room: IRoom, image: string): IMarkItem => {
  return {
    id: room?.id || 0,
    img: null,
    disabled: room?.disabled || false,
    logicType: 'Room',
    relativePlace: room,
    tooltip: room?.name || '-',
    coordinates: {
      x: room?.x || 0,
      y: room?.y || 0,
      size: 120,
    },
    size: {
      height: room?.height || 120,
      width: room?.width || 120,
    },
  };
};
export const generateWorkplaceMark = (
  workplace: IWorkplace,
  image: string
): IMarkItem => {
  return {
    id: workplace?.id || 0,
    img: image,
    disabled: workplace?.disabled || false,
    logicType: 'Workplace',
    relativePlace: workplace,
    tooltip: workplace?.name || '-',
    coordinates: {
      x: workplace?.x || 0,
      y: workplace?.y || 0,
      size: workplace?.width || 40,
    },
  };
};
export const generateParkingLotMark = (
  parkingLot: IWorkplace,
  image: string
): IMarkItem => {
  return {
    id: parkingLot?.id || 0,
    img: image,
    disabled: parkingLot?.disabled || false,
    logicType: 'ParkingLot',
    relativePlace: parkingLot,
    tooltip: parkingLot?.name || '-',
    coordinates: {
      x: parkingLot?.x || 0,
      y: parkingLot?.y || 0,
      size: parkingLot?.width || 40,
    },
  };
};
export const generateUserMark = (
  workplace: IWorkplace,
  user: IUser,
  image: string,
  type: MarkItemLogicType = 'User'
): IMarkItem => {
  return {
    id: workplace?.id || 0,
    img: image,
    logicType: type,
    tooltip: user?.name || '-',
    coordinates: {
      x: workplace?.x || 0,
      y: workplace?.y || 0,
      size: workplace?.width || 40,
    },
  };
};
export const generateCustomObjectMark = (
  customObj: ICustomObject,
  image: string
): IMarkItem => {
  const SIZE = 72;
  return {
    id: customObj.id,
    img: image,
    logicType: 'POI',
    tooltip: customObj.htmlText || customObj.name,
    coordinates: {
      x: customObj.x - SIZE / 2,
      y: customObj.y - SIZE / 2,
      size: SIZE,
    },
  };
};
export const forkJoinObjectEmpty = (
  obj: Record<any, any>
): Record<number, Observable<any>> => {
  return Object.entries(obj).length ? obj : { 0: of(null) };
};
