import { ReservationSocialDistanceCheck, WorkplaceReservationStatus } from '@shared/http/models/database.model';

export type LiveDataKey = keyof ILiveData;
export type LiveData<T extends LiveDataKey = undefined> = T extends undefined ? ILiveData : ILiveData[T];

export interface ILiveData {
  activeLabels: ILiveDataActiveLabels;
  busyRooms: ILiveDataBusyRooms;
  busyWorkplaces: ILiveDataBusyWorkplaces;
  customObjectsStates: Record<string, any>[];
  disabledWorkplacesIds: number[];
  newUserMessages: Record<string, any>[];
  openServiceDeskRequests: Record<string, any>[];
  smartOfficeVersion: number;
  userMessagesDeliveredCount: number;
}

export interface ILiveDataActiveLabels extends Array<ILiveDataActiveLabel> {}

export interface ILiveDataActiveLabel {
  floorMapId: number;
  pathfinderGraphVertexIdNearest: number;
  x: number;
  y: number;
  zoneId: number;
  id: number;
  processingDateTime: string | Date;
}

export interface ILiveDataBusyRooms extends Array<ILiveDataBusyRoom> {}

export interface ILiveDataBusyRoom {
  roomTabletColorAlphaFreeLED: number;
  roomTabletColorAlphaBusyLED: number;
  ewsMail: string;
  avatarImageUrl: string;
  description: string;
  isEwsReadOnly: boolean;
  roomTabletColorFreeUI: string;
  roomTabletColorBusyLED: string;
  reservationSocialDistanceCheck: ReservationSocialDistanceCheck;
  pathfinderGraphVertexId: number;
  roomTabletColorAlphaBusyUI: number;
  id: number;
  cateringPhone: string;
  roomTabletVideoUrl: string;
  height: number;
  wifiPointPassword: string;
  isBookingAllowed: boolean;
  floorMapId: number;
  wifiPointSsid: string;
  currentAppointment: {
    organizerMail: string;
    dateTo: string | Date;
    dateFrom: string | Date;
  };
  roomTabletColorBusyUI: string;
  seatCount: number;
  tags: number[];
  areaId: number;
  seatCountForSocialDistance: number;
  roomTabletLogoImageUrl: string;
  roomTabletColorFreeLED: string;
  name: string;
  x: number;
  width: number;
  y: number;
  ewsConfirmatorMail: string;
  roomTabletColorAlphaFreeUI: number;
}

export interface ILiveDataBusyWorkplaces extends Array<ILiveDataBusyWorkplace> {}

export interface ILiveDataBusyWorkplace {
  floorMapId: number;
  currentReservation: {
    dateTimeConfirmed: string | Date;
    description: string;
    dateTimeFrom: string | Date;
    dateTimeCreated: string | Date;
    labelId: number;
    approvalComment: string;
    name: string;
    workplaceId: number;
    dateTimeApproved: string | Date;
    labelIdApprovalManager: number;
    dateTimeCanceled: string | Date;
    id: number;
    dateTimeTo: string | Date;
    dateTimeClosed: string | Date;
    status: WorkplaceReservationStatus;
  };
  uniqueCode: string;
  name: string;
  description: string;
  id: number;
}

/**
 * @interfaces
 * Common live data (v1 of live data)
 */
export type CommonLiveDataKey = keyof ICommonLiveData;
export type CommonLiveData<T extends CommonLiveDataKey = undefined> = T extends undefined ? ICommonLiveData : ICommonLiveData[T];

export interface ICommonLiveData {
  liveDataUserMessagesDeliveredCount: number;
  arrayLiveDataActiveLabels: number[];
  arrayLiveDataBusyRooms: Record<string, any>[];
  arrayLiveDataCustomObjectsStates: Record<string, any>[];
  arrayLiveDataDisabledWorkplacesIds: number[];
  arrayLiveDataGuestsIds: number[];
  arrayLiveDataNewUserMessages: Record<string, any>[];
  arrayLiveDataReservedParkingLots: Record<string, any>[];
  arrayLiveDataReservedWorkplaces: Record<string, any>[];
  arrayLiveDataServiceDeskOpenRequests: Record<string, any>[];
  exceptions: Record<string, any>[];
  smartOfficeVersion: number;
}
