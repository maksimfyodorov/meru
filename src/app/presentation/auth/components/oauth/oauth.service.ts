import { Injectable } from '@angular/core';
import { ConfigService } from '@core/services/config.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { NavigationService } from '@core/services/navigation.service';

@Injectable()
export class OauthService {
  private _oauthRedirectUrl: string;
  private _oauthWindow: Window;
  private _isOauthActive: boolean = true;

  constructor(
    private $config: ConfigService,
    private $oauth: OAuthService,
    private $navigation: NavigationService
  ) {
  }

  public get isOauthActive(): boolean {
    return this._isOauthActive;
  }

  public configureOauth(): void {
    const hostUrl: string = this.$config.get('hostUrl');
    const oauth2AuthorizationUrl: string = this.$config.get('oauth2AuthorizationUrl');

    this._oauthRedirectUrl = `${hostUrl}${oauth2AuthorizationUrl}`;
  }

  public loginOauth(): void {
    this.createOauthWindow();
  }

  public goToRootAuth(): void {
    this.$navigation.go('auth');
  }

  private createOauthWindow(
    name = 'Authorization',
    width = 1000,
    height = 800,
    left = 0,
    top = 0
  ): void {
    let oauthWindowInterval: any;

    if (!this._oauthRedirectUrl) {
      return null;
    }

    if (this._oauthWindow) {
      this._oauthWindow.focus();
      return;
    }

    const options = `width=${width},height=${height},left=${left},top=${top}`;
    this._oauthWindow = window.open(this._oauthRedirectUrl, name, options);

    oauthWindowInterval = setInterval(() => {
        if (this._oauthWindow.closed) {
          clearInterval(oauthWindowInterval);
          this._oauthWindow = null;
        }
      },
      500
    );
  }
}
