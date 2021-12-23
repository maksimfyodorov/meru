import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { IReservationTab } from '@src/app/presentation/reservations/reservation-create-grid/models';

@Component({
  selector: 'app-building-in-filter',
  templateUrl: './building-in-filter.component.html',
  styleUrls: ['./building-in-filter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildingInFilterComponent implements OnInit {
  @Input() mode: 'checkbox' | 'link';
  @Input() building: IReservationTab;
  @Output() changeSelectedIds: EventEmitter<number[]> = new EventEmitter();

  @Input()
  selectedIds: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  onSelectFloor(floorId: number) {
    const index = this.selectedIds.indexOf(floorId);
    if (this.mode === 'link') {
      this.selectedIds = [floorId];
      this.changeSelectedIds.emit(this.selectedIds);
    }
    if (this.mode === 'checkbox') {
      if (index === -1) {
        this.selectedIds.push(floorId);
      } else {
        if (this.selectedIds.length > 0) {
          this.selectedIds.splice(index, 1);
        }
      }
      this.changeSelectedIds.emit(this.selectedIds);
    }
  }

  isSelected(floorId: number) {
    return this.selectedIds.includes(floorId);
  }
}
