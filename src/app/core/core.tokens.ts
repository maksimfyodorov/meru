import {InjectionToken} from '@angular/core';
import {Tokens} from './enums/tokens.enum';

export const APP_CONFIG_URL: InjectionToken<string> = new InjectionToken(Tokens.configUrl);
export const APP_CONFIG_VALUES: InjectionToken<string> = new InjectionToken(Tokens.configValues);
export const APP_DEFAULT_LANG: InjectionToken<string> = new InjectionToken(Tokens.defaultLang);
export const APP_LANGS: InjectionToken<string[]> = new InjectionToken(Tokens.langs);
export const APP_DICTIONARY: InjectionToken<string> = new InjectionToken(Tokens.dictionary);
