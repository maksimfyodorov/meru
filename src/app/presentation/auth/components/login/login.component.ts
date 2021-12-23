import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { UserService } from '@core/services/user.service';
import { BehaviorSubject, forkJoin, of, Subscription } from 'rxjs';
import { first, map, mapTo, switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
import { Trigger } from '@core/decorators/trigger.decorator';
import { DpaApiService } from '@src/app/shared/http/services/dpa-api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthMethod } from '@presentation/auth/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, AfterViewInit {
  public login = '';
  public password = '';
  public isCaptchaResolved: boolean;
  public isBotDetected: boolean;
  public error = new BehaviorSubject<boolean>(false);
  public loading = new BehaviorSubject<boolean>(false);
  public oauth2Available: boolean = this.$auth.oauth2Available;
  public oauth2AuthorizationUrl: string;
  public isFormValid: boolean = true;
  public method: AuthMethod | null = 'basic';

  @ViewChild('captchaRef', { static: false })
  public captchaElem: any;

  @ViewChild('dpaContentTpl', { static: false })
  public dpaContentTpl: any;

  @Subscriptions()
  sub: Subscription;

  public reactiveForm: FormGroup = new FormGroup({
    recaptchaReactive: new FormControl(null, Validators.required),
  });

  htmlBodyDpa: string;

  constructor(
    private $auth: AuthService,
    private _user: UserService,
    private $dpaApiService: DpaApiService,
    private $modal: NzModalService,
    private $translatePipe: TranslatePipe,
    private $cdr: ChangeDetectorRef,
  ) {}

  @HostListener('keydown.enter', ['$event'])
  public keyPressEnter($event): void {
    if (this.loading.value) {
      return;
    }

    // this.loginAction();
  }

  get showCaptcha(): boolean {
    return this.isBotDetected && !this.isCaptchaResolved;
  }

  public loginAction(checkDpa = true): void {
    this.loading.next(true);
    const credentials = AuthService.base64credentials(this.login, this.password);
    this.sub = this.$auth
      .login(credentials)
      .pipe(
        first(),
        switchMap(({ success, data }) => {
          if (success) {
            this._user.setUser(data.labelId, data.deviceId, data.uuid, credentials);
            this.$auth.setLogin(true);
            return forkJoin({
              success: of(success),
              data: of(data),
              dpa: checkDpa ? this.$dpaApiService.getLastDPA() : of(null),
              sign: checkDpa
                ? this.$dpaApiService.checkLastDPA({
                    labelId: data.labelId,
                  })
                : of(null),
            });
            // return this._user.setUser$(data.labelId, data.deviceId, data.uuid, credentials).pipe(
            //   switchMap((r) => {
            //     this.$auth.setLogin(true);
            //     return forkJoin({
            //       success: of(success),
            //       data: of(data),
            //       dpa: checkDpa ? this.$dpaApiService.getLastDPA() : of(null),
            //       sign: checkDpa
            //         ? this.$dpaApiService.checkLastDPA({
            //             labelId: data.labelId,
            //           })
            //         : of(null),
            //     });
            //   }),
            // );
          } else {
            this.isCaptchaResolved = false;
            return forkJoin({
              success: of(success),
              data: of(data),
              dpa: of(null),
              sign: of(null),
            });
          }
        }),
        switchMap(({ success, data, dpa, sign }) => {
          if (checkDpa && success && dpa && !sign?.data?.RESULT_SUCCESS) {
            this.htmlBodyDpa = dpa.data.htmlBody;
            this.$modal.confirm({
              nzWidth: '80%',
              nzTitle: this.$translatePipe.transform('Sign the Terms of Service?'),
              nzContent: this.dpaContentTpl,
              nzOnOk: () => {
                this.$dpaApiService
                  .assignDPA({ dpaId: dpa.data.id, labelId: data.labelId })
                  .pipe(first())
                  .subscribe(() => {
                    this.loading.next(true);
                    this.loginAction(false);
                  });
              },
              nzOkText: this.$translatePipe.transform('Accept'),
              nzCancelText: this.$translatePipe.transform('Refuse'),
              nzMaskClosable: true,
            });
            return of(null);
          } else {
            return success ? this.$auth.initializeSettings().pipe(mapTo(true)) : of(false);
          }
        }),
      )
      .subscribe((state: boolean) => {
        if (state !== null) {
          this.error.next(!state);
        }
        this.loading.next(false);
      });
  }

  resolved(): void {
    this.isCaptchaResolved = true;
    this.resetLoginForm();
  }

  @Trigger('checkFormValid')
  resetLoginForm(): void {
    this.error.next(false);
    this.login = '';
    this.password = '';
  }

  @Trigger('checkFormValid')
  public changeLogin(login: string): void {
    this.login = login;
  }

  @Trigger('checkFormValid')
  public changePassword(password: string): void {
    this.password = password;
  }

  ngOnInit(): void {
    this.sub = this.$auth.isBotDetected$.subscribe((isDetected) => {
      this.isBotDetected = isDetected;
      this.isCaptchaResolved = false;
    });

    if (this.oauth2Available) {
      this.oauth2AuthorizationUrl = this.$auth.oauth2AuthorizationUrl;
    }

    this.method = this.$auth.authMethod;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.checkFormValid();
      this.$cdr.markForCheck();
    }, 100);
  }

  private checkFormValid(): void {
    this.isFormValid = this.login?.length > 0 && this.password?.length > 0 && (this.isBotDetected ? this.isCaptchaResolved : true);
  }
}
