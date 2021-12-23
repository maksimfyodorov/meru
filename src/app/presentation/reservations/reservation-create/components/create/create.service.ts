import { Injectable, TemplateRef } from '@angular/core';
import { IBookingItems } from '@base/booking-list/booking-list.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { UserOfficesService } from '@src/app/core/services/user-offices.service';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, map, pluck, switchMap, tap } from 'rxjs/operators';
import { BuildingsService } from '@shared/dictionaries/services/buildings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getBusyType, mapBuildingListData } from '@presentation/reservations/reservation-create/components/create/create.utils';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { FloorMapsService } from '@shared/dictionaries/services/floor-maps.service';
import { IDictionary, IDictionaryBuildings, IDictionaryFloorMaps } from '@shared/dictionaries/dictionaries.model';
import { getPlaceTypeByReserveType } from '@presentation/reservations/reservation-create/utils/common.util';
import { LiveDataApiService } from '@shared/http/services/live-data-api.service';
import { ILiveDataBusyRooms, ILiveDataBusyWorkplaces, LiveDataKey } from '@shared/http/models/live-data.model';
import { ReservationType } from '@shared/http/models/meta.model';
import { BuildingsListData } from '@presentation/reservations/reservation-create/models';

@Injectable()
export class CreateService {
  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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

  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  public get placeType$(): Observable<DictionaryName | string> {
    return this.$route.params.pipe(
      pluck('type'),
      map(getPlaceTypeByReserveType)
    );
  }

  public goToCreateOnFloor(buildingId: number): void {
    this.$floorMaps
      .getFloorMaps$(this.placeType, buildingId)
      .subscribe(([ { id } ]) =>
        this.$router.navigate([ /*buildingId,*/ id ], { relativeTo: this.$route })
      );
  }

  private get type(): ReservationType | string {
    return this.$route.snapshot.params.type;
  }

  private get placeType(): DictionaryName {
    return getPlaceTypeByReserveType(this.type) as DictionaryName;
  }

  public getBuildingsList1$(contentTpl: TemplateRef<unknown>): Observable<IBookingItems> {
    return this.placeType$.pipe(
      tap(() => this._loading$.next(true)),
      switchMap((placeType) => this.getBuildingListData$(placeType as DictionaryName)),
      map((data: BuildingsListData) => mapBuildingListData(data, contentTpl, buildingId => this.goToCreateOnFloor(buildingId))),
      tap(() => this._loading$.next(false)),
    );
  }

  private getBuildingListData$(placeType: DictionaryName): Observable<BuildingsListData> {
    return combineLatest([
      this.getBuildings$(placeType),
      this.getFloorMaps$(placeType),
      this.getPlaces$(placeType),
      this.getBusyLiveData$(placeType)
    ]);
  }

  private getBuildings$(placeType: DictionaryName): Observable<IDictionaryBuildings> {
    return this.$buildings.getBuildingsByPlaceType$(placeType);
  }

  private getFloorMaps$(placeType: DictionaryName): Observable<IDictionaryFloorMaps> {
    return this.$floorMaps.getFloorMaps$(placeType);
  }

  private getBusyLiveData$(placeType: DictionaryName): Observable<ILiveDataBusyRooms | ILiveDataBusyWorkplaces> {
    const busyType: LiveDataKey | null = getBusyType(placeType);

    if (!busyType) {
      return of([]);
    }

    return this.$liveDataApi
      .get<'busyRooms' | 'busyWorkplaces'>(busyType as any)
      .pipe(
        catchError(() => of([]))
      );
  }

  private getPlaces$(placeType: DictionaryName): Observable<IDictionary> {
    return this._dicts.getDictionary(placeType);
  }
}
