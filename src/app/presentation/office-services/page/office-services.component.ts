import { TemplateRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscriptions } from '@src/app/core/decorators/subscriptions.decorator';
import { PerfectScrollDirective } from '@src/app/core/directives/perfect-scroll.directive';
import { LayoutSharedService } from '@src/app/layout/layout-shared.service';
import {
  Scenario,
  StepAction,
} from '@src/app/shared/office-services/models/order-services.model';
import { ServiceStepType } from '@src/app/shared/office-services/models/service-step-type.enum';
import { OrderServicesService } from '@src/app/shared/office-services/order-services.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-office-services',
  templateUrl: './office-services.component.html',
  styleUrls: ['./office-services.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderServicesService],
})
export class OfficeServicesomponent implements OnInit {
  @Subscriptions()
  sub: Subscription;

  loading = new BehaviorSubject<boolean>(null);

  stepType: ServiceStepType = ServiceStepType.INITIAL;
  ServiceStepType = ServiceStepType;

  scenarios: Scenario[] | undefined;
  selectedScenario: Scenario | undefined;

  actions: StepAction[] = [];

  url: string;

  stepForm: FormGroup;
  public dateTimeFormat;

  @ViewChild(PerfectScrollDirective) scroll: PerfectScrollDirective;

  @ViewChild('successUrlTpl') successUrlTpl: TemplateRef<any>;

  constructor(
    private cdr: ChangeDetectorRef,
    private orderService: OrderServicesService,
    private layoutService: LayoutSharedService,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.loading.next(true);
    this.sub = this.orderService.getK2Scenarios().subscribe((scenarios) => {
      this.scenarios = scenarios;
      this.loading.next(false);
      this.cdr.detectChanges();
    });
    this.dateTimeFormat = this.orderService.dateTimeFormat$;
  }

  get currentStepAction(): StepAction | undefined {
    return this.actions ? this.actions.slice().pop() : undefined;
  }

  get uuid(): string | undefined {
    return this.currentStepAction ? this.currentStepAction.uuid : undefined;
  }

  getScenarioButtonType(scenario: Scenario): string {
    return this.selectedScenario?.id === scenario?.id ? 'primary' : 'default';
  }

  nextAction(): void {
    if (this.actions && this.actions.length > 0) {
      this.getNextStep();
    } else {
      this.startScenario();
    }
  }

  getNextStep(): void {
    this.loading.next(true);
    this.sub = this.orderService
      .putK2SessionStep(this.currentStepAction)
      .subscribe((action) => {
        this.addNewStepAction(action);
      });
  }

  startScenario() {
    this.loading.next(true);
    this.sub = this.orderService
      .openK2Session(this.selectedScenario?.id)
      .subscribe((action) => {
        this.addNewStepAction(action);
      });
  }

  selectScenario(scenario: Scenario): void {
    if (this.actions?.length > 0) {
      return;
    }
    this.selectedScenario = scenario;
  }

  private addNewStepAction(newAction: StepAction): void {
    if (newAction) {
      this.actions.push(newAction);
    }
    this.loading.next(false);
    this.cdr.detectChanges();
  }

  commitSession(): void {
    this.loading.next(true);
    this.sub = this.orderService
      .commitK2Session(this.uuid)
      .subscribe((resultStatus) => {
        this.url = resultStatus.data.k2RequestUrl;
        this.showNotification(resultStatus.success);
        this.loading.next(false);
        this.resetSession();
      });
  }

  resetSession(): void {
    this.selectedScenario = undefined;
    this.actions = [];
    this.layoutService.toScrollTop$();
  }

  showNotification(success: boolean): void {
    if (success) {
      this.modalService.success({
        nzTitle: 'Service ordered successfully',
        nzContent: this.successUrlTpl,
        nzMaskClosable: true,
        // nzContent: 'Просмотр заказанных услуг доступен в системе К2',
      });
    } else if (success === false) {
      this.modalService.error({
        nzTitle: 'Failed to order the service',
        nzContent: '',
      });
    }
  }
}
