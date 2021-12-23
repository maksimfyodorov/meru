import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileFilterButtonComponent } from './mobile-filter-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [MobileFilterButtonComponent],
  imports: [CommonModule, NzButtonModule, NzIconModule, TranslateModule],
  exports: [MobileFilterButtonComponent],
})
export class MobileFilterButtonModule {}
