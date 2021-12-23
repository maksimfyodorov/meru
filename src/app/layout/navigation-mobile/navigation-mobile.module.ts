import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMobileComponent } from '@app/layout/navigation-mobile/navigation-mobile.component';
import { HeaderModule } from '@app/layout/header/header.module';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ReservationByQRModule } from '@src/app/base/reservation-by-qr/reservation-by-qr.module';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzListModule} from 'ng-zorro-antd/list';


@NgModule({
  declarations: [NavigationMobileComponent],
  exports: [NavigationMobileComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    ReservationByQRModule,
    NzIconModule,
    NzToolTipModule,
    NzDropDownModule,
    NzDrawerModule,
    NzListModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavigationMobileModule { }
