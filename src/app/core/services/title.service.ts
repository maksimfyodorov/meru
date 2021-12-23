import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private _title: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public set title(title: string) {
    this._title.next(title);
  }

  public get title$(): Observable<string> {
    return this._title.asObservable();
  }
}
