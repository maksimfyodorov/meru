import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageBlobPipe } from '@shared/images/pipes/image-blob.pipe';
import { FullImageUrlPipe } from './pipes/full-image-url.pipe';

@NgModule({
  declarations: [ ImageBlobPipe, FullImageUrlPipe ],
  exports: [
    ImageBlobPipe,
    FullImageUrlPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ImagesModule {
}
