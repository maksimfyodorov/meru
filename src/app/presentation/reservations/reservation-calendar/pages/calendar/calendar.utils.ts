import { IFloor, IRoom, ITag, IUser, IWorkplace, IWorkplaceGroup } from '@shared/http/models/database.model';
import { IDescription } from '@base/card/card.model';
import { IListRows } from '@src/app/base/list/models/list.model';
import { getTypeName } from '@src/app/shared/common/utils/workplace.utils';

export const MIN_DURATION = { appointment: 1000 * 60 * 60, workplace: 1000 * 60 * 60, parking: 1000 * 60 * 60 };
export const ROUND_SCALE = { appointment: 1000 * 60 * 30, workplace: 1000 * 60 * 5, parking: 1000 * 60 * 5 };
export const WORK_HOURS = [6, 23];

export const getTags = (ids: number[], tags: ITag[]): string[] => {
  return tags.filter((t) => ids.includes(t.id)).map((tag) => tag.name);
};
export const getRoomsDescriptionList = (place: IRoom, floor: IFloor): IDescription[] => {
  return [
    {
      name: 'Seats count',
      value: `${place.seatCount}`,
    },
    {
      name: 'Building',
      value: floor.name,
    },
  ];
};

const addFreeZone = (__start: Date, __end: Date, type: 'workplace' | 'appointment' | 'parking') => {
  const now = new Date();
  if (+__start < +__end - MIN_DURATION[type] && +__end > +now) {
    if (+__start < +now) {
      __start = now;
    }
    return {
      start: new Date(__start),
      end: new Date(__end),
      cssClass: 'calendar-free-area',
      meta: {
        incrementsBadgeTotal: false,
        showOnMonthView: false,
      },
    };
  } else {
    return null;
  }
};

