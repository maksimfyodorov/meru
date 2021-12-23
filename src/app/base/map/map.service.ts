import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { IMarks } from '@base/map/map-mark/map-mark.model';
import { IImage } from '@base/map/map.model';
const CLICK = (mark) => console.log(mark);
@Injectable({
  providedIn: 'root',
})
export class MapService {
  private _zoom: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private _mark: Subject<Record<string, any>> = new Subject<Record<string, any>>();
  private _marksReady: ReplaySubject<boolean> = new ReplaySubject(1);
  private _mapReady: ReplaySubject<boolean> = new ReplaySubject(1);

  hidePopover$ = new Subject<void>();

  get zoom$(): BehaviorSubject<number> {
    return this._zoom;
  }

  get marks(): IMarks {
    return [
      {
        id: 1,
        type: 'info',
        tooltip: 'Mark 1',
        icon: 'question-circle',
        coordinates: {
          x: 45,
          y: 45,
          size: 12,
        },
        onClick: CLICK
      },
      {
        id: 2,
        type: 'info',
        tooltip: 'Mark 2',
        icon: 'exclamation-circle',
        coordinates: {
          x: 145,
          y: 145,
          size: 21,
        },
        onClick: CLICK
      },
      {
        id: 3,
        type: 'warning',
        icon: 'warning',
        tooltip: 'Mark 3',
        coordinates: {
          x: 245,
          y: 245,
          size: 21,
        },
        onClick: CLICK
      },
      {
        id: 4,
        type: 'danger',
        icon: 'info',
        tooltip: 'Mark 5',
        coordinates: {
          x: 1800,
          y: 2900,
          size: 31,
        },
        onClick: CLICK
      }
    ];
  }
  get mark$(): Subject<Record<string, any>> {
    return this._mark;
  }
  get marksReady$(): ReplaySubject<boolean> {
    return this._marksReady;
  }
  get mapReady$(): ReplaySubject<boolean> {
    return this._mapReady;
  }
  get img(): IImage {
    return {
      alt: 'map',
      src: '/assets/images/booking-1.png',
    };
  }

}
