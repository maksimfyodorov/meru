import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IFilterCheckBoxOptions } from '@base/filters/models/filter-checkbox.model';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar/lib/perfect-scrollbar.interfaces';
import { PS_CONFIG } from '@base/filters/filters.uttils';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: [ './filter-checkbox.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    ['class.filter-checkbox']: `true`
  },
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FilterCheckboxComponent),
    multi: true
  } ]
})
export class FilterCheckboxComponent implements ControlValueAccessor {
  private _value: any[] = [];
  public disabled: boolean = false;
  public psConfig: PerfectScrollbarConfigInterface = PS_CONFIG;
  public options: IFilterCheckBoxOptions = [];
  public filterOptionsValue: string | null = null;
  public sourceOptions: IFilterCheckBoxOptions = [];
  public onChange: (value: any[]) => void = (value: any[]) => {
  };
  public onTouched: () => void = () => {
  };

  @Input('options')
  public set inputOptions(sourceOptions: IFilterCheckBoxOptions) {
    this.sourceOptions = sourceOptions;
    this.filterOptions();
  }

  @Input()
  public placeholder: string = '';

  @Input()
  public maxHeight: string = 'auto';

  @Input()
  public label: TemplateRef<any> | null = null;

  @Input()
  public allowSearch: boolean = false;

  @Input()
  public emptyMessage: string = 'NoSelectableValues';

  @Input()
  public allowEmpty: boolean = true;

  @Input()
  public allowSelectAll: boolean = false;

  public get value(): any[] {
    return this._value;
  }

  @Input()
  public set value(value: any[]) {
    this._value = value;
    this.onChange(this._value);

    if (this.allowEmpty) {
      return;
    }

    if (this.value.length === 1) {
      this.options.filter(({ value }) => value === this.value[0]).forEach(option => option.disabled = true);
    } else {
      this.options.filter(({ disabled }) => disabled).forEach(option => option.disabled = false);
    }
  }

  @ViewChild(PerfectScrollbarComponent, { static: false, read: ElementRef })
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

  public applyChanges(value: any, checked: boolean): void {
    if (checked && !this.value.includes(value)) {
      this.value = this.value.concat(value);
      return;
    }

    if (!checked && this.value.includes(value)) {
      this.value = this.value.filter(_value => _value !== value);
      return;
    }
  }

  public filterOptions(): void {
    if (!this.filterOptionsValue) {
      this.options = this.sourceOptions;
      return;
    }

    const filterOptionsValue = this.filterOptionsValue.toLowerCase();

    this.options = this.sourceOptions.filter(({ label }) =>
      label.toLowerCase().includes(filterOptionsValue)
    );
  }

  public registerOnChange(onChange: (value: any[]) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public writeValue(value: any[] | string): void {
    if (value === '*') {
      value = this.options?.map(({ value }) => value) || [];
    }

    this.value = value as any[];
    this.updateCheckedOptions();
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public selectAll(allSelected: boolean): void {
    this.options
      .filter((_, index) => this.allowEmpty || index > 0)
      .forEach((option) => {
        option.checked = allSelected;
        this.applyChanges(option.value, allSelected);
      });
  }

  private updateCheckedOptions(): void {
    this.options.forEach(option =>
      option.checked = this.value.includes(option.value)
    );

    this.cdr.markForCheck();
  }
}
