import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { DictionariesService } from '@src/app/shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';
import {
  IRoom,
  IFloor,
  ITag,
  IUser,
  IWorkplace,
  IWorkplaceGroup,
  IAppointment,
  IWorkplaceReservation,
  IBuilding,
} from '@src/app/shared/http/models/database.model';
import { ReservationsApiService } from '@src/app/shared/http/services/reservations-api.service';
import { DEFAULT_WORKPLACE_CARD } from '@src/app/shared/http/utils/images.const';
import { forkJoin, Observable, of } from 'rxjs';
import { switchMap, map, take, shareReplay } from 'rxjs/operators';
import { IAdvCard, IAdvDescription } from './workplace-card-advanced.model';
import { getTags, getWorkplaceGroupsNames } from './workplace-card-advanced.utils';
import { getTypeName } from '@src/app/shared/common/utils/workplace.utils';
import { ImageBlobService } from '@src/app/shared/images/services/image-blob.service';

@Injectable()
export class WorkplaceCardAdvancedService {
  constructor(
    private dictionariesService: DictionariesService,
    private reservationsApiService: ReservationsApiService,
    private datePipe: DatePipe,
    private measurementsService: MeasurementsService,
    private images: ImageBlobService,
  ) {}

  get default(): Observable<IAdvCard> {
    return of({
      title: '-',
      descriptionList: [],
      tags: [],
      image: DEFAULT_WORKPLACE_CARD,
    });
  }

  getRoomCard$(id: number): Observable<IAdvCard> {
    return this.dictionariesService.getDictionaryItemByKey<IRoom>('rooms', id).pipe(
      switchMap((r) => {
        return forkJoin({
          image: r.avatarImageUrl ? this.images.getImageBlob(r.avatarImageUrl) : of(DEFAULT_WORKPLACE_CARD),
          room: of(r),
          floor: this.dictionariesService.getDictionaryItemByKey<IFloor>('floorMaps', r.floorMapId),
          tags: this.dictionariesService.getDictionary<ITag[]>('tags'),
          buildings: this.dictionariesService.getDictionary<IBuilding[]>('buildings'),
        });
      }),
      map(({ image, room, floor, tags, buildings }) => {
        return {
          title: room.name,
          image,
          descriptionList: WorkplaceCardAdvancedService._getRoomsDescriptionList(
            room,
            floor,
            buildings.find((b) => b.id === floor.buildingId),
          ),
          tags: getTags(room.tags, tags),
        };
      }),
    );
  }

  getWorkplaceCard$(id: number, showPermanentAssignment: boolean, reservation: IWorkplaceReservation): Observable<IAdvCard> {
    return this.dictionariesService.getDictionaryItemByKey<IWorkplace>('workplaces', id).pipe(
      switchMap((w) => {
        return forkJoin({
          workplace: of(w),
          floor: this.dictionariesService.getDictionaryItemByKey<IFloor>('floorMaps', w.floorMapId),
          labelIdPermanentAssignment:
            w.labelIdPermanentAssignment > 0 && showPermanentAssignment
              ? this.dictionariesService.getDictionaryItemByKey<IUser>('labels', w.labelIdPermanentAssignment)
              : of(undefined),
          tags: this.dictionariesService.getDictionary<ITag[]>('tags'),
          workplaceGroups: this.dictionariesService.getDictionary<IWorkplaceGroup[]>('workplaceGroups'),
          reservation: of(reservation),
          label: reservation ? this.dictionariesService.getDictionaryItemByKey<IUser>('labels', reservation.labelId) : of(undefined),
        });
      }),
      map(({ workplace, floor, tags, workplaceGroups, reservation, label, labelIdPermanentAssignment }) => {
        const reservationData = reservation
          ? {
              dateTimeFrom: reservation.dateTimeFrom,
              dateTimeTo: reservation.dateTimeTo,
              label,
            }
          : null;
        return {
          title: workplace.name,
          image: DEFAULT_WORKPLACE_CARD,
          descriptionList: this._getWorkplaceDescriptionList(
            workplace,
            floor,
            getWorkplaceGroupsNames(workplace.workplaceGroups, workplaceGroups),
            reservationData,
            labelIdPermanentAssignment,
          ),
          tags: getTags(workplace.tags, tags),
        };
      }),
      shareReplay(1),
    );
  }

