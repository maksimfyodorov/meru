import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSwitcherComponent } from './multi-switcher.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [MultiSwitcherComponent],
  exports: [
    MultiSwitcherComponent
  ],
  imports: [
    CommonModule,
    NzRadioModule,
    FormsModule,
    NzIconModule,
    NzToolTipModule,
    TranslateModule
  ]
})
export class MultiSwitcherModule { }
