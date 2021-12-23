import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NavigationService } from '@app/layout/navigation/navigation.service';
import { INavigations } from '@app/layout/navigation/navigation.model';
import { LayoutSharedService } from '@app/layout/layout-shared.service';
import { IBreadcrumbs } from '@base/breadcrumb/breadcrumb.model';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { Subscription } from 'rxjs';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { GlobalLoaderService } from '@core/services/global-loader.service';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PerfectScrollDirective } from '@core/directives/perfect-scroll.directive';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements AfterViewInit, OnInit, OnDestroy {
  private isCollapsed: boolean = false;
  breadcrumbs: IBreadcrumbs;
  title: string = '';
  showBackBtn: boolean = false;

  @MarkForCheck
  extraTpl: TemplateRef<any> | null;

  contentHeight: string;
  nzSider: {
    nzWidth: string;
    nzTheme: string;
    nzCollapsible: boolean;
  } = {
    nzWidth: 'auto',
    nzTheme: 'light',
    nzCollapsible: false,
  };

  @Subscriptions()
  subs: Subscription;

  @ViewChild('headerEl', { read: ElementRef }) headerEl: ElementRef;
  @ViewChild('pageTitleEl') pageTitleEl: ElementRef;
  @ViewChild(PerfectScrollDirective) scroll: PerfectScrollDirective;

  @Subscribe<INavigations>()
  navigationItems = this.$navigation.mainNavigation$;

  constructor(
    private $layout: LayoutSharedService,
    private cdr: ChangeDetectorRef,
    public $navigation: NavigationService,
    public $loader: GlobalLoaderService,
    public $router: Router
  ) {
    this.subs = this.$layout.currentRouteData$.subscribe(
      ({ title, breadcrumbs, showBackBtn }) => {
        this.title = title;
        this.breadcrumbs = breadcrumbs;
        this.showBackBtn = showBackBtn;
      }
    );
    this.subs = this.$layout.extra$.subscribe((tpl) => {
      this.extraTpl = tpl;
      if (tpl) {
        this.setContentHeight();
      }
    });
    this.subs = this.$layout.scrollTop$.subscribe(() => {
      this.scrollTop();
    });
    this.subs = this.$router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((_e) => {
        this.scrollTop();
      });
  }

  ngAfterViewInit(): void {
    this.setContentHeight();
  }

  collapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.setContentHeight();
    this.$navigation.collapse.next(this.isCollapsed);
    this.nzSider.nzWidth = this.isCollapsed ? '80px' : '210px';
  }
  setContentHeight(): void {
    this.contentHeight = `calc(100vh - ${
      this.headerEl?.nativeElement.offsetHeight +
      this.pageTitleEl?.nativeElement.offsetHeight
    }px)`;
  }

  private scrollTop(): void {
    this.setContentHeight();
    if (this.scroll && this.scroll.container) {
      this.scroll.container.scrollTop = 0;
    }
  }

  public ngOnInit() {}

  public ngOnDestroy() {}
}
