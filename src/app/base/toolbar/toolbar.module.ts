import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { CoreModule } from '@core/core.module';
import { ActionModule } from '@base/action/action.module';


@NgModule({
  declarations: [ ToolbarComponent ],
  exports: [
    ToolbarComponent
  ],
  imports: [
    CoreModule.forChild(),
    ActionModule
  ]
})
export class ToolbarModule {
}
