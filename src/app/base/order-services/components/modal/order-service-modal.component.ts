import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { BehaviorSubject, Subscription } from 'rxjs';
import {
  Scenario,
  StepAction,
  StepParam,
} from '../../../../shared/office-services/models/order-services.model';
import { ServiceStepType } from '../../../../shared/office-services/models/service-step-type.enum';
import { OrderServicesService } from '../../../../shared/office-services/order-services.service';

@Component({
  selector: 'app-order-service-modal',
  templateUrl: './order-service-modal.component.html',
  styleUrls: ['./order-service-modal.component.less'],
  providers: [OrderServicesService],
})
export class OrderServiceModalComponent implements OnInit {
  @Subscriptions()
  sub: Subscription;

  stepType: ServiceStepType = ServiceStepType.INITIAL;
  ServiceStepType = ServiceStepType;
  selectedScenario: Scenario;
  loading = new BehaviorSubject<boolean>(null);

  scenarios: Scenario[] | undefined;
  actions: StepAction[] = [];

  stepForm: FormGroup;
  url: string;

  public dateTimeFormat;

  constructor(
    private modal: NzModalRef,
    private orderService: OrderServicesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.sub = this.orderService.getK2Scenarios().subscribe((scenarios) => {
      this.scenarios = scenarios;
      this.loading.next(false);
    });
    this.dateTimeFormat = this.orderService.dateTimeFormat$;
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

  nextAction(): void {
    if (this.actions && this.actions.length > 0) {
      this.getNextStep();
    } else {
      this.selectScenario();
    }
  }

  selectScenario(): void {
    this.loading.next(true);
    this.sub = this.orderService
      .openK2Session(this.selectedScenario?.id)
      .subscribe((action) => {
        this.addNewStepAction(action);
      });
  }

  getNextStep(): void {
    this.loading.next(true);
    this.sub = this.orderService
      .putK2SessionStep(this.currentStepAction)
      .subscribe((action) => {
        this.addNewStepAction(action);
      });
  }

  commitSession(): void {
    this.loading.next(true);
    this.sub = this.orderService
      .commitK2Session(this.uuid)
      .subscribe((resultStatus) => {
        this.url = resultStatus.data.k2RequestUrl;
        this.destroyModal(resultStatus.success);
        this.loading.next(false);
      });
  }

  private addNewStepAction(newAction: StepAction): void {
    this.actions.push(newAction);
    this.createForm();
    this.stepType = this.isLastStep
      ? ServiceStepType.COMPLETE
      : ServiceStepType.PROCESS;
    this.loading.next(false);
  }

  get currentStepAction(): StepAction | undefined {
    return this.actions ? this.actions.slice().pop() : undefined;
  }

  get isLastStep(): boolean {
    return this.currentStepAction ? this.currentStepAction.isLastStep : false;
  }

  get currentStepParams(): StepParam[] {
    return this.currentStepAction ? this.currentStepAction.params : [];
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

  get uuid(): string | undefined {
    return this.currentStepAction ? this.currentStepAction.uuid : undefined;
  }

  get stepNumber(): number {
    return this.currentStepAction ? this.currentStepAction.step : 0;
  }

  get title(): string {
    switch (this.stepType) {
      case ServiceStepType.INITIAL:
        return ' | Выберите сценарий';
      case ServiceStepType.COMPLETE:
      case ServiceStepType.PROCESS:
        return this.selectedScenario && this.selectedScenario.description
          ? ' | ' +
              this.selectedScenario.description +
              ', шаг ' +
              this.stepNumber
          : '';
      default:
        return '';
    }
  }

  destroyModal(resultStatus?: boolean): void {
    this.modal.destroy({ resultStatus, k2RequestUrl: this.url });
  }
}
