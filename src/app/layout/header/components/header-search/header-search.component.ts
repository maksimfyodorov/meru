import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Debounce } from '@core/decorators/debounce.decorator';
import { getFadeInOutAnimation } from '@core/utils/animations.util';
import { Observable, Subscription } from 'rxjs';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { NzPopoverDirective } from 'ng-zorro-antd/popover';
import { ISearchResult } from '@app/layout/header/models/header.search.model';
import { NzListComponent } from 'ng-zorro-antd/list';
import { NavigationService } from '@core/services/navigation.service';
import { HeaderSearchService } from '@app/layout/header/components/header-search/header-search.service';
import { switchMap, tap } from 'rxjs/operators';
import { GlobalSearchType } from '@shared/global-search/global-search.model';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [getFadeInOutAnimation()],
  providers: [NzListComponent, HeaderSearchService],
})
export class HeaderSearchComponent {
  public isActiveSearch: boolean = false;
  public value: string = null;
  public results$: Observable<ISearchResult | null>;
  public query: string = '';

  @MarkForCheck
  public loading: boolean = false;

  @ViewChild('inputRef')
  public inputRef: ElementRef<HTMLInputElement>;

  @ViewChild('searchRef', { read: NzPopoverDirective })
  public searchRef: NzPopoverDirective;

  private _subscription: Subscription;
  private _isFocus: boolean;

  constructor(
    private $navigate: NavigationService,
    private $service: HeaderSearchService,
    private _cdr: ChangeDetectorRef
  ) {}

  public toggleSearch(): void {
    this.toggleActive();

    if (this.isActiveSearch) {
      this.open();
    } else {
      this.close();
    }
  }

  public focus(): void {
    this._isFocus = true;
    this.inputRef.nativeElement.focus();
  }

  public blur(): void {
    this._isFocus = false;
    this.close();
  }

  @Debounce(500)
  public open(): void {
    this.focus();
    this.searchRef.show();
    this.results$ = this.$service.getQuery$(this.inputRef).pipe(
      switchMap((query: string) => {
        this.query = query;
        return this.$service.getResultsByQuery$(query);
      })
    );
  }

  @Debounce(250)
  public close(): void {
    if (this._isFocus) {
      return;
    }

    this._subscription?.unsubscribe();
    this._subscription = null;
    this.searchRef?.hide();

    if (this.inputRef) {
      this.inputRef.nativeElement.value = '';
    }

    if (this.isActiveSearch) {
      this.toggleActive();
    }
  }

  public openItem(type: GlobalSearchType, data: Record<string, any>): void {
    this.$service.openItem(type, data);
  }

  private toggleActive(): void {
    this.isActiveSearch = !this.isActiveSearch;
  }
}
