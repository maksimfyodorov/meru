import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Pipe({
  name: 'delay'
})
export class DelayPipe implements PipeTransform {
  public transform<T>(value: T, delayIn: number = 0, delayOut: number = 0): Observable<T> {
    return of(value).pipe(delay(!!value ? delayIn : delayOut));
  }
}
