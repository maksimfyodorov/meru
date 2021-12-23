import { Component, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-simple-filter',
  templateUrl: './simple-filter.component.html',
  styleUrls: ['./simple-filter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleFilterComponent {
  active: boolean = false;
  @Input() readonly collapseBtn: string = 'Advanced filter';
  @Input() readonly tpl: TemplateRef<any>;
  @Input() readonly collapseTpl: TemplateRef<any>;
  @Input() readonly isCollapsible: boolean = true;
  toggleActive(): void {
    this.active = !this.active;
  }
  get collapseIcon(): string {
    return this.active ? 'up' : 'down';
  }
}
