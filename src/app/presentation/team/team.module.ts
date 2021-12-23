import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { TeamRoutingModule } from '@presentation/team/team-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CoreModule.forChild(),
    TeamRoutingModule,
  ]
})
export class TeamModule {
}
