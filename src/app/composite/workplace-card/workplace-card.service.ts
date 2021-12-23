import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { ICard } from '@base/card/card.model';
import { map, switchMap, take } from 'rxjs/operators';
import { IFloor, IRoom, ITag, IUser, IWorkplace, IWorkplaceGroup } from '@shared/http/models/database.model';
import { DEFAULT_WORKPLACE_CARD } from '@shared/http/utils/images.const';
import { getWorkplaceDescriptionList, getTags, getRoomsDescriptionList, getWorkplaceGroupsNames, getParkDescriptionList } from './workplace-card.utils';
import { ReservationsApiService } from '@src/app/shared/http/services/reservations-api.service';
import { DatePipe } from '@angular/common';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';

@Injectable()
export class WorkplaceCardService {
  constructor(private $dictionary: DictionariesService, private $reservationsApi: ReservationsApiService, private datePipe: DatePipe, private $measurements: MeasurementsService) {}

  getWorkplaceCard$(id: number, showPermanentAssignment: boolean): Observable<ICard> {
    return this.$dictionary.getDictionaryItemByKey<IWorkplace>('workplaces', id).pipe(
      switchMap((w) => {
        const now = new Date();
        return forkJoin({
          workplace: of(w),
          floor: this.$dictionary.getDictionaryItemByKey<IFloor>('floorMaps', w.floorMapId),
          labelIdPermanentAssignment:
            w.labelIdPermanentAssignment > 0 && showPermanentAssignment ? this.$dictionary.getDictionaryItemByKey<IUser>('labels', w.labelIdPermanentAssignment) : of(undefined),
          tags: this.$dictionary.getDictionary<ITag[]>('tags'),
          workplaceGroups: this.$dictionary.getDictionary<IWorkplaceGroup[]>('workplaceGroups'),
          reservationData: this.$reservationsApi
            .getWorkplaceReservations({
              workplaceId: w.id,
              dateTimeFrom: this._getApiDate(now),
              dateTimeTo: this._getApiDate(now),
            })
            .pipe(
              switchMap((r) => {
                return forkJoin({
                  dateTimeFrom: r && r[0] ? of(r[0].dateTimeFrom) : of(undefined),
                  dateTimeTo: r && r[0] ? of(r[0].dateTimeTo) : of(undefined),
                  label: r && r[0] ? this.$dictionary.getDictionaryItemByKey<IUser>('labels', r[0].labelId) : of(undefined),
                });
              }),
              take(1),
            ),
        });
      }),
      map(({ workplace, floor, tags, workplaceGroups, reservationData, labelIdPermanentAssignment }) => {
        return {
          title: workplace.name,
          width: '280px',
          image: DEFAULT_WORKPLACE_CARD,
          descriptionList: getWorkplaceDescriptionList(workplace, floor, getWorkplaceGroupsNames(workplace.workplaceGroups, workplaceGroups), reservationData, labelIdPermanentAssignment),
          tags: getTags(workplace.tags, tags),
        };
      }),
      take(1),
    );
  }

  getParkingLotCard$(id: number, showPermanentAssignment: boolean): Observable<ICard> {
    return this.$dictionary.getDictionaryItemByKey<IWorkplace>('parkingLots', id).pipe(
      switchMap((w) => {
        w.type = 'PARKING_LOT';
        return forkJoin({
          workplace: of(w),
          floor: this.$dictionary.getDictionaryItemByKey<IFloor>('floorMaps', w.floorMapId),
          tags: this.$dictionary.getDictionary<ITag[]>('tags'),
          labelIdPermanentAssignment:
            w.labelIdPermanentAssignment > 0 && showPermanentAssignment ? this.$dictionary.getDictionaryItemByKey<IUser>('labels', w.labelIdPermanentAssignment) : of(undefined),
        });
      }),
      map(({ workplace, floor, tags, labelIdPermanentAssignment }) => {
        return {
          title: workplace.name,
          width: '280px',
          image: DEFAULT_WORKPLACE_CARD,
          descriptionList: getParkDescriptionList(workplace, floor, labelIdPermanentAssignment),
          tags: getTags(workplace.tags, tags),
        };
      }),
      take(1),
    );
    // @Kholodov Проверить для парковки
  }

  getRoomCard$(id: number): Observable<ICard> {
    return this.$dictionary.getDictionaryItemByKey<IRoom>('rooms', id).pipe(
      switchMap((r) => {
        return forkJoin({
          room: of(r),
          floor: this.$dictionary.getDictionaryItemByKey<IFloor>('floorMaps', r.floorMapId),
          tags: this.$dictionary.getDictionary<ITag[]>('tags'),
        });
      }),
      map(({ room, floor, tags }) => {
        return {
          title: room.name,
          width: '280px',
          image: DEFAULT_WORKPLACE_CARD,
          descriptionList: getRoomsDescriptionList(room, floor),
          tags: getTags(room.tags, tags),
        };
      }),
      take(1),
    );
  }

  get default(): Observable<ICard> {
    return of({
      title: 'Example',
      width: '280px',
      descriptionList: [],
      tags: [],
      image: DEFAULT_WORKPLACE_CARD,
    });
  }

  private _getApiDate(date: Date): string {
    return this.datePipe.transform(date, this.$measurements.getMeasurementByName('filterDate'));
  }
}
