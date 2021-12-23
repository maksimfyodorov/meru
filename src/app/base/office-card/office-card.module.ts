import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeCardComponent } from './office-card.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [OfficeCardComponent],
  exports: [OfficeCardComponent],
    imports: [CommonModule, NzIconModule, TranslateModule]
})
export class OfficeCardModule {}
