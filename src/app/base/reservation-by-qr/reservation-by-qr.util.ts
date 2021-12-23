import {
  IAppointment,
  IWorkplaceReservation,
} from '@src/app/shared/http/models/database.model';
import { addDays, getHours } from 'date-fns';
import { IReservationByQr } from './reservation-by-qr.model';

export const getInitDate = (
  workHours: number[],
  minDuration: number
): Date[] => {
  const now = new Date();
  const nowHour: number = now.getHours();
  const nowWithMinDuration: Date = new Date(now.getTime() + minDuration);
  const time = getTimeRangeValue(workHours);
  const [startWorkHour, endWorkHour] = time.map((t) => getHours(new Date(t)));
  const endDate: Date = setHours(now, workHours[1]);

  if (nowHour < endWorkHour && nowHour <= startWorkHour) {
    return [setHours(now, startWorkHour), endDate];
  } else if (nowHour < endWorkHour) {
    return [now, endDate];
  } else if (nowWithMinDuration > endDate) {
    const nextDay = addDays(now, 1);
    return [setHours(nextDay, startWorkHour), setHours(nextDay, endWorkHour)];
  }
};

export const getTimeRangeValue = (range: number[]): number[] => {
  const [startWorkHour, endWorkHour] = range;
  const sliderLimitDate: Date[] = [new Date(), new Date()];
  sliderLimitDate[0].setHours(startWorkHour, 0, 0, 0);
  sliderLimitDate[1].setHours(endWorkHour, 0, 0, 0);
  return sliderLimitDate.map((date) => date.getTime());
};

export const setHours = (date: Date, hours: number): Date => {
  const newDate = new Date(date);
  newDate.setHours(hours, 0, 0, 0);
  return newDate;
};

export const getReservationId = (reservation: IReservationByQr): number => {
  let reservationId: number;
  if (reservation?.objectType === 'APPOINTMENT') {
    reservationId = Number(
      (reservation?.extraDataWorkplaceReservation as IAppointment)?.appointmentId
    );
  } else {
    reservationId = (
      reservation?.extraDataWorkplaceReservation as IWorkplaceReservation
    )?.workplaceId;
  }
  return reservationId;
};
