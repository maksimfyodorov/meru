import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '@presentation/search/search.service';
import { SEARCH_TYPES, TABS_TITLES } from '@presentation/search/search.utils';
import { IResult, SearchType } from '@presentation/search/search.model';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { map, tap } from 'rxjs/operators';
import { GlobalSearchType } from '@shared/global-search/global-search.model';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    SearchService
  ]
} )
export class SearchComponent implements OnInit, OnDestroy {
  public searchTypes: SearchType[] = SEARCH_TYPES;
  public tabsTitles: Record<SearchType, string> = TABS_TITLES;
  public type: SearchType = 'all';

  @Subscribe<string>()
  public query: string = this.$service.query$;

  @Subscribe<string>()
  public initialQuery: string = this.$service.initialQuery$;

  @Subscribe<number>()
  public initialTabIndex: number = this.$service.initialTabIndex$;

  @Subscribe<IResult | null>()
  public result: IResult = this.$service.result$;

  @Subscribe<number>()
  public resultGroupPageSize: number = this.$service.type$.pipe(
    tap( type => this.type = type as SearchType ),
    map( type => type === 'all' ? 12 : 12 )
  );

  constructor(
    private $cdr: ChangeDetectorRef,
    private $service: SearchService
  ) {
  }

  public search( query: string ): void {
    this.$service.search( query );
  }

  public changeType( index: number ): void {
    this.$service.changeType( index );
  }

  public openItem( type: GlobalSearchType, data: Record<string, any> ): void {
    this.$service.openItem( type, data );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
