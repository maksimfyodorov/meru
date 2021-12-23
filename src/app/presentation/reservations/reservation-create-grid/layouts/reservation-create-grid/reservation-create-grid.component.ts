import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reservation-create-grid',
  templateUrl: './reservation-create-grid.component.html',
  styleUrls: ['./reservation-create-grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationCreateGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
