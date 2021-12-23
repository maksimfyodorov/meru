import { Injectable, Injector } from '@angular/core';
import { BaseApi } from '@shared/common/base/base.api';
import { Observable } from 'rxjs';
import { IHttpResponse } from '@core/models/http.model';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';
import { environment } from '@src/environments/environment';
import { filter } from 'rxjs/operators';

@Injectable()
export class UserApiService extends BaseApi {
  private _apiUrl = environment.apiUrl;

  constructor(
    protected injector: Injector,
  ) {
    super(injector);
  }

  public setLabelBuildingsSequence(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/setLabelBuildingsSequence', params).pipe(
      filterNoProgressHttpEvent()
    );
  }

  public setLabelFloorMapsSequence(params: Record<string, any> = {}): Observable<IHttpResponse<any>> {
    return this.$http.post(this._apiUrl + '/setLabelFloorMapsSequence', params).pipe(
      filterNoProgressHttpEvent(),
    );
  }
}
