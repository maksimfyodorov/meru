import { AfterViewInit, ChangeDetectorRef, Component, HostListener, TemplateRef, ViewChild } from '@angular/core';
import { IBookingItems } from '@base/booking-list/booking-list.model';
import { IMarks } from '@base/map/map-mark/map-mark.model';
import { IOpenStreetMapMark, IOpenStreetMapOptions } from '@base/open-street-map/open-street-map.model';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { CreateService } from './create.service';
import { Subscription } from 'rxjs';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { tap } from 'rxjs/operators';
import { Debounce } from '@core/decorators/debounce.decorator';
import { OSM_OPTIONS } from '@presentation/team/team-create/components/create/create.utils';
import { Router } from '@angular/router';
import { IBookingItem } from '@src/app/base/booking-list/booking-item/booking-item.model';

const HEIGHT_EXCEPT_MAP: number = 164;
const HEIGHT_EXCEPT_MAP_MOBILE: number = 254;

@Component({
  selector: 'app-team-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  providers: [CreateService],
})
export class CreateComponent implements AfterViewInit {
  activeMarkIndex = null;
  buildingList: IBookingItems;
  marks: IMarks;
  osmOptions: IOpenStreetMapOptions = OSM_OPTIONS;
  osmMarks: IOpenStreetMapMark[];

  @Subscriptions()
  sub: Subscription;

  @MarkForCheck
  mapHeight: number = 0;

  @ViewChild('bookListContentTpl')
  bookListContentTpl: TemplateRef<any>;

  currentBuilding: IBookingItem;

  constructor(private _service: CreateService, private cdr: ChangeDetectorRef, private _router: Router) {
    this.sub = _service.buildingsList$.subscribe((buildingsList) => {
      this.buildingList = buildingsList;
      this.osmMarks = buildingsList.filter((building) => building.coordinates).map(({ id, coordinates: { x, y } }) => ({ id, x, y }));
      this.cdr.markForCheck();
    });
  }

  handleMarkClicked(id: number): void {
    this.activeMarkIndex = this.buildingList.findIndex((i) => i.id === id);
  }

  ngAfterViewInit(): void {
    this.setMapHeight();
    this.sub = this._service.busyInfo$.pipe(tap(console.log)).subscribe((res) => {
      this.buildingList = this.buildingList.map((build) => ({
        ...build,
        content: this.bookListContentTpl,
        contentContext: res[build.id],
      }));
      this.tabChange(this.buildingList[0]);
      this.cdr.markForCheck();
    });
  }

  @HostListener('window:resize', ['$event'])
  @Debounce(250)
  private setMapHeight(): void {
    const body = document.querySelector('body').offsetHeight;

    // change map size
    const width = document.querySelector('body').offsetWidth;
    this.mapHeight = body - (width < 767 ? HEIGHT_EXCEPT_MAP_MOBILE : HEIGHT_EXCEPT_MAP);
  }

  tabChange(tab: IBookingItem) {
    const options: IOpenStreetMapOptions = {} as IOpenStreetMapOptions;
    options.zoom = 13;
    options.x = tab.coordinates.x;
    options.y = tab.coordinates.y;
    this.osmOptions = options;
    this.currentBuilding = tab;
  }

  linkFloor() {
    this.currentBuilding.actions[0].handler();
  }
}
