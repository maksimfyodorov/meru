import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { UserCardService } from '@composite/user-card/user-card.service';
import { Subscription } from 'rxjs';
import { Subscriptions } from '@core/decorators/subscriptions.decorator';
import { MessagesService } from '@core/services/messages.service';
import { CardEditModeEvent, ICard } from '@base/card/card.model';
import { FormBuilder } from '@angular/forms';
import { UserService } from '@src/app/core/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less'],
  providers: [UserCardService, FormBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent implements OnInit, OnDestroy {
  private _userId: number;
  @Subscriptions()
  sub: Subscription;
  userCard: ICard = this.$service.default();

  editModeEnabled: boolean = false;

  @Input()
  set userId(value: number) {
    this._userId = value;
    if (value) {
      this.$service
        .userData(value)
        .then((_user) => {
          this.userCard = this.$service.convertUserToCard();
        })
        .catch(() => {
          this.userCard = this.$service.default();
          this.$messages.error(`Пользователь ${value} не найден`);
        })
        .finally(() => this.cdr.markForCheck());
    }
  }

  constructor(
    public $service: UserCardService,
    public $userService: UserService,
    private $messages: MessagesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub = this.$service.user$.subscribe((value) => {
      if (value) {
        this.userCard = this.$service.convertUserToCard();
        this.cdr.markForCheck();
      }
    });
  }

  onEditModeChange(cardEditModeEvent: CardEditModeEvent): void {
    switch (cardEditModeEvent) {
      case CardEditModeEvent.Enable:
        this.editModeEnabled = true;
        break;
      case CardEditModeEvent.Save:
        this.saveEditState();
        break;
      case CardEditModeEvent.Cancel:
        this.cancelEditMode();
        break;

      default:
        break;
    }
  }

  get showEditControls(): boolean {
    return this.$userService.info.id === this._userId;
  }

  private saveEditState(): void {
    this.editModeEnabled = false;
    this.sub = this.$service
      .updateUserData(this._userId, this.userCard.form.value)
      .subscribe();
  }

  private cancelEditMode(): void {
    this.editModeEnabled = false;
    this.userCard.form.reset(this.$service.user);
  }

  public ngOnDestroy(): void {}
}
