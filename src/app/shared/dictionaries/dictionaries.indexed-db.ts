import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BehaviorSubject, combineLatest, from, Observable, of, Subject, zip } from 'rxjs';
import { getDictionariesDbStoreNames, getDictionaryDbStoreName } from '@app/shared/dictionaries/dictionaries.utils';
import { catchError, map, pluck, switchMap, tap } from 'rxjs/operators';
import { IDictionary, IDictionaryItem } from '@app/shared/dictionaries/dictionaries.model';
import { DB_STORE_OPTIONS } from '@shared/indexed-db/indexed-db.utils';
import { IIndexedDbOptionsRecord } from '@shared/indexed-db/indexed-db.model';
import { DictionaryName, LAST_CACHE_TIME_KEY } from '@shared/dictionaries/dictionaries.constants';

@Injectable()
export class DictionariesIndexedDb {
  constructor(
    private $indexedDb: NgxIndexedDBService,
  ) {
  }

  public getLastCacheTime(): Observable<number> {
    return this.getLastCacheTimeRecord().pipe(
      map(item => item || { value: 0 }),
      pluck('value'),
    );
  }

  public getDictionary(name: DictionaryName): Observable<IDictionary> {
    return this.$indexedDb.getAll(getDictionaryDbStoreName(name));
  }

  public getDictionaryItemByKey(name: DictionaryName, id: number): Observable<IDictionaryItem> {
    return this.$indexedDb.getByKey(getDictionaryDbStoreName(name), id);
  }

  public getDictionaryItemByIndex(name: any, index: string, value: any): Observable<IDictionaryItem> {
    return this.$indexedDb.getByIndex(getDictionaryDbStoreName(name), index, value).pipe(
      catchError((error) => {
        console.error(`Error get dictionary item by index from store '${name} by index '${index}' with value '${value}'`, error);
        return of(null);
      })
    );
  }

  public setLastCacheTime(lastCacheTime: number): Observable<any> {
    const value: IIndexedDbOptionsRecord<number> = { name: LAST_CACHE_TIME_KEY, value: lastCacheTime };

    return this.getLastCacheTimeRecord().pipe(
      switchMap((lastCacheTimeRecord: IIndexedDbOptionsRecord<number>) => lastCacheTimeRecord
        ? this.$indexedDb.update(DB_STORE_OPTIONS, { ...lastCacheTimeRecord, ...value })
        : this.$indexedDb.add(DB_STORE_OPTIONS, value)
      )
    );
  }

  public clearAll(): Observable<any> {
    return combineLatest(
      getDictionariesDbStoreNames().map(name => this.clear(name))
    ).pipe(
      catchError(error => {
        console.error('Error clear dictionaries stores in indexeddb', error);
        return of(null);
      })
    );
  }

  public clear(name: DictionaryName | string): Observable<boolean> {
    name = getDictionaryDbStoreName(name);

    return this.$indexedDb.clear(name).pipe(
      map(() => true),
      catchError(error => {
        console.error(`Error clear dictionary store '${name}' in indexeddb`, error);
        return of(false);
      })
    );
  }

  public addDictionary(name: DictionaryName, items: IDictionary): Observable<any> {
    if (!items.length) {
      return of(null);
    }

    const next$: BehaviorSubject<void> = new BehaviorSubject<void>(void (0));
    const items$: Observable<any> = from(items);
    const next: ([ item, ]) => void = () => next$.next();
    const error: () => void = () => next$.next();

    return new Observable<any>(observer => {
      const complete: () => void = () => {
        observer.next(null);
        observer.complete();
        next$.complete();
      };

      zip(items$, next$)
        .pipe(
          switchMap(([ item, ]) => this.addDictionaryItem(name, item))
        )
        .subscribe(next, error, complete);
    });
  }

  public addDictionaryItem(name: DictionaryName | string, value: IDictionaryItem, id?: number): Observable<any> {
    name = getDictionaryDbStoreName(name);

    return this.$indexedDb.add(name, value).pipe(
      catchError(error => {
        console.error(`Error adding an entry with id ${id} to the dictionary ${name}`, error);
        return of(null);
      })
    );
  }

  public updateDictionary(name: DictionaryName, items: IDictionary): Observable<any> {
    if (!items?.length) {
      return of(null);
    }

    return this.clear(name).pipe(
      switchMap(() => this.addDictionary(name, items)),
      catchError(error => {
        console.error(`Error update dictionary ${name}`, error);
        return of(null);
      })
    );
  }

  public updateDictionaryItem(name: DictionaryName | string, item: IDictionaryItem, key?: any): Observable<any> {
    name = getDictionaryDbStoreName(name);

    return this.$indexedDb.update(name, item, key);
  }

  private getLastCacheTimeRecord(): Observable<IIndexedDbOptionsRecord<number>> {
    return this.$indexedDb.getByIndex(DB_STORE_OPTIONS, 'name', LAST_CACHE_TIME_KEY);
  }
}
