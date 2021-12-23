import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { Subscription } from 'rxjs';
import { Subscribe } from '@core/utils/subcriptions.util';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input()
  public formGroup: FormGroup;

  @Output()
  public valuesChange: EventEmitter<Record<string, any>> = new EventEmitter<Record<string, any>>();

  @Subscriptions()
  protected _subscriptions: Subscription;
  protected cdr: ChangeDetectorRef = this.injector.get(ChangeDetectorRef);

  constructor(protected injector: Injector) {}

  public ngOnInit(): void {
    this._subscriptions = Subscribe(this.formGroup.valueChanges, (values) => {
      this.valuesChange.emit(values);
    });
  }

  public ngOnDestroy(): void {}

  protected control(name: string): FormControl | null {
    return this.formGroup.controls?.[name] as FormControl;
  }

  protected assignControls(suffix: string = 'Control'): void {
    Object.entries(this.formGroup.controls).forEach(([name, control]) => (this[`${name}${suffix}`] = control));
  }
}
