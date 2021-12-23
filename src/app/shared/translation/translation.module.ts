import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '@src/environments/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


// tslint:disable-next-line:typedef
export function TranslateHttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, environment.localizationsUrl);
}

@NgModule({
  declarations: [],
  imports: [ TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: TranslateHttpLoaderFactory,
      deps: [ HttpClient ]
    },
    isolate: false
  }) ],
  exports: [
    TranslateModule
  ]
})
export class TranslationModule {
}
