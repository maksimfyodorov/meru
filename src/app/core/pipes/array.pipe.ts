import { Pipe, PipeTransform } from '@angular/core';

type ArrayOperation = 'push';

@Pipe( {
  name: 'array'
} )
export class ArrayPipe implements PipeTransform {
  private static push<T>( arr: T[], value: T ): T[] {
    arr.push( value );

    return arr;
  }

  public transform<T>( arr: T[], operation: ArrayOperation, value?: T ): T[] | T | null {
    if (!arr) return null;

    switch (operation) {
      case 'push':
        return ArrayPipe.push( arr, value );

      default:
        return arr;
    }
  }
}
