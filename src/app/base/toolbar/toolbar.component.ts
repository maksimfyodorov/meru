import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ActionParams, IActions } from '@core/models/actions.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.toolbar]': `true`
  }
})
export class ToolbarComponent {
  public skeletonButtons: Array<number> = [1, 2, 3, 4, 5];

  @Input()
  public actions: IActions = [];

  @Input()
  public data: Record<string, any> = {};

  @Input('skeletonButtonsCount')
  public set inputSkeletonButtonsCount(count: number) {
    this.skeletonButtons = Array.from(new Array(count), (v, i) => ++i);
  }

  @Output()
  public actionCall: EventEmitter<ActionParams>
    = new EventEmitter<ActionParams>();

  public emitActionCall(actionParams: ActionParams): void {
    this.actionCall.emit(actionParams);
  }
}
