import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ReservationCalendarComponent } from './layouts/reservation-calendar/reservation-calendar.component';
import { TitleCalendarResolver } from './resolvers/title-calendar.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReservationCalendarComponent,
    data: {
      title: 'Reservation calendar',
    },
    children: [
      {
        path: ':type/:placeId',
        component: CalendarComponent,
        resolve: {
          title: TitleCalendarResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationCalendarRoutingModule {}
