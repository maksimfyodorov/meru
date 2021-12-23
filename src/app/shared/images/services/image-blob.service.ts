import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable, of } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { filterNoProgressHttpEvent } from '@core/utils/http.util';

@Injectable( {
  providedIn: 'root'
} )
export class ImageBlobService {
  constructor( private $http: HttpService, private $sanitizer: DomSanitizer ) {
  }

  getImageBlob( url: string ): Observable<SafeUrl> {
    if (!url) {
      return of( null );
    }

    return this.$http
      .get( url, {}, {responseType: 'blob'} )
      .pipe(
        filterNoProgressHttpEvent(),
        pluck( 'data' ),
        map( ( blob ) =>
          this.$sanitizer.bypassSecurityTrustUrl( URL.createObjectURL( blob ) )
        )
      );
  }
}
