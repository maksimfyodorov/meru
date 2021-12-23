import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { PresentationRoutingModule } from '@presentation/presentation-routing.module';
import { UserCardModule } from '@composite/user-card/user-card.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule.forChild(),
    PresentationRoutingModule,
    UserCardModule,
  ]
})
export class PresentationModule {
}
