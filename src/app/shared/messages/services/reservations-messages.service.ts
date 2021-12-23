import { Injectable } from '@angular/core';
import { DictionaryService } from '@core/services/dictionary.service';
import { LocalizationService } from '@core/services/localization.service';
import { IHttpError, IHttpResponseNotificationMessages } from '@core/models/http.model';
import { IAppError } from '@core/models/app-errorl.model';

@Injectable({providedIn: 'root'})
export class ReservationsMessagesService {
  private static actionNotificationsMessages: IHttpResponseNotificationMessages;

  public constructor(
    private $dict: DictionaryService,
    private $localization: LocalizationService
  ) {
  }

  public get actionNotificationsMessages(): IHttpResponseNotificationMessages {
    return ReservationsMessagesService.actionNotificationsMessages;
  }

  public get loadingMetaErrorNotification(): IHttpResponseNotificationMessages {
    return {
      errorTitle: this.$dict.get('ErrorLoadingReservationsListMeta')
    };
  }

  public get loadingDataErrorNotification(): IHttpResponseNotificationMessages {
    return {
      errorTitle: this.$dict.get('ErrorLoadingReservationsListData')
    };
  }

  public getActionNotificationsMessages(
    messages: IHttpResponseNotificationMessages
  ): IHttpResponseNotificationMessages {
    if (!this.actionNotificationsMessages) {
      this.createActionNotificationsMessage();
    }

    return {...this.actionNotificationsMessages, ...messages};
  }

  public getLoadingMetaError({ message }: IHttpError): IAppError {
    return this.getErrorLoadingMessage(message,'ErrorLoadingReservationsListMeta');
  }

  public getLoadingDataError({ message }: IHttpError): IAppError {
    return this.getErrorLoadingMessage(message,'ErrorLoadingReservationsListData');
  }

  private getErrorLoadingMessage(message: string, code: string): IAppError {
    return  {
      message,
      title: this.$dict.get('LoadReservationsListFailed'),
      subtitle: this.$dict.get(code)
    }
  }

  private getLocalizedDictionaryWord(code: string): string {
    return this.$localization.translate(this.$dict.get(code));
  }

  private createActionNotificationsMessage(): void {
    ReservationsMessagesService.actionNotificationsMessages = {
      title: this.$dict.get('ActionCompleted'),
      errorTitle: this.$dict.get('ActionFailed'),
      successMessage: this.$dict.get('ActionCompletedSuccessfully')
    };
  }
}
