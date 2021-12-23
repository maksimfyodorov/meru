import { Pipe, PipeTransform } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { ImageBlobService } from '@shared/images/services/image-blob.service';
import { tap } from 'rxjs/operators';

@Pipe( {
  name: 'imageBlob'
} )
export class ImageBlobPipe implements PipeTransform {
  private static _blobs: Map<string, SafeUrl> = new Map<string, SafeUrl>();

  constructor( private $images: ImageBlobService ) {
  }

  public get blobs(): Map<string, SafeUrl> {
    return ImageBlobPipe._blobs
  }

  public transform( url: string ): Observable<SafeUrl> {
    if (this.blobs.has(url)) {
      return of( this.blobs.get(url) );
    }

    return this.$images
      .getImageBlob( url )
      .pipe(
        tap( ( blob: SafeUrl ) => this.blobs.set(url, blob) )
      );
  }
}
