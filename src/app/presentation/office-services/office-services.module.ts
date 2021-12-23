import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraTitleTplModule } from '@src/app/shared/layout/extra-title-tpl/extra-title-tpl.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzFormModule } from 'ng-zorro-antd/form';
import { OfficeServicesRoutingModule } from './office-services-routing.module';
import { OfficeServicesomponent } from './page/office-services.component';
import { SharedOfficeServicesModule } from '@src/app/shared/office-services/shared-office-services.module';
import { ActionStepCardComponent } from './components/action-step-card/action-step-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule} from "@ngx-translate/core";
import {CoreModule} from "@core/core.module";

@NgModule({
  declarations: [OfficeServicesomponent, ActionStepCardComponent],
  imports: [
    CommonModule,
    OfficeServicesRoutingModule,
    SharedOfficeServicesModule,
    ExtraTitleTplModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzProgressModule,
    NzCardModule,
    NzGridModule,
    NzFormModule,
    TranslateModule,
    CoreModule
  ],
})
export class OfficeServicesModule {}
