import { TemplateRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { IRoom, IWorkplace } from '@shared/http/models/database.model';

export type MarkItemType =
  | 'info'
  | 'success'
  | 'danger'
  | 'warning'
  | 'default';
export type MarkItemLogicType = 'POI' | 'User' | 'Users' | 'Workplace' | 'Room' | 'ParkingLot';

export interface IMarkItem {
  id: number;
  type?: MarkItemType;
  logicType?: MarkItemLogicType;
  icon?: string;
  img?: string | SafeUrl;
  coordinates: IMarlItemsCoordinates;
  tooltip?: string;
  popup?: TemplateRef<any>;
  onClick?: (mark: IMarkItem) => void;
  disabled?: boolean; // просто вспомогательные данные
  relativePlace?: any; // просто вспомогательные данные
  size?: {
    width: number;
    height: number;
  };
  color?: string;
}

export interface IMarlItemsCoordinates {
  x: number;
  y: number;
  size: number;
}

export interface IMarks extends Array<IMarkItem> {}
