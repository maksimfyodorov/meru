import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeServicesomponent } from './page/office-services.component';

const routes: Routes = [
  {
    path: '',
    component: OfficeServicesomponent,
    data: {
      title: 'Office services'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficeServicesRoutingModule {}
