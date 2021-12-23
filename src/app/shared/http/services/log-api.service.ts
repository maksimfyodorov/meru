import { Injectable, Injector } from '@angular/core';
import { environment } from '@src/environments/environment';
import { BaseApi } from '../../common/base/base.api';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';
import { IHttpResponse } from '@src/app/core/models/http.model';
import { Observable } from 'rxjs';

@Injectable()
export class LogApiService extends BaseApi {
  private _apiUrl = environment.apiUrl;

  constructor(protected injector: Injector) {
    super(injector);
  }

  putLogData(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/putLogData', params)
      .pipe(filterNoProgressHttpEvent());
  }
  getLogData(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .get(this._apiUrl + '/putLogData', params)
      .pipe(filterNoProgressHttpEvent());
  }
}
