import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamRequestsGuard } from '../team-requests.guard';
import { TeamGuard } from '../team.guard';

const routes: Routes = [
  {
    path: 'profiles',
    children: [
      {
        path: ':userId',
        loadChildren: () => import('./team-profile/team-profile.module').then(({ TeamProfileModule }) => TeamProfileModule),
      },
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./team-profiles/team-profiles.module').then(({ TeamProfilesModule }) => TeamProfilesModule),
      },
    ],
  },
  {
    path: 'requests',
    loadChildren: () => import('./team-requests/team-requests.module').then(({ TeamRequestsModule }) => TeamRequestsModule),
    canActivate: [TeamRequestsGuard],
  },
  {
    path: 'reservations',
    children: [
      {
        path: 'create',
        loadChildren: () => import('./team-create/team-create.module').then(({ TeamCreateModule }) => TeamCreateModule),
        data: {
          title: 'Reservation',
        },
      },
      {
        path: ':type',
        loadChildren: () =>
          import('./team-reservations/team-reservations.module').then(({ TeamReservationsModule }) => TeamReservationsModule),
        data: {},
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'workplace',
      },
    ],
    canActivate: [TeamGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
