import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ReservationCreateGridRoutingModule } from './reservation-create-grid-routing.module';
import { ReservationCreateGridComponent } from './layouts/reservation-create-grid/reservation-create-grid.component';
import { FloorComponent } from './pages/floor/floor.component';
import { GridComponent } from './pages/grid/grid.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TranslatePipe } from '@ngx-translate/core';
import { FiltersModule } from '@src/app/base/filters/filters.module';
import { FilterAppointmentComponent } from './components/filters/filter-appointment/filter-appointment.component';
import { FilterWorkplaceComponent } from './components/filters/filter-workplace/filter-workplace.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { BookingListModule } from '@src/app/base/booking-list/booking-list.module';
import { DropdownSelectModule } from '@src/app/base/dropdown-select/dropdown-select.module';
import { MapModule } from '@src/app/base/map/map.module';
import { OpenStreetMapModule } from '@src/app/base/open-street-map/open-street-map.module';
import { RendererModule } from '@src/app/base/renderer/renderer.module';
import { WorkplaceCardAdvancedModule } from '@src/app/composite/workplace-card-advanced/workplace-card-advanced.module';
import { WorkplaceCardModule } from '@src/app/composite/workplace-card/workplace-card.module';
import { CoreModule } from '@src/app/core/core.module';
import { BuildingInFilterModule } from '@src/app/base/building-in-filter/building-in-filter.module';
import { CardComponent } from './components/card/card.component';
import { FilterParkingComponent } from './components/filters/filter-parking/filter-parking.component';
import { FilterService } from './services/filter.service';
import { ReservationCreateGridService } from './services/reservation-create-grid.service';
import { MobileDialogContentscrollModule } from '@src/app/base/mobile-dialog-contentscroll/mobile-dialog-contentscroll.module';

@NgModule({
  declarations: [
    ReservationCreateGridComponent,
    FloorComponent,
    GridComponent,
    TabsComponent,
    FilterAppointmentComponent,
    FilterWorkplaceComponent,
    CardComponent,
    FilterParkingComponent,
  ],
  imports: [
    CommonModule,
    ReservationCreateGridRoutingModule,
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
    BuildingInFilterModule,
    NzCardModule,
    NzTagModule,
    NzTabsModule,
    NzIconModule,
    NzButtonModule,
    NzFormModule,
    NzModalModule,
    NzBadgeModule,
    NzStepsModule,
    MobileDialogContentscrollModule,
  ],
  providers: [DatePipe, TranslatePipe, FilterService, ReservationCreateGridService],
})
export class ReservationCreateGridModule {}
