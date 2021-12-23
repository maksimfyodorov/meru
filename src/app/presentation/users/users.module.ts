import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { GlobalSearchModule } from '@src/app/shared/global-search/global-search.module';
import { ImagesModule } from '@src/app/shared/images/images.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CoreModule } from '@src/app/core/core.module';
import { RendererModule } from '@src/app/base/renderer/renderer.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    CoreModule.forChild(),
    UsersRoutingModule,
    GlobalSearchModule,
    NzListModule,
    NzPaginationModule,
    ImagesModule,
    RendererModule,
    ScrollingModule,
  ],
})
export class UsersModule {}
