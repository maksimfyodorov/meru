import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { UserService } from '@core/services/user.service';
import { forkJoin, of, Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { AuthOtpKeyType, ICountriesPhones, ICountryPhone } from '@presentation/auth/auth.model';
import {
  AUTH_CODE_CONTROL,
  AUTH_OTP_KEY_TYPE_TABS,
  EMAIL_REGEXP,
  getAuthKeyFormControl,
} from '@presentation/auth/components/otp/otp.utils';
import { ITab } from '@core/models/tabs.model';
import { FormControl } from '@angular/forms';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { Debounce } from '@core/decorators/debounce.decorator';
import { EMPTY_DEVICE_ID } from '../../auth.utils';
import { first, mapTo, switchMap } from 'rxjs/operators';
import { DpaApiService } from '@src/app/shared/http/services/dpa-api.service';
import { TranslatePipe } from '@ngx-translate/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpComponent implements OnDestroy, OnInit {
  public authCodeControl: FormControl = AUTH_CODE_CONTROL;
  public authKeyTypes: AuthOtpKeyType[] = this.$auth.authOtpKeyTypes;
  public authKeyType: AuthOtpKeyType;
  public authKeyTypeTabs: Record<AuthOtpKeyType, ITab> = AUTH_OTP_KEY_TYPE_TABS;
  public countriesPhones: ICountriesPhones = this.$auth.countriesPhones;
  public countryPhone: ICountryPhone;
  public emailRegExp: RegExp = EMAIL_REGEXP;
  public authKeyControl: FormControl;
  public htmlBodyDpa: string;

  @MarkForCheck
  public error: boolean = false;

  @MarkForCheck
  public loading: boolean = false;

  @MarkForCheck
  public codeSent: boolean = false;

  @ViewChild('authCodeInput')
  private authCodeInput: ElementRef | undefined;

  @ViewChild('authKeyInput')
  private authKeyInput: ElementRef | undefined;

  @ViewChild('dpaContentTpl', { static: false })
  public dpaContentTpl: any;

  @Subscriptions()
  private sub: Subscription;

  constructor(
    private $auth: AuthService,
    private $dpaApiService: DpaApiService,
    private $user: UserService,
    private $translatePipe: TranslatePipe,
    private $modal: NzModalService,
    private $cdr: ChangeDetectorRef,
  ) {}

  public requestCodeAction(): void {
    this.loading = true;
    const credentials = AuthService.base64credentials('replicator', 'replicator');

    this.sub = this.$auth.getOtpCode(this.authKey, this.authKeyType, credentials).subscribe(({ success }) => {
      this.error = !success;
      if (success) {
        this.codeSent = true;
        this.setFocusOnAuthMethodInput();
      }

      this.loading = false;
    });
  }

  public loginAction(checkDpa = true): void {
    this.loading = true;
    const credentials = AuthService.base64credentials('replicator', 'replicator');
    this.sub = this.$auth
      .checkOtpCode(this.authKey, this.authCodeControl.value, credentials)
      .pipe(
        switchMap(({ success, data }) => {
          this.error = !success;
          if (success) {
            return this.$user.setUser$(data.labelId, data.deviceId, data.uuid, credentials).pipe(
              switchMap((r) => {
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
              }),
            );
          } else {
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
                  .assignDPA({ dpaId: dpa.data.id, labelId: data.id })
                  .pipe(first())
                  .subscribe(() => {
                    this.loading = true;
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
          this.error = !state;
        }
        this.loading = false;
      });
  }

  public requestNewCodeAction(): void {
    this.clearFields();
    this.codeSent = false;
  }

  public changeAuthOtpType(authOtpType: AuthOtpKeyType): void {
    this.authKeyType = authOtpType;
    this.authKeyControl = getAuthKeyFormControl(authOtpType);
    this.setFocusOnAuhKeyField();
  }

  public changeCountryPhone(countryPhone: ICountryPhone): void {
    this.countryPhone = countryPhone;
  }

  public ngOnInit(): void {
    this.changeAuthOtpType(this.authKeyTypes[0]);
    this.changeCountryPhone(this.countriesPhones[0]);
  }

  public ngOnDestroy(): void {}

  private get authKey(): string {
    return this.authKeyType === 'PHONE' ? `${this.countryPhone?.code || ''}${this.authKeyControl.value}` : this.authKeyControl.value;
  }

  private clearFields(): void {
    this.authCodeControl.setValue('');
  }

  @Debounce(100)
  private setFocusOnAuthMethodInput(): void {
    if (this.authCodeInput) {
      this.authCodeInput.nativeElement.focus();
    }
  }

  @Debounce(100)
  private setFocusOnAuhKeyField(): void {
    if (this.authKeyInput) {
      this.authKeyInput.nativeElement.focus();
    }
  }
}
