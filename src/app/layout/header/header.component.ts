import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderService } from '@app/layout/header/header.service';
import { IImage } from '@app/layout/header/header.model';
import { INotifications } from '@app/layout/header/components/header-notifications/header-notifications.model';
import { GlobalLoaderService } from '@core/services/global-loader.service';
import { QUICK_CREATE_URLS } from '@app/layout/header/header.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public logo: IImage;
  public notifications: INotifications;
  public quickCreateUrls: Record<string, string>[] = QUICK_CREATE_URLS;

  constructor(private $service: HeaderService, public $loader: GlobalLoaderService) {
    this.logo = $service.logo;
    this.notifications = $service.notifications;
  }
  ngOnInit(): void {}

}
