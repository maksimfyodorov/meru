import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '@shared/http/models/database.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';

@Injectable({
  providedIn: 'root'
})
export class AddMembersService {
  emails: string[];
  get users$(): Observable<IUser[]> {
    return this.$dictionary.getDictionary<IUser[]>('labels');
  }
  checkAppointmentAttendeesAvailability$(from: string, to: string, emails: string[], id: string): Observable<any> {
    return this.$api.checkAppointmentAttendeesAvailability(from, to, emails, id);
  }
  constructor(private $dictionary: DictionariesService, private $api: ReservationsApiService) {}
}
