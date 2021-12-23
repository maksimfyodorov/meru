import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { LayoutSharedService} from '@app/layout/layout-shared.service';

@Component({
  selector: 'app-dev-reservation-view',
  templateUrl: './dev-reservation-view.component.html',
  styleUrls: ['./dev-reservation-view.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevReservationViewComponent implements AfterViewInit {

  @ViewChild('titleExtraTpl') public titleExtraTpl;

  constructor(private $layout: LayoutSharedService) {}

  ngAfterViewInit(): void {
    this.$layout.extra = this.titleExtraTpl;
  }

  public acceptReservation(): void {
    console.log('accept reservation');
  }
}
