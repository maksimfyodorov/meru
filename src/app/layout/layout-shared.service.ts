import { Injectable, TemplateRef } from '@angular/core';
import { IBreadcrumbs } from '@base/breadcrumb/breadcrumb.model';
import { filter, map, shareReplay, tap } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { ICurrentRouteData } from '@app/layout/layout-shared.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutSharedService {
  private _title: string = '';
  private _breadcrumbs: IBreadcrumbs = [];
  private _extra: BehaviorSubject<TemplateRef<any> | null> =
    new BehaviorSubject<TemplateRef<any> | null>(null);
  private _scrollTop: Subject<void> = new Subject<void>();
  private _lastComponentName: string | null = null;

  constructor(private $router: Router) {
    this.navigationEnd$
      .pipe(
        filter(
          () =>
            !this.currentRouteRoot.data.componentName ||
            this.currentRouteRoot.data.componentName !== this._lastComponentName
        )
      )
      .subscribe(() => (this.extra = null));
  }

  public get currentRouteData$(): Observable<ICurrentRouteData> {
    return this.navigationEnd$.pipe(
      map(() => this.currentRouteData),
      shareReplay(1)
    );
  }

  public get currentRouteData(): ICurrentRouteData {
    const current = this.currentRouteRoot;

    this._title = !current.data.hideTitle ? current.data.title || '' : '';
    this._lastComponentName = current?.data?.componentName || null;
    if (!current.data.hideBreadcrumbs) {
      const routes = current.pathFromRoot.filter(
        (route) =>
          route.data.title &&
          !route.data.hideInBreadcrumbs &&
          !route.routeConfig.loadChildren
      );
      let url = '';
      this._breadcrumbs = routes.map((route) => ({
        title: route.data.title,
        url: (url += `${route.routeConfig.path}/`),
      }));
    } else {
      this._breadcrumbs = [];
    }

    return {
      title: this._title,
      breadcrumbs: this._breadcrumbs,
      showBackBtn: current.data.showBackBtn,
    };
  }

  public get extra$(): Observable<TemplateRef<any> | null> {
    return this._extra.asObservable();
  }

  public set extra(tpl: TemplateRef<any> | null) {
    this._extra.next(tpl);
  }

  private get currentRouteRoot(): any {
    let current = this.$router.routerState.snapshot.root;

    while (current.firstChild) {
      current = current.firstChild;
    }

    return current;
  }

  private get navigationEnd$(): Observable<any> {
    let lastRoute: string;
    return this.$router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      filter((event: NavigationEnd) => {
        const eventRoute: string = event.urlAfterRedirects.split('?')[0];
        if (eventRoute === lastRoute) return false;
        lastRoute = eventRoute;
        return true;
      })
    );
  }

  public toScrollTop$() {
    this._scrollTop.next();
  }
  public get scrollTop$() {
    return this._scrollTop;
  }
}
