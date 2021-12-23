import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ActionParams, IAction } from '@core/models/actions.model';
import { NzButtonType } from 'ng-zorro-antd/button';
import { ICondition } from '@core/models/condition.model';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: [ './action.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.action]': `true`
  }
})
export class ActionComponent implements IAction {
  @Input()
  public disabled: boolean = false;

  @Input()
  public buttonType: NzButtonType;

  @Input()
  public condition: ICondition;

  @Input()
  public isDanger: boolean = false;

  @Input()
  public isGhost: boolean = false;

  @Input()
  public label: string;

  @Input()
  public params: ActionParams;

  @Input()
  public prefixIcon: string;

  @Input()
  public size: NzSizeLDSType;

  @Input()
  public suffixIcon: string;

  @Input()
  public title: string;

  @Input('properties')
  public set inputProperties(properties: IAction) {
    Object.assign(this, properties);
  }

  @Output()
  public actionCall: EventEmitter<ActionParams>
    = new EventEmitter<ActionParams>();

  public emitActionCall($event: Event): void {
    $event.stopPropagation();
    this.actionCall.emit(this.params);
  }
}
