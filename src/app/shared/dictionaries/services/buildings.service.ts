import { Injectable } from '@angular/core';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { IDictionaryBuildings, IDictionaryFloorMaps } from '@shared/dictionaries/dictionaries.model';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, debounceTime, map, shareReplay, startWith, switchMap, take } from 'rxjs/operators';
import { filterBuildingsByFloorMaps, sortItemsBySequence } from '@shared/dictionaries/dictionaries.utils';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { FloorMapsService } from '@shared/dictionaries/services/floor-maps.service';
import { UserService } from '@core/services/user.service';

@Injectable()
export class BuildingsService {
  private readonly _allBuildings$: Observable<IDictionaryBuildings>;
  private readonly _parkingLotsBuildings$: Observable<IDictionaryBuildings>;
  private readonly _roomsBuildings$: Observable<IDictionaryBuildings>;
  private readonly _workplacesBuildings$: Observable<IDictionaryBuildings>;

  constructor(
    private $dictionaries: DictionariesService,
    private $floorMaps: FloorMapsService,
    private $user: UserService
  ) {
    this._allBuildings$ = this.getAllBuildings$();
    this._parkingLotsBuildings$ = this.getBuildingsByType( 'parkingLots' );
    this._roomsBuildings$ = this.getBuildingsByType( 'rooms' );
    this._workplacesBuildings$ = this.getBuildingsByType( 'workplaces' );
  }

  public get allBuildings$(): Observable<IDictionaryBuildings> {
    return this._allBuildings$;
  }

  public get allBuildingsOne$(): Observable<IDictionaryBuildings> {
    return this.allBuildings$.pipe(
      take( 1 )
    );
  }

  public get parkingLotsBuildings$(): Observable<IDictionaryBuildings> {
    return this._parkingLotsBuildings$;
  }

  public get roomsBuildings$(): Observable<IDictionaryBuildings> {
    return this._roomsBuildings$;
  }

  public get workplacesBuildings$(): Observable<IDictionaryBuildings> {
    return this._workplacesBuildings$;
  }

  public get allBuildingsWithFloorMaps$(): Observable<[ IDictionaryBuildings, IDictionaryFloorMaps ]> {
    return combineLatest( [ this.allBuildings$, this.$floorMaps.allFloorMaps$ ] );
  }

  public get roomsBuildingsWithFloorMaps$(): Observable<[ IDictionaryBuildings, IDictionaryFloorMaps ]> {
    return combineLatest( [ this.roomsBuildings$, this.$floorMaps.roomsFloorMaps$ ] );
  }

  public get parkingLotsBuildingsWithFloorMaps$(): Observable<[ IDictionaryBuildings, IDictionaryFloorMaps ]> {
    return combineLatest( [ this.parkingLotsBuildings$, this.$floorMaps.parkingLotsFloorMaps$ ] );
  }

  public get workplacesBuildingsWithFloorMaps$(): Observable<[ IDictionaryBuildings, IDictionaryFloorMaps ]> {
    return combineLatest( [ this.workplacesBuildings$, this.$floorMaps.workplacesFloorMaps$ ] );
  }

  public getBuildingsByPlaceType$( type: DictionaryName | string ): Observable<IDictionaryBuildings> {
    switch (type) {
      case 'rooms':
        return this.roomsBuildings$;

      case 'parkingLots':
        return this.parkingLotsBuildings$;

      case 'workplaces':
        return this.workplacesBuildings$;

      default:
        return this.allBuildings$;
    }
  }

  private getBuildingsByType( name: DictionaryName ): Observable<IDictionaryBuildings> {
    let floorMaps$: Observable<IDictionaryFloorMaps> = this.$floorMaps.allFloorMaps$;

    switch (name) {
      case 'rooms':
        floorMaps$ = this.$floorMaps.roomsFloorMaps$;
        break;

      case 'parkingLots':
        floorMaps$ = this.$floorMaps.parkingLotsFloorMaps$;
        break;

      case 'workplaces':
        floorMaps$ = this.$floorMaps.workplacesFloorMaps$;
        break;
    }

    return combineLatest( [ this.allBuildings$, floorMaps$ ] ).pipe(
      map( ( [ buildings, floorMaps ] ) =>
        filterBuildingsByFloorMaps( buildings, floorMaps )
      ),
      shareReplay( 1 )
    );
  }

  private get sequence$(): Observable<number[]> {
    return this.$user.label$.pipe(
      startWith( null ),
      map( ( label ) => label?.buildingsSequence || [] ),
      catchError( () => of( [] ) )
    );
  }

  private getAllBuildings$(): Observable<IDictionaryBuildings> {
    return this.$dictionaries.already$
      .pipe(
        switchMap( () =>
          combineLatest( [
            this.$dictionaries.getDictionary<IDictionaryBuildings>( 'buildings' ),
            this.sequence$
          ] )
        ),
        debounceTime( 100 ),
        map( ( [ allBuildings, sequence ] ) =>
          sortItemsBySequence( allBuildings, 'id', sequence )
        ),
        shareReplay( 1 )
      );
  }
}
