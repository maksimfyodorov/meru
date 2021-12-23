import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IMapRendererOptions } from '../../renderer.model';
import { RendererComponent } from '../../renderer.component';

@Component({
  selector: 'app-map-renderer',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapRendererComponent<T extends IMapRendererOptions = IMapRendererOptions> extends RendererComponent<T> implements OnInit {
  public get mappedValue(): any {
    return (this.options as T)?.map?.[this.value] || this.value;
  }

  public ngOnInit(): void {
    this.value = this.mappedValue;
  }
}
