import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { IStatuses } from '@src/app/shared/dictionaries/models/statuses.model';
import { first } from 'rxjs/operators';
import { IDescription } from '../card/card.model';
import { MobileReservationCardService } from './mobile-reservation-card.service';

@Component({
  selector: 'app-mobile-reservation-card',
  templateUrl: './mobile-reservation-card.component.html',
  styleUrls: ['./mobile-reservation-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MobileReservationCardService],
})
export class MobileReservationCardComponent implements OnInit {
  @Input() public actions: { type: 'delete' }[] = [];
  @Input() public status = this._service.card.status;
  @Input() public descriptionList: IDescription[] = this._service.card.descriptionList;
  @Input() public tags: string[] = this._service.card.tags;
  @Input() public dateTimeFrom: Date = this._service.card.dateTimeFrom;
  @Input() public dateTimeTo: Date = this._service.card.dateTimeTo;
  @Input() type: 'workplace' | 'appointment' | 'parking' | 'user' = 'workplace';
  statuses: any;

  constructor(private _service: MobileReservationCardService, private _route: Router, private _cdr: ChangeDetectorRef) {
    this._service.statuses$.pipe(first()).subscribe((statuses) => {
      this.statuses = { map: statuses };
      this._cdr.markForCheck();
    });
  }

  ngOnInit(): void {}

  get title() {
    switch (this.type) {
      case 'appointment':
        return 'Room reservation';
      case 'parking':
        return 'Parking reservation';
      case 'user':
        return 'User';

      default:
        return 'Workplace reservation';
    }
  }

  get dateTimeFormat() {
    return this._service.dateTimeFormat;
  }
}
