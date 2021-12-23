import {BaseApi} from '@shared/common/base/base.api';
import {Injectable, Injector} from '@angular/core';
import {LocalizationService} from '@core/services/localization.service';
import {Observable} from 'rxjs';
import {INavigations} from '@app/layout/navigation/navigation.model';
import {map, pluck, switchMap} from 'rxjs/operators';
import {filterSuccessHttpEvent} from '@core/utils/http.util';

@Injectable()
export class NavigationApi extends BaseApi {
  constructor(
    protected injector: Injector,
    private $localization: LocalizationService
  ) {
    super(injector);

  }

  public get mainNavigation$(): Observable<INavigations> {
    return this.$config.getOne$('navigationUrl').pipe(
      switchMap((url: string) =>
        this.$localization.currentLang$.pipe(
          map(lang => this.$url.createUrl(url, {lang}))
        )
      ),
      switchMap((url) => this.$http.get(url)),
      filterSuccessHttpEvent(),
      pluck('data')
    );
  }
}
