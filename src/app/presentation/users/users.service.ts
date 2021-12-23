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
import { LiveDataApiService } from '@src/app/shared/http/services/live-data-api.service';

@Injectable()
export class UsersService {
  constructor(
    private $activatedRoute: ActivatedRoute,
    private $navigation: NavigationService,
    private $globalSearch: GlobalSearchService,
    private $liveDataApi: LiveDataApiService,
  ) {}

  /**
   * @returns {Observable<string>} - запроса
   */
  public get query$(): any {
    return this.$activatedRoute.queryParams.pipe(
      pluck('query'),
      map((query) => (typeof query === 'string' ? query.trim().toLocaleLowerCase() : '')),
    );
  }

  /**
   * @returns {Observable<SearchType>} - тип поиска
   */
  public get type$(): any {
    return this.$activatedRoute.params.pipe(
      pluck('type'),
      map((type: SearchType) => (SEARCH_TYPES.includes(type) ? type : 'all')),
    );
  }

  /**
   * @returns {Observable<number>} - начальный индекс вкладки
   */
  public get initialTabIndex$(): any {
    return this.type$.pipe(
      take(1),
      map((type: SearchType) => SEARCH_TYPES.indexOf(type)),
    );
  }

  /**
   * @returns {Observable<string>} - начальное значение запроса
   */
  public get initialQuery$(): any {
    return this.query$.pipe(take(1));
  }

  /**
   * @returns {Observable<IResult>} - врезультат поиска
   */
  public getResult$(query: string): Observable<any> {
    return this.switchQueryToResult(query);
  }

  public get activeLabels() {
    return this.$liveDataApi.get('activeLabels');
  }

  public search(query: string): void {
    this.$navigation.changeQueryParams({ query }).then();
  }

  public changeType(index: number): void {
    const extras: NavigationExtras = {
      queryParams: this.$activatedRoute.snapshot.queryParams,
    };

    this.$navigation.go(['search', SEARCH_TYPES[index]], extras);
  }

  public openItem(type: GlobalSearchType, data: Record<string, any>): void {
    this.$globalSearch.openItem(type, data);
  }

  private switchQueryToResult(query: string): Observable<ISearchResult> {
    let result$: Observable<ISearchResult | ISearchResultGroup>;

    result$ = this.$globalSearch.searchUsers(query);

    return result$.pipe(map((result) => [].concat(result)));
  }
}
