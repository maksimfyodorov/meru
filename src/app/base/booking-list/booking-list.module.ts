import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingListComponent } from '@base/booking-list/booking-list.component';
import { CoreModule } from '@core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BookingItemComponent } from './booking-item/booking-item.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [BookingListComponent, BookingItemComponent],
  exports: [
    BookingListComponent,
    BookingItemComponent,
  ],
  imports: [
    CommonModule,
    NzTagModule,
    NzIconModule,
    NzButtonModule,
    NzEmptyModule,
    TranslateModule,
    NzSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  ]
})
export class BookingListModule {}
