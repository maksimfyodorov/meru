import { ReservationType } from '@shared/http/models/meta.model';

const teamReservationsFilterFields: Record<ReservationType, Record<string, any>> = {
  appointment: {
    floorMapIds: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null
  },
  locker: {
    floorMapIds: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null
  },
  parking: {
    floorMapIds: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null
  },
  workplace: {
    labelGroupId: null,
    labelIds: [],
    floorMapIds: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null
  }
}

export function getTeamReservationsFilterFieldsByType(type: ReservationType): Record<string, any> | null {
  return teamReservationsFilterFields[type] || null;
}


