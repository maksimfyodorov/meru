import { ChangeDetectionStrategy, Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { IFilterCheckboxGroups, IFilterCheckBoxOptions } from '@base/filters/models/filter-checkbox.model';
import { FilterComponent } from '@base/filters/filters/filter.component';
import { TeamReservationsFilterWorkplaceService } from '@presentation/team/team-reservations/team-reservations-filters/team-reservations-filters-workplace/team-reservations-filter-workplace.service';
import { IDictionaryLabelGroups } from '@shared/dictionaries/dictionaries.model';
import { TIME_PICKER_OPTIONS } from '@presentation/reservations/components/list/list-filters/list-filter.utils';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-team-reservations-filter-workplace, [app-team-reservations-filters-workplace]',
  templateUrl: './team-reservations-filter-workplace.component.html',
  styleUrls: ['./team-reservations-filter-workplace.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.team-reservations-filter-workplace]': `true`,
  },
  // providers: [TeamReservationsFilterWorkplaceService],
})
export class TeamReservationsFilterWorkplaceComponent extends FilterComponent implements OnInit, OnDestroy {
  public labelGroupIdControl: FormControl;
  public labelIdsControl: FormControl;
  public floorMapIdsControl: FormControl;
  public statusesControl: FormControl;
  public dateTimeFromControl: FormControl;
  public dateTimeToControl: FormControl;
  public timePickerOptions: Record<string, any> = TIME_PICKER_OPTIONS;

  @Subscribe<IFilterCheckBoxOptions>()
  public statuses: IFilterCheckBoxOptions;

  @Subscribe<IFilterCheckboxGroups>()
  public floorMapsGroups: IFilterCheckboxGroups;

  @Subscribe<IDictionaryLabelGroups>()
  public labelGroups: IDictionaryLabelGroups;

  @Subscribe<string>()
  public dateFormat: string = this.$service.dateFormat$ as any;

  @Subscribe<IFilterCheckBoxOptions>()
  public usersOptions: IFilterCheckBoxOptions;

  constructor(protected injector: Injector, private $service: TeamReservationsFilterWorkplaceService) {
    super(injector);
  }

  public updateDateTime(dateTime: Date[]): void {
    this.dateTimeFromControl.setValue(dateTime[0]);
    this.dateTimeToControl.setValue(dateTime[1]);
  }

  public updateLabelGroup(id: number) {
    this.$service
      .getLabelIdsInGroup(id)
      .pipe(first())
      .subscribe((labels) => {
        this.labelIdsControl.setValue(labels.map(({ id }) => id));
      });
  }

  public ngOnInit(): void {

    this.$service.formGroup = this.formGroup;
    this.$service.init();
    this.assignControls();

    this.statuses = this.$service.statuses$ as any;
    this.usersOptions = this.$service.usersOptions$ as any;
    this.labelGroups = this.$service.labelGroups$ as any;
    this.floorMapsGroups = this.$service.floorMapsGroups$ as any;
  }

  public ngOnDestroy(): void {}
}
