import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {fadeInOutAnimation} from '@core/utils/animations.util';
import {TeamRequestsService} from '@presentation/team/team-requests/components/team-requests/team-requests.service';
import {INavigations} from '@app/layout/navigation/navigation.model';
import {TEAM_RESERVATIONS_MENU} from '@presentation/team/team-reservations/team-reservations.constants';
import {Observable} from 'rxjs';
import {ReservationType} from '@shared/http/models/meta.model';
import {User} from '@core/models/user.model';
import {MarkForCheck} from '@core/decorators/async.decorator';
import {IList} from '@presentation/reservations/models/list.model';
import {IListRows, IReservationsActionParams} from '@base/list/models/list.model';
import {Subscribe} from '@core/decorators/subscribe.decorator';
import {IQueryParams} from '@shared/common/models/query-params.model';
import {IAppError} from '@core/models/app-errorl.model';
import {IListPaging} from '@base/list/models/list-paging.model';
import {IListSort} from '@base/list/models/list-sort.model';
import {IFilterValues} from '@base/filters/filters.model';
import {tap} from 'rxjs/operators';
import {Debounce} from '@core/decorators/debounce.decorator';
import {IRequestsMeta} from '@presentation/team/team-requests/components/team-requests/team-requests.model';
import { IWorkplaceReservationsMassActionResponseMeta } from '@shared/http/models/response.model';
import { ActionParams } from '@core/models/actions.model';

@Component({
  selector: 'app-team-requests',
  templateUrl: './team-requests.component.html',
  styleUrls: ['./team-requests.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.team-requests]': `true`
  },
  animations: fadeInOutAnimation,
  providers: [TeamRequestsService]
})
export class TeamRequestsComponent implements OnInit, OnDestroy {
  public menu: INavigations = TEAM_RESERVATIONS_MENU;
  public type$: Observable<ReservationType> = this.$service.type$;
  public user: User = this.$service.user;
  public selectedRows: IListRows = [];

  @MarkForCheck
  public massActionResults: IWorkplaceReservationsMassActionResponseMeta[] = [];

  @MarkForCheck
  public filtersVisible: boolean = true;

  @MarkForCheck
  public meta: IRequestsMeta = null;

  @MarkForCheck
  public data: IListRows = [];

  @Subscribe<IQueryParams>()
  public queryParams;

  @Subscribe<IAppError>()
  public error = this.$service.error$;

  @Subscribe<boolean>()
  public ready;

  @Subscribe<boolean>()
  public loading = this.$service.loading$;

  constructor(
    private $service: TeamRequestsService,
    private _cdr: ChangeDetectorRef
  ) {
  }

  @Subscribe<IList>()
  private set requestsList({meta, data}: IList) {
    this.data = data;

    if (this.meta !== meta) {
      this.meta = meta;
    }
  }

  reset(): void {
    this.$service.reset();
  }

  public selectRows(rows: IListRows): void {
    this.selectedRows = [...rows];
  }

  public callAction(action: IReservationsActionParams): void {
    this.$service.callAction(action);
  }

  public callMassAction(actionParams: ActionParams): void {
    this.$service
      .callMassAction(actionParams, this.selectedRows)
      .subscribe(results => {
        this.massActionResults = results;
        this._cdr.markForCheck();
      });
  }

  public changePaging(paging: IListPaging): void {
    this.$service.changePaging(paging);
  }

  public changeSort(sort: IListSort): void {
    this.$service.changeSort(sort);
  }

  public changeFilters(filters: IFilterValues): void {
    this.$service.changeFilters(filters);
  }

  public toggleFiltersVisible(): void {
    this.filtersVisible = !this.filtersVisible;
    this.dispatchWindowResize();
  }

  public ngOnInit(): void {
    this.queryParams = this.$service.queryParams$;
    this.requestsList = this.$service.requestsList$ as any;
    this.ready = this.$service.ready$.pipe(
      tap((ready) => {
        if (!ready) {
          this.data = [];
          this.meta = null;
        }
      })
    )
  }

  public ngOnDestroy(): void {
    this.$service.destroy();
  }

  @Debounce(500)
  private dispatchWindowResize(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
