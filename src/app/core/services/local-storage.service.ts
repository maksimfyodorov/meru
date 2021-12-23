import {Inject, Injectable} from '@angular/core';
import {DictionaryService} from './dictionary.service';

@Injectable()
export class LocalStorageService {
  private _storage: Storage;
  private _keys: Set<string>;

  public constructor(
    @Inject(DictionaryService) private $dictionary: DictionaryService
  ) {
    this._storage = localStorage;
    this._keys = new Set(
      ...Array.from(
        new Array(this._storage.length),
        (_, index) => this._storage.key(index)
      )
    );
  }

  public get(name: string): string | null {
    return this._storage.getItem(name);
  }

  public getObject<T>(name: string): T | null {
    const objJSON: string = this.get(name);

    try {
      return JSON.parse(objJSON) as T;
    } catch (e) {
      console.error(
        DictionaryService.get('localStorageBadParsing').replace('$name', name)
      );
      console.error(e);
      return null;
    }
  }

  public set(name: string, value: any): void {
    this._storage.setItem(name, value);
    this._keys.add(name);
  }

  public setObject(name: string, value: object): void {
    let objJSON: string = null;

    try {
      objJSON = JSON.stringify(value);
      this.set(name, objJSON);
    } catch (e) {
      console.error(
        DictionaryService.get('localStorageBadStringify').replace('$name', name)
      );
      console.error(
        DictionaryService.get('localStorageObjectNotSaved').replace('$name', name)
      );
      console.error(e);
    }
  }

  public has(key: string): boolean {
    return this._keys.has(key);
  }

  public delete(name: string): void {
    this._storage.removeItem(name);
    this._keys.delete(name);
  }

  public remove(name: string): void {
    this.delete(name);
  }
}
