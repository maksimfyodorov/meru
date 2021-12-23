import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IOpenStreetMapMark, IOpenStreetMapOptions } from '@base/open-street-map/open-street-map.model';

@Component({
  selector: 'app-dev-open-street-map',
  templateUrl: './dev-open-street-map.component.html',
  styleUrls: ['./dev-open-street-map.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevOpenStreetMapComponent implements OnInit {
  options: IOpenStreetMapOptions = {
    x: 55.751667,
    y: 37.618778,
    zoom: 13,
  };
  marks: IOpenStreetMapMark[] = [{
    id: 1,
    x: 55.751667,
    y: 37.618778,
  }];
  constructor() {}
  ngOnInit(): void {}
}
