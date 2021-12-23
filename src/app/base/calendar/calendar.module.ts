import { NgModule } from '@angular/core';
import { CalendarComponent } from '@base/calendar/calendar.component';
import { CoreModule } from '@core/core.module';
import { CalendarModule as AngCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [ CalendarComponent ],
  imports: [
    CoreModule.forChild(),
    AngCalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule {
}
