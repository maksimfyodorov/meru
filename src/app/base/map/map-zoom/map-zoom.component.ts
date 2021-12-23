import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IMapZoomOptions } from '@base/map/map-zoom/map-zoom.model';

@Component({
  selector: 'app-map-zoom',
  templateUrl: './map-zoom.component.html',
  styleUrls: ['./map-zoom.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapZoomComponent {
  private _value: number;
  private _options: IMapZoomOptions = {
    min: 1,
    max: 30,
    dots: false,
    vertical: true,
    step: 1,
    range: false,
    tooltipVisible: 'default',
    tipFormatter: null,
    marks: null,
  };
  @Input('options')
  set options(value: IMapZoomOptions) {
    this._options = { ...this._options, ...value };
  }
  get options(): IMapZoomOptions {
    return this._options;
  }
  @Input('value')
  set value(value: number) {
    this._value = value;
  }
  get value(): number {
    return this._value;
  }
  @Output() readonly valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() position: string = 'right';
  increment(step: number): void {
    if (this.options.max > this.value + step) {
      this.changeValue(this.value + step);
    }
  }
  decrement(step: number): void {
    if (this.options.min < this.value - step) {
      this.changeValue( this.value - step);
    }
  }
  changeValue(value: number): void {
    this._value = value;
    this.valueChange.emit(value);
  }
}
