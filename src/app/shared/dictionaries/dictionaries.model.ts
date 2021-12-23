export type DictionaryItemType<T extends any = IDictionary> =
  T extends IDictionary<infer V> ? V : T;

export interface IDictionaries extends Array<IDictionary> {
}

export interface IDictionary<T extends object = IDictionaryItem> extends Array<T> {
}

export interface IDictionaryItem extends Record<string, any> {
}

export interface IDictionaryBuildings extends IDictionary<IDictionaryBuildingsItem> {
}

export interface IDictionaryBuildingsItem extends IDictionaryItem {
  id: number;
  name: string;
}

export interface IDictionaryFloorMaps extends IDictionary<IDictionaryFloorMapsItem> {
}

export interface IDictionaryFloorMapsItem extends IDictionaryItem {
  id: number;
  floorNumber: number;
  buildingId: number;
}

export interface IDictionaryLabelGroups extends IDictionary<IDictionaryLabelGroupsItem> {
}

export interface IDictionaryLabelGroupsItem extends IDictionaryItem {
  id: number;
  name: string;
  managers: number[];
}


export interface IDictionaryRooms extends IDictionary<IDictionaryRoomsItem> {
}


export interface IDictionaryRoomsItem extends IDictionaryItem {
  areaId: number;
  avatarImageUrl: string;
  cateringPhone: string;
  description: string;
  ewsConfirmatorMail: string;
  ewsMail: string;
  floorMapId: number;
  height: number;
  id: number;
  isBookingAllowed: boolean;
  name: string;
  pathfinderGraphVertexId: number;
  reservationSocialDistanceCheck: string;
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
  tags: number[];
  width: number;
  wifiPointPassword: string;
  wifiPointSsid: string;
  x: number;
  y: number;
}


export interface IDictionaryLabels extends IDictionary<IDictionaryLabelsItem> {

}

export interface IDictionaryLabelsItem extends IDictionaryItem {
  assistants: number[];
  avatarImageUrl: string;
  buildingsSequence: number[];
  cardNumber: string;
  category: number;
  description: string;
  floorMapsSequence: number[];
  id: number;
  inviterId: number;
  isAnyNetworkAllowed: boolean;
  isDemoUser: boolean;
  isLongParkingLotReservationAllowed: boolean;
  isLongWorkplaceReservationAllowed: boolean;
  isMultipleParkingLotsReservationAllowed: boolean;
  isMultipleRoomsReservationAllowed: boolean;
  isMultipleWorkplacesReservationAllowed: boolean;
  isOverlappingComplementaryWorkplaceReservationsAllowed: boolean;
  isReadOnly: boolean;
  isSendingUserMessagesEnabled: boolean;
  isVisible: boolean;
  labelGroups: number[];
  localeName: string;
  mac: string;
  mail: string;
  mainPhone: string;
  name: string;
  parkingLotGroups: number;
  parkingLotReservationApprovalType: string;
  phones: string;
  post: string;
  primaryManager: string;
  status: number;
  timeZoneName: string;
  uid: string;
  workplaceGroups: number[];
  workplaceReservationApprovalType: string;
  workplaceReservationLimit: {
    range: string;
    value: number;
  };
  zonesAllowed: number[];
  zonesForbidden: number[];
  zonesInvisible: number[];
}
