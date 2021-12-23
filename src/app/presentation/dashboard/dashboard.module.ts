import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsModule } from '@composite/widget/reservations/reservations.module';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BreadcrumbModule } from '@base/breadcrumb/breadcrumb.module';
import { WidgetsListComponent } from './components/widgets-list/widgets-list.component';
import { WidgetModule } from '@base/widget/widget.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CoreModule } from '@core/core.module';
import { CalendarModule } from '@composite/widget/calendar/calendar.module';
import { CalendarnewModule } from '@src/app/composite/widget/calendarnew/calendarnew.module';



@NgModule({
  declarations: [DashboardsComponent, WidgetsListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BreadcrumbModule,
    WidgetModule,
    DragDropModule,
    CoreModule.forChild(),
    CalendarModule,
    ReservationsModule,
    CalendarnewModule,
  ],
})
export class DashboardModule {}
