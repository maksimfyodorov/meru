import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RendererComponent } from '@base/renderer/renderer.component';
import { ITemplateRendererOptions } from '@base/renderer/renderer.model';

@Component({
  selector: 'app-template-renderer',
  templateUrl: './template.component.html',
  styleUrls: [ './template.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateRendererComponent extends RendererComponent<ITemplateRendererOptions> implements OnInit {
  public get pattern(): string | null {
    return this.options?.pattern;
  }

  constructor() {
    super();
  }

  public ngOnInit(): void {
    this.value = this.getValue();
  }

  private getValue(): string {
    const entries: [ key: string, value: any ][] = Object.entries(this.data);
    const keys: string[] = entries.map((item) => item[0]);
    const values: any[] = entries.map((item) => item[1]);

    return Function(...keys, `return \`${this.pattern}\``).apply(this.value, values);
  }
}
