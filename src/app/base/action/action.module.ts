import { NgModule } from '@angular/core';
import { ActionComponent } from './action.component';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [ ActionComponent ],
  imports: [
    CoreModule.forChild()
  ],
  exports: [
    ActionComponent
  ]
})
export class ActionModule {
}
