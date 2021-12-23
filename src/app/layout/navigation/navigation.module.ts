import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NavigationComponent } from '@app/layout/navigation/navigation.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NavigationService } from '@app/layout/navigation/navigation.service';
import { NavigationApi } from '@app/layout/navigation/navigation.api';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    NzIconModule,
    RouterModule,
    NzSpinModule,
  ],
  providers: [
    NavigationApi,
    NavigationService

  ]
})
export class NavigationModule { }
