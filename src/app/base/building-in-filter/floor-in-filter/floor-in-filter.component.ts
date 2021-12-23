import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IReservationCard } from '@src/app/presentation/reservations/reservation-create-grid/models';
import { CHECK_UNION } from '@src/app/shared/http/utils/images.const';

@Component({
  selector: 'app-floor-in-filter',
  templateUrl: './floor-in-filter.component.html',
  styleUrls: ['./floor-in-filter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloorInFilterComponent implements OnInit {
  @Input() disableSelected: boolean;
  @Input() item: IReservationCard;
  @Input() selected: boolean;
  @Output() select: EventEmitter<null> = new EventEmitter();

  CHECK_UNION = CHECK_UNION;

  constructor() {}

  ngOnInit(): void {}

  get workload(): number {
    const total: number = this.item.place.busyPlaceAmount + this.item.place.freePlaceAmount;
    const use: number = this.item.place.busyPlaceAmount;
    return (use / total) * 100 || 0;
  }
  get headerClass(): object {
    return {
      green: this.workload <= 50,
      red: this.workload >= 80,
      yellow: this.workload >= 51 && this.workload <= 79,
    };
  }

  onSelect() {
    if ((this.disableSelected && !this.selected) || !this.disableSelected) {
      this.select.emit();
    }
  }
}
