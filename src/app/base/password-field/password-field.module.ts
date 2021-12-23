import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { PasswordFieldComponent } from './password-field.component';


@NgModule({
  declarations: [ PasswordFieldComponent ],
  exports: [ PasswordFieldComponent ],
  imports: [
    CoreModule.forChild()
  ]
})
export class PasswordFieldModule {
}
