import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { OrderServiceModalComponent } from './components/modal/order-service-modal.component';

@Component({
  selector: 'app-order-services',
  templateUrl: './order-services.component.html',
  styleUrls: ['./order-services.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderServicesComponent {
  url: string;
  @ViewChild('successUrlTpl') successUrlTpl: TemplateRef<any>;

  constructor(private modalService: NzModalService) {}

  openOrderSeriveModal(): void {
    this.modalService
      .create({
        nzContent: OrderServiceModalComponent,
        nzStyle: {
          maxWidth: '400px',
          width: '100%',
        },
        nzBodyStyle: {
          height: '300px',
          padding: '0',
        },
      })
      .afterClose.subscribe((result) => {
        if (result.resultStatus) {
          this.url = result.k2RequestUrl;
          this.modalService.success({
            nzTitle: 'Service ordered successfully',
            nzContent: this.successUrlTpl,
            nzMaskClosable: true,
            // nzContent: 'Просмотр заказанных услуг доступен в системе К2',
          });
        } else if (result === false) {
          this.modalService.error({
            nzTitle: 'Failed to order the service',
            nzContent: '',
          });
        }
      });
  }
}
