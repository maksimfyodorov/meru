import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { IBookingItem } from '@base/booking-list/booking-item/booking-item.model';
import { BookingListService } from '@base/booking-list/booking-list.service';
import { TAutoMode } from '@base/booking-list/booking-list.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './booking-list.component.html',
  styleUrls: [ './booking-list.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingListComponent {
  items: IBookingItem[] = [];

  @Input() activeIndex = 0;
  @Input() emptyText: string = 'No match workplaces';

  @Input() set autoMode(autoMode: TAutoMode) {
    this._bookingList.autoMode = autoMode;
    this.clearSelected(this.items);
    this._bookingList.recomplete$.next();
  }

  @Output() readonly activeItemId = new EventEmitter<number>();

  @Input('items') set setItems(items: IBookingItem[]) {
    // clear selected places after users was changed
    this.clearSelected(items);
  }

  @HostBinding('style.display')
  get display(): 'block' | 'flex' {
    return this.items && this.items.length ? 'block' : 'flex';
  }

  constructor(private _bookingList: BookingListService) {
  }

  setActiveItem(index: number, item: IBookingItem): void {
    if (item.select) return;
    this.activeIndex = index;
    this.activeItemId.emit(item.id);
  }

  clearSelected(items: IBookingItem[]): void {
    this._bookingList.clearSelectedPlaces();
    this.items = items || [];
  }
}
