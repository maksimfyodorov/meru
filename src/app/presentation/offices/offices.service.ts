import { Injectable } from '@angular/core';
import { IOfficeCardPlaces } from '@base/office-card/office-card.model';
import { dayRange } from '@presentation/offices/offices-map/offices-map.utils';
import { IOfficesSequences, IOfficesTab } from '@presentation/offices/offices.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { UserOfficesService } from '@src/app/core/services/user-offices.service';
import { IRoom, IWorkplace } from '@src/app/shared/http/models/database.model';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { debounceTime, map, switchMap, tap } from 'rxjs/operators';
import { UserApiService } from '@shared/http/services/user-api.service';
import { IDictionaryLabelsItem } from '@shared/dictionaries/dictionaries.model';
import { UserService } from '@core/services/user.service';
import { BuildingsService } from '@shared/dictionaries/services/buildings.service';
import { LiveDataApiService } from '@shared/http/services/live-data-api.service';
import { ICommonLiveData, ILiveData } from '@shared/http/models/live-data.model';
import { TranslatePipe } from '@ngx-translate/core';

@Injectable()
export class OfficesService {
  constructor(
    private $dictionary: DictionariesService,
    private $userApi: UserApiService,
    private $reservationsApi: ReservationsApiService,
    private $measurements: MeasurementsService,
    private $user: UserService,
    private $userOffices: UserOfficesService,
    private $buildings: BuildingsService,
    private $liveDataApi: LiveDataApiService,
    private _translatePipe: TranslatePipe,
  ) {}

  get filter(): Record<string, any> {
    return {
      date: {
        value: [new Date(), new Date()],
        time: true,
        format: this.$measurements.getMeasurementByName('dateTime'),
      },
      checkboxGroup: [
        {
          label: this._translatePipe.transform('All day'),
          value: 'allDay',
        },
      ],
    };
  }

  get tabs$(): Observable<IOfficesTab[]> {
    return combineLatest([
      this.$userOffices.getUserWorkplaceGroups(),
      this.$buildings.allBuildingsWithFloorMaps$,
      this.$dictionary.getDictionary<IWorkplace[]>('workplaces'),
      this.$dictionary.getDictionary<IRoom[]>('rooms'),
      this.$dictionary.getDictionary<IWorkplace[]>('parkingLots'),
      this.$liveDataApi.getCommon(),
    ]).pipe(
      debounceTime(50),
      map(([userWorkplaceGroup, [builds, floors], workplaces, rooms, parkingLots, liveData]) => {
        const tabs: IOfficesTab[] = builds.map((build) => ({
          buildId: build.id,
          name: build.name,
          coordinates: {
            x: build.latitude,
            y: build.longitude,
          },
        }));
        const allBusyWorkplaceIds: any[] = liveData.arrayLiveDataReservedWorkplaces.map((place) => place.id);
        const allBusyParkingLotsIds: any[] = liveData.arrayLiveDataReservedParkingLots.map((place) => place.id);
        const allBusyRoomIds: any[] = liveData.arrayLiveDataBusyRooms.map((room) => room.id);
        return tabs.map((tab) => {
          tab.items = floors
            .filter((floor) => floor.buildingId === tab.buildId)
            .map((floor) => {
              const allFloorRooms = rooms.filter((w) => w.floorMapId === floor.id);

              const allFloorWorkplaces = workplaces.filter((w) => w.floorMapId === floor.id);
              const allFloorParkingLots = parkingLots.filter((w) => w.floorMapId === floor.id);
              const busyWorkplace: IWorkplace[] = [];
              const freeWorkplace: IWorkplace[] = [];
              const busyRoom: IRoom[] = [];
              const freeRoom: IRoom[] = [];
              const busyParkingLots: IWorkplace[] = [];
              const freeParkingLots: IWorkplace[] = [];

              allFloorWorkplaces.forEach((place) => {
                if (allBusyWorkplaceIds.includes(place.id)) {
                  busyWorkplace.push(place);
                } else {
                  freeWorkplace.push(place);
                }
              });
              allFloorRooms.forEach((place) => {
                if (allBusyRoomIds.includes(place.id)) {
                  busyRoom.push(place);
                } else {
                  freeRoom.push(place);
                }
              });
              allFloorParkingLots.forEach((place) => {
                if (allBusyParkingLotsIds.includes(place.id)) {
                  busyParkingLots.push(place);
                } else {
                  freeParkingLots.push(place);
                }
              });

              const availableWorkplace: IWorkplace[] = [];

              freeWorkplace.forEach((place) => {
                for (const group of place.workplaceGroups) {
                  if (userWorkplaceGroup.includes(group)) {
                    availableWorkplace.push(place);
                    break;
                  }
                }
              });

              return {
                floorId: floor.id,
                title: floor.name,
                floor: floor.floorNumber,
                places: [
                  {
                    type: 'conversation',
                    freePlaceAmount: freeRoom.length,
                    availablePlaceAmount: busyRoom.length + freeRoom.length,
                    busyPlaceAmount: busyRoom.length,
                  },
                  {
                    type: 'workplaces',
                    freePlaceAmount: freeWorkplace.length,
                    availablePlaceAmount: availableWorkplace.length,
                    busyPlaceAmount: busyWorkplace.length,
                  },
                  {
                    type: 'wardrobes',
                    freePlaceAmount: 0,
                    availablePlaceAmount: 0,
                    busyPlaceAmount: 0,
                  },
                  {
                    type: 'parkinglots',
                    freePlaceAmount: freeParkingLots.length,
                    availablePlaceAmount: allFloorParkingLots.length,
                    busyPlaceAmount: busyParkingLots.length,
                  },
                ],
              };
            });
          return tab;
        });
      }),
    );
  }

  public nowDayRange(): [Date, Date] {
    return dayRange(new Date());
  }

  public applyOrders(sequences: IOfficesSequences): Observable<any> {
    return forkJoin([
      this.setLabelBuildingsSequence(sequences.buildingsSequence),
      this.setLabelFloorMapsSequence(sequences.floorMapsSequence),
    ]).pipe(
      tap(([{ success }, { success: success2 }]) => {
        if (!success) delete sequences.buildingsSequence;
        if (!success2) delete sequences.floorMapsSequence;
      }),
      switchMap(() => this.updateLabelSequences(sequences)),
    );
  }

  public setLabelBuildingsSequence(sequence: number[] | undefined): Observable<any> {
    return !sequence ? of({ success: false }) : this.$userApi.setLabelBuildingsSequence({ sequence });
  }

  public setLabelFloorMapsSequence(sequence: number[]): Observable<any> {
    return !sequence ? of({ success: false }) : this.$userApi.setLabelFloorMapsSequence({ sequence });
  }

  public updateLabelSequences(sequences: IOfficesSequences): Observable<any> {
    return this.$dictionary
      .updateDictionaryItem<IDictionaryLabelsItem>('labels', Object.assign(this.$user.label, sequences))
      .pipe(tap(() => this.$user.updateUser$()));
  }
}
