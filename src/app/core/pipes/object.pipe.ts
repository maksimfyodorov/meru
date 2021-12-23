import { Pipe, PipeTransform } from '@angular/core';

type ObjectPipeOperation = 'values' | 'keys' | 'entries' | 'firstKey';
type ObjectPipeReturn<T extends ObjectPipeOperation>
  = T extends 'firstKey' ? string | null
  : T extends 'entries' ? [ string, any ][]
    : T extends 'keys' ? string[]
      : any[];

@Pipe( {
  name: 'object'
} )
export class ObjectPipe implements PipeTransform {
  public transform<T extends ObjectPipeOperation = 'values'>( obj: object, operation: T = 'values' as T ): ObjectPipeReturn<T> | null {
    if (!obj) return null;

    switch (operation) {
      case 'values':
        return Object.values( obj ) as ObjectPipeReturn<T>;

      case 'keys':
        return Object.keys( obj ) as ObjectPipeReturn<T>;

      case 'entries':
        return Object.entries( obj ) as ObjectPipeReturn<T>;

      case 'firstKey':
        return Object.keys( obj ).shift() as ObjectPipeReturn<T>;
    }
  }
}
