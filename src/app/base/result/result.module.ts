import { NgModule } from '@angular/core';
import { ResultComponent } from './result.component';
import { CoreModule } from '@core/core.module';
import { NzResultModule } from 'ng-zorro-antd/result';


@NgModule({
  declarations: [ ResultComponent ],
  imports: [
    CoreModule.forChild(),
    NzResultModule
  ],
  exports: [
    ResultComponent
  ]
})
export class ResultModule {
}
