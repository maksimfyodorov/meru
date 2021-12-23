import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class NavigationService {
  constructor(
    private $router: Router,
    private $route: ActivatedRoute
  ) {
  }

  public changeQueryParams( queryParams: Record<string, any> ): Promise<boolean> {
    return this.$router.navigate( [], {relativeTo: this.$route, queryParams} );
  }

  public go( route: string | string[], relativeTo: ActivatedRoute ): Promise<boolean>;
  public go( route: string | string[], extras?: NavigationExtras ): Promise<boolean>;
  // public go(route: string | string[], relativeTo: ActivatedRoute, extras?: NavigationExtras): Promise<boolean>;
  public go( route: string | string[], relativeTo: ActivatedRoute | NavigationExtras = null, extras?: NavigationExtras ): Promise<boolean> {
    if (!( relativeTo instanceof ActivatedRoute )) {
      extras = relativeTo;
    } else {
      extras = {...extras, relativeTo};
    }

    return this.$router.navigate( [].concat( route ), extras );
  }

  public goToUrl( route: string, relativeTo: ActivatedRoute ): Promise<boolean>;
  public goToUrl( route: string, extras?: NavigationExtras ): Promise<boolean>;
  // public goToUrl(route: string, relativeTo: ActivatedRoute, extras?: NavigationExtras): Promise<boolean> ;
  public goToUrl(
    route: string,
    relativeTo: ActivatedRoute | NavigationExtras = null,
    extras?: NavigationExtras
  ): Promise<boolean> {
    if (!( relativeTo instanceof ActivatedRoute )) {
      extras = relativeTo;
    } else {
      extras = {...extras, relativeTo};
    }

    return this.$router.navigateByUrl( route, extras );
  }

  public reload(): Observable<any> {
    const currentRoute: UrlSegment[] = this.$route.snapshot.url;

    return fromPromise(
      this.$router
        .navigateByUrl( '/1', {skipLocationChange: true} )
        .then( () =>
          this.$router.navigate( currentRoute )
        )
    );
  }
}
