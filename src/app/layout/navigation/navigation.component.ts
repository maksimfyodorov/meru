import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { INavigations } from '@app/layout/navigation/navigation.model';
import { NavigationService } from '@app/layout/navigation/navigation.service';
import { NzMenuModeType } from 'ng-zorro-antd/menu';
import { GlobalLoaderService } from '@core/services/global-loader.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnChanges {
  @Input() readonly mode: NzMenuModeType = 'inline';
  @Input() items: INavigations = [];
  constructor(
    public $navigation: NavigationService,
    public $loader: GlobalLoaderService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.items && changes.items.currentValue) {
      const currentItems: INavigations = changes.items.currentValue;
      this.items = currentItems.filter((item) => !item.showOnlyOnMobile);
    }
  }
}
