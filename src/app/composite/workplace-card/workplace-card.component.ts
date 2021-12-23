import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { WorkplaceCardService } from '@composite/workplace-card/workplace-card.service';
import { MessagesService } from '@core/services/messages.service';
import { MapService } from '@base/map/map.service';
import { ICard } from '@base/card/card.model';
import { IWorkplace } from '@shared/http/models/database.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { filter } from 'rxjs/operators';
import { ConfigService } from '@src/app/core/services/config.service';

@Component({
  selector: 'app-workplace-card',
  templateUrl: './workplace-card.component.html',
  styleUrls: ['./workplace-card.component.less'],
  providers: [WorkplaceCardService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkplaceCardComponent {
  private _workplaceId$: BehaviorSubject<number> = new BehaviorSubject(null);
  private _workplace: IWorkplace;
  aplanaUrl: string;
  nornikAplana = false;
  card$: Observable<ICard>;
  @Subscriptions() subs: Subscription;

  @Input() readOnly: boolean = false;
  @Input() disabled: boolean = false;
  @Input()
  set workplace(value: IWorkplace) {
    this._workplace = value;
  }
  get workplace(): IWorkplace {
    return this._workplace;
  }
  @Input() type: 'workplace' | 'appointment' | 'parking' = 'workplace';
  @Input()
  set workplaceId(value: number) {
    this._workplaceId$.next(value);
  }
  get workplaceId(): number {
    return this._workplaceId$.getValue();
  }
  @Input() hideReserveBtn: boolean = false;
  @Input() calendarLink: string;
  @Input() showPermanentAssignment: boolean = false;

  @Output() readonly reservation = new EventEmitter<number>();

  constructor(private $service: WorkplaceCardService, private $messages: MessagesService, private $map: MapService, private $config: ConfigService) {
    this.card$ = $service.default;
    this._watchPlaceId();
  }

  reservationPlace(): void {
    this.reservation.emit(this.workplaceId);
  }

  close(): void {
    this.$map.hidePopover$.next();
  }

  private _watchPlaceId(): void {
    this.nornikAplana = this.$config.get<boolean>('nornikAplana') === true;
    this.aplanaUrl = this.$config.get<string>('aplanaUrl');
    this.subs = this._workplaceId$.pipe(filter((id) => Boolean(id))).subscribe((id) => {
      switch (this.type) {
        case 'appointment':
          this.card$ = this.$service.getRoomCard$(id);
          break;
        case 'parking':
          this.card$ = this.$service.getParkingLotCard$(id, this.showPermanentAssignment);
          break;
        case 'workplace':
        default:
          this.card$ = this.$service.getWorkplaceCard$(id, this.showPermanentAssignment);
      }
    });
  }
}
