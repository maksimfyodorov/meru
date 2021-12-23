import { NgModule } from '@angular/core';
import { TeamRequestsComponent } from './components/team-requests/team-requests.component';
import { ResultModule } from '@base/result/result.module';
import { CoreModule } from '@core/core.module';
import { ListModule } from '@base/list/list.module';
import { TeamRequestsRoutingModule } from '@presentation/team/team-requests/team-requests-routing.module';
import { ExtraTitleTplModule } from '@shared/layout/extra-title-tpl/extra-title-tpl.module';
import { ToolbarModule } from '@base/toolbar/toolbar.module';

@NgModule({
  declarations: [ TeamRequestsComponent ],
  imports: [
    CoreModule.forChild(),
    ResultModule,
    TeamRequestsRoutingModule,
    ListModule,
    ExtraTitleTplModule,
    ToolbarModule
  ]
})
export class TeamRequestsModule {
}
