import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { IMarkItem, MarkItemLogicType } from '@base/map/map-mark/map-mark.model';
import { NzPopoverDirective } from 'ng-zorro-antd/popover';
import { MapService } from '@base/map/map.service';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { Subscription } from 'rxjs';
import { DEFAULT_MAP_MARK } from '@shared/http/utils/images.const';
import { IMapFactor } from '@base/map/map.model';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-map-mark',
  templateUrl: './map-mark.component.html',
  styleUrls: ['./map-mark.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapMarkComponent implements OnDestroy {
  markImg: string = DEFAULT_MAP_MARK;
  @Subscriptions()
  sub: Subscription;
  mark: IMarkItem = null;
  id: number;
  isIcon: boolean = false;
  visibleImg: boolean = false;
  visibleUser: boolean = false;
  isRoom: boolean = false;
  isDragged: boolean = false;
  hasPermanentAssignment: boolean = false;

  @Input() selectedMarkId: number; // id сущности, открытой в расширенной вкладке
  @Input() selectedMarkLogicType: string; // тип сущности, открытой в расширенной вкладке
  @Input() useAdvCard: boolean = false; // в качестве попапов используется новая карточка (на весь экран)

  @Input('mark')
  set inputMark(mark: IMarkItem) {
    const { icon, img, logicType }: IMarkItem = mark;
    this.mark = mark;
    this.id = mark.id;
    this.isIcon = icon && !img;
    this.visibleImg = logicType === 'Workplace' || logicType === 'POI' || logicType === 'ParkingLot' || !logicType;
    this.visibleUser = logicType === 'User' || logicType === 'Users';
    this.isRoom = logicType === 'Room';
    this.hasPermanentAssignment = mark.relativePlace && mark.relativePlace.labelIdPermanentAssignment > 0;
  }

  @Input()
  factor: IMapFactor = { width: 1, height: 1, arx: 1, ary: 1 };

  @Input()
  hiddenMarksTypes: MarkItemLogicType[] = [];

  @Input('isDragged')
  set inputIsDragged(isDragged: boolean) {
    this.isDragged = isDragged;
    this.tooltip?.hide();
    this.hidePopup();
  }

  @Input()
  size: { width: string; height: string };

  @Output()
  isDraggedChange: EventEmitter<unknown> = new EventEmitter<unknown>();

  get hidden(): boolean {
    return this.hiddenMarksTypes.includes(this.mark.logicType);
  }

  get pulse(): boolean {
    return (
      this.mark.id === this.selectedMarkId &&
      this.mark.logicType !== 'Users' &&
      this.mark.logicType !== 'User' &&
      this.mark.logicType !== 'POI' &&
      this.mark.logicType === this.selectedMarkLogicType
    );
  }

  @ViewChild(NzPopoverDirective)
  popupover: NzPopoverDirective;

  @ViewChild(NzTooltipDirective)
  tooltip: NzTooltipDirective;

  constructor(private $map: MapService) {}

  scale(value: number, factor: number): string {
    return value * factor + 'px';
  }

  showPopup(): void {
    this.popupover?.show();
  }

  hidePopup(): void {
    this.popupover?.hide();
  }

  onClick($event: MouseEvent): void {
    if (this.isDragged) {
      $event.stopImmediatePropagation();
      return;
    }
    if (this.mark.onClick) {
      this.mark.onClick(this.mark);
    }
    this.$map.mark$.next(this.mark);
  }

  get assigmentSize() {
    let val = 5;
    if (parseInt(this.size.width) > 4000 || parseInt(this.size.height) > 4000) {
      val = 3;
    }
    return { width: `${val}px`, height: `${val}px` };
  }

  ngOnDestroy(): void {}
}
