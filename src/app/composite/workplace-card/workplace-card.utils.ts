import { IFloor, IRoom, ITag, IUser, IWorkplace, IWorkplaceGroup } from '@shared/http/models/database.model';
import { IDescription } from '@base/card/card.model';
import { getTypeName } from '@shared/common/utils/workplace.utils';

export const getWorkplaceDescriptionList = (
  place: IWorkplace,
  floor: IFloor,
  workplaceGroupsNames: string[],
  reservationData: { label: IUser; dateTimeFrom: string; dateTimeTo: string },
  labelIdPermanentAssignment: IUser,
): IDescription[] => {
  let result: IDescription[] = [
    {
      name: 'Type',
      value: getTypeName(place.type),
    },
    {
      name: 'Number',
      value: place.uniqueCode,
    },
    {
      name: 'Building',
      value: floor.name,
    },
  ];
  if (reservationData && reservationData.label) {
    result.push(
      {
        name: 'Reserved',
        value: reservationData.label.name,
        link: `team/profiles/${reservationData.label.id}`,
      },
      {
        name: 'Time',
        value: `${new Date(reservationData.dateTimeFrom).toLocaleString()} — ${new Date(reservationData.dateTimeTo).toLocaleString()}`,
      },
    );
  }
  if (labelIdPermanentAssignment) {
    result.push({
      name: 'Permanent',
      value: labelIdPermanentAssignment.name,
      link: `team/profiles/${labelIdPermanentAssignment.id}`,
    });
  }
  if (workplaceGroupsNames && workplaceGroupsNames.length > 0) {
    result.push({
      name: 'WP group',
      value: workplaceGroupsNames.join(', '),
    });
  }
  return result;
};

export const getParkDescriptionList = (place: IWorkplace, floor: IFloor, labelIdPermanentAssignment: IUser): IDescription[] => {
  let result: IDescription[] = [
    {
      name: 'Type',
      value: getTypeName(place.type),
    },
    {
      name: 'Number',
      value: place.uniqueCode,
    },
    {
      name: 'Building',
      value: floor.name,
    },
  ];
  if (labelIdPermanentAssignment) {
    result.push({
      name: 'Permanent',
      value: labelIdPermanentAssignment.name,
      link: `team/profiles/${labelIdPermanentAssignment.id}`,
    });
  }
  return result;
};
export const getRoomsDescriptionList = (place: IRoom, floor: IFloor): IDescription[] => {
  return [
    {
      name: 'Number of seats',
      value: `${place.seatCount}`,
    },
    {
      name: 'Building',
      value: floor.name,
    },
  ];
};
export const getTags = (ids: number[], tags: ITag[]): string[] => {
  return tags.filter((t) => ids.includes(t.id)).map((tag) => tag.name);
};
export const getWorkplaceGroupsNames = (ids: number[], workplaceGroups: IWorkplaceGroup[]): string[] => {
  return workplaceGroups.filter((wG) => ids.includes(wG.id)).map((wG) => wG.name);
};
