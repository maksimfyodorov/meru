import {Injectable} from '@angular/core';
import {NotificationsService} from './notifications.service';
import {MonoTypeOperatorFunction} from 'rxjs';
import {IHttpResponse, IHttpResponseNotificationMessages} from '../models/http.model';
import {tap} from 'rxjs/operators';
import {processResponseError} from '../utils/http.util';
import {DictionaryService} from './dictionary.service';

@Injectable()
export class HttpHelperService {
  public constructor(
    private $notifications: NotificationsService
  ) {
  }

  public responseNotification<T>(
    notificationMessages: IHttpResponseNotificationMessages = {},
    processError: Function = processResponseError
  ): MonoTypeOperatorFunction<IHttpResponse<T>> {
    const {successTitle, errorTitle, successMessage, connectionFailedMessage}: IHttpResponseNotificationMessages = notificationMessages;
    let {title, errorMessage}: IHttpResponseNotificationMessages = notificationMessages;

    return tap(({state, error, connection, success}: IHttpResponse<any>): MonoTypeOperatorFunction<IHttpResponse<T>> => {
      if (state === 'pending') {
        return;
      }

      title = success
        ? successTitle || title || DictionaryService.get('Notification')
        : errorTitle || title || DictionaryService.get('Error');
      errorMessage = !connection && connectionFailedMessage
        ? connectionFailedMessage
        : processError(error) || errorMessage;

      if (success && successMessage) {
        this.$notifications.success(title, successMessage);
        return;
      }

      if (!success) {
        this.$notifications.error(title, errorMessage);
      }
    });
  }
}
