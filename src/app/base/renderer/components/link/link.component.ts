import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges } from '@angular/core';
import { ILinkRendererOptions } from '@base/renderer/renderer.model';
import { UrlService } from '@core/services/url.service';
import { RendererComponent } from '@base/renderer/renderer.component';
import { isEmpty } from '@core/utils/common.util';

@Component({
  selector: 'app-link-renderer',
  templateUrl: './link.component.html',
  styleUrls: [ './link.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkRendererComponent extends RendererComponent<ILinkRendererOptions> implements OnChanges {
  public anchor: string | null = '';
  public route: string | null = null;
  public href: string | null = '';

  public constructor(
    private $url: UrlService
  ) {
    super();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.options) {
      this.createRouteOrUrl(changes.options.currentValue);
    }

    if (changes.value) {
      this.createAnchor(changes.value.currentValue);
    }
  }

  private createRouteOrUrl(options: ILinkRendererOptions): void {
    if (!isEmpty(options?.route)) {
      this.route = this.$url.createUrl(this.options?.route, this.data);
      return;
    }

    this.route = null;

    if (!isEmpty(options?.url)) {
      this.href = this.$url.createUrl(this.options?.url, this.data);
      return;
    }

    this.href = null;
  }

  private createAnchor(value: any): void {
    this.anchor = !isEmpty(value)
      ? this.$url.createUrl(value, this.data)
      : null;
  }
}
