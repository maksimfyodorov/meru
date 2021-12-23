import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AntdModule } from '@core/antd/antd.module';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [WidgetComponent],
  exports: [
    WidgetComponent
  ],
    imports: [
        CommonModule,
        DragDropModule,
        NzCardModule,
        NzIconModule,
        AntdModule,
        TranslateModule
    ]
})
export class WidgetModule { }
