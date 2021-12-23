import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { WidgetsListService } from './widgets-list.service';
import { IWidget, IWidgetAction } from '@base/widget/widget.model';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetsListComponent {
  public widgets: IWidget[] = [];

  constructor(private $service: WidgetsListService, private _innerWidthService: InnerWidthService) {
    this.widgets = $service.widgets;
  }

  public handleListChange(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
  }

  public handleWidgetActions({ id, type }: IWidgetAction): void {
    switch (type) {
      case 'remove':
        this.widgets = this.$service.removeWidget(id);
        break;
    }
  }

  get isSmallScreen() {
    return this._innerWidthService.isSmallScreen;
  }
}
