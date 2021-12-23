import { ChangeDetectionStrategy, Component, Injector, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFilterValues } from '@base/filters/filters.model';
import { FilterComponent } from '@base/filters/filters/filter.component';
import { CreateFilterService } from './create-filter.service';
import { ReservationType } from '@shared/http/models/meta.model';

@Component({
  selector: 'app-create-filters, [app-create-filters]',
  templateUrl: './create-filter.component.html',
  styleUrls: [ './create-filter.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-reservations-create-filter',
  },
  providers: [ CreateFilterService ]
})
export class CreateFilterComponent extends FilterComponent implements OnInit {
  public type: ReservationType;
  public formGroup: FormGroup = this.$service.formGroup;

  @Input('type')
  public set inputType(type: ReservationType) {
    if (!type) return;

    this.$service.createFormGroup(type);
    this.type = type;
  }

  @Input('values')
  public set inputValues(values: IFilterValues) {
    if (!values) return;
    this.formGroup.patchValue(values, { emitEvent: false });
  }

  constructor(
    private $service: CreateFilterService,
    protected injector: Injector
  ) {
    super(injector);
  }

  public clear(): void {
    this.$service.clear(this.formGroup);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
