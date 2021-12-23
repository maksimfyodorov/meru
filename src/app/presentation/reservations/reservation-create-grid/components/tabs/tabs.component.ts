import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { LIST_TO_MAP, MAP_TO_LIST } from '@src/app/shared/http/utils/images.const';
import { NzTabComponent } from 'ng-zorro-antd/tabs';
import { IReservationTab } from '../../models';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit {
  @Input() type: 'grid' | 'map' = 'grid';
  @Input() floorTitle: string;
  @Input() buildings: IReservationTab[];
  @Input() buildingIndex: number;
  @Output() selectBuildingIndex: EventEmitter<number> = new EventEmitter();
  @Output() link: EventEmitter<'grid' | 'map'> = new EventEmitter();
  @Output() selectFloorId: EventEmitter<number> = new EventEmitter();
  @Output() showFilter: EventEmitter<null> = new EventEmitter();
  LIST_TO_MAP = LIST_TO_MAP;
  MAP_TO_LIST = MAP_TO_LIST;

  constructor() {}

  ngOnInit(): void {}

  onSelectTab(tab: { index: number; tab: NzTabComponent }) {
    this.selectBuildingIndex.emit(tab.index);
  }

  onLink() {
    this.link.emit(this.type);
  }

  onShowFilter() {
    this.showFilter.emit();
  }

  onselectFloorId(id: number) {
    this.selectFloorId.emit(id);
  }
}
