import { Injectable } from '@angular/core';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Scenario, StepAction, StepParam } from './models/order-services.model';

@Injectable()
export class OrderServicesService {
  constructor(
    private $api: ReservationsApiService,
    private $measurements: MeasurementsService
  ) {}

  public getK2Scenarios(): Observable<Scenario[]> {
    return this.$api
      .getK2Scenarios()
      .pipe(
        map((response) => (response && response.success ? response.data : []))
      );
  }

  public openK2Session(scenarioId: number): Observable<StepAction> {
    return this.$api
      .openK2Session({ scenarioId })
      .pipe(
        map((response) => (response && response.success ? response.data : []))
      );
  }

  public putK2SessionStep(action: StepAction): Observable<StepAction> {
    return this.$api.putK2SessionStep({ action }).pipe(
      map((response) => {
        if (response?.success) {
          let action: StepAction = response?.data?.action
            ? response.data.action
            : response.data;
          if (action && action.isLastStep) {
            const session: StepAction[] = response?.data?.session;
            let params: StepParam[] = session
              .map((item) => item.params)
              .reduce((params, item) => params.concat(item));
            action.params = params;
          }
          return action;
        } else {
          return undefined;
        }
      })
    );
  }

  public commitK2Session(uuid: string): Observable<any> {
    return this.$api
      .commitK2Session({ uuid })
      .pipe(map((response) => response));
    // .pipe(map((response) => (response ? response.success : false)));
  }

  public get dateTimeFormat$(): Observable<string> {
    return this.$measurements.getMeasurementByName$('shortDateTime');
  }
}
