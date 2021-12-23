import {Observable} from 'rxjs';

export type CommonFunction<T = any, R = any> = (...args: T[]) => R;
export type PromiseFunction<T = any, R = any> = (...args: T[]) => Promise<R>;
export type ObservableFunction<T = any, R = any> = (...args: T[]) => Observable<R>;

