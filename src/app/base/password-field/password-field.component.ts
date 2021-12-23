import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NzButtonGroupSize} from 'ng-zorro-antd/button';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.less']
})
export class PasswordFieldComponent {
  private _value = '';
  public passwordVisible = false;

  @Input() public control: FormControl = new FormControl();
  @Input() public placeholder = 'Password';
  @Input() public size: NzButtonGroupSize = 'default';
  @Input()
  get value(): string {
    return this._value;
  }
  set value(val) {
    this._value = val;
    this.valueChange.emit(val);
  }
  @Output() public valueChange = new EventEmitter<string>();
}
