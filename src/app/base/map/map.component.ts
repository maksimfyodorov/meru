import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { MapMarkComponent } from '@base/map/map-mark/map-mark.component';
import { MapService } from '@base/map/map.service';
import { IMarks, MarkItemLogicType } from '@base/map/map-mark/map-mark.model';
import { Subscription } from 'rxjs';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { IMapArea, IMapDragPosition, IMapFactor, IMapSize, MapPositionType } from '@base/map/map.model';
import { IMapZoomOptions } from '@base/map/map-zoom/map-zoom.model';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { polygonPointsTransform } from '@base/map/map.utils';
import { Debounce } from '@core/decorators/debounce.decorator';
import { hexToRGB } from '@core/utils/color.utils';
import set = Reflect.set;
import { IArea } from '@src/app/shared/http/models/database.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit, OnDestroy {
  isDragged: boolean = false;

  @Input() selectedMarkId: number; // id сущности, открытой в расширенной вкладке
  @Input() selectedMarkLogicType: string; // тип сущности, открытой в расширенной вкладке
  @Input() useAdvCard: boolean = false; // в качестве попапов используется новая карточка (на весь экран)

  get imgWrapperStyle(): Record<string, string | number> {
    return {
      transform: `scale(${this.zoom})`,
    };
  }

  @Input()
  set areas(value: IArea[]) {
    if (value) {
      this._areas = value;
      this.drawAreas();
    }
  }

  get areas(): IArea[] {
    return this._areas;
  }

  @Input() areasVisible: boolean = false;

  @Input()
  set height(value: number) {
    this._height = value;
    if (this.map) {
      setTimeout(() => {
        const { width, height } = this.map.nativeElement.getBoundingClientRect();
        this._setFactor(width, height);
      }, 0);
    }

    if (this._areas) {
      this.drawAreas();
    }
  }

  get height(): number {
    return this._height;
  }

  @Input()
  set img(value: SafeUrl | string) {
    this._img = value;
    this.resetDragAndDrop();
  }

  get img(): SafeUrl | string {
    return this._img;
  }

  @Input()
  set size(value: IMapSize) {
    this._size = value;
    this.resetDragAndDrop();
  }

  get size(): IMapSize {
    return {
      width: this._size?.width + 'px',
      height: this._size?.height + 'px',
    };
  }

  @Input()
  set centeredMarkLogicType(value: 'Room' | 'Workplace' | 'POI') {
    if (value) {
      this._centeredMarkLogicType = value;
      if (this.centeredMarkId && this.centeredMarkLogicType) {
        this.centered(this.centeredMarkId);
        this.cdr.markForCheck();
      }
    }
  }
  get centeredMarkLogicType(): 'Room' | 'Workplace' | 'POI' {
    return this._centeredMarkLogicType;
  }

  @Input()
  set centeredMarkId(value: number) {
    if (value) {
      this._centeredMarkId = value;
      if (this.centeredMarkId && this.centeredMarkLogicType) {
        this.centered(this.centeredMarkId);
        this.cdr.markForCheck();
      }
    }
  }

  get centeredMarkId(): number {
    return this._centeredMarkId;
  }

  @Input()
  set marks(value: IMarks) {
    this._marks = value;
    if (value) {
      setTimeout(() => this.$service.marksReady$.next(true));
    }
  }

  get marks(): IMarks {
    return this._marks;
  }

  @ViewChild('map', { read: ElementRef })
  set map(value: ElementRef) {
    this._map = value;
    value?.nativeElement.addEventListener('load', () => {
      const { width, height } = value.nativeElement.getBoundingClientRect();
      this._setFactor(width, height);
      this.preparationCanvas();
    });
  }

  get map(): ElementRef {
    return this._map;
  }

  constructor(private $service: MapService, private cdr: ChangeDetectorRef) {}

  @Subscriptions() private _subs: Subscription;
  @ViewChild('canvas', { static: true, read: ElementRef })
  canvas: ElementRef<HTMLCanvasElement>;

  public ctx: CanvasRenderingContext2D;
  private _map: ElementRef;
  private _areas: IArea[] = [];
  private _marks: IMarks;
  private _size: IMapSize = {
    width: 'auto',
    height: 'auto',
  };
  private _img: string | SafeUrl;
  private _centeredMarkId: number;
  private _centeredMarkLogicType: 'Room' | 'Workplace' | 'POI';

  private _height: number;
  factor: IMapFactor = { width: 1, height: 1, arx: 4 / 3, ary: 3 / 4 };
  zoom: number = null;
  dragClasses: string[] = ['_grab'];
  sliderOptions: IMapZoomOptions = {
    min: 0.1,
    max: 5,
    dots: false,
    vertical: true,
    step: 0.1,
    range: false,
    tipFormatter: (zoom: number) => Math.floor(zoom * 100) + '%',
    tooltipVisible: 'default',
  };
  dragPosition: IMapDragPosition = { x: 0, y: 0 };
  // tslint:disable-next-line:no-output-native
  @Output() readonly mark: EventEmitter<Record<string, any>> = new EventEmitter<Record<string, any>>();
  @Output() readonly areaVisibilityChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() readonly hiddenMarksChange: EventEmitter<MarkItemLogicType[]> = new EventEmitter<MarkItemLogicType[]>();
  @Input() loading: boolean = false;
  @Input() hiddenControls = [];
  @Input() position: MapPositionType = 'right';

  @Input() hiddenMarksTypes: MarkItemLogicType[] = [];
  @ViewChildren(MapMarkComponent) tooltips: QueryList<MapMarkComponent>;

  @ViewChild(CdkDrag) cdkDrag: CdkDrag;
  @ViewChild('rootMap') rootMap: ElementRef;

  @ViewChildren(MapMarkComponent) mapMarks: QueryList<MapMarkComponent>;

  ngOnInit(): void {
    this._subs = this.$service.mark$.subscribe((mark) => this.mark.emit(mark));
    this._subs = this.$service.zoom$.subscribe((_zoom) => this.hideAllPopup());
    this._subs = this.$service.hidePopover$.subscribe(() => this.hideAllPopup());
  }

  hideAllPopup(): void {
    this.tooltips?.forEach((mark) => mark.hidePopup());
  }

  scrollChange(event: WheelEvent): void {
    const step: number = this.sliderOptions.step;
    const maxZoom: number = this.sliderOptions.max;
    const updateZoom: number = event.deltaY > 0 ? this.zoom - step : this.zoom + step;
    if (updateZoom >= step && updateZoom <= maxZoom) {
      this.zoom = updateZoom;
      this.$service.zoom$.next(updateZoom);
    }
  }

  dragMousedown(): void {
    this.dragClasses.push('_grabbing');
  }

  dragMouseup(): void {
    this.dragClasses = this.dragClasses.filter((item) => item !== '_grabbing');
  }

  dragStarted(): void {
    this.$service.mark$.next(null);
    this.isDragged = true;
  }

  cdkDragEnded(): void {
    setTimeout(() => {
      this.isDragged = false;
      this.cdr.detectChanges();
    });
  }

  private _setFactor(width, height): void {
    this.factor = {
      width: width / Number(this._size.width) / this.zoom,
      height: height / Number(this._size.height) / this.zoom,
      arx: width / height,
      ary: height / width,
    };
    this.cdr.markForCheck();
  }

  resetDragAndDrop(): void {
    this.zoom = 1;
    if (this.cdkDrag) {
      this.cdkDrag.reset();
    }
  }

  centered(markId: number): void {
    let mark;
    let index;
    if (this.centeredMarkLogicType) {
      index = this.marks.findIndex((_mark) => _mark.id === markId && _mark.logicType === this.centeredMarkLogicType);
      mark = this.marks[index];
    } else {
      index = this.marks.findIndex((_mark) => _mark.id === markId);
      mark = this.marks[index];
    }
    if (mark) {
      this.resetDragAndDrop();
      const halfMapWidth = this.map?.nativeElement.offsetWidth / 2 || 0;
      const halfMapHeight = this.map?.nativeElement.offsetHeight / 2 || 0;
      const halfMarkSize = mark.coordinates.size / 2 || 0;
      this.dragPosition = {
        x: halfMapWidth - (mark.coordinates.x + halfMarkSize) * this.factor.width,
        y: halfMapHeight - (mark.coordinates.y + halfMarkSize) * this.factor.height,
      };

      const mapMark = this.mapMarks.toArray()[index];
      if (mapMark) {
        mapMark.showPopup();
      }
    }
  }

  heightToString(add: number = 0): string {
    return this.height ? String(this.height + add) + 'px' : 'auto';
  }

  zoomChange(value: number): void {
    this.$service.zoom$.next(value);
  }

  loadMap(): void {
    this.$service.mapReady$.next(true);
  }

  preparationCanvas(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  drawPolygon(coordinates: IMapDragPosition[], color?: string): void {
    if (this.canvas.nativeElement.getContext && this.ctx) {
      this.ctx.fillStyle = hexToRGB(color, '0.4');
      this.ctx.beginPath();
      coordinates.forEach((pos, index) => {
        if (index === 0) {
          this.ctx.moveTo(pos.x, pos.y);
        }
        this.ctx.lineTo(pos.x, pos.y);
      });
      this.ctx.fill();
      this.ctx.closePath();
    }
  }

  @Debounce(100)
  drawAreas(): void {
    if (this.canvas && this.canvas.nativeElement && this._size && this.factor) {
      this.canvas.nativeElement.width = +this._size.width * this.factor.width;
      this.canvas.nativeElement.height = +this._size.height * this.factor.height;
      this.ctx?.clearRect(0, 0, Number(this._size.width), Number(this._size.height));
      this.areas.forEach((area) => {
        area.polygons.forEach((polygon) => {
          if (polygon.isVisible) {
            this.drawPolygon(polygonPointsTransform(polygon.polygonPoints, this.factor), polygon.color);
          }
        });
      });
    }
  }

  ngOnDestroy(): void {}
}
