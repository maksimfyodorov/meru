import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterComponent } from '@base/filters/filters/filter.component';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import {
  IFilterCheckboxGroups,
  IFilterCheckBoxOptions,
} from '@base/filters/models/filter-checkbox.model';
import { ListFilterService } from '../list-filter.service';
import { TIME_PICKER_OPTIONS } from '@presentation/reservations/components/list/list-filters/list-filter.utils';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';

@Component({
  selector: 'app-list-filter-common, [app-list-filter-common]',
  templateUrl: './list-filter-common.component.html',
  styleUrls: ['./list-filter-common.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-reservations-filter-common]': `true`,
  },
})
export class ListFilterCommonComponent
  extends FilterComponent
  implements OnInit, OnDestroy
{
  public floorMapIdsControl: FormControl;
  public statusesControl: FormControl;
  public dateTimeFromControl: FormControl;
  public dateTimeToControl: FormControl;
  public timePickerOptions: Record<string, any> = TIME_PICKER_OPTIONS;

  @Subscribe<IFilterCheckBoxOptions>()
  public statuses;

  @Subscribe<IFilterCheckboxGroups>()
  public floorMapsGroups;

  @Subscribe<string>()
  public dateFormat;

  @Input()
  public filterFloorsBy: DictionaryName | null = null;

  constructor(
    protected injector: Injector,
    private $listFilter: ListFilterService
  ) {
    super(injector);
  }

  public updateDateTime(dateTime: Date[]): void {
    this.dateTimeFromControl.setValue(dateTime[0]);
    this.dateTimeToControl.setValue(dateTime[1]);
  }

  public ngOnInit(): void {
    this.assignControls();
    this.getFieldOptions();
  }

  public ngOnDestroy(): void {}

  private getFieldOptions(): void {
    this.statuses = this.$listFilter.getStatuses$('statuses');
    this.dateFormat = this.$listFilter.dateFormat$;
    this.floorMapsGroups = this.$listFilter.getFloorMapsGroups$(
      'floorMapIds',
      this.filterFloorsBy
    );
  }
}
