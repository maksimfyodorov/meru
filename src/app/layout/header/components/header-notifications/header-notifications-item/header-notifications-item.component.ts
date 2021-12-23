import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { HeaderService } from '@app/layout/header/header.service';

@Component({
  selector: 'app-header-notifications-item',
  templateUrl: './header-notifications-item.component.html',
  styleUrls: ['./header-notifications-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderNotificationsItemComponent implements OnInit {
  notificationIcons: Record<string, string> = this.$header.notificationIconsMap;
  itemClasses: string[] = [];
  @Input() readonly id: string;
  @Input() readonly type: string;
  @Input() readonly message: string;
  @Output() readonly remove: EventEmitter<string> = new EventEmitter<string>();
  constructor(private $header: HeaderService) {}
  ngOnInit(): void {
    this.itemClasses.push('_' + this.type);
  }

  removeOutput(event: Event): void {
    event.stopPropagation();
    this.remove.emit(this.id);
  }
  showFullMessage(): void {
    if (!this.itemClasses.includes('_show')) {
      this.itemClasses.push('_show');
    }
  }
  get itemIcon(): string {
    return this.notificationIcons[this.type];
  }
}
