import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { en_US, NZ_I18N, ru_RU, ar_EG } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import en from '@angular/common/locales/en';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationModule } from '@presentation/presentation.module';
import { CoreModule } from '@core/core.module';
import { LayoutSharedModule } from '@app/layout/layout-shared.module';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NG_ZORRO_CONFIG } from '@core/antd/antd.module';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LocalizationService } from '@core/services/localization.service';
import { AppService } from '@app/app.service';
import { ConfigService } from '@core/services/config.service';
import { HttpService } from '@core/services/http.service';
import { APP_CONFIG_URL, APP_CONFIG_VALUES } from '@core/core.tokens';
import { environment } from '@src/environments/environment';
import { SharedModule } from '@app/shared/shared.module';
import { AuthInterceptor } from '@shared/http/interceptors/auth.interceptor';
import { NotificationsService } from '@core/services/notifications.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MessagesService } from '@core/services/messages.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';
import { DatePipe } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import ar from '@angular/common/locales/ar';
registerLocaleData(ar);

registerLocaleData(en);
registerLocaleData(ru);

export function AppBootstrapServiceFactory($app: AppService): () => Promise<any> {
  return () => $app.bootstrap();
}

export function NzI18NFactory(localeId: string): any {
  switch (localeId) {
    case 'en-US':
      return en_US;

    case 'ru-RU':
      return ru_RU;

    case 'ar-AR':
      return ar_EG;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PresentationModule,
    SharedModule,
    CoreModule.forRoot(),
    LayoutSharedModule,
    RouterModule,
    IonicModule.forRoot(),
    NgxMaskModule.forRoot(),
    LayoutModule,
  ],
  providers: [
    MessagesService,
    NzMessageService,
    NotificationsService,
    TranslatePipe,
    DatePipe,
    {
      provide: NZ_I18N,
      useFactory: NzI18NFactory,
      deps: [LOCALE_ID],
    },
    {
      provide: NZ_CONFIG,
      useValue: NG_ZORRO_CONFIG,
    },
    {
      provide: APP_CONFIG_VALUES,
      useValue: [],
      multi: true,
    },
    {
      provide: APP_CONFIG_URL,
      useValue: environment.bootConfigUrl,
      multi: false,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: AppBootstrapServiceFactory,
      multi: true,
      deps: [AppService, ConfigService, HttpService, LocalizationService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: 'Window', useValue: window },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
