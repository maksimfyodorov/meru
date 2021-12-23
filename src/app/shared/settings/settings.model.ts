import { SETTINGS } from './settings.constants';

export type Setting = typeof SETTINGS[number];

export interface ISettings extends Record<Setting, any> {
}

export interface ISettingsArray extends Array<{ name: Setting, value: any }> {
}
