import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '@presentation/search/search.service';
import { SEARCH_TYPES, TABS_TITLES } from '@presentation/search/search.utils';
import { IResult, SearchType } from '@presentation/search/search.model';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { first, map, tap } from 'rxjs/operators';
import { GlobalSearchType } from '@shared/global-search/global-search.model';
import { UsersService } from './users.service';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersService],
})
export class UsersComponent implements OnInit, OnDestroy {
  public initialQuery = '';
  public result: IResult;
  public resultGroupPageSize: number = 12;
  public statusOptions = {
    map: {
      office: {
        color: 'success',
        value: 'In the office',
      },
      home: {
        color: 'danger',
        value: 'At home',
      },
    },
  };
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  constructor(private $cdr: ChangeDetectorRef, private $service: UsersService, private _innerWidthService: InnerWidthService) {}

  public search(query: string): void {
    combineLatest([this.$service.getResult$(query.toLowerCase()), this.$service.activeLabels])
      .pipe(first())
      .subscribe(([r, activeLabels]) => {
        const activeLabelsIds = activeLabels.map((al) => al.id);
        this.result = r;
        if (this.result[0] && Array.isArray(this.result[0].items)) {
          this.result[0].items.forEach((item) => {
            item.data.status = activeLabelsIds.includes(item.data.id) ? 'office' : 'home';
          });
        }
        this.$cdr.markForCheck();
      });
  }

  public openItem(data: Record<string, any>): void {
    this.$service.openItem('user', data);
  }

  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.search('');
  }

  get isSmallScreen() {
    return this._innerWidthService.isSmallScreen;
  }
}
