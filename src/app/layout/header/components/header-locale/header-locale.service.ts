import {Injectable} from '@angular/core';
import {ConfigService} from '@core/services/config.service';
import {CookieService} from 'ngx-cookie-service';
import {LocalizationService} from '@core/services/localization.service';
import {Observable} from 'rxjs';
import {NzSelectOptionInterface} from 'ng-zorro-antd/select/select.types';
import {map} from 'rxjs/operators';

@Injectable()
export class HeaderLocaleService {
  private readonly _langCookieName: string;
  private readonly _langCookieTime: number = 315360000;

  constructor(
    private $config: ConfigService,
    private $cookie: CookieService,
    private $localization: LocalizationService
  ) {
    this._langCookieName = this.$config.get<string>('langCookieName');
  }

  public get currentLang$(): Observable<string> {
    return this.$localization.currentLang$.pipe(
      map(lang => `lang-${lang}`)
    );
  }

  public get langsOptions(): NzSelectOptionInterface[] {
    return this.$config
      .get<string[]>('langs')
      .map(lang => ({
        label: `lang-${lang}`,
        value: lang
      }));
  }

  public changeLang(lang: string): void {
    this.$localization
      .use(lang)
      .subscribe(() => {
        this.$cookie.set(this._langCookieName, lang, this._langCookieTime);
      });
  }
}
