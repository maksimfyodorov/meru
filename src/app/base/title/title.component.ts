import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: [ './title.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {
  @Input() title: string;
  @Input() extra: TemplateRef<any> | any;
}
