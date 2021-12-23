import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { IDescription } from '@base/card/card.model';
import { IComment } from '@base/comments/comments.model';
import { getStatus } from '@presentation/reservations/utils/reservation';
import { DatePipe, formatDate } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { UserService } from '@core/services/user.service';
import { IStep } from '@base/steps/steps.model';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { MeasurementsService } from '@shared/dictionaries/services/measurements.service';
import { DEFAULT_WORKPLACE_CARD, DEFAULT_WORKPLACE_CARD_MOBILE, RIGHT_ARROW } from '@shared/http/utils/images.const';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { getTypeName, getTypeName as getTypeNameWorkspace } from '@shared/common/utils/workplace.utils';
import { first, map } from 'rxjs/operators';
import { getTypeName as getTypeNameAppointment } from '@shared/common/utils/appointment.utils';
import { ReservationType } from '@shared/http/models/meta.model';
import { IAppointment, IRoom, IUser } from '@shared/http/models/database.model';
import { IAddMembersItem } from '@base/add-members/add-members.model';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { ReservationsApiService } from '@shared/http/services/reservations-api.service';
import { ConfigService } from '@src/app/core/services/config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';
import { NotificationsService } from '@src/app/core/services/notifications.service';
import { copyTextToClipboard } from '@src/app/shared/common/utils/reservations.util';
import { NzModalService } from 'ng-zorro-antd/modal';
import { InnerWidthService } from '@src/app/core/services/inner-width.service';
import { ReservationViewService } from './reservation-view.service';
@Component({
  selector: 'app-reservation-view',
  templateUrl: './reservation-view.component.html',
  styleUrls: ['./reservation-view.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ReservationViewService],
})
export class ReservationViewComponent implements OnInit, OnChanges, OnDestroy {
  RIGHT_ARROW = RIGHT_ARROW;
  imageUrl: string = DEFAULT_WORKPLACE_CARD;
  imageMobileUrl: string = DEFAULT_WORKPLACE_CARD_MOBILE;
  statusSteps: IStep[] = [];
  stepsTarget: number;
  descriptionList: IDescription[] = [];
  comments: IComment[] = [];
  dateTimeFormat: string;
  tags: Observable<string[]>;
  users: IUser[];
  nornikAplana = false;
  adminCancelReservation = false;
  appointmentStatusVisible = true;
  serviceDrivers: Params[] = [];
  @Subscriptions()
  private sub: Subscription;
  private _placeType: ReservationType;

  @ViewChild('shortInfoNameTpl') shortInfoNameTpl: TemplateRef<any>;
  @ViewChild('shortInfoValueTpl') shortInfoValueTpl: TemplateRef<any>;

  @ViewChild('modalTitleTpl') modalTitleTpl: TemplateRef<any>;
  @ViewChild('modalContentTpl') modalContentTpl: TemplateRef<any>;
  @ViewChild('modalFooterTpl') modalFooterTpl: TemplateRef<any>;

  @ViewChild('footer', { static: false }) footer: ElementRef;

  loading = false;

  meetingSubject: string;

  statuses: any;
  status: string;

  contentStep = 0;

  constructor(
    private $user: UserService,
    private $dicts: DictionariesService,
    private _measurementsService: MeasurementsService,
    private _cdr: ChangeDetectorRef,
    private $api: ReservationsApiService,
    private $notifications: NotificationsService,
    private $config: ConfigService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private _translatePipe: TranslatePipe,
    private _modal: NzModalService,
    private _innerWidthService: InnerWidthService,
    private _service: ReservationViewService,
  ) {
    this.sub = this._activatedRoute.queryParams.subscribe(({ step }) => {
      this.contentStep = +step || 0;
      this._cdr.markForCheck();
    });
    this.sub = $dicts.getDictionary<IUser[]>('labels').subscribe((users) => {
      this.users = users;
    });
    this._service.statuses$.pipe(first()).subscribe((statuses) => {
      this.statuses = { map: statuses };
      this._cdr.markForCheck();
    });
    this.serviceDrivers = this.$config.get<Params[]>('serviceDrivers');
    this.nornikAplana = this.$config.get<boolean>('nornikAplana') === true;
    this.adminCancelReservation = this.$config.get<boolean>('adminCancelReservation') === true;
    this.appointmentStatusVisible = this.$config.get<boolean>('appointmentStatusVisible') === true;
    this.dateTimeFormat = this._measurementsService.getMeasurementByName('dateTime');
  }

  @Input() reservation: any = null;
  @Input() workplace: any = null;
  @Input() appointment: IAppointment = null;
  @Input() rooms: IRoom[] = [];
  @Input() showLabelName: boolean = false;

  @Input()
  set placeType(value: ReservationType) {
    this._placeType = value;
  }

  get placeType(): ReservationType {
    return this._placeType;
  }

  @Output() confirmReservation: EventEmitter<void> = new EventEmitter<void>();
  @Output() completeReservation: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelReservation: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteAppointment: EventEmitter<void> = new EventEmitter<void>();
  @Output() closeAppointment: EventEmitter<void> = new EventEmitter<void>();
  @Output() confirmAppointment: EventEmitter<void> = new EventEmitter<void>();
  @Input() isLoadingOperation = false;

  members: IAddMembersItem[] = [];

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.placeType === 'workplace' || this.placeType === 'parking') {
      if (changes?.reservation?.currentValue && changes?.workplace?.currentValue) {
        this.setComments();
      }
    }
    if (this.placeType === 'appointment') {
      if (changes?.appointment?.currentValue && changes?.rooms?.currentValue) {
        this.setMembers();
      }
    }

    this.setDescriptionList();
    this.setImageUrl();
    this.setStatusSteps();
    this.setTags();
  }

  title(type: ReservationType): string {
    switch (type) {
      case 'workplace':
      case 'parking':
        return `${this._translatePipe.transform('Place')} ${this.workplace?.name}`;

      case 'appointment':
        return this.appointment?.appointmentSubject;

      default:
        return '-';
    }
  }

  get room(): IRoom {
    return this.rooms && this.rooms[0];
  }

  setDescriptionList(): void {
    this.descriptionList = [];
    if ((this.placeType === 'workplace' || this.placeType === 'parking') && this.workplace && this.reservation) {
      this.descriptionList.push({ name: 'Type', value: getTypeNameWorkspace(this.workplace.type) });
      this.status = this.reservation.status;
      this.descriptionList.push({
        name: 'Status',
        value: `${getStatus(this.reservation.status)}`,
      });
      if (new Date(this.reservation.dateTimeCanceled) < new Date(this.reservation.dateTimeTo)) {
        this.descriptionList.push({
          name: 'Date close',
          value: `${this._getDateTimeFormatDate(this.reservation.dateTimeCanceled)}`,
        });
      }
      this.descriptionList.push(
        {
          name: 'Start',
          value: this._getDateTimeFormatDate(this.reservation.dateTimeFrom),
        },
        {
          name: 'End',
          value: this._getDateTimeFormatDate(this.reservation.dateTimeTo),
        },
        {
          name: 'Building',
          value: this.reservation.floor,
        },
      );
      if (this.showLabelName) {
        this.$dicts.getDictionaryItemByKey('labels', this.reservation.labelId).subscribe((label) => {
          this.descriptionList.unshift({
            name: 'User',
            value: label.name,
            link: `/team/profiles/${this.reservation.labelId}`,
          });
          this._cdr.markForCheck();
        });
      }
    }
    // if (this.placeType === 'appointment' && this.appointment && this.room) { @Kholodov проверить room
    if (this.placeType === 'appointment' && this.appointment) {
      this.status = this.appointment.appointmentStatus;
      this.descriptionList = [
        { name: 'Type', value: 'Meeting room' },
        {
          name: 'Status',
          value: getStatus(this.appointment.appointmentStatus),
        },
        {
          name: 'Start',
          value: this._getDateTimeFormatDate(new Date(this.appointment.appointmentDateFrom)),
        },
        {
          name: 'End',
          value: this._getDateTimeFormatDate(new Date(this.appointment.appointmentDateTo)),
        },
        {
          name: 'Room',
          value: this.appointment.appointmentLocationString,
        },
      ];

      if (!this.isOrganizer && this.appointmentOrganizer) {
        this.descriptionList.push({
          name: 'Organizer',
          value: this.appointmentOrganizer.name,
          link: 'team/profiles/' + this.appointmentOrganizer.id?.toString(),
        });
      }

      this.descriptionList.push({
        name: 'Meeting indicator',
        nameTpl: this.shortInfoNameTpl,
        value: this.appointment.appointmentParentId,
        valueTpl: this.shortInfoValueTpl,
      });
    }
    this._cdr.markForCheck();
  }

  setImageUrl(): void {
    this.imageUrl = this.room?.avatarImageUrl ? this.room?.avatarImageUrl : DEFAULT_WORKPLACE_CARD;
  }

  setStatusSteps(): void {
    if ((this.placeType === 'workplace' || this.placeType === 'parking') && this.reservation) {
      this.stepsTarget = 0;
      this.statusSteps = [
        {
          title: getStatus('new'),
          description: this._getDateTimeFormatDate(this.reservation.dateTimeCreated),
        },
      ];
      if (this.reservation.status === 'DENIED') {
        this._addStep('Denied');
      } else if (this.reservation.status === 'REFUSED') {
        this._addStep('Refused');
      } else {
        this._addStep('Approved');
        this._addStep('Confirmed');
        if (this.reservation.status === 'CANCELED') {
          this._addStep('Canceled');
        } else {
          this._addStep('Closed');
        }
      }
    }

    if (this.placeType === 'appointment') {
      this.statusSteps.length = 0;
      this.stepsTarget = getTypeNameAppointment(name)?.order ?? 0;
      this._addStepAppointment('NEW');
      this._addStepAppointment('CONFIRMED');
      this._addStepAppointment('DECLINED');
    }
  }

  setTags(): void {
    if (!this.workplace?.tags?.length && !this.room?.tags?.length) {
      this.tags = of([]);
    }
    if (this.workplace?.tags?.length) {
      this.tags = forkJoin([
        ...this.workplace.tags.map((tagId) => this.$dicts.getDictionaryItemByKey<{ name: string }>('tags', tagId, '')),
      ]).pipe(map((tags: { name: string }[]) => tags.map((tag) => tag.name)));
    }
    if (this.room?.tags?.length) {
      this.tags = forkJoin([
        ...this.room.tags.map((tagId) => this.$dicts.getDictionaryItemByKey<{ name: string }>('tags', tagId, '')),
      ]).pipe(map((tags: { name: string }[]) => tags.map((tag) => tag.name)));
    }
  }

  setComments(): void {
    if (this.reservation.approvalComment) {
      this.$dicts.getDictionaryItemByKey('labels', this.reservation.labelIdApprovalManager).subscribe((label) => {
        this.comments = [
          {
            content: this.reservation.approvalComment,
            avatar: label.avatarImageUrl,
            author: label.name,
            datetime: new Date(this.reservation.dateTimeApproved),
          },
        ];
      });
    }
  }

  setMembers(): void {
    if (!this.nornikAplana) {
      this.sub = this.$api
        .checkAppointmentAttendeesAvailability(
          this.appointment?.appointmentDateFrom,
          this.appointment?.appointmentDateTo,
          this.appointment?.appointmentAttendees,
          this.appointment?.appointmentParentId,
        )
        .subscribe((check) => {
          this.appointment.appointmentAttendees = this.appointment.appointmentAttendees.filter(
            (mail) => (!this.room || mail !== this.room.ewsMail) && mail !== this.appointment.appointmentOrganizerMail,
          );
          this.appointment.appointmentAttendeesAnswers = this.appointment.appointmentAttendeesAnswers.filter(
            (answer) => (!this.room || !answer[this.room.ewsMail]) && !answer[this.appointment.appointmentOrganizerMail],
          );
          this.members = this.appointment.appointmentAttendees.map((mail, index) => {
            const findUser = this.users.find((u) => u.mail === mail);
            const status = check?.find((s) => s.attendeeId === mail);
            if (findUser) {
              return {
                label: findUser.name,
                value: mail,
                theme: status?.availabilityStatus ? 'blue' : 'red',
                answer: this.appointment.appointmentAttendeesAnswers[index][mail],
              };
            } else {
              return {
                label: mail,
                value: mail,
                theme: status?.availabilityStatus ? 'blue' : 'red',
                answer: this.appointment.appointmentAttendeesAnswers[index][mail],
              };
            }
          });
          this._cdr.markForCheck();
        });
    }
  }

  private _addStep(name: string): void {
    const step: IStep = { title: getStatus(name) };
    const statusesToIncStep = ['Canceled', 'Denied', 'Refused'];
    const time = this.reservation[`dateTime${name}`] ? this._getDateTimeFormatDate(this.reservation[`dateTime${name}`]) : '';
    if (time) {
      step.description = time;
      this.stepsTarget++;
    }
    if (statusesToIncStep.includes(name)) {
      this.stepsTarget++;
    }
    this.statusSteps.push(step);
  }

  private _addStepAppointment(name: string): void {
    const step: IStep = { title: getTypeNameAppointment(name)?.name };
    this.statusSteps.push(step);
  }

  saveAppointmentEmails(items: IAddMembersItem[]): void {
    this.loading = true;
    const emails = items.map((i) => i.value);
    this.sub = this.$api.saveAppointmentEmails(this.appointment.appointmentId, emails).subscribe((r) => {
      this.loading = false;
      this._cdr.markForCheck();
    });
  }

  onSaveAppointmentSubject() {
    this.meetingSubject = this.appointment.appointmentSubject;
    this._modal.create({
      nzTitle: this.modalTitleTpl,
      nzContent: this.modalContentTpl,
      nzFooter: this.modalFooterTpl,
    });
  }

  saveAppointmentSubject() {}

  ngOnDestroy(): void {}

  checkReservationStatus(statuses: string[]): boolean {
    return this.reservation && statuses.includes(this.reservation.status);
  }

  copyText(text: string): void {
    copyTextToClipboard(text);
    this.$notifications.success('Success', 'CopiedToClipBoard');
  }

  get isOrganizer() {
    return this.$user.isAppointmentOrganizer(this.appointment);
  }

  get appointmentAttendeeStatus(): string {
    return this.appointment?.appointmentAttendeeStatus;
  }

  get appointmentStatus(): string {
    return this.appointment?.appointmentStatus;
  }

  public confirm(): void {
    this.confirmReservation.emit();
  }

  public complete(): void {
    this.completeReservation.emit();
  }

  onDeleteAppointment() {
    this.deleteAppointment.emit();
  }
  onCloseAppointment() {
    this.closeAppointment.emit();
  }
  onConfirmAppointment() {
    this.confirmAppointment.emit();
  }

  get appointmentOrganizer(): IUser {
    return this.users.find((u) => u.mail === this.appointment.appointmentOrganizerMail);
  }

  public cancel(): void {
    this.cancelReservation.emit();
  }

  private _getDateTimeFormatDate(date: Date): string {
    return this.datePipe.transform(date, this.dateTimeFormat);
  }
  cancelModal() {
    this._modal.closeAll();
  }

  get isSmallScreen() {
    return this._innerWidthService.isSmallScreen;
  }

  nextStep() {
    this._router.navigate([this._router.url], { queryParams: { step: 1 } });
  }

  get contentHeight() {
    let str = 'calc(100vh - ';
    if (this.footer && this.footer.nativeElement) {
      str += `${this.footer.nativeElement.offsetHeight + 120}px)`;
    } else {
      str += `120px)`;
    }
    return str;
  }
}
