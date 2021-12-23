import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IListColumns } from '@base/list/models/list-column.model';
import { COLUMNS, ROWS } from '@presentation/develop/components/dev-list/dev-list-utils';
import {
  IListQueryParams,
  IListRow,
  IListRows
} from '@base/list/models/list.model';
import { IListPaging } from '@base/list/models/list-paging.model';
import { IListSort } from '@base/list/models/list-sort.model';
import { ConfigService } from '@core/services/config.service';
import { PAGING } from '@core/utils/constants.util';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: [ './dev-list.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevListComponent {
  public columns: IListColumns = COLUMNS;
  public rows: IListRows = ROWS;
  public sort: IListSort = { sortBy: null, sortDirection: null };
  public paging: IListPaging = PAGING;
  public selectedRow: IListRow | null = null;
  public queryParams: IListQueryParams | null = null;
  public lang: string = this.$config.get('lang');
  public langs: string[] = this.$config.get('langs');

  public constructor(
    private $config: ConfigService
  ) {

  }

  public selectRow(selectedRow: IListRow | null): void {
    this.selectedRow = selectedRow;
  }

  public changeQueryParams(queryParams: IListQueryParams): void {
    this.queryParams = queryParams;
  }
}
