import { ElementRef, Injectable } from '@angular/core';
import { GlobalSearchService } from '@shared/global-search/global-search.service';
import { fromEvent, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISearchResult } from '@app/layout/header/models/header.search.model';
import { isEmpty } from '@core/utils/common.util';
import { NavigationService } from '@core/services/navigation.service';
import { GlobalSearchType } from '@shared/global-search/global-search.model';

@Injectable()
export class HeaderSearchService {
  constructor(
    private $navigate: NavigationService,
    private $globalSearch: GlobalSearchService
  ) {
  }

  public getQuery$( {nativeElement}: ElementRef<HTMLInputElement> ): Observable<string> {
    return fromEvent( nativeElement, 'keyup' ).pipe(
      map( () =>
        nativeElement.value.trim().toLocaleLowerCase()
      ),
    );
  }

  public getResultsByQuery$( query: string ): Observable<ISearchResult | null> {
    return isEmpty( query )
      ? of( null )
      : this.$globalSearch.search( query );
  }

  public openItem( type: GlobalSearchType, data: Record<string, any> ): void {
    this.$globalSearch.openItem( type, data );
  }
}
