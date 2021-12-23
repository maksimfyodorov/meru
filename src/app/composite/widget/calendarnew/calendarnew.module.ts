import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarnewComponent } from './calendarnew.component';
import { CalendarModule } from '@src/app/base/calendar/calendar.module';
import { ImagesModule } from '@src/app/shared/images/images.module';

@NgModule({
  declarations: [CalendarnewComponent],
  exports: [CalendarnewComponent],
  imports: [CommonModule, ImagesModule, CalendarModule],
})
export class CalendarnewModule {}
