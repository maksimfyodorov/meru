import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IStoreItem, IStoreItems } from '@shared/indexed-db/indexed-db.model';
import { indexedDbConfig } from '@shared/indexed-db/indexed-db.config';

@Injectable()
export class IndexedDbService {
  constructor(private $indexedDb: NgxIndexedDBService) {}

  public getStore(name: string): Observable<IStoreItems> {
    return this.$indexedDb.getAll(name);
  }

  public getStoreItemByKey<T extends any = IStoreItems>(name: string, id: number): Observable<T> {
    return this.$indexedDb.getByKey(name, id);
  }

  public getStoreItemByIndex<T extends any = IStoreItem>(name: string, index: string, value: any): Observable<T> {
    return this.$indexedDb.getByIndex(name, index, value).pipe(
      catchError((error) => {
        console.error(`Error get item by index from store '${name} with index '${index}' with value '${value}'`, error);
        return of(null);
      }),
    );
  }

  public clearAll(): Observable<any> {
    return forkJoin(indexedDbConfig.objectStoresMeta.map(({ store }) => this.clear(store)));
  }

  public clear(storeName: string): Observable<boolean> {
    return this.$indexedDb.clear(storeName).pipe(
      map(() => true),
      catchError((error) => {
        console.error(`Error clear dictionary store '${storeName}' in indexeddb`, error);
        return of(false);
      }),
    );
  }

  public addStoreItems(storeName: string, items: IStoreItems): Observable<any> {
    if (items.length === 0) {
      return of(null);
    }

    return combineLatest(items.map((item) => this.addStoreItem(storeName, item, item.id))).pipe(
      catchError((error) => {
        console.error(`Error adding records to the directory ${name}`, error);
        return of(null);
      }),
    );
  }

  public addStoreItem(storeName: string, value: IStoreItem, id?: number): Observable<any> {
    return this.$indexedDb.add(storeName, value).pipe(
      catchError((error) => {
        if (id) {
          console.error(`Error adding an entry with id ${id} to the directory ${storeName}`, error);
        }
        return of(null);
      }),
    );
  }

  public updateStoreItem(storeName: string, value: IStoreItem, key?: any): Observable<any> {
    return this.$indexedDb.update(storeName, value, key);
  }
}
