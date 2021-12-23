import { Injectable } from '@angular/core';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { IDictionary, IDictionaryFloorMaps } from '@shared/dictionaries/dictionaries.model';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, map, shareReplay, startWith, switchMap, take } from 'rxjs/operators';
import {
  filterFloorMaps,
  filterFloorMapsByBuildingId,
  sortItemsBySequence
} from '@shared/dictionaries/dictionaries.utils';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { UserService } from '@core/services/user.service';
import { isEmpty } from '@core/utils/common.util';

@Injectable()
export class FloorMapsService {
  private readonly _allFloorMaps$: Observable<IDictionaryFloorMaps>;
  private readonly _parkingLotsFloorMaps$: Observable<IDictionaryFloorMaps>;
  private readonly _roomsFloorMaps$: Observable<IDictionaryFloorMaps>;
  private readonly _workplacesFloorMaps$: Observable<IDictionaryFloorMaps>;

  constructor(
    private $dictionaries: DictionariesService,
    private $user: UserService
  ) {
    this._allFloorMaps$ = this.getAllFloorMaps$();
    this._parkingLotsFloorMaps$ = this.getFloorMapsByType$( 'parkingLots' );
    this._roomsFloorMaps$ = this.getFloorMapsByType$( 'rooms' );
    this._workplacesFloorMaps$ = this.getFloorMapsByType$( 'workplaces' );
  }

  public get allFloorMaps$(): Observable<IDictionaryFloorMaps> {
    return this._allFloorMaps$;
  }

  public get allFloorMapsOne$(): Observable<IDictionaryFloorMaps> {
    return this.allFloorMaps$.pipe(
      take( 1 )
    );
  }

  public get parkingLotsFloorMaps$(): Observable<IDictionaryFloorMaps> {
    return this._parkingLotsFloorMaps$;
  }

  public get roomsFloorMaps$(): Observable<IDictionaryFloorMaps> {
    return this._roomsFloorMaps$;
  }

  public get workplacesFloorMaps$(): Observable<IDictionaryFloorMaps> {
    return this._workplacesFloorMaps$;
  }

  public getFloorMaps$( type?: DictionaryName | string, buildingId?: number ): Observable<IDictionaryFloorMaps> {
    let floorMaps$: Observable<IDictionaryFloorMaps> = this.allFloorMaps$;

    switch (type) {
      case 'parkingLots':
        floorMaps$ = this.parkingLotsFloorMaps$;
        break;

      case 'rooms':
        floorMaps$ = this.roomsFloorMaps$;
        break;

      case 'workplaces':
        floorMaps$ = this.workplacesFloorMaps$;
        break;
    }

    return isEmpty( buildingId )
      ? floorMaps$
      : floorMaps$.pipe( map( floorMaps =>
        filterFloorMapsByBuildingId( floorMaps, buildingId ) )
      );
  }

  private get sequence$(): Observable<number[]> {
    return this.$user.label$.pipe(
      startWith( null ),
      map( ( label ) => label?.floorMapsSequence || [] ),
      catchError( () => of( [] ) )
    );
  }

  private getAllFloorMaps$(): Observable<IDictionaryFloorMaps> {
    return combineLatest( [
      this.getDictionary$<IDictionaryFloorMaps>( 'floorMaps' ),
      this.sequence$
    ] ).pipe(
      map( ( [ allFloorMaps, sequence ] ) =>
        sortItemsBySequence( allFloorMaps, 'id', sequence )
      ),
      shareReplay( 1 )
    );
  }

  private getFloorMapsByType$( name: DictionaryName ): Observable<IDictionaryFloorMaps> {
    return combineLatest( [
      this.allFloorMaps$,
      this.getDictionary$( name )
    ] ).pipe(
      map( ( [ floorMaps, items ] ) =>
        filterFloorMaps( floorMaps, items )
      )
    );
  }

  private getDictionary$<T extends IDictionary = IDictionary>( name: DictionaryName ): Observable<T> {
    return this.$dictionaries.already$.pipe(
      switchMap( () => this.$dictionaries.getDictionary<T>( name ) )
    );
  }
}
