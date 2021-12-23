import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SkeletonComponent } from '@base/skeleton/skeleton.component';


@NgModule({
  declarations: [
    SkeletonComponent
  ],
  imports: [
    CoreModule.forChild()
  ],
  exports: [
    SkeletonComponent
  ]
})
export class SkeletonModule {
}
