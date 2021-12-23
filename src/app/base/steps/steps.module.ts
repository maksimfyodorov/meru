import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [StepsComponent],
  exports: [
    StepsComponent
  ],
    imports: [
        CommonModule,
        NzStepsModule,
        TranslateModule
    ]
})
export class StepsModule { }
