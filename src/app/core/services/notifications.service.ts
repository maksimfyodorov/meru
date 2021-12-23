import { Injectable } from '@angular/core';
import { NzNotificationPlacement } from 'ng-zorro-antd/notification/typings';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LocalizationService } from '@core/services/localization.service';

@Injectable()
export class NotificationsService {
  private _position: NzNotificationPlacement = 'bottomRight';

  public constructor(
    private $notifications: NzNotificationService,
    private $localization: LocalizationService
  ) {
  }

  public error(title: string, message: string): void {
    this.call(title, message, 'error');
  }

  public info(title: string, message: string): void {
    this.call(title, message);
  }

  public success(title: string, message: string): void {
    this.call(title, message, 'success');
  }

  public warning(title: string, message: string): void {
    this.call(title, message, 'warning');
  }

  private call(title: string, message: string, type = 'info'): void {
    title = this.$localization.translate(title);
    message = this.$localization.translate(message);

    this.$notifications.create(type, title, message, { nzPlacement: this._position });
  }
}
