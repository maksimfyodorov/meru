import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomOutputComponent } from './components/custom-output/custom-output.component';

@NgModule({
  declarations: [CustomInputComponent, CustomOutputComponent],
  exports: [CustomInputComponent, CustomOutputComponent],
  imports: [
    CommonModule,
    FormsModule,
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
  ],
})
export class SharedOfficeServicesModule {}
