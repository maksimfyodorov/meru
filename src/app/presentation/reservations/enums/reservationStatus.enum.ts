export enum reservationStatus {
  //открытые
  new = 'Created', // Создана, не одобрена и не подтверждена
  approved = 'Approved', // Одобрена управляющим
  confirmed = 'Confirmed', // Подтверждена
  //закрытые
  closed = 'Closed', // Была подтверждена, успешно закрыта либо в процессе брони, либо по завершении
  canceled = 'Cancelled by user', // Отменена пользователем до подтверждения
  denied = 'Approval denied', // Отказано в одобрении управляющим
  refused = 'Has not been confirmed', // Не была одобрена или подтверждена, время подтверждения истекло
  //system unreachable
  undefined = 'Unknown' // если значение не определено
}
