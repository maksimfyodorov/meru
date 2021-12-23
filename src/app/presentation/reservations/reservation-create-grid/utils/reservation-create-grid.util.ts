import { DictionaryName } from '@src/app/shared/dictionaries/dictionaries.constants';
import { ReservationType } from '@src/app/shared/http/models/meta.model';

export const MIN_DURATION = { appointment: 1000 * 60 * 30, workplace: 1000 * 60 * 60, parking: 1000 * 60 * 60 };
export const WORK_HOURS = [6, 23];

export function getPlaceTypeByReserveType(type: ReservationType | string): DictionaryName {
  switch (type) {
    case 'appointment':
      return 'rooms';

    case 'parking':
      return 'parkingLots';

    case 'workplace':
      return 'workplaces';

    default:
      return 'workplaces';
  }
}
