import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IMultiSwitcherItem } from '@base/multi-switcher/multi-switcher.model';

@Component({
  selector: 'app-multi-switcher',
  templateUrl: './multi-switcher.component.html',
  styleUrls: ['./multi-switcher.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSwitcherComponent implements OnInit {
  @Input() gutter: number = 0;
  @Input() items: IMultiSwitcherItem[];
  @Output() readonly valueChange: EventEmitter<string | number> = new EventEmitter<string | number>();
  @Input() value: string;
  constructor() {}
  ngOnInit(): void {}
  change(value: string | number): void {
    this.valueChange.emit(value);
  }
}
