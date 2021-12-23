import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationWorkplaceComponent } from './reservation-workplace.component';
import { CardModule } from '../card/card.module';
import { ImagesModule } from '@src/app/shared/images/images.module';
import { CalendarModule } from '../calendar/calendar.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [ReservationWorkplaceComponent],
  exports: [ReservationWorkplaceComponent],
  imports: [CommonModule, CardModule, ImagesModule, CalendarModule, TranslateModule],
})
export class ReservationWorkplaceModule {}
