import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingListModule } from '@base/booking-list/booking-list.module';
import { DropdownSelectModule } from '@base/dropdown-select/dropdown-select.module';
import { FiltersModule } from '@base/filters/filters.module';
import { MapModule } from '@base/map/map.module';
import { OpenStreetMapModule } from '@base/open-street-map/open-street-map.module';
import { RendererModule } from '@base/renderer/renderer.module';
import { WorkplaceCardModule } from '@composite/workplace-card/workplace-card.module';
import { CoreModule } from '@core/core.module';
import { TranslatePipe } from '@ngx-translate/core';
import { CreateFilterComponent } from '@presentation/reservations/reservation-create/components/create/create-filters/create-filter.component';
import { CreateFilterWorkplaceComponent } from '@presentation/reservations/reservation-create/components/create/create-filters/create-filters-workplace/create-filter-workplace.component';
import { CreateComponent } from '@presentation/reservations/reservation-create/components/create/create.component';
import { ReservationCreateRoutingModule } from '@presentation/reservations/reservation-create/reservation-create-routing.module';
import { FloorComponent } from './components/floor/floor.component';
import { CreateFilterAppointmentComponent } from '@presentation/reservations/reservation-create/components/create/create-filters/create-filters-appointment/create-filter-appointment.component';
import { WorkplaceCardAdvancedModule } from '@src/app/composite/workplace-card-advanced/workplace-card-advanced.module';

@NgModule({
  declarations: [
    CreateComponent,
    CreateFilterComponent,
    CreateFilterWorkplaceComponent,
    CreateFilterAppointmentComponent,
    FloorComponent,
  ],
  imports: [
    CommonModule,
    ReservationCreateRoutingModule,
    OpenStreetMapModule,
    DropdownSelectModule,
    BookingListModule,
    MapModule,
    CoreModule,
    FiltersModule,
    RendererModule,
    ReactiveFormsModule,
    WorkplaceCardModule,
    WorkplaceCardAdvancedModule,
  ],
  providers: [DatePipe, TranslatePipe],
})
export class ReservationCreateModule {}
