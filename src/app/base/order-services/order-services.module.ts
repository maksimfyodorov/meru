import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedOfficeServicesModule } from '@src/app/shared/office-services/shared-office-services.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { OrderServiceModalComponent } from './components/modal/order-service-modal.component';
import { OrderServicesComponent } from './order-services.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OrderServicesComponent,
    OrderServiceModalComponent,
  ],
  exports: [OrderServicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedOfficeServicesModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    NzButtonModule,
    NzModalModule,
    NzRadioModule,
    NzSpinModule,
    NzInputNumberModule,
    NzInputModule,
    NzSelectModule,
    NzSpaceModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    TranslateModule
  ],
})
export class OrderServicesModule {}
