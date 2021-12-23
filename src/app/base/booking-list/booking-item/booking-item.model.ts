import { TemplateRef } from '@angular/core';
import { IFloor } from '@src/app/shared/http/models/database.model';
import { NzButtonType } from 'ng-zorro-antd/button';

export interface IBookingItem {
  id: number;
  name: string;
  label?: string;
  address?: string;
  tags?: string[];
  content?: TemplateRef<any>;
  contentContext?: Record<string, any>;
  actions?: IBookingItemAction[];
  coordinates?: { x: number; y: number };
  latitude?: number;
  longitude?: number;
  select?: boolean;
  floors?: IFloor[];
}
export interface IBookingItemTag {
  title: string;
  type: BookingItemTagTypes;
  icon?: string;
}
export type BookingItemTagTypes = 'success' | 'processing' | 'error' | 'warning' | 'default';
export interface IBookingItemAction {
  id: string | number;
  title: string;
  type: NzButtonType;
  data?: any;
  handler?: () => void;
}
