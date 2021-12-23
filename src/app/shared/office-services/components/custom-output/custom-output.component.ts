import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { Subscription } from 'rxjs';
import { DataTypeName } from '../../models/data-type';
import { StepParam } from '../../models/order-services.model';

@Component({
  selector: 'custom-output',
  templateUrl: './custom-output.component.html',
  styleUrls: ['./custom-output.component.less'],
})
export class CustomOutputComponent {
  @Subscriptions()
  sub: Subscription;

  @Input()
  public param: StepParam;

  @Input()
  public dateFormat: string;

  get type(): DataTypeName {
    return this.param && this.param.dataType
      ? this.param.dataType.type
      : 'UNDEFINED';
  }

  getDictionaryValue(): string {
    const itemId: number = new Number(this.param.value).valueOf();
    const items =
      this.param && this.param.dataType && this.param.dataType.items
        ? this.param.dataType.items
        : [];
    const result = items.find((item) => item.id == itemId);
    return result ? result.description : ' ';
  }

  getFormattedDate() {
    const formattedDate = formatDate(this.param.value, this.dateFormat, 'ru-RU');
    return formattedDate ? formattedDate : ' ';
  }
}
