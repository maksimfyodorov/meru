import { Injectable, Injector } from '@angular/core';
import { FilterService } from '@base/filters/filters/filter.service';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { ITag } from '@src/app/shared/http/models/database.model';
import { Observable } from 'rxjs';

@Injectable()
export class CreateFilterWorkplaceService extends FilterService {
  constructor(
    protected injector: Injector,
    private $dictionaries: DictionariesService,
    private $measurements: MeasurementsService,
  ) {
    super(injector);
  }

  public get dateTimeFormat$(): Observable<string> {
    return this.$measurements.getMeasurementByName$('shortDateTime');
  }

  get dateFormat$(): Observable<string> {
    return this.$measurements.getMeasurementByName$('shortDate');
  }

  get tags$(): Observable<ITag[]> {
    return this.$dictionaries.getDictionary('tags');
  }
}
