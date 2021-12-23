import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ICard } from '@src/app/base/card/card.model';
import { IListRows } from '@src/app/base/list/models/list.model';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { DEFAULT_WORKPLACE_CARD } from '@src/app/shared/http/utils/images.const';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { CalendarService } from './calendar.service';
import { MIN_DURATION, roundTimeMinPartHourCeil, roundTimeMinPartHourFloor, WORK_HOURS } from './calendar.utils';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { SettingsService } from '@src/app/shared/settings/settings.service';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CalendarService],
})
export class CalendarComponent implements OnInit {
  @Subscriptions() subs: Subscription;
  @Subscribe<string>()
  dateTimeFormat;
  @Subscribe<string>()
  dateFormat;

  imageUrl: string = DEFAULT_WORKPLACE_CARD;
  card$: Observable<ICard>;

  mode: 'month' | 'day' = 'month';

  events$: Observable<IListRows>;

  dateTimeFromControl: FormControl;
  dateTimeToControl: FormControl;
  dateTimeFrom: Date;
  dateTimeTo: Date;
  wrongRange = false;

  minDate = new Date();

  workHours = WORK_HOURS;
  minDuration: number;

  isModalLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  meetingSubject: string;

  @ViewChild('modalTitleTpl') modalTitleTpl: TemplateRef<any>;
  @ViewChild('modalContentTpl') modalContentTpl: TemplateRef<any>;
  @ViewChild('modalFooterTpl') modalFooterTpl: TemplateRef<any>;

  constructor(
    private _calendarService: CalendarService,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _modal: NzModalService,
    private _translate: TranslatePipe,
    private _settingsService: SettingsService,
    private _innerWidthService: InnerWidthService,
  ) {
    let startHour = this.workHours[0];
    let endHour = this.workHours[1];
    switch (this.type) {
      case 'workplace':
        startHour = this._settingsService.getSettingByName('workplaceReservationBeginHourDefault');
        endHour = this._settingsService.getSettingByName('workplaceReservationEndHourDefault');
        break;
      case 'parking':
        startHour = this._settingsService.getSettingByName('parkingLotReservationBeginHourDefault');
        endHour = this._settingsService.getSettingByName('parkingLotReservationEndHourDefault');
        break;

      default:
        break;
    }
    this.workHours = [startHour, endHour];
    this.minDuration = MIN_DURATION[this.type];
    this.dateTimeFromControl = new FormControl(new Date());
    this.dateTimeToControl = new FormControl(new Date());
    this.card$ = this._calendarService.getCard$();
    this.mode = this._calendarService.mode;
    this.events$ = this._calendarService.getReservations$(this.workHours);
    this.dateTimeFormat = this._calendarService.dateTimeFormat$;
    this.dateFormat = this._calendarService.dateFormat$;
    this.minDate.setDate(this.minDate.getDate() - 1);
  }

  set isModalLoading(value: boolean) {
    this.isModalLoading$.next(value);
  }
  get isModalLoading() {
    return this.isModalLoading$.getValue();
  }

  ngOnInit(): void {}

  get isLoading() {
    return this._calendarService.isLoading;
  }

  monthSelectHandler(ev: Date[]): void {
    if (ev[0].getMonth() !== this._calendarService.start.getMonth() + 1) {
      this._calendarService.startFin = ev[0];
      this.events$ = this._calendarService.getReservations$(this.workHours);
    }
  }

  eventHandler(ev): void {
    if (ev.id === undefined) {
      this.dateTimeFrom = roundTimeMinPartHourCeil(ev.start, this.type);
      this.dateTimeTo = ev.end;
      this.dateTimeFromControl.setValue(new Date(this.dateTimeFrom));
      if (this.type === 'appointment') {
        if (this.dateTimeFrom.getTime() < this.dateTimeTo.getTime() - this.minDuration) {
          this.dateTimeToControl.setValue(roundTimeMinPartHourFloor(this.dateTimeTo, this.type));
        } else {
          const dateTimeTo = new Date(this.dateTimeTo);
          dateTimeTo.setTime(dateTimeTo.getTime() + this.minDuration);
          this.dateTimeToControl.setValue(new Date(dateTimeTo));
        }
      } else {
        this.dateTimeToControl.setValue(new Date(this.dateTimeTo));
      }
      this._cdr.detectChanges();
      this.reservationPlace();
    } else if (ev.reservationId) {
      this._router.navigate([`/reservations/${this._calendarService.type}/view/` + encodeURIComponent(ev.reservationId)]);
    }
  }

  reservationPlace(): void {
    this.meetingSubject = null;
    this._modal.create({
      nzTitle: this.modalTitleTpl,
      nzContent: this.modalContentTpl,
      nzFooter: this.modalFooterTpl,
    });
  }

  cancelReservation() {
    this._modal.closeAll();
  }

  updateDateTime(dateTime: Date[]): void {
    this.dateTimeFromControl.setValue(dateTime[0]);
    this.dateTimeToControl.setValue(dateTime[1]);
    this.wrongRange = +dateTime[0] + this.minDuration > +dateTime[1];
    this._cdr.detectChanges();
  }

  approveReservation() {
    this.isModalLoading = true;
    this._calendarService
      .reservationPlace([this.dateTimeFromControl.value, this.dateTimeToControl.value], this.meetingSubject)
      .pipe(first())
      .subscribe(({ data }) => {
        this.isModalLoading = false;
        this._modal.closeAll();
        if (data && data.length === 1) {
          const main = data[0];
          if (main.meta.isOk) {
            this._modal
              .success({
                nzTitle: this._translate.transform('Booked successfully'),
                nzContent: main.meta.message,
                nzMaskClosable: true,
              })
              .afterClose.pipe(first())
              .subscribe(() => {
                this.events$ = this._calendarService.getReservations$(this.workHours);
                this._cdr.markForCheck();
              });
          } else {
            this._modal.error({
              nzTitle: this._translate.transform('Failed to book'),
              nzContent: main.meta.message,
              nzMaskClosable: true,
            });
          }
        } else {
          this._modal.error({
            nzTitle: this._translate.transform('Failed to book'),
            nzMaskClosable: true,
          });
        }
      });
  }

  get type() {
    return this._calendarService.type;
  }

  get isSmallScreen() {
    return this._innerWidthService.isSmallScreen;
  }
}
