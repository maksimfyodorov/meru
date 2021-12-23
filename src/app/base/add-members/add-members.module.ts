import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMembersComponent } from './add-members.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TranslateModule } from '@ngx-translate/core';
import { ImagesModule } from '@shared/images/images.module';



@NgModule({
  declarations: [AddMembersComponent],
  exports: [
    AddMembersComponent
  ],
    imports: [
        CommonModule,
        NzTagModule,
        NzButtonModule,
        NzIconModule,
        NzDropDownModule,
        NzInputModule,
        FormsModule,
        NzPopoverModule,
        PerfectScrollbarModule,
        NzToolTipModule,
        ReactiveFormsModule,
        NzFormModule,
        TranslateModule,
        ImagesModule
    ]
})
export class AddMembersModule { }
