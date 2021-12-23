import { Inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_CONFIG_URL, APP_CONFIG_VALUES } from '../core.tokens';
import { DictionaryService } from './dictionary.service';
import { ConfigKey, IConfigItems, IConfigValues } from '../models/config.model';
import { IEntry } from '../models/common.model';
import { filterNoProgressHttpEvent } from '../utils/http.util';
import { ConfigValue } from '@core/types/config.type';
import { first, map } from 'rxjs/operators';
import { isEmpty } from '@core/utils/common.util';

@Injectable()
export class ConfigService {
  private _values$: BehaviorSubject<IConfigValues> = new BehaviorSubject<IConfigValues>( {} );
  private _initialized$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>( false );
  private _initializationError$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>( null );

  public constructor(
    private $http: HttpService,
    private $dictionary: DictionaryService,
    @Inject( APP_CONFIG_URL ) private _url: string,
    @Inject( APP_CONFIG_VALUES ) private _initialValues: Array<IConfigItems | IEntry<any> | null>,
  ) {
  }

  public get all(): IConfigValues {
    return this._values$.value;
  }

  public get initialized$(): Observable<boolean> {
    return this._initialized$.asObservable();
  }

  public get values$(): Observable<IConfigValues> {
    return this._values$.asObservable();
  }

  public get initializationError$(): Observable<string | null> {
    return this._initializationError$.asObservable();
  }

  public get initializationError(): string | null {
    return this._initializationError$.getValue();
  }

  public get$(): Observable<IConfigValues>;
  public get$<T extends any = any>( key: ConfigKey | string ): Observable<T>;
  public get$<T extends any = any>( key?: ConfigKey | string ): Observable<T | IConfigValues> {
    return this.values$.pipe(
      map( values => key ? values[ key ] : values )
    );
  }

  public getOne$(): Observable<IConfigValues>;
  public getOne$<T extends any = any>( key: ConfigKey | string ): Observable<T>;
  public getOne$<T extends any = any>( key?: ConfigKey | string ): Observable<T | IConfigValues> {
    if (key) {
      return this.get$<T>( key ).pipe(
        first( value => !isEmpty( value ) )
      );
    }
    return this
      .get$()
      .pipe(
        first( ( values: IConfigValues ) =>
          Object.keys( values ).length > 2
        )
      );
  }

  public get<T>( key: ConfigKey | string = null, whenNull: any = null ): T | null {
    const value: ConfigValue = this.all[ key ];

    return typeof value !== 'undefined' ? value : whenNull;
  }

  public getValues( keys: Array<ConfigKey | string>, ...anyKeys: string[] ): Record<ConfigKey | string, any> {
    keys = [].concat( keys, anyKeys );

    return keys.reduce( ( values: IEntry<any | null>, key: string ) =>
        ( {...values, [ key ]: this.get( key )} ),
      {}
    );
  }

  public setValues( newValues: IConfigItems | IEntry<any>, mode: 'append' | 'merge' | 'replace' = 'append' ): void {
    let values: object = this.all;

    if (!( newValues instanceof Array )) {
      newValues = Object.entries( newValues ).map( ( [ code, value ] ) => ( {code, value} ) );
    }

    if (mode === 'replace') {
      values = {};
    } else if (mode === 'append') {
      newValues = newValues.filter( ( {code} ) => !( code in values ) );
    }

    newValues.forEach( ( {code, value} ) =>
      values[ code ] = value
    );

    this._values$.next( values );
  }

  public initialize( initialValues: IConfigItems | IEntry<any> | null = null ): Observable<boolean> {
    if (this._initialValues || initialValues) {
      this.setInitialValues( initialValues );
    }

    if (!this._url) {
      this.setInitialized();
      return this.initialized$;
    }

    if (!this.initialized) {
      this.$http.get<any>( this._url )
        .pipe( filterNoProgressHttpEvent() )
        .subscribe( ( {success, data, error} ) => {
          this.setValues( data || [] );

          if (!success) {
            console.error( DictionaryService.get( 'configLoadingError' ) );
            this._initializationError$.next( error.message );
          }

          this.setInitialized();
          this._initializationError$.complete();
        } );
    }

    return this.initialized$;
  }

  private get initialized(): boolean {
    return this._initialized$.getValue();
  }

  private setInitialized(): void {
    this._initialized$.next( true );
    this._initialized$.complete();
  }

  private setInitialValues( initialValues: IConfigItems | IEntry<any> = [] ): void {
    const values: Array<IConfigItems | IEntry<any>> = [].concat( this._initialValues, initialValues );

    values
      .filter( Boolean )
      .forEach( ( _initialValues ) => this.setValues( _initialValues ) );
  }
}

