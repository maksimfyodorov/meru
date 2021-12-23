import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficesComponent } from '@presentation/offices/offices.component';
import { OfficesGuard } from '@presentation/offices/offices.guard';

const routes: Routes = [
  {
    path: '',
    component: OfficesComponent,
    data: {
      title: 'List of offices',
    },
  },
  {
    path: ':floorId',
    loadChildren: () => import('./offices-map/offices-map.module').then(({ OfficesMapModule }) => OfficesMapModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OfficesGuard],
})
export class OfficesRoutingModule {}
