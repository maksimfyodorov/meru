import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ BreadcrumbComponent ],
  exports: [ BreadcrumbComponent ],
  imports: [
    CoreModule.forChild(),
    RouterModule
  ]
})
export class BreadcrumbModule {
}
