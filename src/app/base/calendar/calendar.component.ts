import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ICalendarEvents, ICalendarMonthViewDayClickEvent, ICalendarMonthViewEventClickEvent } from '@base/calendar/calendar.model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ReservationsCalendarDateFormatter } from '@src/app/base/calendar/calendar-formatter';
import { CalendarDateFormatter, CalendarEvent, CalendarMonthViewDay, CalendarView } from 'angular-calendar';
import { MonthViewDay } from 'calendar-utils';
import {
  addDays,
  addMonths,
  addWeeks,
  endOfDay,
  endOfMonth,
  endOfWeek,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
  subWeeks,
} from 'date-fns';
import { NzDateMode } from 'ng-zorro-antd/date-picker/standard-types';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-calendar, [app-calendar]',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.calendar]': `true`,
  },
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: ReservationsCalendarDateFormatter,
    },
  ],
})
export class CalendarComponent {
  public modesEnum: typeof CalendarView = CalendarView;

  @Input()
  public disablePast = false;

  @Input()
  public minDate: Date;

  @Input()
  public hourSegmentHeight = 30;

  @Input()
  public loading: boolean = false;

  @Input()
  public locale: string = 'ru';

  @Input()
  public mode: CalendarView = CalendarView.Month;

  @Input()
  public modes: CalendarView[] = [CalendarView.Month, CalendarView.Day];

  @Input()
  public workHours: number[] = [6, 22];

  @Input()
  public reservationPreviewTpl: TemplateRef<any> | null = null;

  @Input()
  public events: ICalendarEvents = [];

  @Input()
  public date: Date = new Date();

  @Input()
  public enableModeSwitch: boolean = true;

  @Input()
  public availableSwitchModeOnSelectDay: boolean = true;

  @Input()
  public allowSelectEmptyDay: boolean = false;

  @Input()
  public allowSelectMonthEvent: boolean = true;

  @Input()
  public allowSelectWeekEvent: boolean = true;

  @Input()
  public allowSelectDayEvent: boolean = false;

  @Output()
  public daySelect: EventEmitter<Date> = new EventEmitter<Date>();

  @Output()
  public modeChange: EventEmitter<CalendarView> = new EventEmitter<CalendarView>();

  @Output()
  public eventSelect: EventEmitter<CalendarEvent> = new EventEmitter<CalendarEvent>();

  @Output()
  public periodChange: EventEmitter<[Date, Date]> = new EventEmitter<[Date, Date]>();

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2,
    private _translate: TranslatePipe,
    private _translateService: TranslateService,
  ) {}

  @ViewChild('dateDropdown', { read: NzDropDownDirective })
  public dateDropdown: NzDropDownDirective;

  public get startOfWeek(): Date {
    return startOfWeek(this.date);
  }

  public get endOfWeek(): Date {
    return endOfWeek(this.date);
  }

  public get datePickerMode(): NzDateMode {
    switch (this.mode) {
      case CalendarView.Day:
        return 'date';

      case CalendarView.Week:
        return 'week';

      case CalendarView.Month:
        return 'month';
    }
  }

  public get nextTooltip(): string {
    switch (this.mode) {
      case CalendarView.Day:
        return 'NextDay';

      case CalendarView.Week:
        return 'NextWeek';

      case CalendarView.Month:
        return 'NextMonth';
    }
  }

  public get prevTooltip(): string {
    switch (this.mode) {
      case CalendarView.Day:
        return 'PrevDay';

      case CalendarView.Week:
        return 'PrevWeek';

      case CalendarView.Month:
        return 'PrevMonth';
    }
  }

  public get isToday(): boolean {
    return isToday(this.date);
  }

  public changeDate(date): void {
    this.date = date;
    this.dateDropdown.nzVisible = false;
    this.changePeriod();
  }

  public changeMode(mode): void {
    const isChangePeriod = this.mode === CalendarView.Day || (this.mode === CalendarView.Week && mode === CalendarView.Month);

    this.mode = mode;
    this.modeChange.emit(mode);

    if (isChangePeriod) {
      this.changePeriod();
    }
    this._incertAllDay();
  }

  private _incertAllDay() {
    setTimeout(() => {
      const elements = this.elem.nativeElement.querySelectorAll('.cal-time-label-column');
      if (elements.length) {
        this.renderer.setProperty(elements[0], 'innerHTML', this._translate.transform('All day'));
      }
    }, 200);
  }

  public prev(): void {
    switch (this.mode) {
      case CalendarView.Day:
        this.date = subDays(this.date, 1);
        break;

      case CalendarView.Week:
        this.date = subWeeks(this.date, 1);
        break;

      case CalendarView.Month:
        this.date = subMonths(this.date, 1);
    }
    this.changePeriod();
  }

  public today(): void {
    this.date = new Date();
    this.changePeriod();
  }

  public next(): void {
    switch (this.mode) {
      case CalendarView.Day:
        this.date = addDays(this.date, 1);
        break;

      case CalendarView.Week:
        this.date = addWeeks(this.date, 1);
        break;

      case CalendarView.Month:
        this.date = addMonths(this.date, 1);
    }
    this.changePeriod();
  }

  public selectDay({ day }: ICalendarMonthViewDayClickEvent): void {
    const { date, events }: MonthViewDay<any> = day;
    this.date = new Date(date);
    this.daySelect.emit(date);

    if (!this.availableSwitchModeOnSelectDay || (!this.allowSelectEmptyDay && !events.length)) {
      return;
    }
    this.changeMode(CalendarView.Day);
  }

  public selectEvent({ event, sourceEvent }: ICalendarMonthViewEventClickEvent, allow: boolean = true): void {
    sourceEvent.stopPropagation();
    if (!allow) return;
    this.eventSelect.emit(event);
  }

  public changePeriod(): void {
    let period: [Date, Date];

    switch (this.mode) {
      case CalendarView.Day:
        period = [startOfDay(this.date), endOfDay(this.date)];
        break;

      case CalendarView.Week:
        period = [startOfWeek(this.date), endOfWeek(this.date)];
        break;

      case CalendarView.Month:
        period = [startOfMonth(this.date), endOfMonth(this.date)];
        break;
    }
    this._incertAllDay();
    this.periodChange.emit(period);
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach((day) => {
      day.badgeTotal = day.events.filter((event) => (event.meta ? event.meta.incrementsBadgeTotal : true)).length;
      day.events = day.events.filter((event) => (event.meta ? event.meta.showOnMonthView !== false : true));

      if (!this.dateIsValid(day.date)) {
        day.cssClass = 'cal-disabled';
      }
    });
  }

  dateIsValid(date: Date): boolean {
    return this.minDate ? date >= this.minDate : true;
  }

  hourSegmentModifier(data) {
    if (this.disablePast) {
      data.hourColumns[0].hours.forEach((hour) => {
        hour.segments.forEach((element) => {
          element.cssClass = 'cal-day-segment-disabled';
        });
      });
    }
  }

  get currentLocale() {
    return this._translateService.currentLang;
  }
}
