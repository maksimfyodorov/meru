import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { IResult, SearchType } from '@presentation/search/search.model';
import { map, pluck, switchMap, take } from 'rxjs/operators';
import { SEARCH_TYPES } from '@presentation/search/search.utils';
import { NavigationService } from '@core/services/navigation.service';
import { GlobalSearchService } from '@shared/global-search/global-search.service';
import { ISearchResult, ISearchResultGroup } from '@app/layout/header/models/header.search.model';
import { isEmpty } from '@core/utils/common.util';
import { GlobalSearchType } from '@shared/global-search/global-search.model';

@Injectable()
export class SearchService {
  constructor(
    private $activatedRoute: ActivatedRoute,
    private $navigation: NavigationService,
    private $globalSearch: GlobalSearchService
  ) {
  }

  /**
   * @returns {Observable<string>} - запроса
   */
  public get query$(): any {
    return this.$activatedRoute.queryParams.pipe(
      pluck( 'query' ),
      map( query => typeof query === 'string' ? query.trim().toLocaleLowerCase() : '' )
    );
  }

  /**
   * @returns {Observable<SearchType>} - тип поиска
   */
  public get type$(): any {
    return this.$activatedRoute.params.pipe(
      pluck( 'type' ),
      map( ( type: SearchType ) => SEARCH_TYPES.includes( type ) ? type : 'all' )
    );
  }

  /**
   * @returns {Observable<number>} - начальный индекс вкладки
   */
  public get initialTabIndex$(): any {
    return this.type$.pipe(
      take( 1 ),
      map( ( type: SearchType ) => SEARCH_TYPES.indexOf( type ) )
    );
  }

  /**
   * @returns {Observable<string>} - начальное значение запроса
   */
  public get initialQuery$(): any {
    return this.query$.pipe(
      take( 1 )
    );
  }

  /**
   * @returns {Observable<IResult>} - врезультат поиска
   */
  public get result$(): any {
    return combineLatest( [ this.type$, this.query$ ] )
      .pipe(
        switchMap( ( [ type, query ]: [ SearchType, string ] ) =>
          this.switchQueryToResult( type, query )
        )
      );
  }

  public search( query: string ): void {
    this.$navigation.changeQueryParams( {query} ).then();
  }

  public changeType( index: number ): void {
    const extras: NavigationExtras = {
      queryParams: this.$activatedRoute.snapshot.queryParams
    };

    this.$navigation.go( [ 'search', SEARCH_TYPES[ index ] ], extras );
  }

  public openItem( type: GlobalSearchType, data: Record<string, any> ): void {
    this.$globalSearch.openItem( type, data );
  }

  private switchQueryToResult( type: SearchType, query: string ): Observable<ISearchResult> {
    let result$: Observable<ISearchResult | ISearchResultGroup>;

    if (isEmpty( query )) {
      return of( null );
    }

    switch (type) {
      case 'customObject':
        result$ = this.$globalSearch.searchCustomObjects( query );
        break;

      case 'room':
        result$ = this.$globalSearch.searchRooms( query );
        break;

      case 'user':
        result$ = this.$globalSearch.searchUsers( query );
        break;

      case 'workplace':
        result$ = this.$globalSearch.searchWorkplaces( query );
        break;

        case 'parkingLot':
        result$ = this.$globalSearch.searchParkingLots( query );
        break;

      default:
        return this.$globalSearch.search( query );
    }

    return result$.pipe(
      map( result =>
        [].concat( result )
      )
    );
  }
}
