import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownSelectModule } from '@base/dropdown-select/dropdown-select.module';
import { FiltersModule } from '@base/filters/filters.module';
import { MapModule } from '@base/map/map.module';
import { MultiSwitcherModule } from '@base/multi-switcher/multi-switcher.module';
import { WorkplaceCardModule } from '@composite/workplace-card/workplace-card.module';
import { TranslateModule } from '@ngx-translate/core';
import { OfficesMapRoutingModule } from '@presentation/offices/offices-map/offices-map-routing.module';
import { ImagesModule } from '@shared/images/images.module';
import { MobileDialogContentscrollModule } from '@src/app/base/mobile-dialog-contentscroll/mobile-dialog-contentscroll.module';
import { MobileFilterButtonModule } from '@src/app/base/mobile-filter-button/mobile-filter-button.module';
import { WorkplaceCardAdvancedModule } from '@src/app/composite/workplace-card-advanced/workplace-card-advanced.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { OfficesMapComponent } from './offices-map.component';

@NgModule({
  declarations: [OfficesMapComponent],
  exports: [OfficesMapComponent],
  imports: [
    CommonModule,
    MapModule,
    NzGridModule,
    NzMenuModule,
    NzDropDownModule,
    NzIconModule,
    DropdownSelectModule,
    NzDatePickerModule,
    FormsModule,
    NzSliderModule,
    NzToolTipModule,
    WorkplaceCardModule,
    WorkplaceCardAdvancedModule,
    FiltersModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzSpinModule,
    NzModalModule,
    MultiSwitcherModule,
    ImagesModule,
    OfficesMapRoutingModule,
    MobileFilterButtonModule,
    MobileDialogContentscrollModule,
    TranslateModule,
  ],
})
export class OfficesMapModule {}
