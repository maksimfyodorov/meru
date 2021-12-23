import { Injectable } from '@angular/core';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { IUser } from '@shared/http/models/database.model';
import { DictionaryName } from '@src/app/shared/dictionaries/dictionaries.constants';
import { IDictionary, IDictionaryItem, IDictionaryLabelsItem } from '@src/app/shared/dictionaries/dictionaries.model';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserOfficesService {
  constructor(
    private $dictionary: DictionariesService,
    private $user: UserService
  ) {
  }

  get label(): IDictionaryLabelsItem {
    return this.$user.label;
  }

  get user$(): Observable<IUser> {
    return this.$dictionary.getDictionaryItemByKey<IUser>(
      'labels',
      this.userId
    );
  }

  get userId(): number {
    return this.$user.info?.id;
  }

  public getUserWorkplaceGroups(): Observable<number[]> {
    return this.user$.pipe(
      map((user) => {
        return user.workplaceGroups;
      })
    );
  }

  public getMyOrderedBuildings<T>(): Observable<T> {
    return forkJoin([
      this.user$,
      this.getDictionaryByName<T>('buildings'),
    ]).pipe(
      map(([ user, buildings ]) => {
        return this.getSortedItems(buildings, user.buildingsSequence);
      })
    );
  }

  public getMyOrderedFloors<T>(): Observable<T> {
    return forkJoin([
      this.user$,
      this.getDictionaryByName<T>('floorMaps'),
    ]).pipe(
      map(([ user, floors ]) => {
        return this.getSortedItems(floors, user.floorMapsSequence);
      })
    );
  }

  private getDictionaryByName<T>(name: DictionaryName): Observable<T> {
    return this.$dictionary.getDictionary<T>(name);
  }

  private getSortedItems<T = IDictionary>(items: any, sequence: number[]): T {
    return  items.sort(
      (a: any, b: any) => sequence.indexOf(a.id) - sequence.indexOf(b.id)
    );
  }
}