export const addEmptyZones = (
  start: Date,
  fin: Date,
  events: IListRows,
  reservationAllowedFrom: number[],
  reservationAllowedTo: number[],
  setDisabledZones: boolean,
  type: 'workplace' | 'appointment' | 'parking',
) => {
  events.sort((a, b) => +a.start - +b.start);
  let data: IListRows;
  data = [...events];
  const _start = new Date(start);
  const _fin = new Date(fin);
  _fin.setHours(reservationAllowedTo[0], reservationAllowedTo[1], 0);
  while (_fin > _start) {
    if (_start.getHours() < reservationAllowedFrom[0]) {
      _start.setHours(reservationAllowedFrom[0], reservationAllowedFrom[1], 0);
    }
    const _end = new Date(_start);
    _end.setHours(reservationAllowedTo[0], reservationAllowedTo[1], 0);
    const partsDay = events.filter((d) => {
      const __start = new Date(_start);
      __start.setHours(0, 0, 0);
      const __end = new Date(_end);
      __end.setHours(23, 59, 59);
      return +d.start + 1000 * 60 >= +__start && +d.end - 1000 * 60 < +__end;
    });
    const fullDay = partsDay.find((d) => d.start.getHours() <= reservationAllowedFrom[0] && d.end.getHours() >= reservationAllowedTo[0]);
    if (!fullDay) {
      if (partsDay.length === 0) {
        const res = addFreeZone(_start, _end, type);
        if (res) {
          data.push(res);
        }
      } else if (partsDay.length === 1) {
        let __end = new Date(partsDay[0].start);
        const res1 = addFreeZone(_start, __end, type);
        if (res1) {
          data.push(res1);
        }
        const __start = new Date(partsDay[0].end);
        __end = new Date(__start);
        __end.setHours(reservationAllowedTo[0], reservationAllowedTo[1], 0);
        const res2 = addFreeZone(__start, __end, type);
        if (res2) {
          data.push(res2);
        }
      } else {
        for (let i = 0; i < partsDay.length; i++) {
          if (i === 0) {
            if (_start < new Date(partsDay[i].start)) {
              const __end = new Date(partsDay[i].start);
              const res = addFreeZone(_start, __end, type);
              if (res) {
                data.push(res);
              }
            }
          } else if (i === partsDay.length - 1) {
            if (i > 0) {
              const __start = new Date(partsDay[i - 1].end);
              const __end = new Date(partsDay[i].start);
              const res = addFreeZone(__start, __end, type);
              if (res) {
                data.push(res);
              }
            }
            const __start = new Date(partsDay[i].end);
            if (_end > new Date(partsDay[i].end)) {
              const res = addFreeZone(__start, _end, type);
              if (res) {
                data.push(res);
              }
            }
          } else {
            const __start = new Date(partsDay[i - 1].end);
            const __end = new Date(partsDay[i].start);
            const res = addFreeZone(__start, __end, type);
            if (res) {
              data.push(res);
            }
          }
        }
      }
    }
    if (reservationAllowedFrom[0] > 6 && setDisabledZones) {
      const __start = new Date(_start);
      __start.setHours(6, 0, 0);
      const __end = new Date(_start);
      __end.setHours(reservationAllowedFrom[0], reservationAllowedFrom[1], 0);
      data.push({
        id: null,
        start: __start,
        end: __end,
        cssClass: 'calendar-disabled-area',
        meta: {
          incrementsBadgeTotal: false,
          showOnMonthView: false,
        },
      });
    }
    if (reservationAllowedTo[0] < 23 && setDisabledZones) {
      const __start = new Date(_start);
      __start.setHours(reservationAllowedTo[0], reservationAllowedTo[1], 0);
      const __end = new Date(_start);
      __end.setHours(23, 0, 0);
      data.push({
        id: null,
        start: __start,
        end: __end,
        cssClass: 'calendar-disabled-area',
        meta: {
          incrementsBadgeTotal: false,
          showOnMonthView: false,
        },
      });
    }
    _start.setDate(_start.getDate() + 1);
  }
  data.sort((a, b) => +a.start - +b.start);
  return data;
};
export const getWorkplaceDescriptionList = (
  place: IWorkplace,
  floor: IFloor,
  workplaceGroupsNames: string[],
  labelIdPermanentAssignment: IUser,
): IDescription[] => {
  const result: IDescription[] = [
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
  if (workplaceGroupsNames && workplaceGroupsNames.length > 0) {
    result.push({
      name: 'WP group',
      value: workplaceGroupsNames.join(', '),
    });
  }
  return result;
};
export const getWorkplaceGroupsNames = (ids: number[], workplaceGroups: IWorkplaceGroup[]): string[] => {
  return workplaceGroups.filter((wG) => ids.includes(wG.id)).map((wG) => wG.name);
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
export const roundTimeMinPartHourCeil = (time: Date, type: 'workplace' | 'appointment' | 'parking') => {
  const timeToReturn = new Date(time);
  if ((timeToReturn.getMinutes() % ROUND_SCALE[type]) / 60000) {
    timeToReturn.setMilliseconds(Math.ceil(timeToReturn.getMilliseconds() / 1000) * 1000);
    timeToReturn.setSeconds(Math.ceil(timeToReturn.getSeconds() / 60) * 60);
    timeToReturn.setMinutes(Math.ceil(timeToReturn.getMinutes() / (ROUND_SCALE[type] / 60000)) * (ROUND_SCALE[type] / 60000));
  }
  return timeToReturn;
};
export const roundTimeMinPartHourFloor = (time: Date, type: 'workplace' | 'appointment' | 'parking') => {
  const timeToReturn = new Date(time);
  if ((timeToReturn.getMinutes() % ROUND_SCALE[type]) / 60000) {
    timeToReturn.setMilliseconds(Math.floor(timeToReturn.getMilliseconds() / 1000) * 1000);
    timeToReturn.setSeconds(Math.floor(timeToReturn.getSeconds() / 60) * 60);
    timeToReturn.setMinutes(Math.floor(timeToReturn.getMinutes() / (ROUND_SCALE[type] / 60000)) * (ROUND_SCALE[type] / 60000));
  }
  return timeToReturn;
};
