import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { DevelopRoutingModule } from './develop-routing.module';
import { DevListComponent } from './components/dev-list/dev-list.component';
import { DevConditionDirectiveComponent } from './components/dev-condition-directive/dev-condition-directive.component';
import { ListModule } from '@base/list/list.module';
import { DevMapComponent } from './components/dev-map/dev-map.component';
import { MapModule } from '@base/map/map.module';
import { DevReservationViewComponent } from './components/dev-reservation-view/dev-reservation-view.component';
import { ReservationViewModule } from '@base/reservation-view/reservation-view.module';
import { DevBookingWorkplaceComponent } from './components/dev-booking-workplace/dev-booking-workplace.component';
import { CommonModule } from '@angular/common';
import { DevOpenStreetMapComponent } from './components/dev-open-street-map/dev-open-street-map.component';
import { OpenStreetMapModule } from '@base/open-street-map/open-street-map.module';
import { SimpleFilterModule } from '@base/simple-filter/simple-filter.module';
import { WorkplaceModule } from '@app/composite/booking/workplace/workplace.module';
import { DevLoadingBuildsComponent } from './components/dev-loading-builds/dev-loading-builds.component';
import { LoadingBuildsModule } from '@app/composite/loading-builds/loading-builds.module';
import { FiltersModule } from '@base/filters/filters.module';
import { DevReservationsCalendarComponent } from './components/dev-reservations-calendar/dev-reservations-calendar.component';
import { CalendarModule } from '@base/calendar/calendar.module';

@NgModule({
  declarations: [
    DevListComponent,
    DevConditionDirectiveComponent,
    DevMapComponent,
    DevReservationViewComponent,
    DevBookingWorkplaceComponent,
    DevOpenStreetMapComponent,
    DevLoadingBuildsComponent,
    DevReservationsCalendarComponent,
  ],
  imports: [
    CommonModule,
    DevelopRoutingModule,
    CoreModule.forChild(),
    ListModule,
    MapModule,
    ReservationViewModule,
    FiltersModule,
    OpenStreetMapModule,
    SimpleFilterModule,
    WorkplaceModule,
    LoadingBuildsModule,
    CalendarModule
  ]
})
export class DevelopModule {
}
