import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { IFormatterRendererOptions } from '../../renderer.model';
import { isEmpty } from '@core/utils/common.util';
import { RendererComponent } from '../../renderer.component';
import { LocalizationService } from '@core/services/localization.service';
import { Localizable } from '@core/models/localization.model';

@Component({
  selector: 'app-formatter-renderer',
  templateUrl: './formatter.component.html',
  styleUrls: [ './formatter.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormatterRendererComponent extends RendererComponent<IFormatterRendererOptions> {
  @Input()
  public value: number | Date | string | null = null;

  public constructor(
    @Optional() private $localization: LocalizationService
  ) {
    super();
  }

  public get format(): Localizable {
    return this.options?.format;
  }

  public get isNotEmptyValue(): boolean {
    return !isEmpty(this.value);
  }
}
