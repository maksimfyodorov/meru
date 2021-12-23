import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWidgetAction } from './widget.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
})
export class WidgetComponent {
  @Input() public title = '';
  @Input() public id: number | string = 0;
  @Input() public draggable = true;
  @Input() public bordered = false;
  @Input() public bgGray = false;
  @Input() public hideTitle = false;
  @Output() public action = new EventEmitter<IWidgetAction>();

  public handleRemoveClick(): void {
    this.action.emit({ id: this.id, type: 'remove' });
  }
}
