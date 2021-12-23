import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { LayoutSharedService } from '@app/layout/layout-shared.service';

@Component({
  selector: 'app-extra-title-tpl',
  template: `<ng-template #contentTpl><ng-content></ng-content></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtraTitleTplComponent {
  @Input()
  public static: boolean = false;
  @ViewChild('contentTpl')
  public set content(value: TemplateRef<any>) {
    this._layoutService.extra = value;
  }
  constructor(private _layoutService: LayoutSharedService) {}
}
