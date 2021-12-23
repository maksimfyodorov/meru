import {Pipe, PipeTransform} from '@angular/core';
import {DictionaryService} from '../services/dictionary.service';

@Pipe({
  name: 'dictionary'
})
export class DictionaryPipe implements PipeTransform {
  public constructor(
    private $dict: DictionaryService
  ) {
  }
  public transform(key: string, whenNull: string | null = null): string | null {
    return this.$dict.get(key, whenNull || key);
  }
}
