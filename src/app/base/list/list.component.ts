import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {
  IReservationsActionParams,
  IListMeta,
  IListQueryParams,
  IListRow,
  IListRows,
  IListScroll
} from './models/list.model';
import { IListPaging } from './models/list-paging.model';
import { IListSort } from './models/list-sort.model';
import { IListColumn, IListColumns } from './models/list-column.model';
import PerfectScrollbar from 'perfect-scrollbar';
import { ListService } from './list.service';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { isDefined } from '@core/utils/common.util';
import { Trigger } from '@core/decorators/trigger.decorator';
import { SortDirection } from '@core/models/sort.model';
import { ActionParams } from '@core/models/actions.model';
import { PAGING } from '@core/utils/constants.util';
import { DataService } from '@base/list/services/data.service';
import { trackByFactory } from '@core/utils/instanceOf.utilI';
import { Event } from '@angular/router';
import { Debounce } from '@core/decorators/debounce.decorator';
import { Throttle } from '@core/decorators/throttle.decorator';
import { LIST_SORT } from '@base/list/list.constants';

@Component({
  selector: 'app-list, [app-list]',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-list]': `true`
  },
  providers: [ ListService, DataService ]
})
export class ListComponent {
  public trackById = trackByFactory('id');
  public columns: IListColumns = [];
  public paging: IListPaging = PAGING;
  public sort: IListSort = LIST_SORT;
  public rows: IListRows = [];
  public widthConfig: string[] = [];
  public selectedRow: IListRow | null = null;
  public selectedRows: IListRows = [];
  public visibleColumns: IListColumns = [];
  public scroll: IListScroll = { x: '100%', y: '100%' };
  private _horizontalPerfectScrollBar: PerfectScrollbar;
  private _verticalPerfectScrollBar: PerfectScrollbar;
  private _tableContainer: HTMLElement;

  @Input()
  public loading: boolean = false;

  @Input()
  public lang: string | null = null;

  @Input()
  public multiSelectRows: boolean = false;

  @Input('data')
  public set inputData(data: { total, rows }) {
    this.total = data?.total || 0;
    this.rows = data.rows;
  }

  @Input('meta')
  public set inputMeta(meta: IListMeta) {
    this.inputPaging = meta?.paging;
    this.inputSort = meta?.sort;
    this.inputColumns = meta?.columns;
  }

  @Input('columns')
  public set inputColumns(columns: IListColumns) {
    this.columns = columns || [];
    this.widthConfig = this.$service.getWidthConfig(this.columns, this.multiSelectRows, this._elRef);
    this.visibleColumns = this.$service.getVisibleColumns(this.columns);
    this.$data.prepareColumns(this.columns);
    this.calculateScroll();
  }

  @Input('paging')
  public set inputPaging(paging: IListPaging) {
    if (!paging) return;

    this.paging = paging;
  }

  @Input('total')
  public total: number = 0;

  @Input('rows')
  public set inputRows(rows: IListRows) {
    this.rows = rows instanceof Array ? rows : [];

    if (this.frontPaging) {
      this.total = this.rows.length;
    }

    this.selectedRows = [];
    this.emitRowsSelect();
    this.$data.prepareRows(this.columns, this.rows);
  }

  @Input('sort')
  public set inputSort(sort: IListSort) {
    if (!sort) return;

    this.sort = sort;
  }

  @Output()
  public pagingChange: EventEmitter<IListPaging>
    = new EventEmitter<IListPaging>();

  @Output()
  public sortChange: EventEmitter<IListSort>
    = new EventEmitter<IListSort>();

  @Output()
  public queryParamsChange: EventEmitter<IListQueryParams>
    = new EventEmitter<IListQueryParams>();

  @Output()
  public actionCall: EventEmitter<IReservationsActionParams>
    = new EventEmitter<IReservationsActionParams>();

  @Output()
  public rowSelect: EventEmitter<IListRow | null>
    = new EventEmitter<IListRow | null>();

  @Output()
  public rowsSelect: EventEmitter<IListRows>
    = new EventEmitter<IListRows>();

  @Output()
  public rowDoubleClick: EventEmitter<IListRow>
    = new EventEmitter<IListRow>();

