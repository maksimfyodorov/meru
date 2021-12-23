import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IOpenStreetMapMark, IOpenStreetMapOptions } from '@base/open-street-map/open-street-map.model';
import { OpenStreetMapService } from '@base/open-street-map/open-street-map.service';
import { Select } from 'ol/interaction';
import Map from 'ol/Map';
import { Icon, Style } from 'ol/style';
import View from 'ol/View';
import { MAX_ZOOM, MIN_ZOOM } from '@base/open-street-map/open-street-map.utils';
import { IMapZoomOptions } from '@base/map/map-zoom/map-zoom.model';
import { Layer, Vector } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.less'],
  providers: [OpenStreetMapService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenStreetMapComponent implements AfterViewInit {
  private _options: IOpenStreetMapOptions = {
    x: 0,
    y: 0,
    zoom: 11,
  };
  sliderOptions: IMapZoomOptions = {
    min: MIN_ZOOM,
    max: MAX_ZOOM,
    step: 1,
    tipFormatter: (zoom) => zoom.toString(),
  };
  zoom: number = 11;
  map: Map;
  @Input()
  zoomPosition: string = 'right';

  @Input()
  set height(_height: number) {
    this.map?.updateSize();
  }

  @Input('options')
  set options(value: IOpenStreetMapOptions) {
    this._options = { ...this._options, ...value };
    this.zoom = value.zoom;
  }

  get options(): IOpenStreetMapOptions {
    return this._options;
  }

  get mapView(): View {
    return this.map.getView();
  }

  @Input() marks: IOpenStreetMapMark[] = [];
  @Output() readonly markClicked = new EventEmitter<number | string>();

  constructor(private $service: OpenStreetMapService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.createMap();
    this.setEvents();
    this.addMarks();
    setTimeout(() => {
      this.eventZoomChange();
      this.cdr.detectChanges();
    }, 500);
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.map.getView().setCenter(fromLonLat([this.options.y, this.options.x]), 'EPSG:4326', 'EPSG:3857');
      this.zoomChange(this.options.zoom);
      this.eventZoomChange();
      this.cdr.detectChanges();
    }, 500);
  }

  createMap(): void {
    this.map = this.$service.createMap(this.options);
  }

  addMarks(): void {
    this.marks.forEach(({ x, y, id, name }) => {
      const marker = new Feature({
        geometry: new Point(fromLonLat([y, x])),
        name,
      });
      marker.setStyle(
        new Style({
          image: new Icon({
            src: './assets/images/map-marker.png',
          }),
        }),
      );
      marker.setId(id);

      const layer: Layer = new Vector({
        source: new VectorSource({
          features: [marker],
        }),
      });
      this.map.addLayer(layer);
    });
  }

  setEvents(): void {
    const select = new Select();
    select.on('select', () => {
      let id = null;
      select.getFeatures().forEach((f) => {
        f.setStyle(
          new Style({
            image: new Icon({
              src: './assets/images/map-marker-active.png',
            }),
          }),
        );
        id = f.getId();
      });
      this.markClicked.emit(id);
    });
    this.map.addInteraction(select);
  }

  zoomChange(value: number): void {
    this.zoom = value;
    this.mapView.setZoom(value);
  }

  eventZoomChange(): void {
    this.zoom = this.map.getView().getZoom();
    this.cdr.markForCheck();
  }
}
