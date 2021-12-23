import { Injectable } from '@angular/core';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { forkJoin, Observable } from 'rxjs';
import { IWorkplace, IWorkplaceReservation } from '@shared/http/models/database.model';
import { UserService } from '@core/services/user.service';
import { map, shareReplay, tap } from 'rxjs/operators';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';

@Injectable()
export class CalendarService {
  constructor(private $reservationsApi: ReservationsApiService, private $user: UserService, private $dictionaries: DictionariesService ) {}
  get workplaceReservations$(): Observable<{ reservation: IWorkplaceReservation, workplace: IWorkplace}[]> {
    return forkJoin({
      reservations: this.$reservationsApi.getWorkplaceReservations({ labelId: this.$user.info.id }),
      workplaces: this.$dictionaries.getDictionary<IWorkplace[]>('workplaces'),
    }).pipe(
      map(({ reservations, workplaces }) => {
        return reservations.map((_r) => ({
          reservation: _r,
          workplace: workplaces.find((_w) => _w.id === _r.workplaceId)
        }));
      }),
      shareReplay(1),
    );
  }
}
