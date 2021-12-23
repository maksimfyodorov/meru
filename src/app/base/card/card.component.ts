import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  TemplateRef,
} from '@angular/core';
import { CardEditModeEvent, CardType, IDescription } from './card.model';
import { CardService } from '@base/card/card.service';
import { CardFormControlDirective } from './card-form-control.directive';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CALENDAR_ICON, EDIT_ICON } from '@src/app/shared/http/utils/images.const';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  providers: [CardService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements AfterContentInit {
  CALENDAR_ICON = CALENDAR_ICON;
  EDIT_ICON = EDIT_ICON;
  @Input() public title = this.$service.card.title;
  @Input() public width = this.$service.card.width;
  @Input() public image = this.$service.card.image;
  @Input() public descriptionList: IDescription[] = this.$service.card.descriptionList;
  @Input() public tags: string[] = this.$service.card.tags;
  @Input() type: CardType = 'flex';
  @Input() public showEditControls: boolean = false;
  @Input() public editModeEnabled: boolean = false;
  @Input() public loading: boolean = false;
  @Input() public cardForm: FormGroup = new FormGroup({});
  @Input() public calendarLink: string;
  @Input() public canEditTitle = false;

  @Output() public editModeChange: EventEmitter<CardEditModeEvent> = new EventEmitter();
  @Output() public editTitle: EventEmitter<null> = new EventEmitter();

  @ContentChildren(CardFormControlDirective)
  formControls: QueryList<CardFormControlDirective>;
  readonly formControlsHash: Record<string, TemplateRef<unknown>> = {};

  constructor(private $service: CardService, private route: Router) {}

  ngAfterContentInit() {
    this.formControls.forEach((item) => (this.formControlsHash[item.name] = item.templateRef));
  }

  enableEditMode() {
    this.editModeChange.emit(CardEditModeEvent.Enable);
  }
  saveEdit() {
    this.editModeChange.emit(CardEditModeEvent.Save);
  }
  cancelEdit() {
    this.editModeChange.emit(CardEditModeEvent.Cancel);
  }
  onLink(link: string) {
    this.route.navigate([link]);
  }
  onEditTitle() {
    this.editTitle.emit(null);
  }
}
