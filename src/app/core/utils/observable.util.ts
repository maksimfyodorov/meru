import { Observable, Subject, timer } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import {IEntry} from '../models/common.model';

export class ObservableUtil {
  public static complete(subjects: IEntry<Subject<any>> | Array<Subject<any>>): void;
  public static complete(...subjects: Array<Subject<any>>): void;
  public static complete(...subjects: any[]): void {
    if (typeof subjects === 'object' && !Array.isArray(subjects)) {
      subjects = Object.values(subjects);
    }

    subjects.forEach(subject =>
      subject.complete()
    );
  }

  public static take<T>(observable: Observable<T>): T {
    let value: T = null;

    observable.pipe(take(1))
      .subscribe((_value: T) =>
        value = _value
      );

    return value;
  }
}


export function delayWhen(trueDelay: number = 5000, falseDelay: number = 0): any {
  return switchMap((value) =>
    timer(value ? trueDelay : falseDelay).pipe(
      map(() => value)
    )
  );
}
