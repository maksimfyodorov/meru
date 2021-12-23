import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IStatusRendererOptions, IStatusRendererMap } from '../../renderer.model';
import { MapRendererComponent } from '@base/renderer/components/map/map.component';
import { StatusService } from '@base/renderer/components/status/status.service';

@Component({
  selector: 'app-status-renderer',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-status-renderer]': `true`,
  },
  providers: [StatusService],
})
export class StatusRendererComponent extends MapRendererComponent<IStatusRendererOptions> implements OnInit {
  @Input()
  public value: any;

  @Input()
  public color: string;

  @Input()
  public needConvert: boolean = true;

  constructor(private $service: StatusService) {
    super();
  }

  public get mappedValue(): IStatusRendererMap {
    return this.options?.map?.[this.value] || this.value;
  }

  public ngOnInit(): void {
    if (this.needConvert && !this.color) {
      this.color = this.$service.mapColor(this.options, this.value);
      // this.value = this.mappedValue?.value;
    }
  }
}
