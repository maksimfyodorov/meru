import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RendererOptions, RendererType } from './renderer.model';
import { ActionParams } from '@core/models/actions.model';

@Component({
  selector: 'app-renderer, [app-renderer]',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-renderer]': `true`,
  },
})
export class RendererComponent<T extends RendererOptions = RendererOptions> {
  @Input()
  public data: Record<string, any> | null = null;

  @Input()
  public type: RendererType | null = null;

  @Input()
  public options: T | null = null;

  @Input()
  public value: any = null;

  @Input()
  public lang: string | null = null;

  @Input()
  public color: string | null = null;

  @Output()
  public actionCall: EventEmitter<ActionParams> = new EventEmitter<ActionParams>();

  public get isFormatter(): boolean {
    return this.type === 'datetime' || this.type === 'number';
  }

  public emitActionCall($event: ActionParams | Event): void {
    this.actionCall.emit($event as ActionParams);
  }
}
