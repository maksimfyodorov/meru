import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { IHttpResponseNotificationMessages } from '@core/models/http.model';
import { BaseApi } from '@shared/common/base/base.api';
import { LocalizationService } from '@core/services/localization.service';
import { AppError } from '@core/models/app-errorl.model';
import { HEADERS_META } from '@shared/common/utils/reservations.util';

@Injectable()
export class MetaApiService extends BaseApi {
  protected _metaUrl: Record<string, string>;

  constructor(
    protected injector: Injector,
    private $localization: LocalizationService
  ) {
    super(injector);

    this.$config
      .getOne$('metaUrl')
      .subscribe((metaUrl: Record<string, string>) =>
        this._metaUrl = metaUrl
      );
  }

  public getMeta<T = Record<string, any>>(
    name: string,
    messages: IHttpResponseNotificationMessages = {}
  ): Observable<T | AppError> {
    return this.$localization.currentLang$.pipe(
      map((lang) =>
        this.$url.createUrl(this._metaUrl[name], { lang })
      ),
      switchMap((url) =>
        this.$http.get<T>(url, {}, { headers: HEADERS_META })
      ),
      filterNoProgressHttpEvent(),
      this.$httpHelper.responseNotification(messages),
      map(this.processResponse)
    );
  }
}
