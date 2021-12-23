import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { UserService } from '../core/services/user.service';
import { DictionariesService } from '../shared/dictionaries/dictionaries.service';
import { ILabelGroups } from '../shared/http/models/database.model';
import { LogApiService } from '../shared/http/services/log-api.service';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TeamRequestsGuard implements CanActivate {
  constructor(
    private $router: Router,
    private $user: UserService,
    private $logApi: LogApiService,
    private $dictionaries: DictionariesService,
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.managerGroups$.pipe(
      map((groups) => {
        if (groups.length) {
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
      }),
    );
  }

  get managerGroups$(): Observable<ILabelGroups[]> {
    return this.$dictionaries
      .getDictionary<ILabelGroups[]>('labelGroups')
      .pipe(
        map((groups) =>
          groups.filter((group) => this.$user.info.labelGroups.includes(group.id) && group.managers.includes(this.$user.info.id)),
        ),
      );
  }
}
