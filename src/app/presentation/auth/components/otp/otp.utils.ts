import { AuthDictionary } from '@presentation/auth/auth.dictionary';
import { ITab } from '@core/models/tabs.model';
import { AuthOtpKeyType } from '@presentation/auth/auth.model';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const EMAIL_REGEXP: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
export const AUTH_OTP_KEY_TYPE_TABS: Record<AuthOtpKeyType, ITab> = {
  PHONE: {
    label: AuthDictionary.Phone,
    value: 'PHONE',
    icon: 'phone'
  },
  EMAIL: {
    label: AuthDictionary.Email,
    value: 'EMAIL',
    icon: 'mail'
  }
};
const EMAIL_VALIDATOR: ValidatorFn = ( control: AbstractControl ): ValidationErrors | null =>
  !EMAIL_REGEXP.test( control.value )
    ? {email: true}
    : null;

export const AUTH_CODE_CONTROL: FormControl = new FormControl( '' );

export function getAuthKeyFormControl( authOtpType: AuthOtpKeyType ): FormControl {
  switch (authOtpType) {
    case 'EMAIL':
      return new FormControl(
        '', [
          // Validators.required,
          EMAIL_VALIDATOR
        ] );

    case 'PHONE':
      return new FormControl( '', /*Validators.required*/ );
  }
}
