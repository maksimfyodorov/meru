import { UrlMatcher, UrlSegment } from '@angular/router';

export class DictionariesMatchersService {
  private static _already: boolean = false;

  public static alreadyMatcherFactory(): UrlMatcher {
    return (url: UrlSegment[]) => DictionariesMatchersService._already
      ? ({ consumed: url })
      : null;
  }

  public static notAlreadyMatcherFactory(): UrlMatcher {
    return (url: UrlSegment[]) => !DictionariesMatchersService._already
      ? ({ consumed: url })
      : null;
  }

  public static set already(already: boolean) {
    this._already = already;
  }
}
