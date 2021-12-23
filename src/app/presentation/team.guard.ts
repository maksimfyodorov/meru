import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserService } from '../core/services/user.service';
import { LogApiService } from '../shared/http/services/log-api.service';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TeamGuard implements CanActivate {
  constructor(
    private $router: Router,
    private $auth: AuthService,
    private _user: UserService,
    private $logApi: LogApiService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._user.label.labelGroups.length) {
      return true;
    } else {
      if (Array.isArray(route.url) && route.url.length > 0) {
        this.$logApi
          .putLogData({
            loggerName: 'customSecurity',
            message: `Attempt to open forbidden component - ${route.url[0].path}`,
          })
          .pipe(first())
          .subscribe((res) => {});
      }
      return false;
    }
  }
}
