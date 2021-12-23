import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSelectComponent } from './dropdown-select.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [DropdownSelectComponent],
  exports: [DropdownSelectComponent],
    imports: [
        CommonModule,
        NzDropDownModule,
        NzIconModule,
        TranslateModule
    ]
})
export class DropdownSelectModule {}
