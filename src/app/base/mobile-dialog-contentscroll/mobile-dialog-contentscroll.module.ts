import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileDialogContentscrollComponent } from './mobile-dialog-contentscroll.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [MobileDialogContentscrollComponent],
  imports: [CommonModule, NzCardModule, NzModalModule],
  exports: [MobileDialogContentscrollComponent],
})
export class MobileDialogContentscrollModule {}
