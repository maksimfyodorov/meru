import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from '@app/layout/layout/layout.component';
import { environment } from '@src/environments/environment';
import { LoadingDictionariesComponent } from '@app/layout/loading-dictionaries/loading-dictionaries.component';
import { DictionariesMatchersService } from '@shared/dictionaries/services/dictionaries-matchers.service';
import { TeamProfileComponent } from '@presentation/team/team-profile/team-profile.component';

const layoutRoutes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(({ UsersModule }) => UsersModule),
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservations/reservations.module').then(({ ReservationsModule }) => ReservationsModule),
  },
  {
    path: 'office',
    loadChildren: () => import('./offices/offices.module').then(({ OfficesModule }) => OfficesModule),
    data: {
      title: 'Buildings',
    },
  },
  {
    path: 'services',
    loadChildren: () => import('./office-services/office-services.module').then(({ OfficeServicesModule }) => OfficeServicesModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(({ SearchModule }) => SearchModule),
    data: {
      title: 'Search',
    },
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then(({ TeamModule }) => TeamModule),
    data: {
      title: 'My team',
    },
  },
  {
    path: 'profile',
    pathMatch: 'full',
    loadChildren: () => import('./team/./team-profile/team-profile.module').then(({ TeamProfileModule }) => TeamProfileModule),
  },
  // {
  //   path: 'profile',
  //   component: TeamProfileComponent,
  //   data: {
  //     title: 'My profile',
  //   },
  // },
  {
    loadChildren: () => import('./dashboard/dashboard.module').then(({ DashboardModule }) => DashboardModule),
    matcher: DictionariesMatchersService.alreadyMatcherFactory(),
  },
  {
    component: LoadingDictionariesComponent,
    matcher: DictionariesMatchersService.notAlreadyMatcherFactory(),
  },
];

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(({ AuthModule }) => AuthModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: layoutRoutes,
    data: {
      title: 'Home',
    },
  },
];

if (!environment.production) {
  layoutRoutes.unshift({
    path: 'dev',
    loadChildren: () => import('./develop/develop.module').then(({ DevelopModule }) => DevelopModule),
    data: {
      title: 'Development',
    },
  });
}

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class PresentationRoutingModule {}
