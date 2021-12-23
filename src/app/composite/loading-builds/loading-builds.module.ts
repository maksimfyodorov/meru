import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBuildsComponent } from './loading-builds.component';
import { LoadingBuildsService } from '@app/composite/loading-builds/loading-builds.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [LoadingBuildsComponent],
  providers: [LoadingBuildsService],
  exports: [LoadingBuildsComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    TranslateModule
  ]
})
export class LoadingBuildsModule { }