  @ViewChild(NzTableComponent, { read: ElementRef })
  private set tableBodyScrollBar(nzTable: ElementRef) {
    const nzTableBody: HTMLDivElement = nzTable?.nativeElement?.querySelector('.ant-table-body');
    const nzTableFixedHeader: HTMLDivElement = nzTable?.nativeElement?.querySelector('.ant-table.ant-table-fixed-header');

    this._tableContainer = nzTable?.nativeElement.querySelector('.ant-table-container');

    if (nzTableBody && !this._verticalPerfectScrollBar) {
      this._verticalPerfectScrollBar = new PerfectScrollbar(nzTableBody, { suppressScrollX: true });
    }

    if (nzTableFixedHeader && !this._horizontalPerfectScrollBar) {
      this._horizontalPerfectScrollBar = new PerfectScrollbar(nzTableFixedHeader, { suppressScrollY: true });
    }

    this.calculateScroll();
  }

  public constructor(
    private $service: ListService,
    private $data: DataService,
    private _cdr: ChangeDetectorRef,
    private _elRef: ElementRef
  ) {
  }

  public get frontPaging(): boolean {
    return !this.paging.serverSide;
  }

  public get pageIndex(): number {
    return this.paging.pageIndex;
  }

  public get pageSize(): number {
    return this.paging.pageSize;
  }

  public get pageSizeOptions(): number[] {
    return this.paging.pageSizeOptions || [];
  }

  public get showPageSizeChanger(): boolean {
    return !!this.pageSizeOptions.length;
  }

  public get showPagination(): boolean {
    return this.paging.enable || !isDefined(this.paging.enable);
  }

  @HostListener('window:resize', [ '$event' ])
  @Throttle(250)
  public windowResize(_$event?: Event): void {
    this.calculateScroll();
  }

  @Trigger('emitPagingChange')
  public changePageIndex(pageIndex: number): void {
    this.paging.pageIndex = pageIndex;
  }

  @Trigger('emitPagingChange')
  public changePageSize(pageSize: number): void {
    this.paging.pageSize = pageSize;
  }

  @Trigger('emitRowSelect')
  public selectRow(row: IListRow): void {
    this.selectedRow = this.selectedRow !== row ? row : null;
  }

  @Trigger('emitRowsSelect')
  public selectRows(row: IListRow, checked: boolean): void {
    if (checked) {
      this.selectedRows.push(row);
      return;
    }

    this.selectedRows.splice(
      this.selectedRows.findIndex(_row => _row === row),
      1
    );
  }

  @Trigger('emitRowsSelect')
  public selectAllRows(rows: IListRows, checked: boolean): void {
    this.selectedRows.length = 0;

    if (checked) {
      this.selectedRows = this.selectedRows.concat(rows);
    }
  }

  public changeSort(column: IListColumn | string, direction: SortDirection): void {
    let sortedColumn: IListColumn;
    if (typeof column === 'string') {
      column = this.columns.find(({ id }) => id === column);
    }

    if (column) {
      column.sortDirection = direction;
    }

    sortedColumn = this.columns.find(({ sortDirection }) => sortDirection);

    if (sortedColumn) {
      this.sort.sortBy = sortedColumn.id;
      this.sort.sortDirection = sortedColumn.sortDirection;
    } else {
      this.sort.sortBy = null;
      this.sort.sortDirection = null;
    }

    this.applySortChange();
  }

  public doubleClickRow(row: IListRow): void {
    this.rowDoubleClick.emit(row);
  }

  public emitActionCall(params: ActionParams, data: IListRow): void {
    this.actionCall.emit({ params, data });
  }

  public emitQueryParams(queryParams: IListQueryParams): void {
    this.queryParamsChange.emit(queryParams);
  }

  public changeColumnSortDirection(sortDirection: SortDirection, column: string | IListColumn): void {
    if (typeof column === 'string') {
      column = this.columns.find(({ id }) => id === column);
    }

    if (column) {
      column.sortDirection = sortDirection;
    }
  }

  private emitPagingChange(): void {
    this.pagingChange.emit(this.paging);
  }

  private emitRowSelect(): void {
    this.rowSelect.emit(this.selectedRow);
  }

  private emitRowsSelect(): void {
    this.rowsSelect.emit(this.selectedRows);
  }

  private applySortChange(): void {
    this.sortChange.emit(this.sort);
  }

  @Debounce(250)
  private calculateScroll(): void {
    this.widthConfig = this.$service.getWidthConfig(this.columns, this.multiSelectRows, this._elRef);
    this._tableContainer.style.width = this.$service.getScroll(this._elRef).x;

    setTimeout(() => {
      this._verticalPerfectScrollBar?.update();
      this._horizontalPerfectScrollBar?.update();
    });
  }
}
