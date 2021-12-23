import { Injectable, Injector } from '@angular/core';
import { DictionaryService } from '@shared/dictionaries/services/dictionary.service';
import { IDictionaryStatuses, IStatuses, IStatusesMap } from '@shared/dictionaries/models/statuses.model';
import { Observable } from 'rxjs';
import { STATUSES_DEFAULT_VALUES, STATUSES_DICT_NAME, STATUSES_URL_KEY } from '@shared/dictionaries/constants/statuses.constant';
import { map, pluck } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StatusesService extends DictionaryService<IDictionaryStatuses> {
  constructor(protected injector: Injector) {
    super(injector);
    this._dictionaryName = STATUSES_DICT_NAME;
  }

  public get statuses$(): Observable<IStatuses> {
    return this.value$.pipe(
      pluck('statuses'),
      map((statuses) => statuses.filter((s) => !s.skipFilter)),
    );
  }

  public get statuses(): IStatuses {
    return this.value.statuses.filter((s) => !s.skipFilter);
  }

  public get statusesMap(): IStatusesMap {
    const map: IStatusesMap = new Map();

    this.statuses.forEach((status) => map.set(status.code, status));

    return map;
  }

  public get allStatusesCodes(): string[] {
    return this.statuses.map(({ code }) => code);
  }

  public initialize(): Observable<any> {
    return super.initialize(STATUSES_URL_KEY, STATUSES_DEFAULT_VALUES);
  }
}
