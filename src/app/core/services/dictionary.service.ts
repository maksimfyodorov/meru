import { IEntry } from '../models/common.model';
import { InitialWords } from '../utils/dictionary.util';
import { Inject, Injectable } from '@angular/core';
import { APP_DICTIONARY } from '@core/core.tokens';
import { isEmpty } from '@core/utils/common.util';

@Injectable()
export class DictionaryService {
  private static _words: IEntry<string> = InitialWords;

  public constructor(
    @Inject(APP_DICTIONARY) private _dicts: Array<Record<string, string>> = []
  ) {
    _dicts.forEach(dict => DictionaryService.set(dict));
  }

  public static get(key: string, whenNull: string | null = null): string {
    if (!key.includes('/')) {
      return DictionaryService._words[key] || whenNull || key;
    }

    return key.split('/').map((part) => DictionaryService.get(part, part)).join('/');
  }

  public static getAll(): Record<string, string> {
    return DictionaryService._words;
  }

  public static set(words: Record<string, string>, replace?: boolean): void;
  public static set(key: string, value: string, replace?: boolean): void;
  public static set(keyOrWords: IEntry<string> | string, valueOrReplace: string | boolean | null = null, replace: boolean = false): void {
    if (keyOrWords instanceof Object) {
      Object
        .entries(keyOrWords)
        .forEach(([ key, _value ]: string[]) =>
          DictionaryService.set(key, _value, Boolean(valueOrReplace))
        );

      return;
    }

    if (DictionaryService.has(keyOrWords) && !replace) {
      return;
    }

    DictionaryService._words[keyOrWords] = String(valueOrReplace);
  }

  public static has(key: string): boolean {
    return !isEmpty(DictionaryService._words[key]);
  }

  public get(key: string, whenNull: string | null = null): string | null {
    return DictionaryService.get(key, whenNull);
  }

  public getAll(): IEntry<string> {
    return DictionaryService._words;
  }

  public set(keyOrWords: IEntry<string> | string, value: string | null = null, replace: boolean = false): void {
    if (keyOrWords instanceof Object) {
      DictionaryService.set(keyOrWords);
      return;
    }

    DictionaryService.set(keyOrWords, value, replace);
  }

  public has(key: string): boolean {
    return DictionaryService.has(key);
  }
}
