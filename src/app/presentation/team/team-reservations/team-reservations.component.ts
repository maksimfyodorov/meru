import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  TemplateRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { INavigations } from '@app/layout/navigation/navigation.model';
import { TEAM_RESERVATIONS_MENU } from '@presentation/team/team-reservations/team-reservations.constants';
import { fadeInOutAnimation } from '@core/utils/animations.util';
import { TeamReservationsService } from '@presentation/team/team-reservations/team-reservations.service';
import { Observable } from 'rxjs';
import { ReservationType } from '@shared/http/models/meta.model';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { IList, IReservationsMeta } from '@presentation/reservations/models/list.model';
import { IListRow, IListRows, IReservationsActionParams } from '@base/list/models/list.model';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { IQueryParams } from '@shared/common/models/query-params.model';
import { IAppError } from '@core/models/app-errorl.model';
import { Throttle } from '@core/decorators/throttle.decorator';
import { IListPaging } from '@base/list/models/list-paging.model';
import { IListSort } from '@base/list/models/list-sort.model';
import { IFilterValues } from '@base/filters/filters.model';
import { tap } from 'rxjs/operators';
import { Debounce } from '@core/decorators/debounce.decorator';
import { User } from '@core/models/user.model';
import { IWorkplaceReservationsMassActionResponseMeta } from '@shared/http/models/response.model';
import { ActionParams } from '@core/models/actions.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as XLSX from 'xlsx';
import { TranslatePipe } from '@ngx-translate/core';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';
import { IDescription } from '@src/app/base/card/card.model';

@Component({
  selector: 'app-team-reservations',
  templateUrl: './team-reservations.component.html',
  styleUrls: ['./team-reservations.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.team-reservations]': `true`,
  },
  animations: fadeInOutAnimation,
  providers: [TeamReservationsService],
})
export class TeamReservationsComponent implements OnInit, OnDestroy {
  public menu: INavigations = TEAM_RESERVATIONS_MENU;
  public type$: Observable<ReservationType> = this.$service.type$;
  public showFiltersVisibleButton: boolean = false;
  public user: User = this.$service.user;
  public selectedRows: IListRows = [];

  @MarkForCheck
  public massActionResults: IWorkplaceReservationsMassActionResponseMeta[] = [];

  @MarkForCheck
  public filtersVisible: boolean = true;

  @MarkForCheck
  public meta: IReservationsMeta = null;

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

  showModalFilter = false;

  constructor(
    private $service: TeamReservationsService,
    private _cdr: ChangeDetectorRef,
    private _modal: NzModalService,
    private translate: TranslatePipe,
    private _innerWidthService: InnerWidthService,
  ) {}

  @HostListener('window:resize', ['$event'])
  @Throttle(250)
  public windowResize(_$event?: Event): void {
    this.showFiltersVisibleButton = this.$service.showFiltersVisibleButton;
  }

  @Subscribe<IList>()
  private set list({ meta, data }: IList) {
    this.data = data;
    this.data.forEach((d) => {
      const descriptionList: IDescription[] = [
        {
          name: 'User',
          value: d.userName,
        },
        {
          name: 'Place',
          value: d.workplace,
        },
        {
          name: 'Offices.Floor',
          value: d.floor,
        },
        {
          name: 'Office',
          value: d.building,
        },
      ];
      d.descriptionList = descriptionList;
    });
    if (this.meta !== meta) {
      this.meta = meta;
    }
  }

  reset(): void {
    this.$service.reset();
  }

  public callMassAction(actionParams: ActionParams): void {
    if (actionParams.url && actionParams.url.includes('cancel')) {
      this._modal.confirm({
        nzTitle: this.translate.transform('Are you sure you want to delete the marked items?'),
        nzOnOk: () => {
          this.onCallMassAction(actionParams);
        },
        nzMaskClosable: true,
      });
    } else {
      this.onCallMassAction(actionParams);
    }
  }

  onCallMassAction(actionParams) {
    this.$service.callMassAction(actionParams, this.selectedRows).subscribe((results) => {
      this.massActionResults = results;
      if (!actionParams.route) {
        this.$service.reset();
      }
      this._cdr.markForCheck();
    });
  }

  public callAction(action: IReservationsActionParams): void {
    this.$service.callAction(action);
  }

  public selectRow(row: IListRow | null): void {
    this.$service.selectRow(row);
  }

  public selectRows(rows: IListRows): void {
    this.selectedRows = [...rows];
  }

  public createReservation(): void {
    this.$service.createReservation();
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
    this.list = this.$service.list$ as any;
    this.ready = this.$service.ready$.pipe(
      tap((ready) => {
        if (!ready) {
          this.data = [];
          this.meta = null;
        }
      }),
    );

    this.windowResize();
  }

  public ngOnDestroy(): void {
    this.$service.destroy();
  }

  @Debounce(500)
  private dispatchWindowResize(): void {
    window.dispatchEvent(new Event('resize'));
  }

  public exportxls(): void {
    const fileName = 'ExcelSheet.xlsx';

    const element = document.getElementById('reservationList');

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */

    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */

    XLSX.writeFile(wb, fileName);
  }

  get isSmallScreen() {
    return this._innerWidthService.isSmallScreen;
  }

  handleOk(): void {
    this.showModalFilter = false;
  }

  handleCancel(): void {
    this.showModalFilter = false;
  }

  showModal() {
    this.showModalFilter = true;
    this._cdr.detectChanges();
  }
}
