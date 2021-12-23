import { ChangeDetectionStrategy, Component, Injector, Input, OnInit } from '@angular/core';
import { ReservationType } from '@shared/http/models/meta.model';
import { FormGroup } from '@angular/forms';
import { IFilterValues } from '@base/filters/filters.model';
import { FilterComponent } from '@base/filters/filters/filter.component';
import { TeamReservationsFiltersService } from '@presentation/team/team-reservations/team-reservations-filters/team-reservations-filters.service';

@Component({
  selector: 'app-team-reservations-filters, [app-team-reservations-filters]',
  templateUrl: './team-reservations-filters.component.html',
  styleUrls: [ './team-reservations-filters.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.team-reservations-filters]': `true`
  },
  // providers: [ TeamReservationsFiltersService ]
})
export class TeamReservationsFiltersComponent extends FilterComponent implements OnInit {
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
    const emitEvent: boolean = !!Object.keys(values).length;

    this.formGroup.patchValue(values, { emitEvent });
  }

  constructor(
    private $service: TeamReservationsFiltersService,
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
