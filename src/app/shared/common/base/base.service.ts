import { Injector } from '@angular/core';
import { ConfigService } from '@core/services/config.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalizationService } from '@core/services/localization.service';
import { UrlService } from '@core/services/url.service';
import { NavigationService } from '@core/services/navigation.service';
import { BehaviorSubject, MonoTypeOperatorFunction, Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { IAppError } from '@core/models/app-errorl.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';

export class BaseService {
  protected readonly $config: ConfigService = this.injector.get(ConfigService);
  protected readonly $dictionaries: DictionariesService = this.injector.get(DictionariesService);
  protected readonly $nav: NavigationService = this.injector.get(NavigationService);
  protected readonly $localization: LocalizationService = this.injector.get(LocalizationService);
  protected readonly $url: UrlService = this.injector.get(UrlService);
  protected readonly $route: ActivatedRoute = this.injector.get(ActivatedRoute);
  protected readonly $router: Router = this.injector.get(Router);

  protected readonly _reload$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  protected readonly _loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  protected readonly _ready$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  protected readonly _error$: BehaviorSubject<IAppError> = new BehaviorSubject<any>(null);

  constructor(
    protected injector: Injector
  ) {
  }

  public get error$(): Observable<IAppError> {
    return this._error$.asObservable();
  }

  public get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  public get ready$(): Observable<boolean> {
    return this._ready$.asObservable();
  }

  protected get routeParams$(): Observable<Params> {
    return this.$route.params;
  }

  protected get routeQueryParams$(): Observable<Params> {
    return this.$route.queryParams;
  }

  protected get reload$(): Observable<any> {
    return this._reload$.asObservable();
  }

  protected get reset$(): Observable<any> {
    return this._reload$.asObservable().pipe(
      filter(Boolean),
    );
  }

  protected get routeParams(): Params {
    return this.$route.snapshot.params;
  }

  protected get routeQueryParams(): Params {
    return this.$route.snapshot.queryParams;
  }

  protected set error(error: IAppError) {
    this._error$.next(error);
  }

  protected set loading(loading: boolean) {
    this._loading$.next(loading);
  }

  protected set ready(ready: boolean) {
    this._ready$.next(ready);
  }

  public reload(reload: boolean = false): void {
    this._reload$.next(reload);
  }

  public reset(): void {
    this.ready = false;
    this.loading = true;
    this.resetError();
    this.reload(true);
  }

  protected resetError(): void {
    this.error = null;
  }

  protected loadingOperator<T>(loading: boolean = false): MonoTypeOperatorFunction<T> {
    return tap((_value: T) => this.loading = loading);
  }

  protected resetErrorOperator<T>(): MonoTypeOperatorFunction<T> {
    return tap((_value: T) => this.resetError());
  }

  protected readyOperator<T>(ready: boolean = false): MonoTypeOperatorFunction<T> {
    return tap((_value: T) => this.ready = ready);
  }
}
