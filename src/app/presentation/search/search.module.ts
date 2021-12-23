import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { CoreModule } from '@core/core.module';
import { SearchRoutingModule } from '@presentation/search/search-routing.module';
import { SearchService } from '@presentation/search/search.service';
import { GlobalSearchModule } from '@shared/global-search/global-search.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ImagesModule } from '@shared/images/images.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    CoreModule.forChild(),
    SearchRoutingModule,
    GlobalSearchModule,
    NzListModule,
    NzPaginationModule,
    ImagesModule
  ]
})
export class SearchModule { }
