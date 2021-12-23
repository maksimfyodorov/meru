import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { DictionariesService } from '@app/shared/dictionaries/dictionaries.service';
import { DictionariesIndexedDb } from '@app/shared/dictionaries/dictionaries.indexed-db';
import { BuildingsService } from '@shared/dictionaries/services/buildings.service';
import { FloorMapsService } from '@shared/dictionaries/services/floor-maps.service';

@NgModule( {
  declarations: [],
  imports: [
    CoreModule.forChild()
  ],
  providers: [
    DictionariesService,
    FloorMapsService,
    BuildingsService,
    DictionariesIndexedDb
  ]
} )
export class DictionariesModule {
}
