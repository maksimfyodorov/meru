import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FiltersModule } from '../filters/filters.module';
import { ReservationByQRComponent } from './reservation-by-qr.component';
import { ReservationByQRService } from './reservation-by-qr.service';

@NgModule({
  declarations: [ReservationByQRComponent],
  exports: [ReservationByQRComponent],
  imports: [
    CommonModule,
    FormsModule,
    FiltersModule,
    ZXingScannerModule,
    NzModalModule,
    NzButtonModule
  ],
  providers: [ReservationByQRService, DatePipe],
})
export class ReservationByQRModule {}
