import { Injectable } from '@angular/core';
import { ConfigService } from '@core/services/config.service';
import { HttpService } from '@core/services/http.service';
import { DictionariesIndexedDb } from '@app/shared/dictionaries/dictionaries.indexed-db';
import {
  IDictionary,
  IDictionaryItem,
} from '@app/shared/dictionaries/dictionaries.model';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  of,
  ReplaySubject,
} from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UrlService } from '@core/services/url.service';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { getLoadableDictionaries } from '@shared/dictionaries/dictionaries.utils';
import { DictionariesMatchersService } from '@shared/dictionaries/services/dictionaries-matchers.service';

@Injectable()
export class DictionariesService {
  private _already$: ReplaySubject<boolean> = new ReplaySubject(1);
  private _progress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _dictionaryCount: number = getLoadableDictionaries().length;

  constructor(
    private $indexedDb: DictionariesIndexedDb,
    private $config: ConfigService,
    private $http: HttpService,
    private $url: UrlService
  ) {}

  public get already$(): Observable<boolean> {
    return this._already$.asObservable();
  }

  public get progress$(): Observable<number> {
    return this._progress$.pipe(
      map((progress) => Math.round((100 * progress) / this._dictionaryCount))
    );
  }

  public getDictionary<T = IDictionary>(
    name: DictionaryName,
    whenEmpty: any = null
  ): Observable<T | null> {
    return this.$indexedDb
      .getDictionary(name)
      .pipe(map((dictionary) => dictionary || whenEmpty));
  }

  public getDictionaryItemByKey<T = IDictionaryItem>(
    name: DictionaryName,
    id: number,
    whenEmpty: any = null
  ): Observable<T | null> {
    return this.$indexedDb
      .getDictionaryItemByKey(name, id)
      .pipe(map((dictionary) => dictionary || whenEmpty));
  }

  public getDictionaryItemByIndex<T = IDictionaryItem>(
    name: DictionaryName,
    index: string,
    value: any,
    whenEmpty: any = null
  ): Observable<T> {
    return this.$indexedDb
      .getDictionaryItemByIndex(name, index, value)
      .pipe(map((dictionary) => dictionary || whenEmpty));
  }

  public addDictionary(
    name: DictionaryName,
    data: IDictionary
  ): Observable<any> {
    return this.$indexedDb.addDictionary(name, data);
  }

  public updateDictionaryItem<T extends IDictionaryItem = IDictionaryItem>(
    name: DictionaryName,
    item: T,
    key?: any
  ): Observable<any> {
    return this.$indexedDb.updateDictionaryItem(name, item, key);
  }

  public checkAlreadyDictionaries(): Observable<any> {
    const cacheTime: number = this.$config.get('dictionariesCacheTime', 0);
    const nowTime: number = Date.now();

    return this.$indexedDb.getLastCacheTime().pipe(
      tap((lastCacheTime) => {
        if (nowTime - lastCacheTime <= cacheTime) {
          this.setAlready();
        }
      })
    );
  }

  public cacheDictionaries(): Observable<any> {
    return of(null).pipe(
      switchMap(() =>
        combineLatest(
          getLoadableDictionaries().map((dictionary) =>
            this.cacheDictionary(dictionary)
          )
        )
      ),
      switchMap(() => this.$indexedDb.setLastCacheTime(Date.now())),
      catchError((err) => {
        if (err) {
          console.error('Error loading dictionaries', err);
        }
        return of(null);
      }),
      tap(() => this.setAlready())
    );
  }

  public cacheDictionariesByName(dictionary: DictionaryName): Observable<any> {
    return of(null).pipe(
      switchMap(() => this.cacheDictionary(dictionary)),
      switchMap(() => this.$indexedDb.setLastCacheTime(Date.now())),
      catchError((err) => {
        if (err) {
          console.error('Error loading dictionaries', err);
        }
        return of(null);
      }),
      tap(() => this.setAlready())
    );
  }

  private incrementProgress(): void {
    this._progress$.next(this._progress$.value + 1);
  }

  private setAlready(): void {
    DictionariesMatchersService.already = true;
    this._already$.next(true);
    this._already$.complete();
  }

  private cacheDictionary(dictionaryName: DictionaryName): Observable<any> {
    const dictionaryUrl: string = this.$config.get('dictionaryUrl');
    const url: string = this.$url.createUrl(dictionaryUrl, { dictionaryName });
    let data: IDictionary;

    return this.$http.get(url).pipe(
      filterNoProgressHttpEvent(),
      tap((response) => (data = response.data || [])),
      switchMap((response) =>
        this.$indexedDb.updateDictionary(dictionaryName, response?.data || [])
      ),
      catchError((err) => {
        console.error('Error loading dictionary', err);
        return of(null);
      }),
      tap(() => this.incrementProgress())
    );
  }

  public patchDictionaryItem(
    dictionaryName: DictionaryName,
    itemId: number,
    data?: any
  ): Observable<any> {
    const dictionaryUrl: string = this.$config.get('dictionaryUrl');
    const url: string = `${this.$url.createUrl(dictionaryUrl, {
      dictionaryName,
    })}/${itemId}`;

    return this.$http.post(url, data).pipe(filterNoProgressHttpEvent());
  }

  public putDictionaries(dictionaryName: string, data: any): Observable<any> {
    const dictionaryUrl: string = this.$config.get('dictionaryUrl');
    const url: string = `${this.$url.createUrl(dictionaryUrl, {
      dictionaryName,
    })}`;
    return this.$http.put(url, data).pipe(filterNoProgressHttpEvent());
  }
}
