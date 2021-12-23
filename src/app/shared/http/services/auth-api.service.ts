import { BaseApi } from '@shared/common/base/base.api';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { IHttpResponse } from '@core/models/http.model';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';
import { IConfigValues } from '@core/models/config.model';

@Injectable()
export class AuthApiService extends BaseApi {
  private _getUserTokenUrl: string;
  private _getAuthUserCodeUrl: string;
  private _checkAuthUserCodeUrl: string;

  constructor(protected injector: Injector) {
    super(injector);

    this.$config.getOne$().subscribe((values: IConfigValues) => {
      this._getUserTokenUrl = values.getUserTokenUrl;
      this._getAuthUserCodeUrl = values.getAuthUserCodeUrl;
      this._checkAuthUserCodeUrl = values.checkAuthUserCodeUrl;
    });
  }

  public getUserToken(params: Record<string, any> = {}, headers: Record<string, string> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._getUserTokenUrl, params, {}, headers).pipe(filterNoProgressHttpEvent());
  }

  public getOtpToken(params: Record<string, any> = {}, headers: Record<string, string> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._getAuthUserCodeUrl, params, {}, headers).pipe(filterNoProgressHttpEvent());
  }

  public checkOtpToken(params: Record<string, any> = {}, headers: Record<string, string> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._checkAuthUserCodeUrl, params, {}, headers).pipe(filterNoProgressHttpEvent());
  }
}
