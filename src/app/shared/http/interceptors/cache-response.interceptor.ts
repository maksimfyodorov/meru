import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DB_STORE_RESPONSE } from '@app/shared/indexed-db/indexed-db.utils';
import { switchMap, tap } from 'rxjs/operators';
import { IIndexedDbResponse } from '@app/shared/indexed-db/indexed-db.model';
import { ConfigService } from '@core/services/config.service';
import { AppService } from '@app/app.service';
import { checkInterceptCondition } from '@shared/http/utils/common.util';

@Injectable()
export class CacheResponseInterceptor implements HttpInterceptor {

  public constructor(
    private $indexedDb: NgxIndexedDBService,
    private $config: ConfigService,
    private $app: AppService
  ) {
    this.$app.configReady$.subscribe(() => {
      this._cacheMeta = this.$config.get<boolean>('cacheMetaResponse', false);
      this._cacheLocalization = this.$config.get<boolean>('cacheLocalizationResponse', false);
    });
  }
  private _cacheMeta: boolean = false;
  private _cacheLocalization: boolean;

  private static responseFromIndexedDb(indexedDbResponse: IIndexedDbResponse): Observable<HttpResponse<any>> {
    if (indexedDbResponse.data.Place) indexedDbResponse.data.Place = 'Рабочее место';
    return of(new HttpResponse({ status: 200, body: indexedDbResponse.data }));
  }

  public intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    if (checkInterceptCondition(request, this._cacheMeta, this._cacheLocalization)) {
      return this.$indexedDb.getByIndex(DB_STORE_RESPONSE, 'url', request.url).pipe(
        switchMap(response => response && response.data
          ? CacheResponseInterceptor.responseFromIndexedDb(response)
          : this.nativeResponse(request, handler)
        )
      );
    }

    return handler.handle(request);
  }

  private nativeResponse(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    return handler.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.body) {
          this.addResponseToIndexedDb(request.url, event.body);
        }
      })
    );
  }

  private addResponseToIndexedDb(url: string, data: any): void {
    this.$indexedDb.add(DB_STORE_RESPONSE, { url, data });
  }
}
