import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamProfileComponent } from '@presentation/team/team-profile/team-profile.component';

const routes: Routes = [
  {
    path: '',
    component: TeamProfileComponent,
    data: {
      title: 'View profile'
    }
  }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TeamProfileRoutingModule {}
