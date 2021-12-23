import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DictionariesService } from '@src/app/shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';
import { ITag } from '@src/app/shared/http/models/database.model';
import { ReservationType } from '@src/app/shared/http/models/meta.model';
import { ReservationsApiService } from '@src/app/shared/http/services/reservations-api.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';
import { getListFilterFieldsByType } from '../../utils/reservation';
import { addWeeks, getDay, getHours, isAfter, isSameDay, setHours } from 'date-fns';
// @ts-ignore
import nextDay from 'date-fns/nextDay';

@Injectable()
export class FilterService {
  private _formGroup: FormGroup = new FormGroup({});
  private _currentBuildingIndex$: BehaviorSubject<number> = new BehaviorSubject(0);
  private _filters$: BehaviorSubject<Record<string, any>> = new BehaviorSubject<Record<string, any>>({});
  type: ReservationType;
  set currentBuildingIndex(buildingIndex: number) {
    this._currentBuildingIndex$.next(buildingIndex);
  }
  get currentBuildingIndex$() {
    return this._currentBuildingIndex$;
  }
  get currentBuildingIndex() {
    return this._currentBuildingIndex$.getValue();
  }
  get dateFormat(): string {
    return this._measurementsService.getMeasurementByName('shortDate');
  }
  get dateFormat$(): Observable<string> {
    return this._measurementsService.getMeasurementByName$('shortDate');
  }
  get tags$(): Observable<ITag[]> {
    return this._dictionariesService.getDictionary('tags');
  }
  get formGroup(): FormGroup {
    return this._formGroup;
  }
  set formGroup(formGroup: FormGroup) {
    this._formGroup = formGroup;
  }
  init = false;
  constructor(
    private _measurementsService: MeasurementsService,
    private _datePipe: DatePipe,
    private _dictionariesService: DictionariesService,
    private _fb: FormBuilder,
    private _reservationsApiService: ReservationsApiService,
  ) {}

  setFilters(filters: Record<string, any>): void {
    this._filters$.next(filters);
  }

  get filters(): Record<string, any> {
    return this._filters$.getValue();
  }
  get filters$(): Observable<Record<string, any>> {
    return this._filters$;
  }

  createFormGroup(type: ReservationType): void {
    this._clearFormGroup();
    this._addFormGroupControls(type);
  }

  private _addFormGroupControls(type: ReservationType): void {
    if (!type) {
      this._formGroup = new FormGroup({});
      return;
    }
    Object.entries(getListFilterFieldsByType(type)).forEach(([name, state]) => this._formGroup.addControl(name, this._fb.control(state)));
  }

  private _clearFormGroup(): void {
    Object.keys(this._formGroup.controls).forEach((key) => this._formGroup.removeControl(key));
  }

  get filterDates$(): Observable<Record<string, string>> {
    return this._filters$.pipe(
      switchMap((filters) =>
        this._measurementsService.getMeasurementByName$('shortDateTime').pipe(
          map((dateFormat) => ({
            dateTimeFrom: this._datePipe.transform(filters.dateTimeFrom, dateFormat),
            dateTimeTo: this._datePipe.transform(filters.dateTimeTo, dateFormat),
          })),
        ),
      ),
    );
  }

  get tagsFilter$(): Observable<string[]> {
    return this._filters$.pipe(
      distinctUntilChanged((p, q) => p.tags?.length === q.tags?.length),
      map(({ tags }) => tags),
    );
  }

  get repeatFilter$(): Observable<Record<string, any>> {
    return this._filters$.pipe(map(({ repeat }) => repeat));
  }

  getItemsFilter$(placeType: ReservationType) {
    return this._filters$.pipe(
      distinctUntilChanged(
        (p, q) =>
          p.repeat?.end === q.repeat?.end && p.repeat?.days.length === q.repeat?.days.length && p.repeat?.weekNum === q.repeat?.weekNum,
      ),
      switchMap((filters) => {
        if (filters.repeat) {
          return this._reservationsApiService
            .getReservationsByType(placeType, {
              floorMapId: [],
              dateTimeFrom: filters.dateTimeFrom,
              dateTimeTo: filters.repeat.end,
            })
            .pipe(map((reservations) => [filters, reservations]));
        } else {
          return of(filters);
        }
      }),
      map((filters) => {
        if (filters.repeat) {
          const [r, dates, _reservations] = filters.repeat;
          filters.repeat = this._createRepeatsDates(dates, r.weekNum, r.days, r.end);
          return [filters, _reservations];
        } else {
          return filters;
        }
      }),
      debounceTime(100),
    );
  }

  getRepeatRange$(placeType: ReservationType): Observable<Record<string, any>> {
    return this._filters$.pipe(
      distinctUntilChanged(
        (p, q) =>
          p.repeat?.end === q.repeat?.end && p.repeat?.days.length === q.repeat?.days.length && p.repeat?.weekNum === q.repeat?.weekNum,
      ),
      switchMap(({ repeat, dateTimeFrom, dateTimeTo }) => {
        if (repeat) {
          return this._reservationsApiService
            .getReservationsByType(placeType, {
              floorMapId: [],
              dateTimeFrom,
              dateTimeTo: repeat.end,
            })
            .pipe(map((reservations) => [repeat, { dateTimeFrom, dateTimeTo }, reservations]));
        } else {
          return of(repeat);
        }
      }),
      map((repeat) => {
        if (repeat) {
          const [r, dates, _reservations] = repeat;
          return [this._createRepeatsDates(dates, r.weekNum, r.days, r.end), _reservations];
        } else {
          return repeat;
        }
      }),
      debounceTime(100),
    );
  }

  get seatCountFilter$(): Observable<any> {
    return this._filters$.pipe(
      map(({ seatCount }) => seatCount),
      distinctUntilChanged(),
      debounceTime(100),
    );
  }

  get floorsIdFilter$(): Observable<any> {
    return this._filters$.pipe(map(({ floorsId }) => floorsId));
  }

  get itemsFilter$() {
    return this._filters$.pipe(
      map((f) => f),
      debounceTime(100),
    );
  }

  private _createRepeatsDates({ dateTimeFrom, dateTimeTo }, weekNum, days, end): Date[][] {
    const result = [];
    let lastDay = dateTimeFrom;

    if (!days.length) return result;

    const weekDayHandler = (day) => {
      lastDay = nextDay(lastDay, day);
      if (isAfter(end, lastDay) || isSameDay(end, lastDay)) {
        result.push([setHours(lastDay, getHours(dateTimeFrom)), setHours(lastDay, getHours(dateTimeTo))]);
      }
    };

    const sameWeek = days.filter((day) => (day || 7) > getDay(dateTimeFrom));
    sameWeek.forEach(weekDayHandler);

    while (isAfter(end, lastDay) || isSameDay(end, lastDay)) {
      lastDay = addWeeks(lastDay, weekNum - 1);
      days.forEach(weekDayHandler);
    }

    return result;
  }

  get shortDateTime() {
    return this._measurementsService.getMeasurementByName('shortDateTime');
  }

  get repeatFilterStr$(): Observable<Record<string, any>> {
    return this.filters$.pipe(
      switchMap((filters) =>
        this._measurementsService.getMeasurementByName$('shortDate').pipe(
          map((dateFormat) => {
            if (filters.repeat) {
              return {
                ...filters.repeat,
                end: this._datePipe.transform(filters.repeat.end, dateFormat),
              };
            } else {
              return filters.repeat;
            }
          }),
        ),
      ),
    );
  }
}
