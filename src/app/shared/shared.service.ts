import { Injectable } from '@angular/core';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { ConfigService } from '@core/services/config.service';
import { merge, Observable, of, partition } from 'rxjs';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';
import { SettingsService } from '@shared/settings/settings.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { StatusesService } from '@shared/dictionaries/services/statuses.service';
import { UserService } from '@core/services/user.service';
import { DB_STORE_RESPONSE, DB_STORE_VERSION } from '@shared/indexed-db/indexed-db.utils';
import { IndexedDbService } from '@shared/indexed-db/indexed-db.service';
import { debuglog } from 'util';

@Injectable()
export class SharedService {
  constructor(
    private $config: ConfigService,
    private $dictionaries: DictionariesService,
    private $settings: SettingsService,
    private $measurements: MeasurementsService,
    private $statuses: StatusesService,
    private $user: UserService,
    private $indexedDb: IndexedDbService
  ) {
  }

  public initialize(): Observable<any> {
    return of(null).pipe(
      switchMap(() => this.$dictionaries.checkAlreadyDictionaries()),
      switchMap(() => this.$measurements.initialize()),
      switchMap(() => this.$statuses.initialize()),
      switchMap(() => this.$user.isAuth ? this.$settings.initialize() : of(null)),
      catchError(() => of(null)),
    );
  }

  public loadDictionaries(): Observable<any> {
    return of(null).pipe(
      switchMap(() => this.$dictionaries.cacheDictionaries()),
      catchError(() => of(null)),
    );
  }

  public checkVersion(): Observable<any> {
    const currentVersion: string = this.$config.get<string>('version');
    const [notNeedUpdate$, needUpdate$] = partition(
      this.$indexedDb.getStoreItemByIndex(DB_STORE_VERSION, 'version', currentVersion),
      Boolean
    );

    return merge(
      notNeedUpdate$,
      needUpdate$.pipe(
        switchMap(() => this.clearIndexedDbStores()),
        catchError(() => {
          console.error('Error clear indexed-db');
          return of(null);
        }),
        tap(() =>
          this.$indexedDb.addStoreItem(DB_STORE_VERSION, { version: currentVersion })
        )
      )
    );
  }

  private clearIndexedDbStores(): Observable<any> {
    return this.$indexedDb
      .clear(DB_STORE_VERSION)
      .pipe(
        switchMap(() => this.$indexedDb.clear(DB_STORE_RESPONSE))
      );
  }
}
