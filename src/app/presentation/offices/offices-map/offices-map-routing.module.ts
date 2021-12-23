import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficesMapComponent } from '@presentation/offices/offices-map/offices-map.component';

const routes: Routes = [
  {
    path: '',
    component: OfficesMapComponent,
    data: {
      title: 'Office floor map'
    }
  },
  {
    path: ':type/:placeId',
    component: OfficesMapComponent,
    data: {
      title: 'Office floor map, location'
    }
  },
  {
    path: ':placeId',
    component: OfficesMapComponent,
    data: {
      title: 'Office floor map, location'
    }
  }
];
@NgModule({
  exports: [],
  imports: [RouterModule.forChild(routes)]
})
export class OfficesMapRoutingModule { }
