import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { ImagesModule } from '@shared/images/images.module';

@NgModule({
  declarations: [ CommentsComponent ],
  exports: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    NzCommentModule,
    NzAvatarModule,
    NzListModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    ImagesModule
  ]
})
export class CommentsModule {
}
