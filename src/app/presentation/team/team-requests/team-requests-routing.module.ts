import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamRequestsComponent } from '@presentation/team/team-requests/components/team-requests/team-requests.component';

const routes: Routes = [
  {
    path: ':type',
    component: TeamRequestsComponent,
    data: {
      title: 'Confirmation requests'
    },
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'workplace'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TeamRequestsRoutingModule {
}
