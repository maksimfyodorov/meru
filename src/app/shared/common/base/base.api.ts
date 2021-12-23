import { Injector } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { UrlService } from '@core/services/url.service';
import { HttpHelperService } from '@core/services/http-helper.service';
import { DictionaryService } from '@core/services/dictionary.service';
import { LocalStorageService } from '@core/services/local-storage.service';
import { ConfigService } from '@core/services/config.service';
import { IHttpResponse } from '@core/models/http.model';
import { AppError, IAppError } from '@core/models/app-errorl.model';

export class BaseApi {
  protected readonly $config: ConfigService = this.injector.get(ConfigService);
  protected readonly $localStorage: LocalStorageService = this.injector.get(LocalStorageService);
  protected readonly $http: HttpService = this.injector.get(HttpService);
  protected readonly $httpHelper: HttpHelperService = this.injector.get(HttpHelperService);
  protected readonly $url: UrlService = this.injector.get(UrlService);
  protected readonly $dict: DictionaryService = this.injector.get(DictionaryService);

  constructor(protected injector: Injector) {
  }

  protected processResponse<T>(response: IHttpResponse<T>): T | AppError {
    return response.success
      ? response.data
      : new AppError(response.error);
  }
}
