import { ElementRef, Injectable } from '@angular/core';
import { IListColumns } from './models/list-column.model';
import { isDefined } from '@core/utils/common.util';
import { DEFAULT_WIDTH, ZERO_COLUMN_WIDTH } from '@base/list/list.constants';
import { IListScroll } from '@base/list/models/list.model';

@Injectable()
export class ListService {
  public constructor() {
  }

  public getWidthConfig(columns: IListColumns, multiSelectRows: boolean, elementRef: ElementRef): string[] {
    const containerWidth: number = elementRef.nativeElement.clientWidth;

    const widthConfig: string[] = this.getVisibleColumns(columns).map(({ width }) => {
      switch (typeof width) {
        case 'number':
          return `${width}px`;

        case 'string':
          return width;

        default:
          return `${DEFAULT_WIDTH}px`;
      }
    });

    if (multiSelectRows) {
      widthConfig.unshift(ZERO_COLUMN_WIDTH);
    }

    return widthConfig
      .map((width) => {
        if (!width.endsWith('%')) {
          return width;
        }

        const widthInt: number = parseInt(width, 10);

        if (isNaN(widthInt)) return width;

        return `${containerWidth * widthInt / 100}px`;
      });
  }

  public getScroll({ nativeElement }: ElementRef): IListScroll {
    const table: HTMLTableElement = nativeElement.querySelector('table.ant-table-fixed');

    return {
      x: table ? `${table.clientWidth}px` : '`100%',
      y: '100%'
    };
  }

  public getVisibleColumns(columns: IListColumns): IListColumns {
    return columns.filter(({ visible }) => visible || !isDefined(visible));
  }
}

