import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamProfileComponent } from './team-profile.component';
import { UserCardModule } from '@composite/user-card/user-card.module';
import { TeamProfileRoutingModule } from '@presentation/team/team-profile/team-profile-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TranslateModule } from '@ngx-translate/core';
import { RendererModule } from '@base/renderer/renderer.module';
import { CalendarModule } from '@src/app/base/calendar/calendar.module';
import { CoreModule } from '@src/app/core/core.module';




@NgModule({
  declarations: [TeamProfileComponent],
  exports: [TeamProfileComponent],
  imports: [
    CommonModule,
    UserCardModule,
    TeamProfileRoutingModule,
    NzGridModule,
    NzTabsModule,
    NzTableModule,
    TranslateModule,
    RendererModule,
    CalendarModule,
  ],
})
export class TeamProfileModule {}
