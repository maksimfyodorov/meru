import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFilterComponent } from './simple-filter.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [SimpleFilterComponent],
  exports: [SimpleFilterComponent],
  imports: [
    CommonModule,
    NzCollapseModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class SimpleFilterModule {}
