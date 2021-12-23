import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '@core/services/config.service';
import { AppService } from '@app/app.service';
import { map, mapTo, switchMap } from 'rxjs/operators';

const LOCAL_RESOURCE_REGEXP: RegExp = /^(\.)?(\/)?assets/;

@Injectable({
  providedIn: 'root'
})
export class ResourcesInterceptor implements HttpInterceptor {
  private _hostUrl: string = '';

  constructor(
    private $config: ConfigService,
    private $app: AppService
  ) {
    $app.configReady$.pipe(
      map(() => this.$config.get<string>('hostUrl'))
    ).subscribe((hostUrl: string) =>
      this._hostUrl = hostUrl.endsWith('/') ? hostUrl.slice(0, -1) : hostUrl
    );
  }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    if (!LOCAL_RESOURCE_REGEXP.test(httpRequest.url)) {
      httpRequest = httpRequest.clone({
        ...httpRequest,
        url: this.getNormalizedResourceUrl(httpRequest.url)
      });
    }

    return httpHandler.handle(httpRequest);
  }

  private getNormalizedResourceUrl(url: string): string {
    if (url.startsWith('/')) {
      url = url.slice(1);
    }

    return `${this._hostUrl}/${url}`;
  }
}
