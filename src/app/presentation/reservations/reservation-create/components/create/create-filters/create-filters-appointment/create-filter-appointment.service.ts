import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterService } from '@base/filters/filters/filter.service';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { StatusesService } from '@shared/dictionaries/services/statuses.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';

@Injectable()
export class CreateFilterAppointmentService extends FilterService {
  constructor(
    protected injector: Injector,
    private $dictionaries: DictionariesService,
    private $statuses: StatusesService,
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

  get tags$(): Observable<any> {
    return this.$dictionaries.getDictionary('tags');
  }
}
