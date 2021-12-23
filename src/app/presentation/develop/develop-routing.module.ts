import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevListComponent } from './components/dev-list/dev-list.component';
import { DevConditionDirectiveComponent } from './components/dev-condition-directive/dev-condition-directive.component';
import { DevMapComponent } from '@presentation/develop/components/dev-map/dev-map.component';
import { DevReservationViewComponent } from '@presentation/develop/components/dev-reservation-view/dev-reservation-view.component';
import { DevBookingWorkplaceComponent } from '@presentation/develop/components/dev-booking-workplace/dev-booking-workplace.component';
import { DevOpenStreetMapComponent } from '@presentation/develop/components/dev-open-street-map/dev-open-street-map.component';
import { DevLoadingBuildsComponent } from '@presentation/develop/components/dev-loading-builds/dev-loading-builds.component';
import { DevReservationsCalendarComponent } from '@presentation/develop/components/dev-reservations-calendar/dev-reservations-calendar.component';

const routes: Routes = [
  {
    path: 'list',
    component: DevListComponent
  },
  {
    path: 'calendar',
    component: DevReservationsCalendarComponent
  },
  {
    path: 'map',
    component: DevMapComponent,
    data: {
      title: 'Карта'
    }
  },
  {
    path: 'condition-directive',
    component: DevConditionDirectiveComponent,
    data: {
      title: 'Условная директива'
    }
  },
  {
    path: 'reservation-view',
    component: DevReservationViewComponent,
    data: {
      title: 'Бронирование'
    }
  },
  {
    path: 'open-street-map',
    component: DevOpenStreetMapComponent,
    data: {
      title: 'Карта OpenStreetMap'
    }
  },
  {
    path: 'loading-builds',
    component: DevLoadingBuildsComponent,
    data: {
      title: 'Загрузка зданий'
    }
  },
  {
    path: 'booking',
    children: [
      {
        path: 'workplace',
        component: DevBookingWorkplaceComponent,
        data: {
          title: 'Рабочее место'
        }
      }
    ],
    data: {
      title: 'Бронирование'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopRoutingModule {
}
