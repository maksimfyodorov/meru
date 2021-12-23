import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProcessResponseInterceptor } from '@app/shared/http/interceptors/process-response.interceptor';
import { CacheResponseInterceptor } from '@app/shared/http/interceptors/cache-response.interceptor';
import { ImagesModule } from '@shared/images/images.module';
import { API_SERVICES } from '@shared/http/http.constants';

@NgModule({
  imports: [
    ImagesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProcessResponseInterceptor,
      multi: true
    },
    ...API_SERVICES
  ]
})
export class HttpModule {
}
