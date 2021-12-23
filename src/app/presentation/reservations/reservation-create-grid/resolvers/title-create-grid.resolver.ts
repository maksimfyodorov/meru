import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TitleCreateGridResolver implements Resolve<string> {
  constructor(private _translateService: TranslateService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const { type } = route.parent.params;
    return this._translateService.get(type + '-reservation');
  }
}
