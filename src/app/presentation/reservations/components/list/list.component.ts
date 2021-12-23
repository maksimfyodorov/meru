import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ListService } from '@presentation/reservations/components/list/list.service';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { IList, IReservationsMeta } from '@presentation/reservations/models/list.model';
import { IListPaging } from '@base/list/models/list-paging.model';
import { IListSort } from '@base/list/models/list-sort.model';
import { IListRow, IListRows, IReservationsActionParams } from '@base/list/models/list.model';
import { IAppError } from '@core/models/app-errorl.model';
import { IQueryParams } from '@shared/common/models/query-params.model';
import { IFilterValues } from '@base/filters/filters.model';
import { Throttle } from '@core/decorators/throttle.decorator';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { tap } from 'rxjs/operators';
import { fadeInOutAnimation } from '@core/utils/animations.util';
import { Debounce } from '@core/decorators/debounce.decorator';
import { ReservationType } from '@shared/http/models/meta.model';
import { ICalendarEvents } from '@base/calendar/calendar.model';
import { createCalendarEvents } from '@presentation/reservations/components/list/list.utils';
import { ActionParams } from '@core/models/actions.model';
import { IWorkplaceReservationsMassActionResponseMeta } from '@shared/http/models/response.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as XLSX from 'xlsx';
import { TranslatePipe } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { IDescription } from '@src/app/base/card/card.model';
import { ConfigService } from '@src/app/core/services/config.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ListService],
  animations: fadeInOutAnimation,
})
export class ListComponent implements OnInit, OnDestroy, IList {
  public showFiltersVisibleButton: boolean = false;
  public meta: IReservationsMeta = null;
  public data: IListRows | ICalendarEvents = [];
  public selectedRows: IListRows = [];
  public isVisible: boolean = false;

  @MarkForCheck
  public massActionResults: IWorkplaceReservationsMassActionResponseMeta[] = [];

  @MarkForCheck
  public filtersVisible: boolean = true;

  @Subscribe<IQueryParams>()
  public queryParams: IQueryParams;

  @Subscribe<IAppError>()
  public error = this.$service.error$;

  @Subscribe<boolean>()
  public ready;

  @Subscribe<boolean>()
  public loading = this.$service.loading$;

  @Subscribe<ReservationType>()
  public type: ReservationType = this.$service.type$ as any;

  adminCancelReservation = false;

  public constructor(
    private $service: ListService,
    private $config: ConfigService,
    private _cdr: ChangeDetectorRef,
    private _modal: NzModalService,
    private translate: TranslatePipe,
    private _router: Router,
  ) {
    this.adminCancelReservation = this.$config.get<boolean>('adminCancelReservation') === true;
  }

  public get hasExport(): boolean {
    return this.type !== 'appointment';
  }

  @HostListener('window:resize', ['$event'])
  @Throttle(250)
  public windowResize(_$event?: Event): void {
    this.showFiltersVisibleButton = this.$service.showFiltersVisibleButton;
  }

  @Subscribe<IList>()
  private set list({ meta, data }: IList) {
    if (this.meta !== meta) {
      if (Array.isArray(meta.actions)) {
        meta.actions = meta.actions.filter((m) => m.id !== 'repeat');
        if (this.adminCancelReservation) {
          meta.actions = meta.actions.filter((m) => m.id !== 'close' && m.id !== 'delete');
        }
      }
      this.meta = meta;
    }
    switch (this.type) {
      case 'appointment':
        this.data = createCalendarEvents(data);
        this.data.forEach((d) => {
          const descriptionList: IDescription[] = [
            {
              name: 'Place',
              value: d.data.appointmentLocationString,
            },
          ];
          d.descriptionList = descriptionList;
        });
        break;

      case 'parking':
        if (Array.isArray(data)) {
          data.forEach((d) => (d.place = d.parkingLot));
        }
        this.data = data;
        this.data.forEach((d) => {
          const descriptionList: IDescription[] = [
            {
              name: 'Place',
              value: d.place,
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
        break;

      default:
        this.data = data;
        this.data.forEach((d) => {
          const descriptionList: IDescription[] = [
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
    }
    this._cdr.detectChanges();
  }

  public reset(): void {
    this.$service.reset();
  }

  public callAction(actionParams: IReservationsActionParams): void {
    this.$service.callAction(actionParams);
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

  public selectRow(row: IListRow | null): void {
    this.$service.selectRow(row, this.type);
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

  public changePeriod(period: [Date, Date]): void {
    this.$service.changeFilters({
      requestAppointmentDateFrom: period[0],
      requestAppointmentDateTo: period[1],
    });
  }

  public toggleFiltersVisible(): void {
    this.filtersVisible = !this.filtersVisible;
    this.dispatchWindowResize();
  }

  public ngOnInit(): void {
    this.queryParams = this.$service.queryParams$ as any;
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

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
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

  onQuickCreateLink() {
    const routes = ['reservations'];
    switch (this.type) {
      case 'appointment':
        routes.push('appointment');
        break;
      case 'parking':
        routes.push('parking');
        break;

      default:
        routes.push('workplace');
        break;
    }
    routes.push('create');
    this._router.navigate(routes);
  }
}
