import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IObjectRendererOptions } from '../../renderer.model';
import { RendererComponent } from '../../renderer.component';

@Component({
  selector: 'app-object-renderer',
  templateUrl: './object.component.html',
  styleUrls: [ './object.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectRendererComponent extends RendererComponent<IObjectRendererOptions> implements OnInit {
  public get pattern(): string | null {
    return this.options?.pattern;
  }

  public ngOnInit(): void {
    this.value = {
      ...this.value,
      toString: this.toString()
    };
  }

  private toString(): Function {
    const entries: [ key: string, value: any ][] = Object.entries(this.value);
    const keys: string[] = entries.map((item) => item[0]);
    const values: any[] = entries.map((item) => item[1]);

    return Function(...keys, `return \`${this.pattern}\``).apply(this.value, values) || null;
  }
}
