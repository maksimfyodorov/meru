import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ReservationCalendarRoutingModule } from './reservation-calendar-routing.module';
import { ReservationCalendarComponent } from './layouts/reservation-calendar/reservation-calendar.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { FiltersModule } from '@src/app/base/filters/filters.module';
import { ReservationWorkplaceModule } from '@src/app/base/reservation-workplace/reservation-workplace.module';
import { CardModule } from '@src/app/base/card/card.module';
import { CalendarModule } from '@src/app/base/calendar/calendar.module';
import { ImagesModule } from '@src/app/shared/images/images.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { MobileDialogContentscrollModule } from '@src/app/base/mobile-dialog-contentscroll/mobile-dialog-contentscroll.module';

@NgModule({
  declarations: [ReservationCalendarComponent, CalendarComponent],
  imports: [
    CommonModule,
    ReservationCalendarRoutingModule,
    FormsModule,
    FiltersModule,
    TranslateModule,
    CardModule,
    ImagesModule,
    CalendarModule,
    NzCardModule,
  ],
  providers: [DatePipe, TranslatePipe],
})
export class ReservationCalendarModule {}