  getParkingLotCard$(id: number, showPermanentAssignment: boolean): Observable<IAdvCard> {
    return this.dictionariesService.getDictionaryItemByKey<IWorkplace>('parkingLots', id).pipe(
      switchMap((w) => {
        w.type = 'PARKING_LOT';
        return forkJoin({
          workplace: of(w),
          floor: this.dictionariesService.getDictionaryItemByKey<IFloor>('floorMaps', w.floorMapId),
          tags: this.dictionariesService.getDictionary<ITag[]>('tags'),
          labelIdPermanentAssignment:
            w.labelIdPermanentAssignment > 0 && showPermanentAssignment
              ? this.dictionariesService.getDictionaryItemByKey<IUser>('labels', w.labelIdPermanentAssignment)
              : of(undefined),
        });
      }),
      map(({ workplace, floor, tags, labelIdPermanentAssignment }) => {
        return {
          title: workplace.name,
          image: DEFAULT_WORKPLACE_CARD,
          descriptionList: this._getParkDescriptionList(workplace, floor, labelIdPermanentAssignment),
          tags: getTags(workplace.tags, tags),
        };
      }),
      shareReplay(1),
    );
  }

  private _getApiDate(date: Date): string {
    return this.datePipe.transform(date, this.measurementsService.getMeasurementByName('filterDate'));
  }

  private _getDateTimeFormatDate(date: Date): string {
    return this.datePipe.transform(date, this.measurementsService.getMeasurementByName('dateTime'));
  }

  private static _getRoomsDescriptionList(place: IRoom, floor: IFloor, building: IBuilding): IAdvDescription[] {
    const list = [
      {
        name: 'Number of seats',
        value: `${place.seatCount}`,
      },
      {
        name: 'Building',
        value: floor.name,
      },
    ];
    if (place.reservationAllowedFrom && place.reservationAllowedTo) {
      list.push({
        name: 'Work hours',
        value: `${place.reservationAllowedFrom} - ${place.reservationAllowedTo}`,
      });
    } else if (
      building.workDayBeginHour !== undefined &&
      building.workDayEndHour !== undefined &&
      building.workDayBeginHour !== null &&
      building.workDayEndHour !== null
    ) {
      list.push({
        name: 'Work hours',
        value: `${String(building.workDayBeginHour).padStart(2, '0')}:00 - ${String(building.workDayEndHour).padStart(2, '0')}:00`,
      });
    } else {
      list.push({
        name: 'Work hours',
        value: `06:00 - 23:00`,
      });
    }
    return list;
  }

  private _getWorkplaceDescriptionList(
    place: IWorkplace,
    floor: IFloor,
    workplaceGroupsNames: string[],
    reservationData: { label: IUser; dateTimeFrom: string; dateTimeTo: string },
    labelIdPermanentAssignment: IUser,
  ): IAdvDescription[] {
    const result: IAdvDescription[] = [
      {
        name: 'Type',
        value: getTypeName(place.type),
      },
      {
        name: 'Building',
        value: floor.name,
      },
    ];
    if (reservationData && reservationData.label) {
      result.push(
        {
          name: 'Reserved by',
          value: reservationData.label.name,
          link: `team/profiles/${reservationData.label.id}`,
        },
        {
          name: 'Time',
          value: `${this._getDateTimeFormatDate(new Date(reservationData.dateTimeFrom))} — ${this._getDateTimeFormatDate(
            new Date(reservationData.dateTimeTo),
          )}`,
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
    if (place.description) {
      result.push({
        name: 'Description',
        value: place.description,
      });
    }
    return result;
  }

  private _getParkDescriptionList(place: IWorkplace, floor: IFloor, labelIdPermanentAssignment: IUser): IAdvDescription[] {
    const result: IAdvDescription[] = [
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
  }
}
