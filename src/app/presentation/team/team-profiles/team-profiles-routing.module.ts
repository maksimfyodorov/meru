import { NgModule } from '@angular/core';
import { TeamProfilesComponent } from './team-profiles.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TeamProfilesComponent,
    data: {
      title: 'Profiles'
    }
  },

];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TeamProfilesRoutingModule {}
