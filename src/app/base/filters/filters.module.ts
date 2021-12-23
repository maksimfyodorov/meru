import { NgModule } from '@angular/core';
import { FilterCheckboxComponent } from '@base/filters/filter-checkbox/filter-checkbox.component';
import { FilterComponent } from '@base/filters/filters/filter.component';
import { FilterCheckboxGroupComponent } from '@base/filters/filter-checkbox-group/filter-checkbox-group.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CoreModule } from '@core/core.module';
import { FilterDateComponent } from '@base/filters/filter-date/filter-date.component';
import { FilterDateTimeComponent } from '@base/filters/filter-date-time/filter-date-time.component';

@NgModule({
  declarations: [
    FilterComponent,
    FilterCheckboxComponent,
    FilterCheckboxGroupComponent,
    FilterDateComponent,
    FilterDateTimeComponent,
  ],
  imports: [CoreModule.forChild(), PerfectScrollbarModule],
  exports: [
    FilterComponent,
    FilterCheckboxComponent,
    FilterCheckboxGroupComponent,
    FilterDateComponent,
    FilterDateTimeComponent,
  ],
})
export class FiltersModule {}
