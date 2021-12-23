import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { INavigations } from '@app/layout/navigation/navigation.model';
import { HeaderService } from '@app/layout/header/header.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ReservationByQRComponent } from '@src/app/base/reservation-by-qr/reservation-by-qr.component';
import { Router } from '@angular/router';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { INotifications } from '../header/components/header-notifications/header-notifications.model';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMobileComponent {
  @Input() readonly items: INavigations;
  public notifications: INotifications;

  visible = false;
  placement: NzDrawerPlacement = 'bottom';
  subMenu: any;
  drawer: boolean = false;

  constructor(private $header: HeaderService, private $modalService: NzModalService, private router: Router) {
    this.notifications = this.$header.notifications;
  }

  showModal(): void {
    this.$modalService.create({
      nzStyle: {
        top: '0',
        color: 'red',
        margin: '0',
        padding: '0',
        maxWidth: '100vw',
        maxHeight: '100vh',
        width: '100%',
        height: '100%',
      },
      nzBodyStyle: {
        height: '100%',
        padding: '0',
      },
      nzContent: ReservationByQRComponent,
      nzFooter: null,
    });
  }

  open(index: number, items: any): void {
    this.items[index]['isActive'] = true;
    this.items.map((data, i) => {
      if (i !== index) {
        data['isActive'] = false;
      }
      return data;
    });

    if (items.url === '/reservations') {
      this.drawer = true;
      this.subMenu = items;
    } else if (items.url === '/team') {
      this.drawer = true;
      this.subMenu = items;
    } else {
      this.drawer = false;
      this.router.navigate([items.url]);
    }
  }

  close(): void {
    this.drawer = false;
  }
}
