import { Injectable } from '@angular/core';
import { IWidget } from '@base/widget/widget.model';

@Injectable({
  providedIn: 'root',
})
export class WidgetsListService {
  private _widgets = [
    {
      id: 0,
      title: 'MyReservations',
      type: 'reservations',
    },
    {
      id: 1,
      title: 'MyCalendar',
      type: 'workplace-calendar',
    },
  ];

  public get widgets(): IWidget[] {
    return this._widgets;
  }

  public removeWidget(id: number | string): IWidget[] {
    this._widgets = this._widgets.filter((w) => w.id !== id);
    return this._widgets;
  }
}
