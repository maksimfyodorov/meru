import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceCardAdvancedComponent } from './workplace-card-advanced.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgxMaskModule } from 'ngx-mask';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {CoreModule} from "@core/core.module";

@NgModule({
  declarations: [WorkplaceCardAdvancedComponent],
  exports: [WorkplaceCardAdvancedComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NzCardModule,
        NzTagModule,
        NzTabsModule,
        NzIconModule,
        NzButtonModule,
        NzFormModule,
        NzDescriptionsModule,
        NzSpinModule,
        NgxMaskModule.forChild(),
        TranslateModule,
        CoreModule,
    ],
})
export class WorkplaceCardAdvancedModule {}
