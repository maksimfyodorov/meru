import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {INotifications} from '@app/layout/header/components/header-notifications/header-notifications.model';
import {HeaderNotificationsService} from '@app/layout/header/components/header-notifications/header-notifications.service';
import {Subscriptions} from '@core/decorators/subscriptions.decorator';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header-notifications',
  templateUrl: './header-notifications.component.html',
  styleUrls: ['./header-notifications.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderNotificationsComponent implements OnDestroy {
  items: INotifications;
  showElements: number[] = [];

  @Subscriptions()
  sub: Subscription;

  @Input() indentClass: string = '';

  constructor(private $service: HeaderNotificationsService, private cdr: ChangeDetectorRef) {
    this.sub = $service.userNotifications$.subscribe((items) => {
      this.items = items;
      this.cdr.markForCheck();
    });
  }

  removeById(id: string): void {
    const updateItems = this.items.filter((item) => item.id !== id);
    this.$service.userNotifications$.next(updateItems);
  }

  removeAll(): void {
    this.$service.userNotifications$.next([]);
  }

  showItem(index: number): boolean {
    return this.showElements.includes(index);
  }

  ngOnDestroy(): void {
  }
}
