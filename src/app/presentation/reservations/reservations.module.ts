import { NgModule } from '@angular/core';
import { BookingListModule } from '@base/booking-list/booking-list.module';
import { MapModule } from '@base/map/map.module';
import { OpenStreetMapModule } from '@base/open-street-map/open-street-map.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { CoreModule } from '@core/core.module';
import { ReservationsRoutingModule } from '@presentation/reservations/reservations-routing.module';
import { ListModule } from '@base/list/list.module';
import { ResultModule } from '@base/result/result.module';
import { DictionaryService } from '@core/services/dictionary.service';
import { ReservationsDictionary } from '@presentation/reservations/reservations.dictionary';
import { ReservationViewModule } from '@base/reservation-view/reservation-view.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersModule } from '@base/filters/filters.module';
import { ListFilterComponent } from '@presentation/reservations/components/list/list-filters/list-filter.component';
import { ListFilterCommonComponent } from '@presentation/reservations/components/list/list-filters/list-filter-common/list-filter-common.component';
import { RendererModule } from '@base/renderer/renderer.module';
import { SkeletonModule } from '@base/skeleton/skeleton.module';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { DropdownSelectModule } from '@base/dropdown-select/dropdown-select.module';
import { ExtraTitleTplModule } from '@shared/layout/extra-title-tpl/extra-title-tpl.module';
import { ListFilterAppointmentComponent } from '@presentation/reservations/components/list/list-filters/list-filter-appointment/list-filter-appointment.component';
import { CalendarModule } from '@base/calendar/calendar.module';
import { ToolbarModule } from '@base/toolbar/toolbar.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ReservationDetailComponent } from '@presentation/reservations/reservation-detail/reservation-detail.component';
import { ViewService } from './components/view/view.service';
import { MobileReservationCardModule } from '@src/app/base/mobile-reservation-card/mobile-reservation-card.module';
import { MobileDialogContentscrollModule } from '@src/app/base/mobile-dialog-contentscroll/mobile-dialog-contentscroll.module';

@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    ListFilterComponent,
    ListFilterCommonComponent,
    ListFilterAppointmentComponent,
    ReservationDetailComponent,
  ],
  imports: [
    CoreModule.forChild(),
    ReservationsRoutingModule,
    ListModule,
    ResultModule,
    ReservationViewModule,
    ReactiveFormsModule,
    OpenStreetMapModule,
    MapModule,
    BookingListModule,
    FiltersModule,
    RendererModule,
    SkeletonModule,
    TranslateModule,
    DropdownSelectModule,
    NzMessageModule,
    ExtraTitleTplModule,
    CalendarModule,
    ToolbarModule,
    NzCardModule,
    NzModalModule,
    NzBadgeModule,
    NzStepsModule,
    NzTagModule,
    MobileReservationCardModule,
    MobileDialogContentscrollModule,
  ],
  providers: [TranslatePipe],
})
export class ReservationsModule {
  public constructor() {
    DictionaryService.set(ReservationsDictionary);
  }
}
