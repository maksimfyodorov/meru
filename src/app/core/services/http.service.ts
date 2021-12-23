import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { DictionaryService } from './dictionary.service';
import {
  HttpRequestHeaders,
  IHttpError,
  IHttpErrorResponse,
  IHttpProgressResponse,
  IHttpRequestOptions,
  IHttpResponse,
  IHttpSuccessResponse
} from '../models/http.model';
import { HttpErrorCode, mergeHttpHeaders } from '../utils/http.util';
import { IEntry } from '../models/common.model';

@Injectable()
export class HttpService {
  public constructor(
    public native: HttpClient,
    @Inject(DictionaryService) private $dictionary: DictionaryService
  ) {
  }

  private static createHeader(name: string, value: string): HttpHeaders {
    return new HttpHeaders({ [name]: value });
  }

  private static handlerResponse<T>(
    request: Observable<any>
  ): Observable<IHttpResponse<T>> {
    return request.pipe(
      startWith({ state: 'pending', nativeEvent: null }),
      map((httpEvent: HttpEvent<T> | HttpErrorResponse) =>
        httpEvent instanceof HttpResponse
          ? HttpService.handlerSuccessResponse<T>(httpEvent)
          : httpEvent instanceof HttpErrorResponse
          ? HttpService.handlerErrorResponse(httpEvent)
          : HttpService.handlerProgressResponse(httpEvent)
      ),
      catchError(err =>
        of(HttpService.handlerErrorResponse(err))
      )
    );
  }

  private static handlerErrorResponse(httpErrorResponse: HttpErrorResponse): IHttpErrorResponse {
    const {error, message, status}: HttpErrorResponse = httpErrorResponse;

    return {
      data: null,
      connection: !!status,
      error: HttpService.handlerError(error || message, status),
      state: 'error',
      success: false,
      nativeEvent: httpErrorResponse
    };
  }

  private static handlerProgressResponse(httpEvent: HttpEvent<any>): IHttpProgressResponse {
    return {
      state: 'pending',
      nativeEvent: httpEvent
    };
  }

  private static handlerSuccessResponse<T>(httpResponse: HttpResponse<T>): IHttpSuccessResponse<T> {
    return {
      data: httpResponse.body as T,
      state: 'success',
      success: true,
      nativeEvent: httpResponse
    };
  }

  private static handlerError(error: Record<string, any>, status: number): IHttpError {
    const code: string = !status
      ? HttpErrorCode[0]
      : HttpErrorCode[status] || HttpErrorCode.default;

    if (typeof error === 'string') {
      return { code: HttpErrorCode.default, message: error };
    }

    if (error instanceof ProgressEvent) {
      return null;
    }

    if (error?.error && typeof error?.error === 'object') {
      error = error.error;
    }

    return { code, message: error?.error || error?.message || DictionaryService.get(code) };
  }

  public delete<T>(
    url: string,
    options: IHttpRequestOptions = {},
    headers: HttpRequestHeaders = {}
  ): Observable<IHttpResponse<T>> {
    return this.request<T>('delete', url, {}, options, headers);
  }

  public get<T>(
    url: string,
    params: IEntry<any> = {},
    options: IHttpRequestOptions = {},
    headers: HttpRequestHeaders = {}
  ): Observable<IHttpResponse<T>> {
    if (params) {
      options.params = params as HttpParams;
    }

    return this.request<T>('get', url, {}, options, headers);
  }

  public getText(
    url: string,
    params: IEntry<any> = {},
    options: IHttpRequestOptions = {},
    headers: HttpRequestHeaders = {}
  ): Observable<IHttpResponse<string>> {
    options.responseType = 'text';

    return this.get<string>(url, params, options, headers);
  }

  public head<T>(
    url: string,
    options: IHttpRequestOptions = {},
    headers: HttpRequestHeaders = {}
  ): Observable<IHttpResponse<T>> {
    return this.request<T>('head', url, {}, options, headers);
  }

  public post<T>(
    url: string,
    data: any = {},
    options: IHttpRequestOptions = {},
    headers: HttpRequestHeaders = {}
  ): Observable<IHttpResponse<T>> {
    return this.request('post', url, data, options, headers);
  }

  public postForm<T>(
    url: string,
    data: {} = {},
    options: IHttpRequestOptions = {},
    headers: HttpRequestHeaders = {}
  ): Observable<IHttpResponse<T>> {
    const formData: string = Object.entries(data)
      .reduce((urlSearchParams: URLSearchParams, [ name, value ]) => {
          urlSearchParams.append(name, value as string);
          return data;
        },
        new URLSearchParams()
      )
      .toString();

    options.headers = HttpService.createHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    return this.post<T>(url, formData, options, headers);
  }

  public put<T>(
    url: string,
    data: {} = {},
    options: IHttpRequestOptions = {},
    headers: HttpRequestHeaders = {}
  ): Observable<IHttpResponse<T>> {
    return this.request<T>('put', url, data, options, headers);
  }

  public request<T>(
    type: string,
    url: string,
    data: {} = {},
    httpOptions: Record<string, any> = {},
    headers: {} = {}
  ): Observable<IHttpResponse<T>> {
    let request$: Observable<HttpEvent<T> | HttpErrorResponse | any>;
    httpOptions.headers = mergeHttpHeaders(httpOptions.headers, headers);

    if (!httpOptions.observe) {
      httpOptions.observe = 'response';
    }

    if (httpOptions.responseType === 'json' || !httpOptions.responseType) {
      httpOptions.headers = httpOptions.headers.append('Content-Type', 'application/json;charset=UTF-8');
    }

    switch (type) {
      case 'delete':
        request$ = this.native.delete<T>(url, httpOptions);
        break;

      case 'head':
        request$ = this.native.head<T>(url, httpOptions);
        break;

      case 'post':
        request$ = this.native.post<T>(url, data, httpOptions);
        break;

      case 'put':
        request$ = this.native.put<T>(url, data, httpOptions);
        break;

      default:
        request$ = this.native.get<T>(url, httpOptions);
    }

    return HttpService.handlerResponse<T>(request$);
  }
}

