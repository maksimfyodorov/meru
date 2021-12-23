import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {
  public globalLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public headerLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public menuLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public contentLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
