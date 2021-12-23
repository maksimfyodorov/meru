import { ReservationType } from '@shared/http/models/meta.model';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';

export function getPlaceTypeByReserveType(type: ReservationType | string): DictionaryName | string {
  switch (type) {
    case 'appointment':
      return 'rooms';

    case 'parking':
      return 'parkingLots';

    case 'workplace':
      return 'workplaces';

    default:
      return type;
  }
}
