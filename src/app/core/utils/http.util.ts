import { HttpRequestHeaders, IHttpError, IHttpResponse } from '../models/http.model';
import { IEntry } from '../models/common.model';
import { State } from '../types/state.type';
import { MonoTypeOperatorFunction, Observable, of, OperatorFunction, throwError } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { DictionaryService } from '../services/dictionary.service';
import { HttpHeaders } from '@angular/common/http';

export function processResponseError(error: IHttpError): string | null {
  return error?.message;
}

export const HttpErrorCode: IEntry<string> = {
  default: 'unknownServerError',
  0: 'connectionFailed',
  400: 'badRequest',
  403: 'accessDenied',
  404: 'notFound',
  500: 'internalServerError',
  503: 'serverUnavailable'
};

export function filterHttpEventByState<T>(state: State | string): MonoTypeOperatorFunction<IHttpResponse<T>> {
  return filter(({ state: resState }: IHttpResponse<any>) =>
    state.startsWith('!')
      ? resState !== state.replace('!', '')
      : resState === state
  );
}

export function filterSuccessHttpEvent<T>(): MonoTypeOperatorFunction<IHttpResponse<T>> {
  return filterHttpEventByState<T>('success');
}

export function filterNoProgressHttpEvent<T>(): MonoTypeOperatorFunction<IHttpResponse<T>> {
  return filterHttpEventByState<T>('!pending');
}

export function throwHttpError<T = any>(error?: string): OperatorFunction<IHttpResponse<any>, IHttpResponse<T>> {
  return mergeMap((response: IHttpResponse<any>): Observable<IHttpResponse<T>> => {
    error = error || response.error?.message || response.error || DictionaryService.get(HttpErrorCode.default);

    return response.success
      ? of(response)
      : throwError(error);
  });
}

export function mergeHttpHeaders(source: HttpRequestHeaders = {}, extra: HttpRequestHeaders = {}): HttpHeaders {
  if (!(source instanceof HttpHeaders)) {
    source = Object.entries(source).reduce(
      (_headers, [ key, value ]) => _headers.append(key, value),
      new HttpHeaders({})
    );
  }

  if (extra instanceof HttpHeaders) {
    extra.keys().forEach(key =>
      source = source.append(key, extra.get(key))
    );
  } else {
    try {
      Object.entries(extra).forEach(([ key, value ]) =>
        source = source.append(key, value)
      )
    } catch (e) {
    }
  }

  return source as HttpHeaders;
}
