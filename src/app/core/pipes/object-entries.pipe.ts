import {Pipe, PipeTransform} from '@angular/core';
import {IEntry, IObjectComplexEntries, IObjectEntries} from '../models/common.model';

@Pipe({
  name: 'objectEntries'
})
export class ObjectEntriesPipe implements PipeTransform {
  public transform<T>(o: IEntry<T>, b: string, d: string): IObjectEntries;
  public transform<T>(o: IEntry<T>, b: string, d: string, c: boolean): IObjectComplexEntries;
  public transform<T>(
    object: IEntry<T>,
    orderBy: string = null,
    orderDirection: string = 'ascend',
    isComplexObject: boolean = false
  ): IObjectEntries | IObjectComplexEntries {
    let entries: IObjectEntries | IObjectComplexEntries;

    if (typeof object !== 'object') {
      return [];
    } else if (typeof object === 'object' && Array.isArray(object)) {
      return object;
    }

    entries = Object
      .entries(object)
      .map(([key, value]) =>
        isComplexObject ? {...value, key} : {key, value}
      );

    if (orderBy !== null) {
      const direction: number = orderDirection === 'descend' ? -1 : 1;
      entries = entries.sort((a, b) => {
        const orderByA = this.getPropertyByKeys(isComplexObject ? a : a.value, orderBy);
        const orderByB = this.getPropertyByKeys(isComplexObject ? b : b.value, orderBy);

        return orderByA > orderByB
          ? direction
          : (orderByA < orderByB
              ? -direction
              : 0
          );
      });
    }

    return entries;
  }

  private getPropertyByKeys(object: {}, keys: string | string[]): any {
    if (typeof keys === 'string') {
      keys = keys.split('.');
    }

    for (const key of keys) {
      object = object[key] || {};
    }

    return object;
  }
}
