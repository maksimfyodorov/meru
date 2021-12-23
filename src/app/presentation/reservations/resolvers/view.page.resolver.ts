import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { combineLatest, Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { ViewService } from '../components/view/view.service';

@Injectable({
  providedIn: 'root',
})
export class ViewPageResolver implements Resolve<string> {
  constructor(private _viewService: ViewService, private _translateService: TranslateService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return combineLatest([
      this._viewService.appointment$(route.params.id, route.params.type),
      this._translateService.get('My reservation'),
    ]).pipe(
      map(([data, str]) => {
        return `${str} ${data.appointmentSubject || route.params.id}`;
      }),
    );
  }
}
