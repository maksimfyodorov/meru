import { IParams, IParamsMap } from '@core/models/params.model';
import { Observable, ReplaySubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export class ParamsBuilder<T extends object = IParams, U extends object = T> {
  private _paramsChange: ReplaySubject<T> = new ReplaySubject<T>();
  protected _params: T = {} as T;
  protected _paramsMap: IParamsMap = {};

  public static create<Q extends ParamsBuilder = ParamsBuilder>(): Q {
    return new this() as Q;
  }

  public static destroy<Q extends ParamsBuilder = ParamsBuilder>(instance: Q): void {
    instance.destroy();
  }

  public get params(): T {
    return this._params;
  }

  public get paramsChange(): Observable<T> {
    return this._paramsChange.asObservable().pipe(
      debounceTime(0)
    );
  }

  public get reversParams(): U {
    const reversedMap: IParamsMap = Object.entries(this._paramsMap).reduce(
      (map, [ key, value ]) => map[value] = key,
      {}
    );

    return this.map(this._params, reversedMap) as U;
  }

  public getParam<T = any>(key: string): T {
    return this._params[key]
  }

  public set<P extends T = T>(
    newParams: Partial<P>,
    params: P = this.params as P,
    map: IParamsMap = this._paramsMap
  ): void {
    Object.entries(this.map(newParams, map)).forEach(
      ([ key, value ]) => (params[key] = value)
    );

    this.nextParamsChange();
  }

  public setProperty<P extends T = T>(name: keyof P, value: any, params: P = this.params as P): this {
    if (typeof value !== 'undefined') {
      params[name] = value;
      this.set<P>({ [name]: value } as P, params)
    }

    return this;
  }

  public withParams(newParams: T, map?: IParamsMap): this {
    this.set(newParams, this._params, map);
    return this;
  }

  public useMap(paramsMap: IParamsMap): this {
    this._paramsMap = paramsMap;
    return this;
  }

  public clear(): this {
    this._params = {} as T;
    this._paramsMap = {};

    this.nextParamsChange();

    return this;
  }

  public destroy(): void {
    this._paramsChange.complete();
  }

  protected map(params: IParams, map: IParamsMap = this._paramsMap): IParams {
    params = { ...params };

    Object.keys(params)
      .filter(key => key in map)
      .forEach(key => {
        params[map[key]] = params[key];
        delete params[key];
      });

    return params;
  }

  protected partial<U extends T = T>(params: U, ...keys: Array<keyof U>): Partial<U> {
    return keys.reduce((partial, key) =>
        Object.assign(partial, { [key]: params[key] }),
      {}
    );
  }

  protected exclude<U extends T = T>(params: U, ...keys: Array<keyof U>): Partial<U> {
    return Object.entries(params)
      .filter(([ key, ]) => !keys.includes(key as any))
      .reduce((exclude, [ key, value ]) =>
          Object.assign(exclude, { [key]: value }),
        {}
      );
  }

  private nextParamsChange(): void {
    this._paramsChange.next(this.params);
  }
}
