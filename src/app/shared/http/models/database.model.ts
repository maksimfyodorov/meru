import { ReservationType } from '@shared/http/models/meta.model';

export type ReservationsType<T extends ReservationType = ReservationType> = T extends 'workplace' ? IWorkplaceReservation[] : any;

export type ReservationSocialDistanceCheck = 'NONE' | 'FORBIDDEN' | 'CONFIRMATION';

export interface IFloor {
  buildingId: number;
  description: string;
  floorNumber: number;
  id: number;
  mapHeight: number;
  mapImageUrl: string;
  mapPixelsInMeter: number;
  mapWidth: number;
  name: string;
  navigineLocationId: number;
  navigineSublocationId: number;
  sequence: number;
  workplaceReservationSocialDistanceCheck: ReservationSocialDistanceCheck;
}

export interface IBuilding {
  address: string;
  description: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  roomReservationTimeoutAfterFactorSeconds: number;
  roomReservationTimeoutBeforeFactorSeconds: number;
  workDayBeginHour: number;
  workDayEndHour: number;
}

export interface IPlace {
  description: string;
  floorMapId: number;
  height: number;
  id: number;
  name: string;
  tags: number[];
  width: number;
  x: number;
  y: number;
  disabled?: boolean;
  reservation?: Record<string, any>;
}

export interface IWorkplace extends IPlace {
  type: 'DEFAULT' | 'COMPLEMENTARY' | 'PARKING_LOT';
  imageDisabledUrl: string; // заблокированное место
  imageFreeUrl: string; // свободное место
  imageReservedByMeNotConfirmedUrl: string; // зарезервированное мной но ещё не подтверждено
  imageReservedByMeUrl: string; // зарезервированное мной
  imageReservedByUserUrl: string; // зарезервированное другим пользователем
  tableHeight: number;
  tableWidth: number;
  tableX: number;
  tableY: number;
  labelIdPermanentAssignment: number;
  uniqueCode: string;
  workplaceGroups: any[];
  neighborsIds: number[];
}

export interface IRoom extends IPlace {
  avatarImageUrl: string;
  cateringPhone: string;
  ewsConfirmatorMail: string;
  ewsMail: string;
  isBookingAllowed: boolean;
  pathfinderGraphVertexId: number;
  roomTabletColorAlphaBusyLED: number;
  roomTabletColorAlphaBusyUI: number;
  roomTabletColorAlphaFreeLED: number;
  roomTabletColorAlphaFreeUI: number;
  roomTabletColorBusyLED: string;
  roomTabletColorBusyUI: string;
  roomTabletColorFreeLED: string;
  roomTabletColorFreeUI: string;
  roomTabletLogoImageUrl: string;
  roomTabletVideoUrl: string;
  seatCount: number;
  seatCountForSocialDistance: number;
  wifiPointPassword: string;
  wifiPointSsid: string;
  reservationAllowedFrom: string;
  reservationAllowedTo: string;
}

export interface ITag {
  description: string;
  id: number;
  name: string;
  objectType: ITagObjectType;
}
export type ITagObjectType = 'WORKPLACE' | 'ROOM' | 'PARKING_LOT';

