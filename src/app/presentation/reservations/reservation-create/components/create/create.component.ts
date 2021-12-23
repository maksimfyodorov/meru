import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { IBookingItems } from '@base/booking-list/booking-list.model';
import { IMarks } from '@base/map/map-mark/map-mark.model';
import { IOpenStreetMapMark, IOpenStreetMapOptions } from '@base/open-street-map/open-street-map.model';
import { MarkForCheck } from '@core/decorators/async.decorator';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { CreateService } from '@presentation/reservations/reservation-create/components/create/create.service';
import { Subscription } from 'rxjs';
import { OSM_OPTIONS } from '@presentation/reservations/reservation-create/components/create/create.utils';
import { Debounce } from '@core/decorators/debounce.decorator';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { DictionaryName } from '@src/app/shared/dictionaries/dictionaries.constants';
import { IBookingItem } from '@src/app/base/booking-list/booking-item/booking-item.model';
import { Router } from '@angular/router';

//184
const HEIGHT_EXCEPT_MAP: number = 184;
const HEIGHT_EXCEPT_MAP_MOBILE: number = 254;

@Component({
  selector: 'app-reservations-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
  providers: [CreateService],
})
export class CreateComponent implements AfterViewInit, OnDestroy {
  activeMarkIndex = null;
  buildingList: IBookingItems;
  marks: IMarks;
  osmOptions: IOpenStreetMapOptions = OSM_OPTIONS;
  osmMarks: IOpenStreetMapMark[] = [];

  @Subscribe<boolean>()
  loading = this._service.loading$;

  @Subscribe<DictionaryName>()
  placeType = this._service.placeType$;

  @Subscriptions()
  sub: Subscription;

  @MarkForCheck
  mapHeight: number = 0;

  @ViewChild('bookListContentTpl')
  bookListContentTpl: TemplateRef<any>;

  currentBuilding: IBookingItem;

  constructor(private _service: CreateService, private cdr: ChangeDetectorRef, private _router: Router) {}

  handleMarkClicked(id: number): void {
    this.activeMarkIndex = this.buildingList.findIndex((i) => i.id === id);
  }

  ngAfterViewInit(): void {
    this.setMapHeight();
    this.sub = this._service.getBuildingsList1$(this.bookListContentTpl).subscribe((buildingsList) => {
      this.buildingList = buildingsList;
      this.osmMarks = buildingsList.filter((building) => building.coordinates).map(({ id, coordinates: { x, y } }) => ({ id, x, y }));
      this.tabChange(this.buildingList[0]);
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {}

  @HostListener('window:resize', ['$event'])
  @Debounce(250)
  private setMapHeight(): void {
    const body = document.querySelector('body').offsetHeight;
    // change map size
    const width = document.querySelector('body').offsetWidth;
    this.mapHeight = body - (width < 767 ? HEIGHT_EXCEPT_MAP_MOBILE : HEIGHT_EXCEPT_MAP);

    this.cdr.detectChanges();
  }

  tabChange(tab: IBookingItem) {
    const options: IOpenStreetMapOptions = {} as IOpenStreetMapOptions;
    options.zoom = 11;
    options.x = tab.coordinates.x;
    options.y = tab.coordinates.y;
    this.osmOptions = options;
    this.currentBuilding = tab;
  }

  linkFloor() {
    this.currentBuilding.actions[0].handler();
  }
}
