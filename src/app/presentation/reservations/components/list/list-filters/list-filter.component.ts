import { ChangeDetectionStrategy, Component, Injector, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFilterValues } from '@base/filters/filters.model';
import { FilterComponent } from '@base/filters/filters/filter.component';
import { ListFilterService } from '@presentation/reservations/components/list/list-filters/list-filter.service';
import { ReservationType } from '@shared/http/models/meta.model';

@Component({
  selector: 'app-reservations-filters, [app-reservations-filters]',
  templateUrl: './list-filter.component.html',
  styleUrls: [ './list-filter.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-reservations-filter]': `true`
  },
  providers: [ ListFilterService ]
})
export class ListFilterComponent extends FilterComponent implements OnInit {
  public type: ReservationType;
  public formGroup: FormGroup = this.$service.formGroup;

  @Input()
  public loading: boolean = false;

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
    private $service: ListFilterService,
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
