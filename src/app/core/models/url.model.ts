import {IEntry} from './common.model';

type UrlStringify = (params: object, preStringify?: boolean) => string;
type UrlIncludesParam = (key: string) => boolean;
type UrlIncludesParams = (...keys: string[]) => boolean;

export interface IUrl extends Object {
  stringify: UrlStringify;
  includesParam: UrlIncludesParam;
  includesParams: UrlIncludesParams;
}

export class Url implements IUrl {
  public stringify: UrlStringify;

  private _includesParam: UrlIncludesParam;
  private _includesParams: UrlIncludesParams;
  private _pattern: string;

  public constructor(
    pattern: string,
    params: IEntry<string> | null,
    stringify: UrlStringify,
    includesParam?: UrlIncludesParam,
    includesParams?: UrlIncludesParams
  ) {
    this._pattern = pattern;
    this.stringify = stringify;
    this._includesParam = includesParam;
    this._includesParams = includesParams;

    if (params && Object.keys(params).length) {
      this._pattern = this.stringify(params, true);
    }
  }

  public get pattern(): string {
    return this._pattern;
  }

  public includesParam(key: string): boolean | null {
    if (typeof this._includesParam === 'function') {
      return this.includesParam(key);
    }

    return null;
  }

  public includesParams(key: string[]): boolean | null;
  public includesParams(key: string, ...keys: string[]): boolean | null;
  public includesParams(key: string | string[], ...keys: string[]): boolean | null {
    keys = key instanceof Array ? key : [].concat(key, keys);

    if (typeof this._includesParams === 'function') {
      return this.includesParams(keys);
    }

    return null;
  }
}
