import { Inject, Injectable, Optional } from '@angular/core';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';
import { APP_DEFAULT_LANG, APP_LANGS } from '../core.tokens';
import { Observable, ReplaySubject } from 'rxjs';
import { ObservableUtil } from '../utils/observable.util';
import { map, pluck, switchMap, tap } from 'rxjs/operators';
import { en_US, NzI18nService, ru_RU, ar_EG } from 'ng-zorro-antd/i18n';
import { enUS, ru, ar } from 'date-fns/locale';

@Injectable()
export class LocalizationService {
  public static currentLang: string = null;
  private readonly _currentLangS: ReplaySubject<string> = new ReplaySubject<string>(1);

  public constructor(
    private $translate: NgxTranslateService,
    private $i18n: NzI18nService,
    @Optional() @Inject(APP_LANGS) private _langs: string[],
    @Optional() @Inject(APP_DEFAULT_LANG) private _defaultLang: string,
  ) {
    if (!_defaultLang) {
      this._defaultLang = this.$translate.getBrowserLang();
    }

    if (!_langs) {
      this._langs = [this._defaultLang];
    }
    this.$translate.onLangChange
      .pipe(
        pluck('lang'),
        tap((currentLang) => {
          LocalizationService.currentLang = currentLang;
          this.switchNzLanguage();
        }),
      )
      .subscribe(this._currentLangS);
  }

  public get browserDefaultLang(): string {
    return this.$translate.getBrowserLang();
  }

  public get currentLang$(): Observable<string> {
    return this._currentLangS;
  }

  public get currentLang(): string {
    return this.$translate.currentLang;
  }

  public get langs(): string[] {
    return this._langs;
  }

  public set langs(langs: string[]) {
    this._langs = langs;
  }

  public get defaultLang(): string {
    return this._defaultLang;
  }

  public set defaultLang(defaultLang: string) {
    this._defaultLang = defaultLang;
  }

  public getTranslation(lang: string): Observable<any> {
    return this.$translate.getTranslation(lang);
  }

  public initialize(lang: string = this.defaultLang): Observable<any> {
    return this.getTranslation(lang).pipe(
      map(() => {
        this.$translate.addLangs(this.langs);
        this.$translate.setDefaultLang(this.defaultLang);
      }),
      switchMap(() => this.use(lang)),
    );
  }

  public use(lang: string = this.defaultLang): Observable<any> {
    lang = this.getAvailableLang(lang);
    return this.$translate.use(lang);
  }

  public translate(query: string): string {
    return ObservableUtil.take<string>(this.translate$(query));
  }

  public translate$(query: string): Observable<string> {
    return this.$translate.get(query);
  }

  private getAvailableLang(lang: string = null): string {
    return this.langs.includes(lang) ? lang : this.defaultLang;
  }

  private switchNzLanguage(): void {
    switch (this.currentLang) {
      case 'ru':
        this.$i18n.setLocale(ru_RU);
        this.$i18n.setDateLocale(ru);
        break;

      case 'en':
        this.$i18n.setLocale(en_US);
        this.$i18n.setDateLocale(enUS);
        break;
      case 'ar':
        this.$i18n.setLocale(ar_EG);
        this.$i18n.setDateLocale(ar);
        break;
    }
  }
}
