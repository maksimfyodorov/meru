import { Injectable } from '@angular/core';
import { DictionariesService } from '@src/app/shared/dictionaries/dictionaries.service';
import { IStatuses } from '@src/app/shared/dictionaries/models/statuses.model';
import { MeasurementsService } from '@src/app/shared/dictionaries/services/measurements.service';
import { map } from 'rxjs/operators';
import { IReservationMobileCard } from '../card/card.model';

@Injectable()
export class ReservationViewService {
  constructor(private _dictionaries: DictionariesService, private _measurements: MeasurementsService) {}

  get statuses$() {
    return this._dictionaries.getDictionary<IStatuses>('statuses').pipe(
      map((statuses) =>
        statuses[0].statuses.reduce((acc, status) => {
          acc[status.code] = {
            value: status.name,
            color: status.color,
          };
          return acc;
        }, {}),
      ),
    );
  }

  get dateTimeFormat(): string {
    return this._measurements.getMeasurementByName('dateTime');
  }

  get card(): IReservationMobileCard {
    return {
      descriptionList: [
        { name: 'Номер', value: '22-17' },
        { name: 'Помещение', value: 'Desk' },
        { name: 'Отдел', value: '22-17' },
      ],
      tags: ['Монитор', 'Телевизор', 'Мягкий стул', 'Internet port', 'Проектор'],
      dateTimeFrom: null,
      dateTimeTo: null,
      status: 'NEW',
    };
  }
}
