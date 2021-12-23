import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { RendererComponent } from '../../renderer.component';
import { IActionRendererOptions, IActionsRendererOptions } from '../../renderer.model';
import { ActionParams } from '@core/models/actions.model';

@Component({
  selector: 'app-actions-renderer',
  templateUrl: './actions.component.html',
  styleUrls: [ './actions.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-actions-renderer]': `true`
  }

})
export class ActionsRendererComponent extends RendererComponent<IActionsRendererOptions> {
  @HostBinding('style.flex-direction')
  public get flexDirection(): string {
    return this.options?.direction || 'row';
  }

  public get actions(): Array<IActionRendererOptions> {
    return this.options?.actions || [];
  }

  public emitActionCall($event: ActionParams): void {
    this.actionCall.emit($event);
  }
}
