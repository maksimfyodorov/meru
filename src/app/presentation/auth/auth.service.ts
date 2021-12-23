import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '@core/models/user.model';
import { UserService } from '@core/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from '@core/services/config.service';
import { SettingsService } from '@shared/settings/settings.service';
import { first, tap } from 'rxjs/operators';
import { AuthKey } from '@src/app/core/enums/auth-key.enum';
import { AuthMethod, AuthOtpKeyType, ICountriesPhones } from '@presentation/auth/auth.model';
import { UrlService } from '@core/services/url.service';
import { IConfigValues } from '@core/models/config.model';
import { COUNTRIES_PHONES, EMPTY_DEVICE_ID } from '@presentation/auth/auth.utils';
import { AuthApiService } from '@shared/http/services/auth-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _login$ = new BehaviorSubject<boolean>(false);
  private _authMethod: AuthMethod = 'basic';
  private _userCaptcha$ = new BehaviorSubject<boolean>(false);
  private _authNumberAttempts: number = 0;
  private _oauth2AuthorizationUrl: string;
  private _serverLogout: string;
  private _oauth2Available: boolean = false;

  constructor(
    private $router: Router,
    private _api: AuthApiService,
    private _cookie: CookieService,
    private _user: UserService,
    private $config: ConfigService,
    private $settings: SettingsService,
    private $url: UrlService,
  ) {
    const userStr = _cookie.get(this._cookieName);
    if (userStr) {
      const { id, deviceId, tokenUUID, authorization }: IUser = JSON.parse(userStr);
      _user.setUser(id, deviceId, tokenUUID, authorization.split(' ')[1]);
      this._login$.next(true);
    }

    this.$config.getOne$<AuthMethod>('authMethod').subscribe((authMethod) => {
      this._authMethod = authMethod;
    });

    this.$config.getOne$().subscribe((configValues: IConfigValues) => {
      this.configureAuth(configValues);
    });
  }

  static base64credentials(login, password): string {
    return window.btoa(unescape(encodeURIComponent(`${login}:${password}`)));
  }

  public get countriesPhones(): ICountriesPhones {
    return COUNTRIES_PHONES;
  }

  public get authOtpKeyTypes(): AuthOtpKeyType[] {
    return this.$config.get<AuthOtpKeyType[]>('authOtpKeyTypes');
  }

  public get isLoggedIn(): boolean {
    return this._login$.getValue();
  }

  public get isLoggedIn$(): Observable<boolean> {
    return this._login$;
  }

  public get authMethod(): AuthMethod {
    return this._authMethod;
  }

  public get isBotDetected$(): Observable<boolean> {
    return this._userCaptcha$;
  }

  public get oauth2Available(): boolean {
    return this.$config.get('oauth2Available');
  }

  public get oauth2AuthorizationUrl(): string {
    const hostUrl: string = this.$config.get('hostUrl');
    const oauth2AuthorizationUrl: string = this.$config.get('oauth2AuthorizationUrl');

    return this.$url.concat(hostUrl, oauth2AuthorizationUrl);
  }

  private checkNumberAttempts(): void {
    this._authNumberAttempts++;
    if (this._authNumberAttempts === this.maxAuthNumberAttempts) {
      this._userCaptcha$.next(true);
    }
  }

  public get oauthSuccessRoute(): string {
    return this.$config.get<string>('oauth2SuccessLoginPage');
  }

  public get maxAuthNumberAttempts(): number {
    return this.$config.get<number>('authNumberAttempts') || 3;
  }

  public getOtpCode(authKey: string, authKeyType: AuthOtpKeyType, credentials: string): Observable<any> {
    const headers: Record<string, string> = {};
    const body: Record<string, any> = {
      authKeyType,
      authKey,
      deviceId: EMPTY_DEVICE_ID,
    };

    headers.Authorization = `Basic ${credentials}`;

    return this._api.getOtpToken(body, headers);
  }

  public login(credentials: string): Observable<any> {
    const headers: Record<string, string> = {};
    this.checkNumberAttempts();

    switch (this._authMethod) {
      case 'basic':
        headers.Authorization = `Basic ${credentials}`;
        break;

      case 'ad_token':
        headers.ad_token = credentials;
        break;
    }

    return this._api.getUserToken({ deviceOs: 'ANGULAR', isDpaAutoAssign: false }, headers);
  }

  public checkOtpCode(authKey: string, authCode: string, credentials: string): Observable<any> {
    const body: Record<string, any> = {};
    const headers: Record<string, string> = {};
    body.authKeyType = authKey.includes('@') ? AuthKey.EMAIL : AuthKey.PHONE;
    body.authKey = authKey;
    body.authCode = authCode;
    body.deviceId = EMPTY_DEVICE_ID;
    body.isDpaAutoAssign = false;

    headers.Authorization = `Basic ${credentials}`;

    this.checkNumberAttempts();
    return this._api.checkOtpToken(body, headers);
  }

  public logout(): void {
    this.setLogin(false);

    if (this._user.isOauthLoggedIn) {
      this.oauth2Logout();
    } else {
      this.$router.navigateByUrl('/auth');
    }
  }

  public goToMainUrl(): void {
    this.$router.navigateByUrl('/');
  }

  public initializeSettings(): Observable<any> {
    return this.$settings.initialize().pipe(tap(() => this.goToMainUrl()));
  }

  setLogin(login: boolean): void {
    this._login$.next(login);

    if (login) {
      this._user.info$.pipe(first()).subscribe((user) => {
        const days = +this.$config.get<number>('authTokenCookieTime') / 1000 / 60 / 60 / 24; // calculate count of days
        const cookieTime = days || 0.1;
        this._cookie.set(this._cookieName, JSON.stringify(user), cookieTime);
      });
    } else {
      this._cookie.delete(this._cookieName);
    }
    this.resetAuthAttempts();
  }

  private configureAuth({ hostUrl, oauth2Available, authMethod, oauth2AuthorizationUrl, serverLogoutUrl }: IConfigValues): void {
    this._authMethod = authMethod;
    this._oauth2Available = oauth2Available;
    this._serverLogout = this.$url.concat(hostUrl, serverLogoutUrl);

    if (oauth2Available) {
      this.configureOauth2(hostUrl, oauth2AuthorizationUrl);
    }
  }

  public configureOauth2(hostUrl: string, oauth2AuthorizationUrl: string): void {
    this._oauth2AuthorizationUrl = this.$url.concat(hostUrl, oauth2AuthorizationUrl);
  }

  private get _cookieName(): string {
    return this.$config.get<string>('authTokenCookieName') || 'auth';
  }

  private resetAuthAttempts(): void {
    this._authNumberAttempts = 0;
    this._userCaptcha$.next(false);
  }

  private oauth2Logout(): void {
    this._user.isOauthLoggedIn = false;
    // this.$router.navigateByUrl('/auth');
    window.location.href = this._serverLogout;
  }
}
