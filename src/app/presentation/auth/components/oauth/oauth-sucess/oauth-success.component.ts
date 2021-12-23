import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@presentation/auth/auth.service';
import { OauthService } from '@presentation/auth/components/oauth/oauth.service';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { UserService } from '@core/services/user.service';
import { first, mapTo, switchMap } from 'rxjs/operators';
import { DpaApiService } from '@src/app/shared/http/services/dpa-api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-oauth-login-success',
  templateUrl: './oauth-success.component.html',
  styleUrls: ['./oauth-success.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OauthSuccessComponent implements OnInit {
  @Subscriptions()
  private _subs: Subscription;

  @ViewChild('dpaContentTpl', { static: false })
  public dpaContentTpl: any;

  htmlBodyDpa: string;

  constructor(
    private $oauthLogin: OauthService,
    private $auth: AuthService,
    private $user: UserService,
    private $dpaApiService: DpaApiService,
    private $modal: NzModalService,
    private $translatePipe: TranslatePipe,
  ) {}

  public ngOnInit(): void {
    if (!this.$oauthLogin.isOauthActive) {
      this.$oauthLogin.goToRootAuth();
      return;
    }

    this._subs = this.$auth
      .login('')
      .pipe(
        switchMap(({ success, data }) => {
          if (success) {
            return of(this.loginSuccess(data));
          }

          return of(false);
        }),
      )
      .subscribe(() => void 0);
  }

  private loginSuccess(data: Record<string, any>) {
    combineLatest([
      this.$dpaApiService.getLastDPA(),
      this.$dpaApiService.checkLastDPA({
        labelId: data.labelId,
      }),
    ])
      .pipe(first())
      .subscribe(([dpa, sign]) => {
        if (dpa && !sign?.data?.RESULT_SUCCESS) {
          this.$modal.confirm({
            nzWidth: '80%',
            nzTitle: this.$translatePipe.transform('Sign the Terms of Service?'),
            nzContent: this.dpaContentTpl,
            nzOnOk: () => {
              this.$dpaApiService
                .assignDPA({ dpaId: dpa.data.id, labelId: data.labelId })
                .pipe(first())
                .subscribe(() => {
                  this.$user
                    .setUser$(data.labelId, data.deviceId, data.uuid, '')
                    .pipe(first())
                    .subscribe(() => {
                      this.$auth.setLogin(true);
                      this.$user.isOauthLoggedIn = true;
                      this.$auth.initializeSettings().pipe(mapTo(true), first()).subscribe();
                    });
                });
            },
            nzOkText: this.$translatePipe.transform('Accept'),
            nzCancelText: this.$translatePipe.transform('Refuse'),
            nzMaskClosable: true,
            nzOnCancel: () => {
              this.$auth.logout();
            },
          });
        } else {
          this.$user
            .setUser$(data.labelId, data.deviceId, data.uuid, '')
            .pipe(first())
            .subscribe(() => {
              this.$auth.setLogin(true);
              this.$user.isOauthLoggedIn = true;
              this.$auth.initializeSettings().pipe(mapTo(true), first()).subscribe();
            });
        }
      });
  }
}
