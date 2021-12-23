import { IDictionary, IDictionaryBuildings, IDictionaryFloorMaps } from '@shared/dictionaries/dictionaries.model';
import { ILiveData, LiveData } from '@shared/http/models/live-data.model';

export interface IFloor {
  buildingId: number;
  description: string;
  floorNumber: number;
  id: number;
  mapHeight: number;
  mapImageUrl: string;
  mapPixelsInMeter: number;
  mapWidth: number;
  name: string;
  navigineLocationId: number;
  navigineSublocationId: number;
  sequence: number;
  workplaceReservationSocialDistanceCheck: 'NONE' | 'CONFIRMATION' | 'FORBIDDEN';
}

export interface IWorkplace {
  avatarImageUrl: string;
  description: string;
  floorMapId: number;
  height: number;
  id: number;
  imageDisabledUrl: string;
  imageFreeUrl: string;
  imageReservedByMeNotConfirmedUrl: string;
  imageReservedByMeUrl: string;
  imageReservedByUserUrl: string;
  name: string;
  tableHeight: number;
  tableWidth: number;
  tableX: number;
  tableY: number;
  tags: string[];
  uniqueCode: string;
  width: number;
  workplaceGroups: any[];
  x: number;
  y: number;
  disabled?: boolean;
  isEwsReadOnly?: boolean;
  reservation?: Record<string, any>;
  img?: string;
  repeatDates?: Date[][];
}

export interface ITag {
  description: string;
  id: number;
  name: string;
  objectType: string;
}

export interface IFloorsInfo {
  floorsList: IFloor[];
  currentFloor: IFloor;
  currentBuild: Record<string, any>;
}

export type BuildingsListData = [ IDictionaryBuildings, IDictionaryFloorMaps, IDictionary, LiveData<'busyRooms' | 'busyWorkplaces'> ];
