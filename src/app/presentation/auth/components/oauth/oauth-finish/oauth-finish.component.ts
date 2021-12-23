import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@presentation/auth/auth.service';
import { UserService } from '@core/services/user.service';
import { mapTo, switchMap } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { OauthService } from '@presentation/auth/components/oauth/oauth.service';

@Component({
  selector: 'app-oauth-finish',
  templateUrl: './oauth-finish.component.html',
  styleUrls: ['./oauth-finish.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OauthFinishComponent implements OnInit {
  @Subscriptions()
  private _subs: Subscription;

  constructor(private $oauthLogin: OauthService, private $auth: AuthService, private $user: UserService) {}

  ngOnInit(): void {
    if (!this.$oauthLogin.isOauthActive) {
      this.$oauthLogin.goToRootAuth();
      return;
    }

    this._subs = this.$auth
      .login('')
      .pipe(
        switchMap(({ success, data }) => {
          if (success) {
            return this.loginSuccess(data);
          }

          return of(false);
        }),
      )
      .subscribe(() => {});
  }

  private loginSuccess(data: Record<string, any>): Observable<boolean> {
    this.$user.setUser(data.labelId, data.deviceId, data.uuid, '');
    this.$auth.setLogin(true);

    return this.$auth.initializeSettings().pipe(mapTo(true));
  }
}
