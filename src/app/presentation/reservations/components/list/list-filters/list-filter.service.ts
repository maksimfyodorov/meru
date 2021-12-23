import { Injectable, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getListFilterFieldsByType, mapFloorMapsOptions, mapLabelsOptions, mapRoomGroups, mapRoomsOptions, mapStatusesOptions } from '@presentation/reservations/components/list/list-filters/list-filter.utils';
import { ReservationType } from '@shared/http/models/meta.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { StatusesService } from '@shared/dictionaries/services/statuses.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { FilterService } from '@base/filters/filters/filter.service';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { IFilterCheckboxGroups, IFilterCheckBoxOptions } from '@base/filters/models/filter-checkbox.model';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { IDictionary, IDictionaryBuildings, IDictionaryFloorMaps, IDictionaryRooms } from '@shared/dictionaries/dictionaries.model';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { BuildingsService } from '@shared/dictionaries/services/buildings.service';

@Injectable()
export class ListFilterService extends FilterService {
  protected _formGroup: FormGroup = new FormGroup({});

  constructor(
    protected injector: Injector,
    private formBuilder: FormBuilder,
    private $dictionaries: DictionariesService,
    private $statuses: StatusesService,
    private $measurements: MeasurementsService,
    private $buildings: BuildingsService
  ) {
    super(injector);
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public get dateFormat$(): Observable<string> {
    return this.$measurements.getMeasurementByName$('shortDate');
  }

  public getStatuses$(statusesControlName: string, excludeStatuses: string[] = []): Observable<IFilterCheckBoxOptions> {
    return this.$statuses.statuses$.pipe(
      map((statuses) =>
        mapStatusesOptions(
          statuses,
          excludeStatuses,
          this.getFormControlByName(statusesControlName)
        )
      )
    );
  }

  public getLabels$(labelIdsControlName: string): Observable<IFilterCheckBoxOptions> {
    return this.getDictionaryByName('labels').pipe(
      map((labels: IDictionary) =>
        mapLabelsOptions(labels, this.getFormControlByName(labelIdsControlName))
      )
    );
  }

  public getFloorMapsGroups$(floorMapsIdsControlName: string, filterBy: DictionaryName = null): Observable<IFilterCheckboxGroups> {
    let buildingWithFloorMaps$: Observable<[IDictionaryBuildings, IDictionaryFloorMaps]> = this.$buildings.allBuildingsWithFloorMaps$;

    switch (filterBy) {
      case 'parkingLots':
        buildingWithFloorMaps$ = this.$buildings.parkingLotsBuildingsWithFloorMaps$;
        break;

      case 'workplaces':
        buildingWithFloorMaps$ = this.$buildings.workplacesBuildingsWithFloorMaps$;
        break;

      case 'rooms':
        buildingWithFloorMaps$ = this.$buildings.roomsBuildingsWithFloorMaps$;
        break;
    }

    return buildingWithFloorMaps$.pipe(
      map(([buildings, floorMaps]) =>
        mapFloorMapsOptions(
          floorMaps,
          buildings,
          this.getFormControlByName(floorMapsIdsControlName)
        )
      )
    );
  }

  public getRoomsGroups$(roomsIdsControlName: string): Observable<IFilterCheckboxGroups> {
    return combineLatest([
      this.$buildings.roomsBuildingsWithFloorMaps$,
      this.getDictionaryByName<IDictionaryRooms>('rooms'),
    ]).pipe(
      map(([ [buildings, floorMaps], rooms ]) =>
        mapRoomGroups(buildings, floorMaps, rooms, this.getFormControlByName(roomsIdsControlName))
      )
    );
  }

  public getRooms$(roomsIdsControlName: string, roomIdsControlName: string): Observable<IFilterCheckBoxOptions> {
    return this
      .getFormControlByName(roomsIdsControlName)
      .valueChanges
      .pipe(
        startWith([]),
        switchMap((floorMapIds: number[]) =>
          this.getDictionaryByName<IDictionaryRooms>('rooms').pipe(
            map(rooms => mapRoomsOptions(rooms, floorMapIds, this.getFormControlByName(roomIdsControlName)))
          )
        )
      );
  }

  public createFormGroup(type: ReservationType): void {
    this.clearFormGroup();
    this.addFormGroupControls(type);
  }

  public clear(formGroup: FormGroup): void {
    Object.values(this.formGroup.controls).forEach((control) => {
      if (control.value instanceof Array) {
        control.setValue([]);
        return;
      }

      control.setValue(null);
    });
  }

  private getDictionaryByName<T>(name: DictionaryName): Observable<T> {
    return this.$dictionaries.getDictionary<T>(name);
  }

  private clearFormGroup(): void {
    Object
      .keys(this._formGroup.controls)
      .forEach(key => this._formGroup.removeControl(key));
  }

  private addFormGroupControls(type: ReservationType): void {
    if (!type) {
      this._formGroup = new FormGroup({});
      return;
    }

    Object
      .entries(getListFilterFieldsByType(type))
      .forEach(([ name, state ]) =>
        this._formGroup.addControl(
          name,
          this.formBuilder.control(state)
        )
      );
  }
}
