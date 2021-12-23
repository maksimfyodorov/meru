import { NgModule } from '@angular/core';
import { HeaderComponent } from '@app/layout/header/header.component';
import { HeaderNotificationsComponent } from '@app/layout/header/components/header-notifications/header-notifications.component';
import { HeaderProfileComponent } from '@app/layout/header/components/header-profile/header-profile.component';
import { HeaderSearchComponent } from '@app/layout/header/components/header-search/header-search.component';
import { HeaderNotificationsItemComponent } from './components/header-notifications/header-notifications-item/header-notifications-item.component';
import { CoreModule } from '@core/core.module';
import { TranslationModule } from '@shared/translation/translation.module';
import { RouterModule } from '@angular/router';
import { ImagesModule } from '@shared/images/images.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { HeaderLocaleComponent } from '@app/layout/header/components/header-locale/header-locale.component';
import { GlobalSearchModule } from '@shared/global-search/global-search.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderNotificationsComponent,
    HeaderNotificationsItemComponent,
    HeaderProfileComponent,
    HeaderSearchComponent,
    HeaderLocaleComponent,
  ],
  exports: [
    HeaderComponent,
    HeaderNotificationsComponent,
    HeaderNotificationsItemComponent,
    HeaderProfileComponent,
    HeaderSearchComponent,
  ],
  imports: [
    CoreModule.forChild(),
    TranslationModule,
    RouterModule,
    ImagesModule,
    NzAutocompleteModule,
    NzListModule,
    GlobalSearchModule
  ]
})
export class HeaderModule {
}
