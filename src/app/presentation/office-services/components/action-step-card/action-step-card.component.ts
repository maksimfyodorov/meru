import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import {
  StepAction,
  StepParam,
} from '@shared/office-services/models/order-services.model';

@Component({
  selector: 'action-step-card',
  templateUrl: './action-step-card.component.html',
  styleUrls: ['./action-step-card.component.less'],
})
export class ActionStepCardComponent implements OnChanges {
  @Input()
  public action: StepAction;

  @Input()
  public title = '';

  @Input()
  public dateTimeFormat;

  @Input()
  public isLoading: boolean;

  @Input()
  public showActionTmpl: boolean;

  @Output()
  public nextAction: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public commitSession: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public cancelSession: EventEmitter<void> = new EventEmitter<void>();

  stepForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _translatePipe: TranslatePipe
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.action && changes.action.currentValue) {
      this.createForm();
    }
  }

  getTitle(): string {
    return this.isLastStep
      ? this.title + this._translatePipe.transform('checking the entered data')
      : this.title + this._translatePipe.transform('step') + this.stepNumber;
  }

  get currentStepParams(): StepParam[] {
    return this.action ? this.action.params : [];
  }

  get isLastStep(): boolean {
    return this.action ? this.action.isLastStep : false;
  }

  get stepNumber(): number {
    return this.action ? this.action.step : 1;
  }

  get displayedStepParams(): StepParam[] {
    return this.currentStepParams.filter(
      (stepParam) =>
        stepParam.dataType.type === 'STRING' ||
        stepParam.dataType.type === 'INTEGER' ||
        stepParam.dataType.type === 'DICTIONARY' ||
        stepParam.dataType.type === 'DATETIME'
    );
  }

  createForm(): void {
    this.stepForm = this.formBuilder.group({
      params: this.formBuilder.array(this.createParams(this.currentStepParams)),
    });
  }

  createParams(params: StepParam[]): FormGroup[] {
    return params
      ? params.map((param) => {
          let validator = [];
          if (param.isOptional == false) {
            validator.push(Validators.required);
          }
          return this.formBuilder.group({
            field: new FormControl(null, validator),
          });
        })
      : [];
  }

  actionNext(): void {
    this.nextAction.emit();
  }

  actionCommit(): void {
    this.commitSession.emit();
  }

  actionCancel(): void {
    this.cancelSession.emit();
  }
}
