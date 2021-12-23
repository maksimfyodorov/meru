import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace.component';
import { MapModule } from '@base/map/map.module';
import { CoreModule } from '@core/core.module';
import { BookingListModule } from '@base/booking-list/booking-list.module';
import { WorkplaceService } from '@app/composite/booking/workplace/workplace.service';
import { SimpleFilterModule } from '@base/simple-filter/simple-filter.module';



@NgModule({
  declarations: [WorkplaceComponent],
  providers: [WorkplaceService],
  exports: [WorkplaceComponent],
  imports: [
    CommonModule,
    MapModule,
    CoreModule,
    BookingListModule,
    SimpleFilterModule
  ]
})
export class WorkplaceModule {}
