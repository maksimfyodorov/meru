import {HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import {IEntry} from './common.model';
import {IAppError} from './app-errorl.model';
import {IState} from './state.model';
import {State} from '../types/state.type';
import {Observe, ResponseType} from '../types/http.type';

export type IHttpResponse<T> = IHttpProgressResponse | IHttpErrorResponse | IHttpSuccessResponse<T>;
export type HttpRequestHeaders = HttpHeaders | Record<string, any>;
export type HttpMethod = 'get' | 'post' | 'put' | 'head' | 'delete';

export interface IHttpCommonResponse extends IState<any, IHttpError| IEntry<any>> {
  data?: any;
  success?: boolean;
  state: State;
  nativeEvent: HttpEvent<any> | HttpErrorResponse | null;
}

export interface IHttpErrorResponse extends IHttpCommonResponse {
  connection: boolean;
  state: 'error';
  error: IHttpError | IEntry<any>;
  success: false;
}

export interface IHttpProgressResponse extends IHttpCommonResponse {
  state: 'pending';
  nativeEvent: HttpEvent<any> | null;
}

export interface IHttpSuccessResponse<T> extends IHttpCommonResponse {
  state: 'success';
  data: T;
  success: true;
}

export interface IHttpError extends Required<Omit<Omit<IAppError, 'title'>, 'subtitle'>> {
}

export interface IHttpRequest {
  type: string;
  url: string;
  data: IEntry<any>;
  options: IHttpRequestOptions;
}

export interface IHttpRequestOptions extends Record<string, any> {
  headers?: HttpRequestHeaders;
  observe?: Observe;
  params?: HttpParams | IHttpRequestParams;
  reportProgress?: boolean;
  responseType?: ResponseType;
  withCredentials?: boolean;
  errorCodes?: IEntry<string>;
}

export interface IHttpRequestHeaders extends IEntry<string | string[]> {
}

export interface IHttpRequestParams extends IEntry<string | string[]> {
}

export interface IHttpResponseNotificationMessages extends Record<string, string>{
  successMessage?: string;
  successTitle?: string;
  errorMessage?: string;
  errorTitle?: string;
  connectionFailedMessage?: string;
  title?: string;
}
