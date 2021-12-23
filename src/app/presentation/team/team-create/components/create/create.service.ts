import { Injectable } from '@angular/core';
import { IBookingItems } from '@base/booking-list/booking-list.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { UserOfficesService } from '@src/app/core/services/user-offices.service';
import { combineLatest, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { BuildingsService } from '@shared/dictionaries/services/buildings.service';
import { FloorMapsService } from '@shared/dictionaries/services/floor-maps.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mapBuildingsToBookingItems, mapBusyLiveData } from '@presentation/team/team-create/components/create/create.utils';
import { IDictionaryBuildings, IDictionaryFloorMaps } from '@shared/dictionaries/dictionaries.model';
import { LiveDataApiService } from '@shared/http/services/live-data-api.service';

@Injectable()
export class CreateService {
  constructor(
    private _dicts: DictionariesService,
    private $reservationsApi: ReservationsApiService,
    private $userOffices: UserOfficesService,
    private $buildings: BuildingsService,
    private $floorMaps: FloorMapsService,
    private $router: Router,
    private $route: ActivatedRoute,
    private $liveDataApi: LiveDataApiService
  ) {
  }

  get buildingsList$(): Observable<IBookingItems> {
    return this.buildings$.pipe(
      map((buildings) =>
        mapBuildingsToBookingItems(
          buildings,
          buildingId => this.goToCreateOnFloor(buildingId)
        )
      )
    );
  }

  get busyInfo$(): Observable<Record<string, any>> {
    return combineLatest([
      this.buildings$,
      this.floors$,
      this._dicts.getDictionary('workplaces'),
      this.busyLiveData$
    ]).pipe(
      map(([ buildings, floors, workplaces, busyLiveData ]) =>
        mapBusyLiveData(buildings, floors, workplaces, busyLiveData)
      )
    );
  }

  public goToCreateOnFloor(buildingId: number): void {
    this.$floorMaps
      .getFloorMaps$('workplaces', buildingId)
      .subscribe(([ { id } ]) =>
        this.$router.navigate([ /*buildingId,*/ id ], { relativeTo: this.$route })
      );
  }

  private get buildings$(): Observable<IDictionaryBuildings> {
    return this.$buildings.getBuildingsByPlaceType$('workplaces');
  }

  private get floors$(): Observable<IDictionaryFloorMaps> {
    return this.$floorMaps.getFloorMaps$('workplaces');
  }

  private get busyLiveData$(): Observable<any> {
    return this.$liveDataApi.get('busyWorkplaces');
  }
}
