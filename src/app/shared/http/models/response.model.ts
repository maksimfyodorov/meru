export interface IApiV2ResponseSuccess<T = any> {
  data: T;
  meta: Record<string, any>;
}

export interface IWorkplaceReservationsMassActionResponse extends Array<IWorkplaceReservationsMassActionResponseItem> {
}

export interface IWorkplaceReservationsMassActionResponseItem {
  data: Record<string, any>;
  meta: IWorkplaceReservationsMassActionResponseMeta;
}

export interface IWorkplaceReservationsMassActionResponseMeta {
  isOk: true;
  recordCode: string;
  message: string;
}

export interface IOrganizerAppointmentsResponse {
  appointmentsByOrganizerList: Array<IOrganizerAppointmentsResponseItem>;
}

export interface IOrganizerAppointmentsResponseItem {
  appointmentSubject: string;
  appointmentDateTo: string;
  appointmentLocationString: string;
  appointmentParentId: string;
  appointmentId: string;
  appointmentStatus: string;
  appointmentAttendeeStatus: string;
  appointmentAttendees: string[];
  appointmentLocationIds: number[];
  appointmentDateFrom: string;
  appointmentLocationArray: number;
  appointmentOrganizerMail: string;
}

export interface IParkingLotsReservationsResponse extends Record<string, any> {
  reservations: Array<IParkingLotsReservationsResponseItem>;
}

export interface IParkingLotsReservationsResponseItem extends Record<string, any> {
}
