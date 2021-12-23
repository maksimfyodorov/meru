import { Injectable } from '@angular/core';
import { ConfigService } from '@core/services/config.service';
import { HttpService } from '@core/services/http.service';
import { ISettings, ISettingsArray } from '@shared/settings/settings.model';
import { Observable, of } from 'rxjs';
import { SETTINGS_URL_KEY } from '@shared/settings/settings.constants';
import { DB_STORE_SETTINGS } from '@shared/indexed-db/indexed-db.utils';
import { catchError, delay, map, pluck, switchMap } from 'rxjs/operators';
import { IndexedDbService } from '@shared/indexed-db/indexed-db.service';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';
import { getSettingsArray } from '@shared/settings/settings.utils';

@Injectable()
export class SettingsService {
  private _settings: ISettings = {} as ISettings;

  constructor(
    private $indexedDb: IndexedDbService,
    private $config: ConfigService,
    private $http: HttpService
  ) {
  }

  public get settings$(): Observable<ISettings> {
    return of(this._settings);
  }

  public get settings(): ISettings {
    return this._settings;
  }

  public getSettingByName$<T = any>(name: string): Observable<T | null> {
    return this.$indexedDb
      .getStoreItemByIndex(DB_STORE_SETTINGS, 'name', name)
      .pipe(
        pluck('value'),
        catchError(() => of(null))
      );
  }

  public getSettingByName<T = any>(name: string): T | null {
    const value: T = this._settings[name];
    return typeof value !== 'undefined' ? value : null
  }

  public initialize(): Observable<any> {
    const url: string = this.$config.get<string>(SETTINGS_URL_KEY);

    return !url
      ? of(null)
      : this.$http.post<ISettings>(url).pipe(
        filterNoProgressHttpEvent(),
        switchMap(({ success, data }) =>
          !success
            ? of({})
            : this.$indexedDb
              .clear(DB_STORE_SETTINGS)
              .pipe(
                map(() => this._settings = data)
              )
        ),
        map((settings: Partial<ISettings>) => getSettingsArray(settings)),
        switchMap((settingsArray: ISettingsArray) =>
          this.$indexedDb.addStoreItems(DB_STORE_SETTINGS, settingsArray)
        ),
        catchError((err) => {
          console.error('Error loading settings', err);
          return of(null);
        }),
        delay(250)
      );
  }
}
