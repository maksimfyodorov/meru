import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingListModule } from '@base/booking-list/booking-list.module';
import { DropdownSelectModule } from '@base/dropdown-select/dropdown-select.module';
import { FiltersModule } from '@base/filters/filters.module';
import { MapModule } from '@base/map/map.module';
import { OpenStreetMapModule } from '@base/open-street-map/open-street-map.module';
import { WorkplaceCardModule } from '@composite/workplace-card/workplace-card.module';
import { CoreModule } from '@core/core.module';
import { TranslatePipe } from '@ngx-translate/core';
import { CreateComponent } from '@presentation/team/team-create/components/create/create.component';
import { CreateFilterWorkplaceComponent } from './components/team-filters/create-filters-workplace/create-filter-workplace.component';
import { FloorComponent } from '@presentation/team/team-create/components/floor/floor.component';
import { CreateFilterComponent } from '@presentation/team/team-create/components/team-filters/create-filter.component';
import { TeamCreateRoutingModule } from '@presentation/team/team-create/team-create-routing.module';
import { WorkplaceCardAdvancedModule } from '@src/app/composite/workplace-card-advanced/workplace-card-advanced.module';

@NgModule({
  declarations: [
    FloorComponent,
    CreateFilterComponent,
    CreateFilterWorkplaceComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    BookingListModule,
    CoreModule,
    MapModule,
    DropdownSelectModule,
    WorkplaceCardModule,
    WorkplaceCardAdvancedModule,
    TeamCreateRoutingModule,
    FiltersModule,
    ReactiveFormsModule,
    OpenStreetMapModule,
  ],
  providers: [DatePipe, TranslatePipe],
})
export class TeamCreateModule {}
