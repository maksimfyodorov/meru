import { Injectable } from '@angular/core';
import { ConfigService } from '@core/services/config.service';
import { HttpService } from '@core/services/http.service';
import { delay, filter, shareReplay, switchMap, tap } from 'rxjs/operators';
import { IHttpResponse } from '@core/models/http.model';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Complete } from '@core/decorators/complete.decorator';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';
import { LocalizationService } from '@core/services/localization.service';
import { SharedService } from '@shared/shared.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable( {providedIn: 'root'} )
export class AppService {
  private _ready$: ReplaySubject<boolean> = new ReplaySubject<boolean>( 1 );
  private _configReady$: ReplaySubject<boolean> = new ReplaySubject<boolean>( 1 );
  private _error$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>( null );

  public constructor(
    private $config: ConfigService,
    private $http: HttpService,
    private $localization: LocalizationService,
    private $shared: SharedService,
    private $cookie: CookieService
  ) {
  }

  public get error(): string | null {
    return this._error$.getValue();
  }

  public get configReady$(): Observable<boolean> {
    return this._configReady$.asObservable();
  }

  public get ready$(): Observable<boolean> {
    return this._ready$.asObservable();
  }

  public get error$(): Observable<string | null> {
    return this._error$.asObservable().pipe( shareReplay( 1 ) );
  }

  public set error( error: string ) {
    this._error$.next( error );
    this._error$.complete();
  }

  public configReady(): void {
    this._configReady$.next( true );
    this._configReady$.complete();
  }

  public ready(): void {
    this._ready$.next( true );
    this._ready$.complete();
  }

  public bootstrap(): Promise<any> {
    return this.initializeConfig()
      .pipe(
        delay( 500 ),
        switchMap( () => this.loadAppConfig() ),
        switchMap( () => this.$shared.checkVersion() ),
        switchMap( () => this.loadLocalization() ),
        switchMap( () => this.$shared.initialize() ),
        shareReplay( 1 )
      )
      .toPromise()
      .then( () => null )
      .catch( ( {message}: Error ) => {
        console.error( message );
        return message;
      } )
      .then( ( error: string ) => this.finishBootstrap( error ) );
  }

  @Complete
  public destroy(): void {
  }

  private initializeConfig(): Observable<any> {
    return this.$config
      .initialize()
      .pipe(
        filter( Boolean ),
        tap( () => {
          if (this.$config.initializationError) {
            throw new Error( `Ошибка запуска приложения: ${this.$config.initializationError} ` );
          }
        } )
      );
  }

  private loadAppConfig(): Observable<any> {
    const appConfigUrl: string = this.$config.get<string>( 'appConfigUrl' );

    if (!appConfigUrl) {
      throw new Error( 'Ошибка запуска приложения: Не задан адрес для загрузки конфигурации приложения' );
    }

    return this.$http.get( appConfigUrl ).pipe(
      filterNoProgressHttpEvent(),
      tap( ( {success, data, error}: IHttpResponse<Record<string, any>> ) => {
        if (success) {
          this.$config.setValues( data );
        } else {
          throw new Error( `Ошибка загрузки конфигурации приложения: ${error?.message || error}` );
        }
        this.configReady();
      } )
    );
  }

  private loadLocalization(): Observable<any> {
    const langCookieName: string = this.$config.get( 'langCookieName' );
    const defaultLang: string = this.$localization.browserDefaultLang ||
      this.$config.get<string>( 'defaultLang' );
    const langs: string[] = this.$config.get<string[]>( 'langs' );
    const lang: string = this.$cookie.get( langCookieName ) || this.$config.get<string>( 'lang' );

    this.$localization.defaultLang = defaultLang;
    this.$localization.langs = langs;

    return this.$localization.initialize( lang );
  }

  private finishBootstrap( error: string | null ): void {
    const globalLoader: HTMLElement = document.querySelector<HTMLElement>( '.global-loader' );

    if (globalLoader) {
      globalLoader.classList.add( '_hidden' );

      setTimeout( () => {
        this.ready();
        globalLoader.remove();

        if (error) {
          this.error = error;
        }
      }, 1500 );
    }
  }
}
