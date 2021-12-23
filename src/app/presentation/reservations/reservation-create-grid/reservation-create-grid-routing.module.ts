import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloorComponent } from './pages/floor/floor.component';
import { GridComponent } from './pages/grid/grid.component';
import { ReservationCreateGridComponent } from './layouts/reservation-create-grid/reservation-create-grid.component';
import { TitleCreateGridResolver } from './resolvers/title-create-grid.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReservationCreateGridComponent,
    data: {
      title: 'Бронирование',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: GridComponent,
        data: {
          title: '',
        },
        resolve: {
          title: TitleCreateGridResolver,
        },
      },
      {
        path: ':floorId',
        component: FloorComponent,
        data: {
          title: '',
        },
        resolve: {
          title: TitleCreateGridResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationCreateGridRoutingModule {}
