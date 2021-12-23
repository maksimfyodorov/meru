import {
  IAppointment,
  IFloor,
  IPlace,
  IWorkplaceReservation,
} from '@src/app/shared/http/models/database.model';

export interface IReservationByQr {
  actionType: ReservationActionType;
  objectData: IPlace;
  objectType: ReservationObjectType;
  floor: IFloor;
  extraDataWorkplaceReservation: IWorkplaceReservation | IAppointment;
}
export type ReservationActionType =
  | 'WORKPLACE_VIEW'
  | 'WORKPLACE_DISABLED_BY_LABEL_PROPERTIES'
  | 'WORKPLACE_DISABLED_BY_SOCIAL_DISTANCE'
  | 'WORKPLACE_RESERVATION_VIEW'
  | 'WORKPLACE_RESERVATION_ALREADY_EXISTS'
  | 'WORKPLACE_RESERVATION_CREATE'
  | 'WORKPLACE_RESERVATION_CONFIRM'
  | 'WORKPLACE_RESERVATION_CANCEL'
  | 'APPOINTMENT_VIEW'
  | 'APPOINTMENT_CREATE';

export type ReservationObjectType = 'WORKPLACE' | 'PARKING_LOT' | 'APPOINTMENT';

export interface ReservationDateRange {
  value: Date[];
  format: string;
  workHours: number[];
}
