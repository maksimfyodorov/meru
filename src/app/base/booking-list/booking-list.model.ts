import { IBookingItem } from '@base/booking-list/booking-item/booking-item.model';

export interface IBookingItems extends Array<IBookingItem> {}

export type TAutoMode = 'oneByOne' | 'throughOne';
