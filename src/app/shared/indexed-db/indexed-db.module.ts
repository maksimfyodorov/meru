import { NgModule } from '@angular/core';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { indexedDbConfig } from '@app/shared/indexed-db/indexed-db.config';
import { IndexedDbService } from '@shared/indexed-db/indexed-db.service';

@NgModule({
  declarations: [],
  imports: [
    NgxIndexedDBModule.forRoot(indexedDbConfig),
  ],
  providers: [
    IndexedDbService
  ]
})
export class IndexedDbModule {
}
