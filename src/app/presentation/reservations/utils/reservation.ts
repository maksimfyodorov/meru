import { reservationStatus } from '@presentation/reservations/enums/reservationStatus.enum';
import { MAP_POINT_DISABLED_SVG } from '@shared/http/utils/images.const';
import { ReservationType } from '@src/app/shared/http/models/meta.model';

export const getStatus = (status: string) => {
  return reservationStatus[status.toLowerCase()];
};

export const sortFloors = (floors: any[], buildingId) => {
  return floors.filter((floor) => floor.buildingId === buildingId).sort((a, b) => a.floorNumber - b.floorNumber);
};

export const filterFloors = (floors: any[], buildingId) => {
  return floors.filter((floor) => floor.buildingId === buildingId);
};

export const checkReservedNeighbors = (place, reservations) => {
  const ids = reservations.map((r) => r.workplaceId);
  return place.neighborsIds.some((id) => ids.includes(id));
};

export const checkNeighbors = (places) => {
  const neighborsSet = new Set(...[places.reduce((acc, curr) => [...acc, ...curr.neighborsIds], [])]);
  return places.some((place) => neighborsSet.has(place.id));
};

export const getDistanceCheckConfirmModal = (nzOnOk) => ({
  nzTitle: 'Нарушение социальной дистанции',
  nzContent: 'Согласны ли вы нарушить социальную дистанцию?',
  nzOkText: 'Да',
  nzCancelText: 'Нет',
  nzOnOk,
  nzMaskClosable: true,
});

export const disablePlace = (place) => {
  return {
    ...place,
    disabled: true,
    img: place.imageDisabledUrl || MAP_POINT_DISABLED_SVG,
  };
};

export function getListFilterFieldsByType(type: ReservationType): Record<string, any> | null {
  return listFilterFields[type] || null;
}

const listFilterFields: Record<ReservationType, Record<string, any>> = {
  appointment: {
    dateTimeFrom: null,
    dateTimeTo: null,
    tags: [],
    seatCount: 1,
    floorsId: [],
  },
  locker: {
    floorMapId: [],
    statuses: [],
    dateTimeFrom: null,
    dateTimeTo: null,
  },
  parking: {
    floorMapId: [],
    statuses: [],
    tags: [],
    repeat: null,
    dateTimeFrom: null,
    dateTimeTo: null,
    floorsId: [],
  },
  workplace: {
    dateTimeFrom: null,
    dateTimeTo: null,
    tags: [],
    repeat: null,
    types: ['DEFAULT', 'COMPLEMENTARY'],
    floorsId: [],
  },
};
