import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IBreadcrumbs } from '@base/breadcrumb/breadcrumb.model';
import { DashboardsService } from './dashboards.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.less'],
  providers: [DashboardsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardsComponent {}