export interface IWorkplaceReservation {
  id: number;
  name: string;
  description: string;
  workplaceId: number;
  labelId: number;
  // TODO нужно пояснение о соответствии статусов и картинок
  status: WorkplaceReservationStatus;
  dateTimeFrom: string;
  dateTimeTo: string;
  dateTimeCreated: string;
  dateTimeApproved: string;
  dateTimeConfirmed: string;
  dateTimeClosed: string;
  labelIdApprovalManager: number;
  approvalComment: string;
}
// NEW - Создана, не одобрена и не подтверждена
// APPROVED - Одобрена управляющим
// CONFIRMED - Подтверждена
// CLOSED - Была подтверждена, успешно закрыта либо в процессе брони, либо по завершении
// CANCELED - Отменена пользователем до подтверждения
// DENIED - Отказано в одобрении управляющим
// REFUSED - Не была одобрена или подтверждена, время подтверждения истекло
// UNDEFINED - если значение не определено
export type WorkplaceReservationStatus = 'NEW' | 'APPROVED' | 'CONFIRMED' | 'CLOSED' | 'CANCELED' | 'DENIED' | 'REFUSED' | 'UNDEFINED';
export interface IUser {
  avatarImageUrl: string;
  cardNumber: number;
  category: number;
  description: string;
  id: number;
  isAnyNetworkAllowed: boolean;
  isDemoUser: boolean;
  isLongWorkplaceReserveAllowed: boolean;
  isMultipleRoomsReserveAllowed: boolean;
  isMultipleWorkplacesReserveAllowed: boolean;
  isReadOnly: boolean;
  isSendingUserMessagesEnabled: boolean;
  isVisible: boolean;
  labelGroups: number[];
  mac: string;
  mail: string;
  mainPhone: string;
  name: string;
  phones: string;
  post: string;
  status: number;
  uid: string;
  workplaceGroups: number[];
  workplaceReservationApprovalType: string;
  zonesAllowed: any[];
  zonesForbidden: any[];
  zonesInvisible: any[];
  buildingsSequence: number[];
  floorMapsSequence: number[];
}

export interface ICustomObject {
  arrayAvailableStates: [];
  description: string;
  floorMapId: number;
  htmlText: string;
  id: number;
  imageNormalUrl: string;
  imageSelectedUrl: string;
  isSelectable: boolean;
  name: string;
  pathfinderGraphVertexId: number;
  showStateText: boolean;
  x: number;
  y: number;
}

export interface ILabelGroups {
  description: string;
  id: number;
  name: string;
  managers: number[];
  uniqueCode: string;
}

export interface ILifeDataActiveLabels {
  floorMapId: number;
  id: number;
  pathfinderGraphVertexIdNearest: number;
  processingDateTime: string;
  x: number;
  y: number;
  zoneId: number;
}
export interface IArea {
  description: string;
  id: number;
  name: string;
  parkingLotReservationApprovalType: string;
  parkingLotReservationConfirmationMethod: string;
  roomReservationSocialDistanceCheck: string;
  workplaceReservationApprovalType: string;
  workplaceReservationConfirmationMethod: string;
  workplaceReservationSocialDistanceCheck: string;
  polygons: IAreaPolygon[];
}
export interface IAreaPolygon {
  floorMapId: number;
  pathfinderGraphVertexId: number;
  areaId: number;
  color: string;
  name: string;
  polygonPoints: string;
  description: string;
  id: number;
  isVisible: boolean;
}

export interface IAppointment {
  appointmentLocationString: string; // Описание комнаты где проходит встреча
  appointmentStatus: string; // Статус для встречи
  appointmentAttendees: string[]; // Участники встречи (email)
  appointmentDateFrom: string; // Конец встречи
  appointmentSubject: string; // Тема встречи
  appointmentDateTo: string; // Начало встречи
  appointmentParentId: string; // Идентификатор встречи от организатора
  appointmentId: string; // Идентификатор встречи от участника встречи. Совпадает с parentId, если запрос идет от организатора встречи
  appointmentAttendeeStatus: string; // Статус для участника встречи
  appointmentLocationIds: number[]; // Id комнат, где проходят встречи
  appointmentLocationArray: string[]; // Массив строк c описанием комнат, где проходят встречи
  appointmentOrganizerMail: string; // Организатор встречи (email)
  isAppointmentOrganizer: boolean; // Я вляеться ли пользователь организатором
  reservationAllowedFrom: string; // Время работы переговорки с
  reservationAllowedTo: string; // Время работы переговорки до
  appointmentAttendeesAnswers: Record<string, 'TENTATIVE' | 'ACCEPT' | 'DECLINE'>[];
}

export interface IWorkplaceGroup {
  name: string;
  description: string;
  uniqueCode: string;
  id: number;
}
