import { Injectable } from '@angular/core';
import { DictionaryService } from '@core/services/dictionary.service';
import { LocalizationService } from '@core/services/localization.service';

const ITEM_REGEXP: RegExp = /\${[^}]*}/g;

@Injectable()
export class MessageService {
  constructor(
    private $dictionary: DictionaryService,
    private $localization: LocalizationService
  ) {
  }

  public concat(...values: string[]): string {
    let separator: string = '';

    if (values.length > 2) {
      separator = values.pop();
    }

    return values
      .map(value => this.transformValue(value))
      .join(separator);
  }

  public construct(template: string, vars: Record<string, string>): string {
    const valuesMatch: RegExpMatchArray = template.match(ITEM_REGEXP);
    const values = valuesMatch.map(value => this.transformValue(value.slice(2, -1)));

    valuesMatch.forEach((valueMatch, index) => {
      template = template.replace(valueMatch, vars?.[values[index]] || values[index]);
    });

    return template;
  }

  private transformValue(value: string): string {
    return this.$localization.translate(
      this.$dictionary.get(value, value)
    );
  }
}
