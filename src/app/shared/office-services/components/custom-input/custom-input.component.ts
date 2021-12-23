import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { setHours } from 'date-fns';
import { Subscription } from 'rxjs';
import { DataTypeName } from '../../../../shared/office-services/models/data-type';
import { Scenario, StepParam } from '../../../../shared/office-services/models/order-services.model';
@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.less'],
})
export class CustomInputComponent {
  @Subscriptions()
  sub: Subscription;

  @Input()
  public param: StepParam;
  @Input()
  public stepForm: FormGroup;
  @Input()
  public index: number;
  @Input()
  public dateFormat: string;

  timeDefaultValue = setHours(new Date(), 0);

  get type(): DataTypeName {
    return this.param && this.param.dataType
      ? this.param.dataType.type
      : 'UNDEFINED';
  }

  get items(): Scenario[] {
    return this.param && this.param.dataType ? this.param.dataType.items : [];
  }
}
