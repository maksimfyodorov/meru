import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  ERROR_CODE_KEY,
  EXCEPTION_KEY,
  FAILURE_KEY,
  SUCCESS_KEY,
} from '@app/shared/http/utils/constants.util';
import { processSuccessResponseObject } from '@core/utils/common.util';
import {
  transformErrorCode,
  transformErrorMessage,
} from '@app/shared/http/utils/error-code.util';
import { IApiV2ResponseSuccess } from '@shared/http/models/response.model';

@Injectable()
export class ProcessResponseInterceptor implements HttpInterceptor {
  private static processResponse<T = any>(
    event: HttpEvent<any>
  ): Observable<HttpEvent<T>> {
    if (event instanceof HttpResponse && 'data' in event.body) {
      return ProcessResponseInterceptor.processSuccessResponseApiV2<T>(
        event as HttpResponse<IApiV2ResponseSuccess<T>>
      );
    }

    if (event instanceof HttpResponse && SUCCESS_KEY in event.body) {
      return ProcessResponseInterceptor.processSuccessResponse<T>(event);
    }

    if (event instanceof HttpResponse && FAILURE_KEY in event.body) {
      return ProcessResponseInterceptor.processErrorResponse<T>(event);
    }

    if (event instanceof HttpErrorResponse && FAILURE_KEY in event.error) {
      return ProcessResponseInterceptor.processErrorResponse<T>(event);
    }

    return of(event);
  }

  private static processSuccessResponse<T = any>(
    event: HttpResponse<T>
  ): Observable<HttpResponse<T>> {
    const { headers, statusText, status, url }: HttpResponse<T> = event;

    return of(
      new HttpResponse({
        body: processSuccessResponseObject<T>(event.body),
        headers,
        status,
        statusText,
        url,
      })
    );
  }

  private static processSuccessResponseApiV2<T = any>(
    event: HttpResponse<IApiV2ResponseSuccess<T>>
  ): Observable<HttpResponse<T>> {
    const {
      headers,
      statusText,
      status,
      url,
      body,
    }: HttpResponse<IApiV2ResponseSuccess<T>> = event;

    return of(
      new HttpResponse({
        body: body.data,
        headers,
        status,
        statusText,
        url,
      })
    );
  }

  private static processErrorResponse<T = any>(
    event: HttpResponse<T> | HttpErrorResponse
  ): Observable<HttpEvent<T>> {
    const {
      headers,
      statusText,
      status,
      url,
    }: HttpResponse<T> | HttpErrorResponse = event;
    const body: Record<string, any> =
      event instanceof HttpErrorResponse ? event.error : event.body;
    return throwError(
      new HttpErrorResponse({
        error: {
          exception: body[EXCEPTION_KEY],
          message: transformErrorMessage(body[FAILURE_KEY]),
          code: transformErrorCode(body[ERROR_CODE_KEY]),
        },
        headers,
        status,
        statusText,
        url,
      })
    );
  }

  public intercept(
    request: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    return handler.handle(request).pipe(
      switchMap((event: HttpEvent<any>) =>
        ProcessResponseInterceptor.processResponse(event)
      ),
      catchError((event: HttpErrorResponse) =>
        ProcessResponseInterceptor.processErrorResponse(event)
      )
    );
  }
}
