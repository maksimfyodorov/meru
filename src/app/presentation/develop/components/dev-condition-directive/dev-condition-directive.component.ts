import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConditionType } from '@core/types/condition.type';

@Component({
  selector: 'app-condition-directive',
  templateUrl: './dev-condition-directive.component.html',
  styleUrls: [ './dev-condition-directive.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevConditionDirectiveComponent {
  public type: ConditionType = 'disable';
  public expression: string = 'equals(a, 1)';
  public data: Record<string, any> = {a: 1};

  constructor() {
  }

  public get trimmedExpression(): string {
    return this.expression.replace(/\r?\n|\r/g, '');
  }

  public get stringedData(): string {
    return JSON.stringify(this.data, null, 2);
  }

  public switchExpression(): void {
    this.expression = String(this.expression !== 'true');
  }

  public changeExpression(expression: string): void {
    this.expression = expression;
  }

  public changeData(data: string): void {
    try {
      this.data = JSON.parse(data);
    }catch (e) {

    }
  }
}
