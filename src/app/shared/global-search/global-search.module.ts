import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSearchService } from '@shared/global-search/global-search.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GlobalSearchService
  ]
})
export class GlobalSearchModule { }
