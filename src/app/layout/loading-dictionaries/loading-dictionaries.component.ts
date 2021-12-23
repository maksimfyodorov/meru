import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { NavigationService } from '@core/services/navigation.service';
import { delay, switchMap } from 'rxjs/operators';
import { SharedService } from '@shared/shared.service';
import { SettingsService } from '@shared/settings/settings.service';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-dictionaries',
  templateUrl: './loading-dictionaries.component.html',
  styleUrls: [ './loading-dictionaries.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingDictionariesComponent implements OnInit, OnDestroy {
  @Subscribe<number>()
  public progress: number = this.$dictionaries.progress$ as any;

  constructor(
    private $dictionaries: DictionariesService,
    private $shared: SharedService,
    private $navigation: NavigationService,
    private $settings: SettingsService,
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.$settings.initialize()
      .pipe(
        switchMap(() => this.$shared.loadDictionaries()),
        delay(500)
      )
      .subscribe(() => this.$navigation.reload());
  }

  ngOnDestroy() {
  }
}
