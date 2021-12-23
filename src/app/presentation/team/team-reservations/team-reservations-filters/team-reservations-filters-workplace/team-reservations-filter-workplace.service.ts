import { Injectable, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterService } from '@base/filters/filters/filter.service';
import { IFilterCheckboxGroups, IFilterCheckBoxOptions } from '@base/filters/models/filter-checkbox.model';
import { User } from '@core/models/user.model';
import { UserService } from '@core/services/user.service';
import { IDictionary, IDictionaryBuildings, IDictionaryFloorMaps, IDictionaryLabelGroups } from '@shared/dictionaries/dictionaries.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { StatusesService } from '@shared/dictionaries/services/statuses.service';
import { UserOfficesService } from '@src/app/core/services/user-offices.service';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { mapFloorMapsOptions, mapStatusesOptions, mapUserOptions } from './team-reservations-filter-workplace.utils';

@Injectable({ providedIn: 'root' })
export class TeamReservationsFilterWorkplaceService extends FilterService {
  private _usersOptions$: Observable<IFilterCheckBoxOptions>;

  constructor(
    protected injector: Injector,
    private $dictionaries: DictionariesService,
    private $userOffices: UserOfficesService,
    private $statuses: StatusesService,
    private $measurements: MeasurementsService,
    private $user: UserService,
  ) {
    super(injector);
  }

  public get usersOptions$(): Observable<IFilterCheckBoxOptions> {
    return this._usersOptions$;
  }

  public get dateFormat$(): Observable<string> {
    return this.$measurements.getMeasurementByName$('shortDate');
  }

  public get statuses$(): Observable<IFilterCheckBoxOptions> {
    return this.$statuses.statuses$.pipe(map((statuses) => mapStatusesOptions(statuses, this.getFormControlByName('statuses'))));
  }

  public get floorMapsGroups$(): Observable<IFilterCheckboxGroups> {
    return this.buildings$.pipe(
      switchMap((buildings) =>
        this.$userOffices
          .getMyOrderedFloors<IDictionaryFloorMaps>()
          .pipe(map((floorMaps) => mapFloorMapsOptions(floorMaps, buildings, this.getFormControlByName('floorMapIds')))),
      ),
    );
  }

  public get labelGroups$(): Observable<IDictionaryLabelGroups> {
    const user: User = this.$user.info as User;
    const labelGroupIdControl: FormControl = this.getFormControlByName('labelGroupId');

    return this.$dictionaries.getDictionary<IDictionaryLabelGroups>('labelGroups').pipe(
      map((labelGroups) => labelGroups.filter(({ id }) => user.labelGroups.includes(id))),
      tap((labelGroups) => {
        if (labelGroupIdControl.value === null) {
          labelGroupIdControl.setValue(labelGroups[0]?.id);
        }
      }),
    );
  }

  private get buildings$(): Observable<IDictionaryBuildings> {
    return this.$userOffices.getMyOrderedBuildings<IDictionaryBuildings>();
  }

  public init(): void {
    const labelIdsControl: FormControl = this.getFormControlByName('labelIds');
    this._usersOptions$ = this._formGroup.get('labelGroupId').valueChanges.pipe(
      switchMap((labelGroupId) =>
        this.$dictionaries.getDictionary<IDictionary>('labels').pipe(
          map((labels) => labels.filter((user) => user.labelGroups.includes(labelGroupId))),
          map((labels) => mapUserOptions(labels, this._formGroup.get('labelIds') as FormControl)),
          tap((labels) => {
            if (labelIdsControl.value.length) return;
            labelIdsControl.setValue(labels.map(({ id }) => id));
          }),
        ),
      ),
    );
  }

  public getLabelIdsInGroup(labelGroupId: number) {
    return this.$dictionaries
      .getDictionary<IDictionary>('labels')
      .pipe(map((labels) => labels.filter((user) => user.labelGroups.includes(labelGroupId))));
  }
}
