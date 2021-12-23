import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { SkeletonType } from '@base/skeleton/skeleton.model';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonComponent implements OnInit {
  public rows: number[];

  @Input()
  public type: SkeletonType = 'form';

  @Input()
  public showHeader: boolean = false;

  constructor() {
    this.type = null;
  }

  public ngOnInit() {
    this.rows = (new Array(24)).fill(null).map((_, index) => index + 1);
  }
}
