import { ConfigValue } from '../types/config.type';
import * as config from '../../../assets/config/app.config.json';

export type ConfigKey = keyof typeof config;

export interface IConfigValues extends Record<ConfigKey | string, any> {
}

export interface IConfigItems extends Array<IConfigItem> {
}

export interface IConfigItem {
  code: string;
  value: ConfigValue;
}
