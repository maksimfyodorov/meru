import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dev-loading-builds',
  templateUrl: './dev-loading-builds.component.html',
  styleUrls: ['./dev-loading-builds.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevLoadingBuildsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
