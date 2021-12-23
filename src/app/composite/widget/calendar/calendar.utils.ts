import { IWorkplaceReservation } from '@shared/http/models/database.model';

export const isReservationsInDate = (date: Date, reservations: IWorkplaceReservation[]): boolean => {
  return reservationsInDate(date, reservations).length > 0;
};
export const reservationsInDate = (date: Date, items: Record<string, any>[], key: string = null): Record<string, any>[] => {
  return items.filter((item) => {
    const fromDate: Date = key ? new Date(item[key].dateTimeFrom) : new Date(item.dateTimeFrom);
    const toDate: Date = key ? new Date(item[key].dateTimeTo) : new Date(item.dateTimeTo);
    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(0, 0, 0, 0);
    return fromDate.getTime() <= date.getTime() && toDate.getTime() >= date.getTime();
  });
};

