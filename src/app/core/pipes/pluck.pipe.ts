import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pluck'
})
export class PluckPipe implements PipeTransform {
  public transform<T>(obj: any, keys: Array<string | number>): T | null;
  public transform<T>(obj: any, keys: string | number, ...anyKeys: Array<string | number>): T | null;
  public transform<T>(obj: any, keys: string | number | Array<string | number>, ...anyKeys: Array<string | number>): T | null {
    if (!(keys instanceof Array)) {
      keys = [].concat(keys).concat(anyKeys);
    }

    while (keys.length > 0) {
      const key: string | number = keys.shift();

      if (typeof obj === 'undefined') {
        obj = {};
      }

      obj = obj[key];
    }

    return typeof obj !== 'undefined' ? obj : null;
  }
}
