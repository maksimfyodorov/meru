import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalLoaderService } from '@core/services/global-loader.service';
import { TranslatePipe } from '@ngx-translate/core';
import { ViewService } from './view.service';
import { LayoutSharedService } from '@app/layout/layout-shared.service';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-reservations-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less'],
  providers: [ViewService],
})
export class ViewComponent implements OnInit {
  reservation: any;
  workplace: any;
  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  set isLoading(value: boolean) {
    this._isLoading$.next(value);
  }
  get isLoading() {
    return this._isLoading$.getValue();
  }

  constructor(
    private _service: ViewService,
    private _layout: LayoutSharedService,
    private _router: Router,
    private cdr: ChangeDetectorRef,
    private _api: ReservationsApiService,
    private _modal: NzModalService,
    private _translate: TranslatePipe,
    private _loader: GlobalLoaderService,
  ) {}

  ngOnInit(): void {
    this._loader.contentLoading$.next(true);
    this._service.reservation$.subscribe(([reservation, workplace]) => {
      if (reservation) {
        this.reservation = reservation;
        this.workplace = workplace;
        this.cdr.markForCheck();
      } else {
        this._router.navigate(['reservations', 'workplace']);
      }

      this._loader.contentLoading$.next(false);
    });
  }
  checkStatus(statuses: string[]): boolean {
    return this.reservation && statuses.includes(this.reservation.status);
  }
  clickAction(question: string, action: () => void): void {
    this._modal.confirm({
      nzTitle: this._translate.transform(question),
      nzOnOk: () => {
        action();
      },
      nzOnCancel: () => {
        this.isLoading = false;
        this._loader.contentLoading$.next(false);
      },
      nzMaskClosable: true,
    });
  }
  approve(): void {
    this.isLoading = true;
    this.clickAction('Do you want to approve reservation?', () => {
      this._loader.contentLoading$.next(true);
      this._api.approveWorkplaceReservation({ workplaceReservationId: this.reservation.id }).subscribe(() => {
        this._service.reload();
        this._loader.contentLoading$.next(false);
        this.isLoading = false;
      });
    });
  }
  confirm(): void {
    this.isLoading = true;
    this.clickAction('Do you want to approve reservation?', () => {
      this._loader.contentLoading$.next(true);
      this._api.confirmWorkplaceReservation({ workplaceReservationId: this.reservation.id }).subscribe(() => {
        this._service.reload();
        this._loader.contentLoading$.next(false);
        this.isLoading = false;
      });
    });
  }
  complete(): void {
    this.isLoading = true;
    this.clickAction('Do you want to close reservation?', () => {
      this._loader.contentLoading$.next(true);
      this._api.cancelWorkplaceReservation({ workplaceReservationId: this.reservation.id }).subscribe(() => {
        this._service.reload();
        this._loader.contentLoading$.next(false);
        this.isLoading = false;
      });
    });
  }
  delete(): void {
    this.isLoading = true;
    this.clickAction('Do you want to delete reservation?', () => {
      this._loader.contentLoading$.next(true);
      this._api.denyWorkplaceReservation({ workplaceReservationId: this.reservation.id }).subscribe(() => {
        this._service.reload();
        this._loader.contentLoading$.next(false);
        this.isLoading = false;
      });
    });
  }
}
