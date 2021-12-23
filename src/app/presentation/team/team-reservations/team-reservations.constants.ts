import { INavigations } from '@app/layout/navigation/navigation.model';

export  const TEAM_RESERVATIONS_MENU: INavigations  = [{
  id: 'workplace',
  title:'Рабочие места',
  url: 'workplace',
  disabled: false
}, {
  id: 'appointment',
  title:'Переговорки',
  url: 'appointment',
  disabled: true
}, {
  id: 'locker',
  title:'Шкафчики',
  url: 'locker',
  disabled: true
}, {
  id: 'parking',
  title:'Парковочные места',
  url: 'parking',
  disabled: true
}]
