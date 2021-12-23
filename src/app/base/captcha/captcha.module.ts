import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CaptchaComponent } from './captcha.component';

@NgModule({
  declarations: [CaptchaComponent],
  imports: [FormsModule, NzInputModule, NzButtonModule, NzIconModule],
  exports: [CaptchaComponent],
})
export class CaptchaModule {}
