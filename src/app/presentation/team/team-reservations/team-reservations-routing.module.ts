import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamReservationsComponent } from '@presentation/team/team-reservations/team-reservations.component';
import { ViewPageResolver } from '@presentation/team/team-reservations/view.page.resolver';
import { ViewComponent } from '@presentation/team/team-reservations/view/view.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: ViewComponent,
    data: {
      showBackBtn: true,
    },
    resolve: {
      title: ViewPageResolver
    }
  },
  {
    path: '',
    pathMatch: 'full',
    component: TeamReservationsComponent,
    data: {
      title: 'Employee workplace reservations'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamReservationsRoutingModule {}
