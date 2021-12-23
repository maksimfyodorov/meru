import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { HeaderModule } from '@app/layout/header/header.module';
import { HeaderService } from '@app/layout/header/header.service';
import { NavigationModule } from '@app/layout/navigation/navigation.module';
import { NavigationMobileModule } from '@app/layout/navigation-mobile/navigation-mobile.module';


@NgModule({
  declarations: [],
  providers: [ HeaderService ],
  exports: [
    HeaderModule,
    LayoutModule,
    NavigationModule,
    NavigationMobileModule
  ],
})
export class LayoutSharedModule {
}
