import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { IWorkplace } from '@src/app/shared/http/models/database.model';
import { DEFAULT_WORKPLACE_CARD } from '@src/app/shared/http/utils/images.const';
import { IDescription } from '../card/card.model';

@Component({
  selector: 'app-reservation-workplace',
  templateUrl: './reservation-workplace.component.html',
  styleUrls: ['./reservation-workplace.component.less'],
})
export class ReservationWorkplaceComponent implements OnInit {
  @Input() events: any[] = [];
  @Input() descriptionList: IDescription[] = [];
  @Input() workplace: IWorkplace = null;
  @Input() tags: string[] = [];
  @Input() isLoading = false;
  @Input() mode: 'month' | 'day' = 'month';

  @Output()
  public reservation: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public monthSelect: EventEmitter<any> = new EventEmitter<any>();

  imageUrl: string = DEFAULT_WORKPLACE_CARD;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  monthSelectHandler(ev): void {
    this.monthSelect.emit(ev);
  }

  eventHandler(ev): void {
    if (ev.id === undefined) {
      this.reservation.emit({
        start: ev.start,
        end: ev.end,
        id: this.workplace.id,
      });
    } else if (ev.appointmentId) {
      this.router.navigate([
        '/reservations/appointment/view/' +
          encodeURIComponent(ev.appointmentId),
      ]);
    }
  }
}
