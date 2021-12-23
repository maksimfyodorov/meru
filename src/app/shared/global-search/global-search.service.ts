import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import {
  IDictionary,
  IDictionaryLabels,
} from '@shared/dictionaries/dictionaries.model';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { map, switchMap } from 'rxjs/operators';
import {
  filterDictionaryItems,
  ITEMS_ROUTES,
  mapItemsToBuildings,
  mapItemsToFloorMaps,
  mapSearchResult,
} from '@shared/global-search/global-search.utils';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import {
  GlobalSearchType,
  IGlobalSearchResult,
  IGlobalSearchResultGroup,
} from '@shared/global-search/global-search.model';
import { BuildingsService } from '@shared/dictionaries/services/buildings.service';
import { FloorMapsService } from '@shared/dictionaries/services/floor-maps.service';
import { NavigationService } from '@core/services/navigation.service';

@Injectable()
export class GlobalSearchService {
  constructor(
    private $dictionaries: DictionariesService,
    private $buildings: BuildingsService,
    private $floorMaps: FloorMapsService,
    private $navigate: NavigationService
  ) {}

  public search(
    query: string,
    filterEmpty: boolean = true
  ): Observable<IGlobalSearchResult> {
    return this.joinSearchResult(query).pipe(
      map((result) =>
        !filterEmpty ? result : result.filter((group) => group.items.length > 0)
      )
    );
  }

  public searchUsers(query: string): Observable<IGlobalSearchResultGroup> {
    return this.searchByDictionary<IDictionaryLabels>(
      'labels',
      query,
      'user'
    ).pipe(map((labels) => mapSearchResult(labels, 'Users', 'user')));
  }

  public searchCustomObjects(
    query: string
  ): Observable<IGlobalSearchResultGroup> {
    return this.searchByDictionary<IDictionary>(
      'customObjects',
      query,
      'customObject'
    ).pipe(
      switchMap((customObjects) => this.mapItemsToFloorMaps(customObjects)),
      switchMap((customObjects) => this.mapItemsToBuildings(customObjects)),
      map((customObjects) =>
        mapSearchResult(customObjects, 'CustomObjects', 'customObject')
      )
    );
  }

  public searchWorkplaces(query: string): Observable<IGlobalSearchResultGroup> {
    return this.searchByDictionary<IDictionary>(
      'workplaces',
      query,
      'workplace'
    ).pipe(
      switchMap((workplaces) => this.mapItemsToFloorMaps(workplaces)),
      switchMap((workplaces) => this.mapItemsToBuildings(workplaces)),
      map((workplaces) =>
        mapSearchResult(workplaces, 'Workplaces', 'workplace')
      )
    );
  }

  public searchRooms(query: string): Observable<IGlobalSearchResultGroup> {
    return this.searchByDictionary<IDictionary>('rooms', query, 'room').pipe(
      switchMap((rooms) => this.mapItemsToFloorMaps(rooms)),
      switchMap((rooms) => this.mapItemsToBuildings(rooms)),
      map((rooms) => mapSearchResult(rooms, 'Rooms', 'room'))
    );
  }

  public searchParkingLots(
    query: string
  ): Observable<IGlobalSearchResultGroup> {
    return this.searchByDictionary<IDictionary>(
      'parkingLots',
      query,
      'parkingLot'
    ).pipe(
      switchMap((parkingLots) => this.mapItemsToFloorMaps(parkingLots)),
      switchMap((parkingLots) => this.mapItemsToBuildings(parkingLots)),
      map((parkingLots) =>
        mapSearchResult(parkingLots, 'ParkingLots', 'parkingLot')
      )
    );
  }

  private searchByDictionary<T extends IDictionary>(
    name: DictionaryName,
    query: string,
    type: GlobalSearchType
  ): Observable<T> {
    return this.$dictionaries
      .getDictionary<T>(name, [])
      .pipe(map((items) => filterDictionaryItems<T>(items, query, type)));
  }

  public openItem(type: GlobalSearchType, data: Record<string, any>): void {
    const route: string[] = ITEMS_ROUTES[type].slice(0);

    if (type !== 'user') {
      route.push(data.floorId);
      route.push(String(type.toLowerCase()));
    }

    route.push(String(data.id));

    this.$navigate.go(route, {});
  }

  private mapItemsToFloorMaps(items): Observable<IDictionary> {
    return this.$floorMaps.allFloorMapsOne$.pipe(
      map((floorMaps) => mapItemsToFloorMaps(items, floorMaps))
    );
  }

  private mapItemsToBuildings(items): Observable<IDictionary> {
    return this.$buildings.allBuildingsOne$.pipe(
      map((buildings) => mapItemsToBuildings(items, buildings))
    );
  }

  private joinSearchResult(query: string): Observable<IGlobalSearchResult> {
    return forkJoin([
      this.searchUsers(query),
      this.searchWorkplaces(query),
      this.searchRooms(query),
      this.searchCustomObjects(query),
      this.searchParkingLots(query),
    ]);
  }
}
