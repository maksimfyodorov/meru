import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '@presentation/reservations/reservation-create/components/create/create.component';
import { FloorComponent } from '@presentation/reservations/reservation-create/components/floor/floor.component';
import { TitleCreateResolver } from '@presentation/reservations/resolvers/title-create.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CreateComponent,
    data: {
      title: 'Reserve a place',
    },
    resolve: {
      title: TitleCreateResolver
    }
  },
  {
    path: ':floorId',
    component: FloorComponent,
    data: {
      title: 'Reserve a place',
    },
    resolve: {
      title: TitleCreateResolver
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ReservationCreateRoutingModule {
}
