import { NgModule } from '@angular/core';
import { LoadingDictionariesComponent } from '@app/layout/loading-dictionaries/loading-dictionaries.component';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [ LoadingDictionariesComponent ],
  imports: [
    CoreModule.forChild()
  ]
})
export class LoadingDictionariesModule {
}
