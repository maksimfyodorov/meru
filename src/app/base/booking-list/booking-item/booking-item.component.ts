import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef
} from '@angular/core';
import {IBookingItemAction, IBookingItemTag} from '@base/booking-list/booking-item/booking-item.model';
import {BookingListService} from '@base/booking-list/booking-list.service';
import {MarkForCheck} from '@core/decorators/async.decorator';
import {Subscriptions} from '@core/decorators/subscriptions.decorator';
import {IWorkplace} from '@presentation/reservations/reservation-create/models';
import {Observable, Subscription} from 'rxjs';
import {delay, filter, take} from 'rxjs/operators';

@Component({
  selector: 'app-book-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingItemComponent implements OnInit, OnDestroy {
  @Input() get active(): boolean {
    return this._active;
  }

  set active(state: boolean) {
    this._active = state;
    if (state) {
      this.el.nativeElement.scrollIntoView();
    }
  }

  private _active: boolean;

  @Input() title: string;
  @Input() label: string;
  @Input() content: TemplateRef<any>;
  @Input() contentContext: Record<string, any>;
  @Input() tags: IBookingItemTag[] = [];
  @Input() actions: IBookingItemAction[] = [];
  @Input() select: boolean = false;
  @Input() id: number | string = null;

  public places: IWorkplace[];

  @Subscriptions()
  subs: Subscription;

  selectPlaces$: Observable<IWorkplace[]>;
  value: any;

  constructor(private _service: BookingListService, private el: ElementRef, private _cdr: ChangeDetectorRef) {
    this.subs = _service.clear$.subscribe(() => {
      this.value = null;
    });
  }

  ngOnInit(): void {
    this.selectPlaces$ = this._service.getPlaces(this.id as number);
    this.subs = this.selectPlaces$.pipe(delay(150)).subscribe((places) => {
      this.places = places;
      this._cdr.markForCheck();
    });
    this._autoCompletePlaces();
    this.subs = this._service.autoComplete$.subscribe(() => {
      this._autoCompletePlaces();
    });
  }

  ngOnDestroy(): void {
  }

  actionHandler(event: Event, action: IBookingItemAction): void {
    event.stopPropagation();
    action.handler();
  }

  updateSelected(id: number): void {
    this._service.selected[this.id] = this.places.find(place => place.id === id);
    this._service.setSelected();
  }

  private _autoCompletePlaces(): void {
    this.selectPlaces$.pipe(take(1), filter(places => Boolean(places && places.length))).subscribe((places) => {
      this.places = places;
      const place = places[this._service.autoModeCounter] || places[0];
      this.value = place.id;
      if (this._service.autoMode === 'throughOne') {
        this._service.autoModeCounter++;
      }
      this.updateSelected(this.value);
      this._cdr.markForCheck();
    });
  }
}
