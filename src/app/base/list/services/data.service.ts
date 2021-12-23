import {
  IListColumns,
  ReservationsColumnType
} from '@base/list/models/list-column.model';
import { IListRow, IListRows } from '@base/list/models/list.model';
import { sortFnFactory } from '@base/list/list.utils';

export class DataService {
  public prepareRows(columns: IListColumns, rows: IListRows): void {
    columns.forEach(({ type, id }) =>
      rows.forEach(row => DataService.prepareRow(type, id, row))
    );
  }

  public prepareColumns(columns: IListColumns): void {
    columns.forEach(column => column.sortFn = sortFnFactory(column.id));
  }

  private static prepareRow(type: ReservationsColumnType = 'string', key: string, row: IListRow): void {
    let value: any = row[key];

    switch (type) {
      case 'boolean':
        value = this.convertBoolean(value);
        break;

      case 'datetime':
        value = this.convertDate(value);
        break;

      case 'number':
        value = this.convertNumber(value);
        break;
    }

    row[key] = value;
  }

  private static convertBoolean(value: any): boolean {
    return typeof value === 'boolean'
      ? value
      : value == 'true'
        ? true
        : value == 'false'
          ? false
          : !!value;
  }

  private static convertDate(value: any): Date | null {
    try {
      return new Date(
        Date.parse(value)
      );
    } catch (e) {
      return null;
    }
  }

  private static convertNumber(value: any): number | null {
    try {
      value = parseFloat(value);
    } catch (e) {
      return null;
    }

    return isNaN(value) ? null : value;
  }
}
