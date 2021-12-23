import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenStreetMapComponent } from '@base/open-street-map/open-street-map.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { MapModule } from '@base/map/map.module';

@NgModule({
  declarations: [OpenStreetMapComponent],
  exports: [OpenStreetMapComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzSliderModule,
    NzIconModule,
    FormsModule,
    MapModule,
  ]
})
export class OpenStreetMapModule {}
