import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WorkplaceCardComponent } from './workplace-card.component';
import { CardModule } from '@base/card/card.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [WorkplaceCardComponent],
  exports: [WorkplaceCardComponent],
    imports: [CommonModule, CardModule, NzButtonModule, NzIconModule, TranslateModule],
})
export class WorkplaceCardModule {}
