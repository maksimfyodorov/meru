import { Injectable, Injector } from '@angular/core';
import { environment } from '@src/environments/environment';
import { BaseApi } from '../../common/base/base.api';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';
import { IHttpResponse } from '@src/app/core/models/http.model';
import { Observable } from 'rxjs';

@Injectable()
export class DpaApiService extends BaseApi {
  private _apiUrl = environment.apiUrl;

  constructor(protected injector: Injector) {
    super(injector);
  }

  assignDPA(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/assignDPA', params)
      .pipe(filterNoProgressHttpEvent());
  }

  checkLastDPA(
    params: Record<string, any> = {}
  ): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/checkLastDPA', params)
      .pipe(filterNoProgressHttpEvent());
  }

  getLastDPA(): Observable<IHttpResponse<any>> {
    return this.$http
      .post(this._apiUrl + '/getLastDPA')
      .pipe(filterNoProgressHttpEvent());
  }
}
