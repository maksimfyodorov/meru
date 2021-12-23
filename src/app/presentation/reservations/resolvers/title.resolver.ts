import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleResolver implements Resolve<string> {
  constructor(private _translateService: TranslateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    const { type } = route.params;
    return this._translateService.get(type);
  }
}
