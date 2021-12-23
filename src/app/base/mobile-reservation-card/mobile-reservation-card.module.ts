import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileReservationCardComponent } from './mobile-reservation-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TranslateModule } from '@ngx-translate/core';
import { RendererModule } from '../renderer/renderer.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [MobileReservationCardComponent],
  imports: [CommonModule, NzCardModule, TranslateModule, RendererModule, NzDividerModule],
  exports: [MobileReservationCardComponent],
})
export class MobileReservationCardModule {}
