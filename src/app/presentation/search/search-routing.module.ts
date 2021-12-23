import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '@presentation/search/search.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SearchComponent
  },
  {
    path: ':type',
    component: SearchComponent
  }, {
    path: '**',
    redirectTo: '/search'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
