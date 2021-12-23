import {ChangeDetectionStrategy, Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {FilterComponent} from '@base/filters/filters/filter.component';
import {FormControl} from '@angular/forms';
import {Subscribe} from '@core/decorators/subscribe.decorator';
import {IFilterCheckboxGroups, IFilterCheckBoxOptions} from '@base/filters/models/filter-checkbox.model';
import {ListFilterService} from '@presentation/reservations/components/list/list-filters/list-filter.service';

@Component({
  selector: 'app-list-filter-appointment, [app-list-filter-appointment]',
  templateUrl: './list-filter-appointment.component.html',
  styleUrls: ['./list-filter-appointment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListFilterAppointmentComponent extends FilterComponent implements OnInit, OnDestroy {
  public requestAppointmentLabelIdsControl: FormControl;
  public requestAppointmentRoomIdsControl: FormControl;

  @Subscribe<IFilterCheckboxGroups>()
  public roomsGroups: IFilterCheckboxGroups;

  @Subscribe<IFilterCheckboxGroups>()
  public labels: IFilterCheckBoxOptions;

  constructor(
    protected injector: Injector,
    private $listFilter: ListFilterService
  ) {
    super(injector);
  }

  public ngOnInit(): void {
    this.assignControls();
    this.getFieldOptions();
  }

  private getFieldOptions(): void {
    this.labels = this.$listFilter.getLabels$('requestAppointmentLabelIds') as any;
    this.roomsGroups = this.$listFilter.getRoomsGroups$('requestAppointmentRoomIds') as any;
  }
}
