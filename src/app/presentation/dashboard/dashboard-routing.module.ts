import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardsComponent} from './components/dashboards/dashboards.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    data: {
      title: 'Home',
      hideInBreadcrumbs: true,
      hideBreadcrumbs: false,
      hideTitle: false,
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
