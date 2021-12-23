import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPageResolver } from '@presentation/reservations/resolvers/view.page.resolver';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { TitleResolver } from '@presentation/reservations/resolvers/title.resolver';
import { ReservationDetailComponent } from '@presentation/reservations/reservation-detail/reservation-detail.component';

const routes: Routes = [
  {
    path: 'calendar',
    loadChildren: () =>
      import('./reservation-calendar/reservation-calendar.module').then(
        ({ ReservationCalendarModule }) => ReservationCalendarModule,
      ),
  },
  {
    path: ':type',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListComponent,
        data: {
          title: 'Workplace',
          componentName: 'ReservationsListComponent',
        },
        resolve: {
          title: TitleResolver,
        },
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./reservation-create-grid/reservation-create-grid.module').then(
            ({ ReservationCreateGridModule }) => ReservationCreateGridModule,
          ),
      },
      // {
      //   path: 'create',
      //   loadChildren: () =>
      //     import('./reservation-create/reservation-create.module').then(({ ReservationCreateModule }) => ReservationCreateModule),
      // },
      {
        path: 'view/:id',
        component: ViewComponent,
        data: {
          showBackBtn: true,
        },
        resolve: {
          title: ViewPageResolver,
        },
      },
      {
        path: 'reservation-detail/:id',
        component: ReservationDetailComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/reservations/workplace',
  },
  {
    path: '**',
    redirectTo: '/reservations/workplace',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
