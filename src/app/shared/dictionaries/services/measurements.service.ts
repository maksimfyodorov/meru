import { Injectable, Injector } from '@angular/core';
import { IDictionaryMeasurements, IMeasurements, Measurement } from '@shared/dictionaries/models/measurements.model';
import {
  MEASUREMENTS_DEFAULT_VALUES,
  MEASUREMENTS_DICT_NAME,
  MEASUREMENTS_URL_KEY
} from '@shared/dictionaries/constants/measurements.constant';
import { DictionaryService } from '@shared/dictionaries/services/dictionary.service';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MeasurementsService extends DictionaryService<IDictionaryMeasurements> {
  constructor(
    protected injector: Injector
  ) {
    super(injector);
    this._dictionaryName = MEASUREMENTS_DICT_NAME;
  }

  public get measurements$(): Observable<IMeasurements> {
    return this.value$.pipe(
      pluck('measurements')
    );
  }

  public get measurements(): IMeasurements {
    return this.value.measurements;
  }

  public getMeasurementByName$(measurement: Measurement): Observable<string | null> {
    return this.measurements$.pipe(pluck(measurement));
  }

  public getMeasurementByName(measurement: Measurement): string | null {
    return this.measurements[measurement];
  }

  public initialize(): Observable<any> {
    return super.initialize(MEASUREMENTS_URL_KEY, MEASUREMENTS_DEFAULT_VALUES);
  }
}
