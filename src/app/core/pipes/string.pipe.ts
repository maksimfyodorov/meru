import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {
  public transform(value: any): string {
    return String(value);
  }
}
