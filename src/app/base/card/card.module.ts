import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzTagModule} from 'ng-zorro-antd/tag';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CardFormControlDirective } from './card-form-control.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgxMaskModule } from 'ngx-mask';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [CardComponent, CardFormControlDirective],
  exports: [CardComponent, CardFormControlDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCardModule,
    NzTagModule,
    NzIconModule,
    NzButtonModule,
    NzFormModule,
    NzDescriptionsModule,
    NzSpinModule,
    NgxMaskModule.forChild(),
    TranslateModule,
  ],
})
export class CardModule {}
