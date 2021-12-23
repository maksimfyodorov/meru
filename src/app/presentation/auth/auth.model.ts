export type AuthMethod = 'basic' | 'ad_token' | 'otp';
export type AuthOtpKeyType = 'PHONE' | 'EMAIL';

export interface ICountriesPhones extends Array<ICountryPhone> {
}

export interface ICountryPhone {
  code: string;
  icon: string;
  id: string;
  mask: string;
  title: string;
  placeholder: string;
}
