import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MembersComponent],
  exports: [MembersComponent],
  imports: [CommonModule, NzTagModule, NzNoAnimationModule, NzIconModule, NzDropDownModule, NzInputModule, NzButtonModule, TranslateModule],
})
export class MembersModule {}
