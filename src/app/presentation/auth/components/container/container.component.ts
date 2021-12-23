import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  @Input() public title = '';
}
