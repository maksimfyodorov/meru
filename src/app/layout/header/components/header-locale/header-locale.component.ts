import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {NzSelectOptionInterface} from 'ng-zorro-antd/select/select.types';
import {Subscribe} from '@core/decorators/subscribe.decorator';
import { HeaderLocaleService } from '@app/layout/header/components/header-locale/header-locale.service';

@Component({
  selector: 'app-header-locale',
  templateUrl: './header-locale.component.html',
  styleUrls: ['./header-locale.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeaderLocaleService],
  host: {
    '[class.header-locale]': `true`
  }
})
export class HeaderLocaleComponent implements OnInit, OnDestroy {
  public langsOptions: NzSelectOptionInterface[] = [];

  @Subscribe<string>()
  public currentLang: string = this.$service.currentLang$ as any;

  constructor(
    private $service: HeaderLocaleService,
    private cdr: ChangeDetectorRef
  ) {
  }

  public changeLang(lang: string): void {
    this.$service.changeLang(lang);
  }

  ngOnInit(): void {
    this.langsOptions = this.$service.langsOptions;
  }

  ngOnDestroy(): void {
  }
}
