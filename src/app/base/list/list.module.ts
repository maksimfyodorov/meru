import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { CoreModule } from '@core/core.module';
import { RendererModule } from '../renderer/renderer.module';

@NgModule({
  declarations: [ ListComponent ],
  imports: [
    CoreModule.forChild(),
    RendererModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule {
}
