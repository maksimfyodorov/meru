import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PasswordFieldModule } from '@base/password-field/password-field.module';
import { CoreModule } from '@core/core.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { OtpComponent } from './components/otp/otp.component';
import { OauthComponent } from './components/oauth/oauth.component';
import { DictionaryService } from '@core/services/dictionary.service';
import { AuthDictionary } from '@presentation/auth/auth.dictionary';
import { OAuthModule } from 'angular-oauth2-oidc';
import { OauthSuccessComponent } from './components/oauth/oauth-sucess/oauth-success.component';
import { OauthFinishComponent } from './components/oauth/oauth-finish/oauth-finish.component';
import { CaptchaModule } from '@base/captcha/captcha.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { OauthService } from '@presentation/auth/components/oauth/oauth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthComponent } from './auth.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    LoginComponent,
    OtpComponent,
    ContainerComponent,
    OauthComponent,
    OauthSuccessComponent,
    OauthFinishComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule.forChild(),
    PasswordFieldModule,
    OAuthModule.forRoot(),
    NzSpaceModule,
    CaptchaModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxMaskModule,
  ],
  providers: [OauthService],
})
export class AuthModule {
  constructor() {
    DictionaryService.set(AuthDictionary);
  }
}
