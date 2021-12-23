import { Injectable } from '@angular/core';
import { IWorkplace } from '@presentation/reservations/reservation-create/models';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {TAutoMode} from '@base/booking-list/booking-list.model';

@Injectable({
  providedIn: 'root'
})
export class BookingListService {
  private _places$ = new BehaviorSubject<IWorkplace[]>([]);
  private _selectedPlaces$ = new BehaviorSubject<Record<number, IWorkplace>>([]);
  private _disabledPlaces$ = new BehaviorSubject<Record<string, any>>([]);
  clear$ = new Subject<void>();
  recomplete$ = new BehaviorSubject<void>(null);

  selected: Record<number, IWorkplace> = {};
  autoMode: TAutoMode = 'oneByOne';
  autoModeCounter: number = 0;
  constructor(private _api: ReservationsApiService) {}

  getPlaces(labelId: number): Observable<IWorkplace[]> {
    return this._places$.pipe(
      switchMap((places) => combineLatest([this.selectedPlaces$, this._disabledPlaces$]).pipe(map(([selected, disabled]) => {
        const selectedIds = Object.values<IWorkplace>(selected).filter(s => s).map(s => s.id);
        const disabledIds = disabled.find(d => d.labelId === labelId)?.workplacesDisabledIds || [];
        return places.filter(({ id }) => !selectedIds.includes(id) && !disabledIds.includes(id));
      })))
    );
  }

  get autoComplete$(): Observable<any> {
    return combineLatest([this._places$, this.recomplete$]);
  }

  get selectedPlaces$(): Observable<Record<number, IWorkplace>> {
    return this._selectedPlaces$.asObservable();
  }

  setPlaces(places: IWorkplace[]): void {
    // this.clearSelectedPlaces();
    this._places$.next(places);
  }

  setSelected(): void {
    this._selectedPlaces$.next(this.selected);
  }

  setDisabled(disabled: Record<string, number[] | number>): void {
    this._disabledPlaces$.next(disabled);
  }

  clearSelectedPlaces(): void {
    this.selected = {};
    this.setSelected();
    this.clear$.next();
    this.autoModeCounter = 0;
  }
}
