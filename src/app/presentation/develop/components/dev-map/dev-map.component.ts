import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevMapService } from '@presentation/develop/components/dev-map/dev-map.service';

@Component({
  selector: 'app-dev-map',
  templateUrl: './dev-map.component.html',
  styleUrls: ['./dev-map.component.less'],
  providers: [DevMapService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevMapComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
