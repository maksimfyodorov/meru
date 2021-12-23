import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SettingsService } from '@shared/settings/settings.service';


@NgModule({
  declarations: [],
  imports: [
    CoreModule.forChild()
  ],
  providers: [
    SettingsService
  ]
})
export class SettingsModule {
}
