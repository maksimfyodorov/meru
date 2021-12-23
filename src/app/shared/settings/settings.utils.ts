import { ISettings, ISettingsArray, Setting } from '@shared/settings/settings.model';
import { sortByFactory } from '@core/utils/sort.util';

export function getSettingsArray(settings: Partial<ISettings>): ISettingsArray {
  return Object
    .entries(settings)
    .map(([name, value]: [Setting, any]) => ({name, value}))
    .sort(sortByFactory('name'));
}
