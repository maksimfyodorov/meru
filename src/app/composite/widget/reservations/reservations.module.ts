import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from '@base/card/card.module';
import { RendererModule } from '@base/renderer/renderer.module';
import { WorkplaceCardModule } from '@composite/workplace-card/workplace-card.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ReservationsComponent } from './reservations.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {ImagesModule} from '@shared/images/images.module';
import {TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {CoreModule} from "@core/core.module";
import { MobileReservationCardModule } from '@src/app/base/mobile-reservation-card/mobile-reservation-card.module';



@NgModule({
  declarations: [ReservationsComponent],
  exports: [ReservationsComponent],
  imports: [
    CommonModule,
    WorkplaceCardModule,
    CardModule,
    NzMenuModule,
    NzDescriptionsModule,
    RendererModule,
    NzTagModule,
    RouterModule,
    NzCardModule,
    NzDividerModule,
    NzTableModule,
    NzAvatarModule,
    ImagesModule,
    TranslateModule,
    CoreModule,
    MobileReservationCardModule,
  ],
  providers: [TranslatePipe],
})
export class ReservationsModule {}
