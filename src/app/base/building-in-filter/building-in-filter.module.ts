import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingInFilterComponent } from './building-in-filter.component';
import { TranslateModule } from '@ngx-translate/core';
import { FloorInFilterComponent } from './floor-in-filter/floor-in-filter.component';

@NgModule({
  declarations: [BuildingInFilterComponent, FloorInFilterComponent],
  imports: [CommonModule, TranslateModule],
  exports: [BuildingInFilterComponent],
})
export class BuildingInFilterModule {}
