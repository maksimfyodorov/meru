import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OfficesComponent } from './offices.component';
import { OfficesRoutingModule } from '@presentation/offices/offices-routing.module';
import { SimpleFilterModule } from '@base/simple-filter/simple-filter.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { OfficeCardModule } from '@base/office-card/office-card.module';
import { OfficesService } from '@presentation/offices/offices.service';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NgsgModule } from 'ng-sortgrid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TranslateModule } from '@ngx-translate/core';
import { BookingListModule } from '@src/app/base/booking-list/booking-list.module';
import { DropdownSelectModule } from '@src/app/base/dropdown-select/dropdown-select.module';
import { OpenStreetMapModule } from '@src/app/base/open-street-map/open-street-map.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [OfficesComponent],
  providers: [OfficesService, DatePipe],
  imports: [
    CommonModule,
    OfficesRoutingModule,
    SimpleFilterModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzInputModule,
    FormsModule,
    NzTabsModule,
    NzGridModule,
    NzButtonModule,
    NzSpaceModule,
    OfficeCardModule,
    NzSkeletonModule,
    DragDropModule,
    NgsgModule,
    NzDropDownModule,
    NzIconModule,
    NzCardModule,
    NzDividerModule,
    NzTableModule,
    TranslateModule,
    OpenStreetMapModule,
    DropdownSelectModule,
    BookingListModule,
    NzSpinModule,
  ],
})
export class OfficesModule {}
