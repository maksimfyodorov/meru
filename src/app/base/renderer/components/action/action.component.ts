import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RendererComponent } from '../../renderer.component';
import { IActionRendererOptions } from '../../renderer.model';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import { ICondition } from '@core/models/condition.model';
import { Localizable } from '@core/models/localization.model';

@Component({
  selector: 'app-action-renderer',
  templateUrl: './action.component.html',
  styleUrls: [ './action.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-renderer-action]': `true`
  }
})
export class ActionRendererComponent extends RendererComponent<IActionRendererOptions> {
  @Input()
  public disabled: boolean = false;

  public get label(): Localizable {
    return this.options?.label;
  }

  public get prefixIcon(): string | null {
    return this.options?.prefixIcon;
  }

  public get suffixIcon(): string | null {
    return this.options?.suffixIcon;
  }

  public get buttonType(): NzButtonType | null {
    return this.options?.buttonType || 'link';
  }

  public get size(): NzButtonSize | null {
    return this.options?.size;
  }

  public get condition(): ICondition {
    return this.options?.condition;
  }

  public get isDanger(): boolean {
    return !!this.options?.isDanger;
  }

  public emitActionCall($event: Event): void {
    $event.stopPropagation();
    this.actionCall.emit(this.options?.params);
  }
}
