import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { IDictionaryMeasurements } from '@shared/dictionaries/models/measurements.model';

export const MEASUREMENTS_DICT_NAME: DictionaryName = 'measurements';
export const MEASUREMENTS_URL_KEY: string = 'measurementsUrl';
export const MEASUREMENTS_DEFAULT_VALUES: IDictionaryMeasurements = [
  {
    id: 1,
    lang: 'ru',
    default: true,
    measurements: {
      date: 'dd.MM.yyyy',
      time: 'HH:mm',
      dateTime: 'dd.MM.yyyy HH:mm',
      shortDate: 'dd.MM.yy',
      shortTime: 'HH:mm',
      shortDateTime: 'dd.MM.yy HH:mm',
      filterDate: 'yyyy-MM-dd HH:mm:ss.SSS Z'
    }
  },
  {
    id: 2,
    lang: 'en',
    default: false,
    measurements: {
      date: 'dd.MM.yyyy',
      time: 'HH:mm',
      dateTime: 'dd.MM.yyyy HH:mm',
      shortDate: 'dd.MM.yy',
      shortTime: 'HH:mm',
      shortDateTime: 'dd.MM.yy HH:mm',
      filterDate: 'yyyy-MM-dd HH:mm:ss.SSS Z'
    }
  },
  {
    id: 3,
    lang: 'ar',
    default: false,
    measurements: {
      date: 'dd.MM.yyyy',
      time: 'HH:mm',
      dateTime: 'dd.MM.yyyy HH:mm',
      shortDate: 'dd.MM.yy',
      shortTime: 'HH:mm',
      shortDateTime: 'dd.MM.yy HH:mm',
      filterDate: 'yyyy-MM-dd HH:mm:ss.SSS Z'
    }
  }
];
