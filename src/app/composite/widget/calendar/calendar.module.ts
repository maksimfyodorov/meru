import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { WidgetModule } from '@base/widget/widget.module';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CalendarComponent],
  providers: [DatePipe],
  exports: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    WidgetModule,
    NzCalendarModule,
    RouterModule
  ]
})
export class CalendarModule { }
