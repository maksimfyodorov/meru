import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INotifications } from '@app/layout/header/components/header-notifications/header-notifications.model';
import { INotificationItem } from '@app/layout/header/components/header-notifications/header-notifications-item/header-notifications-item.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderNotificationsService {
  constructor() {}
  userNotifications$: BehaviorSubject<INotifications> = new BehaviorSubject<INotifications>([]);
  addNotification(item: INotificationItem): void {
    this.userNotifications$.next([...this.userNotifications$.getValue(), item]);
  }
}
