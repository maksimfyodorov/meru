import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IDropdownSelectValue, IDropdownSelectValues } from '@base/dropdown-select/dropdown-select.model';

const LABEL = 'Dropdown select.Floor';
const VALUES = [];
const VALUE = { label: 0, value: 0 };
@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownSelectComponent {
  @Input()
  set label(value: string) {
    this._label = value || LABEL;
  }
  get label(): string {
    return this._label;
  }
  @Input()
  set values(values: IDropdownSelectValues) {
    this._values = values || VALUES;
  }
  get values(): IDropdownSelectValues {
    return this._values;
  }
  @Input()
  set value(value: IDropdownSelectValue) {
    this._value = value || VALUE;
  }
  get value(): IDropdownSelectValue {
    return this._value;
  }
  @Input()
  set handler(value: (val) => void) {
    this._handler = value;
  }
  get handler(): (val) => void {
    return this._handler;
  }
  private _label: string = LABEL;
  private _values: IDropdownSelectValues = VALUES;
  private _value: IDropdownSelectValue = VALUE;

  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>();
  private _handler: (val) => void = (val) => {};
  onClick(value: IDropdownSelectValue): void {
    this.value = value;
    this.valueChange.emit(value);
    if (this.handler) {
      this.handler(value);
    }
  }
}
