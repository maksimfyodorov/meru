import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobalLoaderService } from '@core/services/global-loader.service';

@Component({
  selector: 'app-root, [app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-root]': `true`
  }
})
export class AppComponent {
  constructor(public $loader: GlobalLoaderService) {}
}
