import { ReservationType } from '@shared/http/models/meta.model';

const reservationsMetaName: Record<ReservationType, string> = {
  appointment: 'reservationsAppointment',
  locker: '',
  parking: '',
  workplace: 'teamReservationsWorkplace'
};

const requestsMetaName: Record<ReservationType, string> = {
  appointment: 'reservationsAppointment',
  locker: '',
  parking: '',
  workplace: 'teamRequestsWorkplace'
};

export function getReservationsMetaNameByType(reservationType: ReservationType): string {
  return reservationsMetaName[reservationType];
}

export function getRequestsMetaNameByType(reservationType: ReservationType): string {
  return requestsMetaName[reservationType];
}
