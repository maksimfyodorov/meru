export interface IWorkplaceReservationsMassActionRequest extends Record<string, any>{
  reservations: IWorkplaceReservationsMassActionRequestReservations;
}

export interface IWorkplaceReservationsMassActionRequestReservations extends Array<IWorkplaceReservationsMassActionRequestReservation> {
}

export interface IWorkplaceReservationsMassActionRequestReservation extends Record<string, any>{
  recordCode: string;
  id: string;
  qr: string;
}

export interface IOrganizerAppointmentsRequest extends Record<string, any> {
  tokenUUID?: string;
  locale?: string;
  requestAppointmentRoomIds?: number[];
  requestAppointmentLabelIds?: string[];
  requestAppointmentDateFrom: string;
  requestAppointmentDateTo: string;
}

export interface IParkingLotsReservationsRequest extends Record<string, any> {
  tokenUUID?: string;
  deviceId?: string;
  wifiSSID?: string;
  locale?: string;
  statuses?: string[];
  ids?: number[];
  labelIds?: number[];
  floorMapIds?: number[];
  isFirstPerson?: boolean;
  dateTimeFrom?: string;
  dateTimeTo?: string;
}
