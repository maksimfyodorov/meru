import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TeamProfilesComponent } from './team-profiles.component';
import { TeamProfilesRoutingModule } from '@presentation/team/team-profiles/team-profiles-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { RendererModule } from '@base/renderer/renderer.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgxMaskModule } from 'ngx-mask';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ImagesModule } from '@src/app/shared/images/images.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { UserFilterPipe } from './user-filter.pipe';
import { MobileDialogContentscrollModule } from '@src/app/base/mobile-dialog-contentscroll/mobile-dialog-contentscroll.module';
import { MobileFilterButtonModule } from '@src/app/base/mobile-filter-button/mobile-filter-button.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [TeamProfilesComponent, UserFilterPipe],
  providers: [DatePipe, TranslatePipe],
  imports: [
    CommonModule,
    TeamProfilesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzTabsModule,
    NzFormModule,
    NzDatePickerModule,
    MobileFilterButtonModule,
    MobileDialogContentscrollModule,
    ImagesModule,
    RendererModule,
    NgxMaskModule.forRoot(),
    ScrollingModule,
    NzInputModule,
    NzButtonModule,
    NzSpinModule,
    TranslateModule,
  ],
})
export class TeamProfilesModule {}
