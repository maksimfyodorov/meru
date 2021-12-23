import { Injectable } from '@angular/core';
import { IBookingItemAction, IBookingItemTag } from '@base/booking-list/booking-item/booking-item.model';
import { IBookingItems } from '@base/booking-list/booking-list.model';

@Injectable()
export class WorkplaceService {
  constructor() {}
  get tags(): string[] {
    return ['Монитор', 'Телевизор'];
  }
  get actions(): IBookingItemAction[] {
    return [
      {
        id: '1',
        title: 'workplace-reservation',
        type: 'primary',
        data: {
          a: 1,
          b: 2,
        }
      }
    ];
  }
  get items(): IBookingItems {
    return [
      {
        id: 1,
        name: 'Переговорная 1',
        label: 'Этаж 10',
        tags: this.tags,
        actions: this.actions,
      },
      {
        id: 2,
        name: 'Переговорная 2',
        label: 'Этаж 12',
        tags: this.tags,
        actions: this.actions,
      },
      {
        id: 3,
        name: 'Переговорная 3',
        label: 'Этаж 13',
        tags: this.tags,
        actions: this.actions,
      },
      {
        id: 4,
        name: 'Переговорная 4',
        label: 'Этаж 9',
        tags: this.tags,
        actions: this.actions,
      }
    ];
  }
}
