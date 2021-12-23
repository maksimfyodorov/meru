import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { IOfficesSequences, IOfficesTab } from '@presentation/offices/offices.model';
import { OfficesService } from '@presentation/offices/offices.service';
import { IOfficeCard } from '@src/app/base/office-card/office-card.model';
import { IOpenStreetMapOptions, IOpenStreetMapMark } from '@src/app/base/open-street-map/open-street-map.model';
import { Debounce } from '@src/app/core/decorators/debounce.decorator';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';
import { NgsgOrderChange } from 'ng-sortgrid';
import { NzCheckBoxOptionInterface } from 'ng-zorro-antd/checkbox';
import { BehaviorSubject, forkJoin, Observable, Subscription } from 'rxjs';
import { OSM_OPTIONS } from '../reservations/reservation-create/components/create/create.utils';
const HEIGHT_EXCEPT_MAP: number = 184;
const HEIGHT_EXCEPT_MAP_MOBILE: number = 254;

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficesComponent implements OnInit, OnDestroy {
  public filter: Record<string, any> = this.$service.filter;
  public tabs: IOfficesTab[] = [];
  public selectedIndex = 0;
  public initialTabs: IOfficesTab[] = [];
  public loading: boolean = null;
  public isDragable: boolean = false;
  public loadingChanges = new BehaviorSubject<boolean>(false);
  private isBuildingOrderChanged: boolean = false;
  private isFloorOrderChanged: boolean = false;
  private items: Array<any> = [];

  public mode: 'map' | 'list' = 'list';
  public mapHeight: number = 0;
  osmOptions: IOpenStreetMapOptions = OSM_OPTIONS;
  osmMarks: IOpenStreetMapMark[] = [];

  @Subscriptions()
  private _subs: Subscription;

  @HostListener('window:resize', ['$event'])
  @Debounce(250)
  private setMapHeight(): void {
    const body = document.querySelector('body').offsetHeight;
    this.mapHeight = body - (this._innerWidthService.isSmallScreen ? HEIGHT_EXCEPT_MAP_MOBILE : HEIGHT_EXCEPT_MAP);
    this.cdr.detectChanges();
  }

  constructor(
    private $service: OfficesService,
    private cdr: ChangeDetectorRef,
    private _router: Router,
    private _innerWidthService: InnerWidthService,
  ) {}

  get buildingIds(): number[] {
    return this.tabs.map((tab) => tab.buildId);
  }

  get floorIds(): number[] {
    let ids = [];
    this.tabs.forEach((tab) => (ids = ids.concat(tab.items.map((item) => item.floorId))));
    return ids;
  }

  public allDayHandler(checkboxGroupValue: NzCheckBoxOptionInterface[]): void {
    if (checkboxGroupValue[0].checked) {
      this.filter.date.value = this.$service.nowDayRange();
    }
  }

  public dateRangeHandler([date1, date2]: [Date, Date]): void {
    const [now1, now2] = this.$service.nowDayRange();
    if (date1?.getTime() !== now1.getTime() || date2?.getTime() !== now2.getTime()) {
      this.filter.checkboxGroup = [{ ...this.filter.checkboxGroup[0], checked: false }];
    }
  }

  public amountSkeleton(amount: number): string[] {
    return '1'.repeat(amount).split('');
  }

  public enableDragAndDrop(): void {
    this.isDragable = true;
    this.initialTabs = this.tabs.slice();
  }

  public dropOffice(event: CdkDragDrop<IOfficesTab[]>): void {
    moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
    this.isBuildingOrderChanged = true;
  }

  public dropFloors(orderChange: NgsgOrderChange<IOfficeCard>, tab: IOfficesTab): void {
    tab.items = orderChange.currentOrder;
    this.isFloorOrderChanged = true;
  }

  public applyOrders(): void {
    const sequences: IOfficesSequences = {};
    this.isDragable = false;
    this.loadingChanges.next(true);

    if (this.isBuildingOrderChanged) {
      sequences.buildingsSequence = this.buildingIds;
    }

    if (this.isFloorOrderChanged) {
      sequences.floorMapsSequence = this.floorIds;
    }

    this.isBuildingOrderChanged = false;
    this.isFloorOrderChanged = false;

    this.$service.applyOrders(sequences).subscribe(() => {
      this.loadingChanges.next(false);
    });
  }

  public cancelChanges(): void {
    this.isDragable = false;
    this.loadingChanges.next(false);
    this.tabs = this.initialTabs.slice();
  }

  public ngOnInit(): void {
    this.loading = true;
    this._subs = this.$service.tabs$.subscribe((tabs) => {
      this.tabs = tabs;
      this.osmMarks = tabs.filter((building) => building.coordinates).map(({ buildId, coordinates: { x, y } }) => ({ id: buildId, x, y }));
      this.items = this.tabs['items'];
      this.loading = false;
      this.cdr.markForCheck();
      console.log(this.tabs);
    });
    this.setMapHeight();
  }

  public ngOnDestroy(): void {}

  public setTab(index: number) {
    this.selectedIndex = index;
    const options: IOpenStreetMapOptions = {} as IOpenStreetMapOptions;
    options.zoom = 11;
    options.x = this.tabs[index].coordinates.x;
    options.y = this.tabs[index].coordinates.y;
    this.osmOptions = options;
    this.cdr.detectChanges();
  }

  public setMode(mode: 'map' | 'list') {
    this.mode = mode;
    this.setTab(this.selectedIndex);
  }

  public handleMarkClicked(buildId: number) {
    const index = this.tabs.findIndex((t) => t.buildId === buildId);
    if (index !== -1) {
      this.setTab(index);
      this.mode = 'list';
    }
  }
}
