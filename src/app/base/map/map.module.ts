import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '@base/map/map.component';
import { MapService } from '@base/map/map.service';
import { CoreModule } from '@core/core.module';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MapMarkComponent } from './map-mark/map-mark.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { MapZoomComponent } from './map-zoom/map-zoom.component';
import { HttpModule } from '@shared/http/http.module';
import { MapControlsComponent } from './map-controls/map-controls.component';

@NgModule({
  declarations: [
    MapComponent,
    MapMarkComponent,
    MapZoomComponent,
    MapControlsComponent,
  ],
  exports: [
    MapComponent,
    MapMarkComponent,
    MapZoomComponent,
    MapControlsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    NzSliderModule,
    NzButtonModule,
    NzToolTipModule,
    NzIconModule,
    NzPopoverModule,
    DragDropModule,
    HttpModule,
  ],
  providers: [MapService],
})
export class MapModule {}
