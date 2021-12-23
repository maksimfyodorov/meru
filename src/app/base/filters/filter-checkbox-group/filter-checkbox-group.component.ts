import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar/lib/perfect-scrollbar.interfaces';
import {PS_CONFIG} from '@base/filters/filters.uttils';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';
import {IFilterCheckboxGroup, IFilterCheckboxGroups} from '@base/filters/models/filter-checkbox.model';

@Component({
  selector: 'app-filter-checkbox-group',
  templateUrl: './filter-checkbox-group.component.html',
  styleUrls: ['./filter-checkbox-group.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    ['class.filter-checkbox-group']: `true`
  },
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FilterCheckboxGroupComponent),
    multi: true
  }]
})
export class FilterCheckboxGroupComponent implements ControlValueAccessor {
  private _value: any[] = [];
  public psConfig: PerfectScrollbarConfigInterface = PS_CONFIG;
  public onChange: (value: any[]) => void = (_value: any[]) => {
  };
  public onTouched: () => void = () => {
  };

  @Input()
  public title: string;

  @Input()
  public groups: IFilterCheckboxGroups = [];

  @Input()
  public maxHeight: string = '190px';


  public get value(): any[] {
    return this._value;
  }

  @Input()
  public set value(value: any[]) {
    this._value = value;
    this.onChange(this._value);
  }

  @ViewChild(PerfectScrollbarComponent, {static: false, read: ElementRef})
  public set viewChildPerfectScrollbarComponent(perfectScrollbarComponent: ElementRef) {
    try {
      const nativeElement: HTMLElement = perfectScrollbarComponent.nativeElement;

      nativeElement.style.maxHeight = this.maxHeight;
      (nativeElement.querySelector('.ps') as HTMLElement).style.maxHeight = this.maxHeight;
    } catch (e) {
    }
  }


  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  public applyGroupChange(group: IFilterCheckboxGroup, checked: boolean): void {
    if (group.indeterminate) {
      group.indeterminate = false;
      group.checked = true;
    }

    group.options.forEach((option) => {
      option.checked = group.checked;
      this.applyOptionChange(option.value, checked);
    });
  }

  public applyOptionChange(value: any, checked: boolean): void {
    if (checked && !this.value.includes(value)) {
      this.value = this.value.concat(value);
      return;
    }

    if (!checked && this.value.includes(value)) {
      this.value = this.value.filter(_value => value !== _value);
    }
  }

  public checkGroupSelection(group: IFilterCheckboxGroup): void {
    const checked: boolean = group.options.every(({checked}) => checked);

    group.checked = checked;
    group.indeterminate = !checked && group.options.some(({checked}) => checked);
  }

  public registerOnChange(onChange: (value: any[]) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public writeValue(value: any[]): void {
    this.value = value;

    this.updateCheckedGroups();
  }

  private updateCheckedGroups(): void {
    this.groups?.forEach(group => {
      group.options.forEach(option =>
        option.checked = this.value.includes(option.value)
      );

      this.checkGroupSelection(group);
    });

    this.cdr.markForCheck();
  }
}
