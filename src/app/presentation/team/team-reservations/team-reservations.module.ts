import { NgModule } from '@angular/core';
import { ReservationViewModule } from '@base/reservation-view/reservation-view.module';
import { ViewComponent } from '@presentation/team/team-reservations/view/view.component';
import { TeamReservationsComponent } from './team-reservations.component';
import { ResultModule } from '@base/result/result.module';
import { CoreModule } from '@core/core.module';
import { ListModule } from '@base/list/list.module';
import { TeamReservationsFiltersComponent } from './team-reservations-filters/team-reservations-filters.component';
import { TeamReservationsFilterWorkplaceComponent } from './team-reservations-filters/team-reservations-filters-workplace/team-reservations-filter-workplace.component';
import { FiltersModule } from '@base/filters/filters.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RendererModule } from '@base/renderer/renderer.module';
import { TeamReservationsRoutingModule } from '@presentation/team/team-reservations/team-reservations-routing.module';
import { DictionaryService } from '@core/services/dictionary.service';
import { TranslateModule } from '@ngx-translate/core';
import { TeamReservationsDictionary } from '@presentation/team/team-reservations/team-reservations.dictionary';
import { ExtraTitleTplModule } from '@shared/layout/extra-title-tpl/extra-title-tpl.module';
import { ToolbarModule } from '@base/toolbar/toolbar.module';
import { MobileDialogContentscrollModule } from '@src/app/base/mobile-dialog-contentscroll/mobile-dialog-contentscroll.module';
import { MobileFilterButtonModule } from '@src/app/base/mobile-filter-button/mobile-filter-button.module';
import { TeamReservationsFilterWorkplaceService } from './team-reservations-filters/team-reservations-filters-workplace/team-reservations-filter-workplace.service';
import { TeamReservationsFiltersService } from './team-reservations-filters/team-reservations-filters.service';
import { MobileReservationCardModule } from '@src/app/base/mobile-reservation-card/mobile-reservation-card.module';

@NgModule({
  declarations: [TeamReservationsComponent, TeamReservationsFiltersComponent, TeamReservationsFilterWorkplaceComponent, ViewComponent],
  imports: [
    CoreModule.forChild(),
    ResultModule,
    ListModule,
    FiltersModule,
    ReactiveFormsModule,
    RendererModule,
    TeamReservationsRoutingModule,
    TranslateModule,
    ReservationViewModule,
    ExtraTitleTplModule,
    ToolbarModule,
    MobileFilterButtonModule,
    MobileDialogContentscrollModule,
    MobileReservationCardModule,
  ],
  providers: [TeamReservationsFilterWorkplaceService, TeamReservationsFiltersService],
})
export class TeamReservationsModule {
  public constructor() {
    DictionaryService.set(TeamReservationsDictionary);
  }
}
