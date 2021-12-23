import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG_VALUES } from './core.tokens';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { ObjectEntriesPipe } from './pipes/object-entries.pipe';
import { ObjectFirstKeyPipe } from './pipes/object-first-key.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { PluckPipe } from './pipes/pluck.pipe';
import { MapPipe } from './pipes/map.pipe';
import { DictionaryPipe } from './pipes/dictionary.pipe';
import { DictionaryService } from './services/dictionary.service';
import { ConditionService } from './services/condition.service';
import { ConfigService } from './services/config.service';
import { HttpService } from './services/http.service';
import { LocalStorageService } from './services/local-storage.service';
import { UrlService } from './services/url.service';
import { StringPipe } from './pipes/string.pipe';
import { HttpHelperService } from './services/http-helper.service';
import { DelayPipe } from './pipes/delay.pipe';
import { FormsModule } from '@angular/forms';
import { ObjectPipe } from './pipes/object.pipe';
import { AntdModule } from '@core/antd/antd.module';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizationService } from '@core/services/localization.service';
import { PerfectScrollDirective } from './directives/perfect-scroll.directive';
import { ConditionDirective } from './directives/condition.directive';
import { LocalizePipe } from './pipes/localize.pipe';
import { NavigationService } from '@core/services/navigation.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BlurDirective } from './directives/blur.directive';
import { MessageService } from '@core/services/message.service';
import { ArrayPipe } from './pipes/array.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    ObjectEntriesPipe,
    ObjectFirstKeyPipe,
    SafeUrlPipe,
    PluckPipe,
    MapPipe,
    DictionaryPipe,
    StringPipe,
    DelayPipe,
    ObjectPipe,
    PerfectScrollDirective,
    ConditionDirective,
    LocalizePipe,
    BlurDirective,
    ArrayPipe,
    HighlightPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule,
    AntdModule,
    PerfectScrollbarModule,
    FilterPipe,
    ObjectEntriesPipe,
    ObjectFirstKeyPipe,
    SafeUrlPipe,
    PluckPipe,
    MapPipe,
    DictionaryPipe,
    StringPipe,
    DelayPipe,
    PerfectScrollDirective,
    ConditionDirective,
    LocalizePipe,
    HighlightPipe,
    BlurDirective,
    ObjectPipe
  ],
  providers: [
    ConditionService,
    HttpHelperService,
    LocalStorageService,
    UrlService,
    NavigationService
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: APP_CONFIG_VALUES,
          useValue: [],
          multi: true
        },
        ConfigService,
        DictionaryService,
        HttpService,
        LocalizationService,
        MessageService
      ]
    };
  }

  public static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
