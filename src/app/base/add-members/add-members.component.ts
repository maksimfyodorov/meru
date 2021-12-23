import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef, ViewChild } from '@angular/core';
import { AddMembersService } from '@base/add-members/add-members.service';
import { IAppointment, IUser } from '@shared/http/models/database.model';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { Subscription } from 'rxjs';
import { Debounce } from '@core/decorators/debounce.decorator';
import { IAddMembersItem } from '@base/add-members/add-members.model';
import { NzPopoverDirective } from 'ng-zorro-antd/popover';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DEFAULT_USER_AVATAR } from '@shared/http/utils/images.const';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMembersComponent implements OnInit {
  private _items: IAddMembersItem[] = [];
  DEFAULT_USER_AVATAR: string = DEFAULT_USER_AVATAR;
  value: string = '';
  allUsers: IUser[] = [];
  users: IUser[] = [];
  activeUser: IUser;
  @Subscriptions()
  sub: Subscription;
  validateForm: FormGroup;
  popoverVisible: boolean = false;
  @ViewChild('popover', { read: NzPopoverDirective }) popover: NzPopoverDirective;
  @Input() appointment: IAppointment;
  @Input()
  set items(value) {
    this._items = [...value];
    this.$service.emails = value.map((i) => i.value);
  }
  get items(): IAddMembersItem[] {
    return this._items;
  }
  @Output() itemsChange: EventEmitter<IAddMembersItem[]> = new EventEmitter<IAddMembersItem[]>();
  constructor(private $service: AddMembersService, private cdr: ChangeDetectorRef, private fb: FormBuilder) {
    this.sub = $service.users$.subscribe((users) => {
      this.allUsers = users;
      this.cdr.markForCheck();
    });
    this.validateForm = this.fb.group({
      mail: ['', Validators.email],
    });
  }
  ngOnInit(): void {}
  removeItem(item: IAddMembersItem): void {
    this.itemsChange.emit(this.items.filter((i) => i.value !== item.value));
  }
  @Debounce(300)
  searchUsers(value: string): void {
    if (value.length) {
      this.users = this.allUsers.filter(
        (user) => user.name?.toLowerCase().includes(value.toLowerCase()) || user.mail?.toLowerCase().includes(value.toLowerCase()),
      );
    } else {
      this.users = [];
    }
    this.cdr.markForCheck();
  }
  get isFound(): boolean {
    return this.users.length > 0;
  }
  submit(event: Event): void {
    event.preventDefault();
    if (this.value.trim()) {
      if (this.validateForm.valid) {
        this._items.push({ label: this.value, value: this.value });
        this.$service.emails = this.items.map((i) => i.value);
        this.itemsChange.emit(this.items);
        this.value = '';
        this.popoverVisible = false;
      }
    }
  }
  addUser(member: IAddMembersItem): void {
    if (!this.items.find((i) => i.value === member.value) && member.value.trim()) {
      this.sub = this.$service
        .checkAppointmentAttendeesAvailability$(
          this.appointment?.appointmentDateFrom,
          this.appointment?.appointmentDateTo,
          [member.value],
          this.appointment.appointmentParentId,
        )
        .subscribe((check) => {
          this._items.push({ ...member, theme: check[0]?.availabilityStatus ? 'blue' : 'red' });
          this.$service.emails = this.items.map((i) => i.value);
          this.itemsChange.emit(this.items);
        });
    }
  }
  popoverVisibleChange(): void {
    this.popoverVisible = !this.popoverVisible;
  }
  setActiveUser(user: IUser): void {
    this.activeUser = user;
  }
  addUserInSearch(user: IUser): void {
    this.addUser({ label: user.name, value: user.mail });
    this.popoverVisible = false;
    this.value = '';
  }
  tagMode(email: string): 'default' | 'closeable' | 'checkable' {
    return email === this.appointment.appointmentOrganizerMail ? 'default' : 'closeable';
  }
}
