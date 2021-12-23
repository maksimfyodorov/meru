import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IOfficeCardPlaces } from '@base/office-card/office-card.model';
import { PLACES_INFO } from '@base/office-card/office-card.utils';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfficeCardComponent {
  PLACES_INFO = PLACES_INFO;
  @Input() places: IOfficeCardPlaces = [
    {
      type: 'conversation',
      freePlaceAmount: 5,
      availablePlaceAmount: 5,
      busyPlaceAmount: 55,
    },
    {
      type: 'workplaces',
      freePlaceAmount: 1,
      availablePlaceAmount: 1,
      busyPlaceAmount: 14,
    },
    {
      type: 'wardrobes',
      freePlaceAmount: 2,
      availablePlaceAmount: 2,
      busyPlaceAmount: 18,
    },
    {
      type: 'parkinglots',
      freePlaceAmount: 0,
      availablePlaceAmount: 0,
      busyPlaceAmount: 0,
    },
  ];
  @Input() title: string = 'Default title';
  @Input() floor: number = 0;
  get workload(): number {
    const total: number = this.places.reduce(
      (acc, val) => (acc += val.busyPlaceAmount + val.freePlaceAmount),
      0
    );
    const use: number = this.places.reduce(
      (acc, val) => (acc += val.busyPlaceAmount),
      0
    );
    return (use / total) * 100 || 0;
  }
  get headerClass(): object {
    return {
      _green: this.workload <= 50,
      _red: this.workload >= 80,
      _yellow: this.workload >= 51 && this.workload <= 79,
    };
  }
}
