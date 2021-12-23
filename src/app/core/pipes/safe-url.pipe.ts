import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  public constructor(
    private domSanitizer: DomSanitizer
  ) {
  }

  public transform(url) {
    return this.domSanitizer
      .bypassSecurityTrustResourceUrl(url);
  }
}
