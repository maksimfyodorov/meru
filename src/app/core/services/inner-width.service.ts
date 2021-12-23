import { BreakpointObserver } from '@angular/cdk/layout';
import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InnerWidthService {
  constructor(private breakpointsObserver: BreakpointObserver) {}

  get isSmallScreen() {
    return this.breakpointsObserver.isMatched('(max-width: 767px)');
  }
}
