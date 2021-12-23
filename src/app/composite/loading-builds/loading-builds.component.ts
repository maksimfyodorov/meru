import {Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { Subscription } from 'rxjs';
import { GlobalLoaderService } from '@core/services/global-loader.service';
import { LoadingBuildsService } from '@app/composite/loading-builds/loading-builds.service';

@Component({
  selector: 'app-loading-builds',
  templateUrl: './loading-builds.component.html',
  styleUrls: ['./loading-builds.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingBuildsComponent implements OnDestroy{
  @Subscriptions() private _subs: Subscription;
  build: any = [];
  linkImg: any;

  constructor(
    private $service: LoadingBuildsService,
    private $loading: GlobalLoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  fetchBuild(): void {
    this.$loading.contentLoading$.next(true);
    this._subs = this.$service.getBuilding.subscribe((data) => {
      this.build = data;
      this.$loading.contentLoading$.next(false);
      this.cdr.markForCheck();
    });
  }
  fetchImg(url: string): void {
    this.$service.getBuildingImageBlob(`/images${url}`).subscribe((data) => {
      this.linkImg = data;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
  }
}
