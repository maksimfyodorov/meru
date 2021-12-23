import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '@app/layout/layout/layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderModule } from '@app/layout/header/header.module';
import { NavigationModule } from '@app/layout/navigation/navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BreadcrumbModule } from '@base/breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';
import { NavigationMobileModule } from '@app/layout/navigation-mobile/navigation-mobile.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CoreModule } from '@core/core.module';
import { TitleModule } from '@base/title/title.module';



@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    HeaderModule,
    NavigationModule,
    NavigationMobileModule,
    BreadcrumbModule,
    TitleModule,
    NzIconModule,
    NzLayoutModule,
    NzSpinModule,
  ]
})
export class LayoutModule { }
