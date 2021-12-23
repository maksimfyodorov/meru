import { NgModule } from '@angular/core';
import { IndexedDbModule } from '@app/shared/indexed-db/indexed-db.module';
import { APP_DICTIONARY } from '@core/core.tokens';
import { SharedDictionary } from '@app/shared/shared.dictionary';
import { HttpModule } from '@app/shared/http/http.module';
import { DictionariesModule } from '@app/shared/dictionaries/dictionaries.module';
import { SharedService } from '@shared/shared.service';
import { SettingsModule } from '@shared/settings/settings.module';

@NgModule({
  declarations: [],
  exports: [
    DictionariesModule,
    IndexedDbModule,
    HttpModule,
    SettingsModule
  ],
  providers: [
    {
      provide: APP_DICTIONARY,
      useValue: SharedDictionary,
      multi: true
    },
    SharedService
  ]
})
export class SharedModule {
}
