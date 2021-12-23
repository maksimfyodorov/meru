import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, OnDestroy, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalizationService } from '@core/services/localization.service';
import { getInitDate } from '@presentation/offices/offices-map/offices-map.utils';
import { mapCheckBoxOptions } from '@presentation/team/team-create/components/team-filters/create-filter.utils';
import { IDictionary } from '@shared/dictionaries/dictionaries.model';
import { switchMap } from 'rxjs/operators';
import { CreateFilterWorkplaceService } from './create-filter-workplace.service';
import { FilterComponent } from '@base/filters/filters/filter.component';
import { Subscribe } from '@core/decorators/subscribe.decorator';
import { ILabelGroups } from '@shared/http/models/database.model';
import { SettingsService } from '@shared/settings/settings.service';
import {IFilterCheckBoxOptions} from '@base/filters/models/filter-checkbox.model';
// @ts-ignore
import { WorkplaceTypesMap } from '@shared/common/utils/workplace.utils';
import { isSameDay, addDays } from 'date-fns';

@Component({
  selector: 'app-create-filters-workplace, [app-create-filters-workplace]',
  templateUrl: './create-filter-workplace.component.html',
  styleUrls: [ './create-filter-workplace.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-list-filter-workplace]': `true`
  },
  providers: [ CreateFilterWorkplaceService ]
})
export class CreateFilterWorkplaceComponent extends FilterComponent implements OnInit, OnDestroy {
  floorMapIdControl: FormControl;
  dateTimeFromControl: FormControl;
  dateTimeToControl: FormControl;
  tagsControl: FormControl;
  repeatControl: FormControl;
  groupControl: FormControl;
  labelsControl: FormControl;
  typesControl: FormControl;
  autoModeControl: FormControl;
  allDay = false;
  repeat = false;
  repeatData = {
    weekNum: 1,
    days: [],
    end: null
  };
  repeatDisable: boolean;
  weekNums = [1, 2, 3, 4, 5];
  daysNaming = [
    { label: 'Days.1', value: 1 },
    { label: 'Days.2', value: 2 },
    { label: 'Days.3', value: 3 },
    { label: 'Days.4', value: 4 },
    { label: 'Days.5', value: 5 },
    { label: 'Days.6', value: 6 },
    { label: 'Days.0', value: 0 },
  ];
  workHours = [];
  minDuration: number;
  endMaxDate: Record<string, any> = {};

  tagsStatus: Record<string, boolean> = {};
  typesCheckBoxOptions: IFilterCheckBoxOptions;

  @Subscribe<string>()
  dateFormat;

  @Subscribe<string>()
  dateTimeFormat;

  labelGroups: ILabelGroups[];

  tags;

  users: Record<string, any>;

  constructor(
    protected injector: Injector,
    private $service: CreateFilterWorkplaceService,
    private $settings: SettingsService,
    private _localization: LocalizationService,
    private _cdr: ChangeDetectorRef
  ) {
    super(injector);
    const startHour = this.$settings.getSettingByName('workplaceReservationBeginHourDefault');
    const endHour = this.$settings.getSettingByName('workplaceReservationEndHourDefault');

    this.workHours = [startHour, endHour];
    this.minDuration = this.$settings.getSettingByName('workplaceReservationDurationMinSeconds');
  }

  ngOnInit(): void {
    this.$service.formGroup = this.formGroup;
    this.assignControls();
    this.getFieldOptions();
    this.getWorkplaceTypes();
    this._getExtraData();
    this._setFullDay();
    this._watchDateTimeFrom();
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {}

  updateDateTime(dateTime: Date[]): void {
    this.dateTimeFromControl.setValue(dateTime[0]);
    this.dateTimeToControl.setValue(dateTime[1]);
    this.repeatDisable = !isSameDay(dateTime[0], dateTime[1]);
  }

  updateAllDayDate(date: Date): void {
    this._setFullDay();
  }

  updateTags(name: string): void {
    this.tagsStatus[name] = !this.tagsStatus[name];
    const tags = Object.entries(this.tagsStatus).filter(([_, status]) => status).map(([key]) => key);
    this.tagsControl.setValue(tags);
  }

  repeatCheckboxChange(): void {
    if (this.repeat) {
      this.repeatControl.setValue(this.repeatData);
    } else {
      this.repeatControl.setValue(null);
    }
  }

  chooseDays(event): void {
    this.repeatData.days = event;
    this.updateRepeatDays();
  }

  updateRepeatDays(): void {
    const end = this.repeatData.end || '';
    if (this.repeat) {
      this.repeatControl.setValue({
        ...this.repeatData,
        end
      });
    } else {
      this.repeatControl.setValue(null);
    }
  }

  updateLabelControls(): void {
    this.labelsControl.setValue(this.users.filter(u => u.checked).map(u => u.id));
  }

  getWorkplaceTypes(): void {
    this.typesCheckBoxOptions = mapCheckBoxOptions(WorkplaceTypesMap, 'value', 'name', this.typesControl);
  }

  private getFieldOptions(): void {
    this.dateFormat = this.$service.dateFormat$;
    this.dateTimeFormat = this.$service.dateTimeFormat$;
    this.$service.tags$.subscribe((tags) => {
      this.tagsStatus = tags.reduce((acc, el) => ({...acc, [el.name]: false}), {});
      this.tags = tags;
      this._cdr.markForCheck();
    });
  }

  private _setFullDay(): void {
    const minDuration = this.$settings.getSettingByName('workplaceReservationDurationMinSeconds') * 1000;
    const [start, end] = getInitDate(this.workHours, minDuration);
    this.dateTimeFromControl.setValue(start);
    this.dateTimeToControl.setValue(end);
  }

  private _getExtraData(): void {
    this.$service.groups$.subscribe((groups) => {
      this.labelGroups = groups;
      this.groupControl.setValue(groups[0].id);
      this._cdr.markForCheck();
    });
    this.groupControl.valueChanges.pipe(
      switchMap((groupId) => this.$service.getUserByGroupId(groupId))
    ).subscribe((users) => {
      this.labelsControl.setValue(users.map(u => u.id));
      this.users = mapCheckBoxOptions(users as IDictionary<any>, 'id', 'name', this.labelsControl);
      this._cdr.markForCheck();
    });
  }

  private _watchDateTimeFrom(): void {
    this.dateTimeFromControl.valueChanges.subscribe((value) => {
      const date = addDays(new Date(value), this.$settings.getSettingByName('workplaceReservationDurationMaxDays'));
      this.repeatData.end = date;
      this.endMaxDate = (_date: Date) => {
        return _date > date;
      };
    });
  }
}
