import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TitleCreateResolver implements Resolve<string> {
  constructor(private _translateService: TranslateService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const { type } = route.params;
    return this._translateService.get(type + '-reservation');
  }
}
