import { AuthMethod, ICountriesPhones } from '@presentation/auth/auth.model';
import { AuthDictionary } from '@presentation/auth/auth.dictionary';

export const AUTH_OTP_TYPES = ['PHONE', 'EMAIL'] as const;
export const EMPTY_DEVICE_ID: string = 'NO_DEVICE_ID';
export const DEFAULT_AUTH_METHOD: AuthMethod = 'basic';
export const COUNTRIES_PHONES: ICountriesPhones = [
  {
    code: '+7',
    id: 'ru',
    icon: 'icons:lang-ru',
    mask: '(000) 000-00-00',
    placeholder: '(999) 123-45-67',
    title: AuthDictionary.Russia,
  },
];
