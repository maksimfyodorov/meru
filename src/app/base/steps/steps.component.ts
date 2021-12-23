import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IStep } from './steps.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent {
  @Input()
  public items: IStep[] = [
    { title: 'Created', description: '15.09.2020 11:15' },
    { title: 'Approved', description: '15.09.2020 11:15' },
    { title: 'Confirmed', description: '15.09.2020 11:15' },
    { title: 'Closed', description: '15.09.2020 11:15' },
  ];

  @Input()
  public current: number = 2;

  constructor() {}
}
