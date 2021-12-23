import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationViewComponent } from './reservation-view.component';
import { CardModule } from '@base/card/card.module';
import { StepsModule } from '@base/steps/steps.module';
import { CommentsModule } from '@base/comments/comments.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { MembersModule } from '@base/members/members.module';
import { AddMembersModule } from '@base/add-members/add-members.module';
import { ImagesModule } from '@shared/images/images.module';
import { OrderServicesModule } from '../order-services/order-services.module';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CoreModule } from '@core/core.module';
import { RendererModule } from '../renderer/renderer.module';

@NgModule({
  declarations: [ReservationViewComponent],
  exports: [ReservationViewComponent],
  imports: [
    CommonModule,
    CardModule,
    StepsModule,
    CommentsModule,
    NzDividerModule,
    MembersModule,
    AddMembersModule,
    OrderServicesModule,
    ImagesModule,
    TranslateModule,
    NzTagModule,
    CoreModule,
    RendererModule,
  ],
  providers: [TranslatePipe],
})
export class ReservationViewModule {}
