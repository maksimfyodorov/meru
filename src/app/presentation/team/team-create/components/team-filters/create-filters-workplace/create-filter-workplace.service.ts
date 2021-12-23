import { Injectable, Injector } from '@angular/core';
import { FilterService } from '@base/filters/filters/filter.service';
import { IFilterCheckBoxOptions } from '@base/filters/models/filter-checkbox.model';
import { IUser } from '@core/models/user.model';
import { UserService } from '@core/services/user.service';
import { mapBuildingsOptions } from '@presentation/reservations/components/list/list-filters/list-filter.utils';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { IDictionaryBuildings } from '@shared/dictionaries/dictionaries.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { ILabelGroups } from '@shared/http/models/database.model';
import { UserOfficesService } from '@src/app/core/services/user-offices.service';
import { DisabledTimeFn } from 'ng-zorro-antd/date-picker';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CreateFilterWorkplaceService extends FilterService {
  user: IUser;

  constructor(
    protected injector: Injector,
    private $dictionaries: DictionariesService,
    private $userOffices: UserOfficesService,
    private $measurements: MeasurementsService,
    private _user: UserService,
  ) {
    super(injector);
    this.user = this._user.info;
  }

  public get dateTimeFormat$(): Observable<string> {
    return this.$measurements.getMeasurementByName$('shortDate');
  }

  get dateFormat$(): Observable<string> {
    return this.$measurements.getMeasurementByName$('shortDate');
  }

  public get buildings$(): Observable<IFilterCheckBoxOptions> {
    return this.$userOffices
      .getMyOrderedBuildings<IDictionaryBuildings>()
      .pipe(map((buildings) => mapBuildingsOptions(buildings, this.getFormControlByName('buildingId'))));
  }

  get groups$(): Observable<ILabelGroups[]> {
    return this.getDictionaryByName<ILabelGroups[]>('labelGroups').pipe(
      map((groups) => groups.filter((group) => this.user.labelGroups.includes(group.id) && group.managers.includes(this.user.id))),
    );
  }

  get tags$(): Observable<any> {
    return this.$dictionaries.getDictionary('tags');
  }

  getUserByGroupId(id: number): Observable<Record<string, any>> {
    return this.$dictionaries.getDictionary('labels').pipe(map((users) => users.filter((user) => user.labelGroups.includes(id))));
  }

  getDisabledTime(start: number, end: number): DisabledTimeFn {
    return () => ({
      nzDisabledHours: () => [...this._range(0, start), ...this._range(end, 24)],
      nzDisabledMinutes: (hour) => {
        if (hour === 18) {
          return this._range(31, 60);
        } else {
          return [];
        }
      },
      nzDisabledSeconds: () => [],
    });
  }

  private getDictionaryByName<T>(name: DictionaryName): Observable<T> {
    return this.$dictionaries.getDictionary<T>(name);
  }

  private _range(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
}
