import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { IDictionaryStatuses } from '@shared/dictionaries/models/statuses.model';

export const STATUSES_DICT_NAME: DictionaryName = 'statuses';
export const STATUSES_URL_KEY: string = 'statusesUrl';
export const STATUSES_DEFAULT_VALUES: IDictionaryStatuses = [
  {
    id: 0,
    lang: 'ru',
    default: true,
    statuses: [
      {
        code: 'NEW',
        name: 'Создана',
        color: '#FADB14',
        secondaryColor: '#ffffb8',
      },
      {
        code: 'APPROVED',
        name: 'Одобрена',
        color: '#FA8C16',
        secondaryColor: '#ffe7ba',
      },
      {
        code: 'CONFIRMED',
        name: 'Подтверждена',
        color: '#52c41a',
        secondaryColor: '#d9f7be',
      },
      {
        code: 'CLOSED',
        name: 'Завершена',
        color: '#1890FF',
        secondaryColor: '#bae7ff',
      },
      {
        code: 'CANCELED',
        name: 'Отменена',
        color: '#8c8c8c',
        secondaryColor: '#d9d9d9',
      },
      {
        code: 'DENIED',
        name: 'Отклонена',
        color: '#FF4D4F',
        secondaryColor: '#ffccc7',
      },
      {
        code: 'REFUSED',
        name: 'Отказ',
        color: '#FF4D4F',
        secondaryColor: '#ffccc7',
      },
      {
        code: 'DECLINED',
        name: 'Отказ',
        color: '#FF4D4F',
        secondaryColor: '#ffccc7',
        skipFilter: true,
      },
      // {
      //   code: 'UNDEFINED',
      //   name: 'Неизвестен',
      //   color: '#8c8c8c',
      //   secondaryColor: '#d9d9d9'
      // }
    ],
  },
  {
    id: 1,
    lang: 'en',
    default: false,
    statuses: [
      {
        code: 'NEW',
        name: 'New',
        color: '#FADB14',
        secondaryColor: '#ffffb8',
      },
      {
        code: 'APPROVED',
        name: 'Approved',
        color: '#FA8C16',
        secondaryColor: '#ffe7ba',
      },
      {
        code: 'CONFIRMED',
        name: 'Confirmed',
        color: '#3FA80B',
        secondaryColor: '#d9f7be',
      },
      {
        code: 'CLOSED',
        name: 'Closed',
        color: '#1890FF',
        secondaryColor: '#bae7ff',
      },
      {
        code: 'CANCELED',
        name: 'Canceled',
        color: '#8c8c8c',
        secondaryColor: '#d9d9d9',
      },
      {
        code: 'DENIED',
        name: 'Denied',
        color: '#FF4D4F',
        secondaryColor: '#ffccc7',
      },
      {
        code: 'REFUSED',
        name: 'Refused',
        color: '#FF4D4F',
        secondaryColor: '#ffccc7',
      },
      {
        code: 'DECLINED',
        name: 'Declined',
        color: '#FF4D4F',
        secondaryColor: '#ffccc7',
        skipFilter: true,
      },
      // {
      //   code: 'UNDEFINED',
      //   name: 'Unknown',
      //   color: '#8c8c8c',
      //   secondaryColor: '#d9d9d9'
      // }
    ],
  },
  {
    id: 2,
    lang: 'ar',
    default: false,
    statuses: [
      {
        code: 'NEW',
        name: 'New',
        color: '#FADB14',
        secondaryColor: '#ffffb8',
      },
      {
        code: 'APPROVED',
        name: 'Approved',
        color: '#FA8C16',
        secondaryColor: '#ffe7ba',
      },
      {
        code: 'CONFIRMED',
        name: 'Confirmed',
        color: '#3FA80B',
        secondaryColor: '#d9f7be',
      },
      {
        code: 'CLOSED',
        name: 'Closed',
        color: '#1890FF',
        secondaryColor: '#bae7ff',
      },
      {
        code: 'CANCELED',
        name: 'Canceled',
        color: '#8c8c8c',
        secondaryColor: '#d9d9d9',
      },
      {
        code: 'DENIED',
        name: 'Denied',
        color: '#FF4D4F',
        secondaryColor: '#ffccc7',
      },
      {
        code: 'REFUSED',
        name: 'Refused',
        color: '#FF4D4F',
        secondaryColor: '#ffccc7',
      },
      {
        code: 'DECLINED',
        name: 'Declined',
        color: '#FF4D4F',
        secondaryColor: '#ffccc7',
        skipFilter: true,
      },
      // {
      //   code: 'UNDEFINED',
      //   name: 'Unknown',
      //   color: '#8c8c8c',
      //   secondaryColor: '#d9d9d9'
      // }
    ],
  },
];
