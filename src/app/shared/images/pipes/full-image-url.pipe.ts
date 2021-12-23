import { Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from '@core/services/config.service';

const LOCAL_IMAGE_REGEXP: RegExp = /^(\.)?(\/)?assets/;

@Pipe({
  name: 'fullImageUrl'
})
export class FullImageUrlPipe implements PipeTransform {
  private static _hostUrl: string = '';

  constructor(
    private $config: ConfigService
  ) {
    if (!FullImageUrlPipe._hostUrl) {
      this.$config
        .getOne$<string>('hostUrl')
        .subscribe((hostUrl: string) =>
          FullImageUrlPipe._hostUrl = hostUrl.endsWith('/') ? hostUrl.slice(0, -1) : hostUrl
        );
    }
  }

  public transform(imageUrl: string): string | null {
    if (!imageUrl) {
      return null;
    }

    if (LOCAL_IMAGE_REGEXP.test(imageUrl)) {
      return imageUrl;
    }

    if (imageUrl.startsWith('/')) {
      imageUrl = imageUrl.slice(1);
    }

    return `${FullImageUrlPipe._hostUrl}/${imageUrl}`;
  }
}
