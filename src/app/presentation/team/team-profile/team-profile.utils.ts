import { ColorAliasType } from '@src/theme/ts/color-aslias';

export const STATUS_MAP = {
  NEW: 'primary',
  APPROVED: 'success',
  CONFIRMED: 'success',
  CLOSED: 'neutral',
  DENIED: 'default',
  REFUSED: 'danger',
  UNDEFINED: 'warning',
};
const statusOptions: { map: Record<string, { color: ColorAliasType; value: string }>} = {
  map: {
    NEW: {
      color: 'primary',
      value: 'Новый',
    },
    APPROVED: {
      color: 'success',
      value: 'Одобренный'
    },
    CONFIRMED: {
      color: 'success',
      value: 'Подтвержден'
    },
    CLOSED: {
      color: 'neutral',
      value: 'Закрыт'
    },
    DENIED: {
      color: 'default',
      value: 'Отклонен'
    },
    REFUSED: {
      color: 'danger',
      value: 'Отказано'
    },
    UNDEFINED: {
      color: 'warning',
      value: 'Неопределенно'
    }
  }
};
