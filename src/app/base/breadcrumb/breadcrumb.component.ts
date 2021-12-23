import { Location } from '@angular/common';
import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {IBreadcrumbs} from './breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent {
  @Input() items: IBreadcrumbs;
  @Input() back: boolean = false;
  constructor(private _location: Location) { }

  goBack(): void {
    this._location.back();
  }
}
