import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isEmpty } from '@core/utils/common.util';

@Pipe( {
  name: 'highlight'
} )
export class HighlightPipe implements PipeTransform {
  constructor(
    private $sanitizer: DomSanitizer
  ) {
  }

  transform( text: string, query: string, color?: string ): string | SafeHtml {
    if (isEmpty( query )) {
      return text;
    }

    const queryRegexp: RegExp = new RegExp( query, 'gi' );
    const matches: RegExpMatchArray = text.match( queryRegexp );

    if (!matches) {
      return text;
    }

    text = text.replace( queryRegexp, () => {
      if (!color) {
        return `<strong>${matches[ 0 ]}</strong>`;
      }

      return `<strong style="color: ${color}">${matches[ 0 ]}</strong>`;
    } );

    return this.$sanitizer.bypassSecurityTrustHtml( text );
  }
}
