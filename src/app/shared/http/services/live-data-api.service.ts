import { Injectable, Injector } from '@angular/core';
import { BaseApi } from '@shared/common/base/base.api';
import { CommonLiveData, CommonLiveDataKey, ICommonLiveData, ILiveData, LiveData, LiveDataKey } from '@shared/http/models/live-data.model';
import { Observable } from 'rxjs';
import { isEmpty } from '@core/utils/common.util';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';
import { map, pluck, tap } from 'rxjs/operators';
import { UserService } from '@core/services/user.service';
import { IUser } from '@core/models/user.model';

@Injectable()
export class LiveDataApiService extends BaseApi {
  protected _liveDataUrl: string;
  protected _getCommonLiveDataUrl: string;

  constructor(protected injector: Injector, private $user: UserService) {
    super(injector);

    this.$config.getOne$().subscribe(({ liveDataUrl, getCommonLiveDataUrl }) => {
      this._liveDataUrl = liveDataUrl;
      this._getCommonLiveDataUrl = getCommonLiveDataUrl;
    });
  }

  public get<T extends LiveDataKey = undefined>(key?: T): Observable<LiveData<T>> {
    const url: string = isEmpty(key) ? this._liveDataUrl : `${this._liveDataUrl}`;

    return this.$http.get<ILiveData>(url, {}, { headers: this.headers }).pipe(
      filterNoProgressHttpEvent(),
      pluck('data'),
      map((liveData: ILiveData) => {
        return (key ? liveData?.[key] : liveData) || [];
      }),
    ) as Observable<LiveData<T>>;
  }

  public getCommon<T extends CommonLiveDataKey = undefined>(key?: T): Observable<CommonLiveData<T>> {
    return this.$http.post<ICommonLiveData>(this._getCommonLiveDataUrl, {}).pipe(
      filterNoProgressHttpEvent(),
      pluck('data'),
      map((liveData: ICommonLiveData) => {
        return key !== undefined ? liveData?.[key] : liveData;
      }),
    ) as Observable<CommonLiveData<T>>;
  }

  private get headers(): Record<string, string> {
    const { tokenUUID: tokenUuid, deviceId }: IUser = this.$user.info;
    return { deviceId, tokenUuid };
  }
}
