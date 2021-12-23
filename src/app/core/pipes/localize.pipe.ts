import { Pipe, PipeTransform } from '@angular/core';
import { Localizable } from '@core/models/localization.model';
import { isEmpty } from '@core/utils/common.util';

@Pipe({
  name: 'localize'
})
export class LocalizePipe implements PipeTransform {
  public transform(
    value: Localizable,
    lang: string | null = null
  ): string | null {

    if (typeof value === 'string') {
      return value;
    }

    lang = LocalizePipe.getLang(value, lang);

    if (isEmpty(value)) {
      return null;
    }

    if (!lang || !value[lang]) {
      return value.toString();
    }

    return value[lang];
  }

  private static getLang(value: Record<string, string>, lang: string | null = null): string | null {
    return lang || Object.keys(value).shift() || null;
  }
}
