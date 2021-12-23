import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '@composite/user-card/user-card.component';
import { CardModule } from '@base/card/card.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaskPipe, NgxMaskModule } from 'ngx-mask';
import { ImagesModule } from '@shared/images/images.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserCardComponent],
  exports: [UserCardComponent],
  providers: [MaskPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    TranslateModule,
    ImagesModule,
    NzFormModule,
    NgxMaskModule.forChild(),
  ]
})
export class UserCardModule {}
