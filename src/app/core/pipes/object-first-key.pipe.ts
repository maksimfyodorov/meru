import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'objectFirstKey'
})
export class ObjectFirstKeyPipe implements PipeTransform {
  public transform(object: Object | null = null): string | null {
    const keys: string[] = object ? Object.keys(object) : [];

    return keys.length > 0 ? keys.shift() : null;
  }
}
