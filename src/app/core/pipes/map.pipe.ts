import {Pipe, PipeTransform} from '@angular/core';
import {IEntry} from '../models/common.model';

type Arr = Array<IEntry<any>>;
type Keys = Array<Array<string>>;

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {
  public transform<T>(arr: Arr, keys: IEntry<string> | Keys, deleteKeys: string [] = []): Array<T> {
    if (!(keys instanceof Array)) {
      keys = Object.entries(keys);
    }

    if (!(deleteKeys instanceof Array)) {
      deleteKeys = [];
    }

    return []
      .concat(arr)
      .map((item) => ({...item}))
      .map((item) => {
        (keys as Keys).forEach(([curKey, newKey]) => {
          item[newKey] = item[curKey];
        });

        (keys as Keys)
          .map(([key1]) => key1)
          .concat(deleteKeys)
          .forEach(key => delete item[key]);

        return item;
      }
    );
  }
}
