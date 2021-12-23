import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '@presentation/team/team-create/components/create/create.component';
import { FloorComponent } from '@presentation/team/team-create/components/floor/floor.component';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
    data: {
      title: 'Creating a new reservation'
    }
  },
  {
    path: ':floorId',
    component: FloorComponent,
    data: {
      title: 'Creating a new reservation'
    },
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TeamCreateRoutingModule {
}
