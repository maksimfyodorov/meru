import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IWorkplaceItems } from '@app/composite/booking/workplace/workplace.model';
import { WorkplaceService } from '@app/composite/booking/workplace/workplace.service';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkplaceComponent {
  private _items: IWorkplaceItems;
  @Input('items')
  set items(value: IWorkplaceItems) {
    this._items = value;
  }
  get items(): IWorkplaceItems {
    return this._items || this.$service.items;
  }
  constructor(private $service: WorkplaceService) {}
}
