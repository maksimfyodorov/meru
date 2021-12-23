import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '@src/app/core/services/config.service';
import { CALENDAR_ICON, DEFAULT_WORKPLACE_CARD } from '@src/app/shared/http/utils/images.const';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() item;
  @Input() tagsInFilter: string[];
  @Input() calendarLink: string;
  @Input() isLoading: boolean;
  @Output() reservation = new EventEmitter<null>();

  aplanaUrl: string;
  nornikAplana = false;

  CALENDAR_ICON = CALENDAR_ICON;
  DEFAULT_WORKPLACE_CARD = DEFAULT_WORKPLACE_CARD;
  constructor(private route: Router, private _configService: ConfigService) {}

  ngOnInit(): void {
    this.nornikAplana = this._configService.get<boolean>('nornikAplana') === true;
    this.aplanaUrl = this._configService.get<string>('aplanaUrl');
  }

  tagInFilter(tag: string) {
    return this.tagsInFilter ? this.tagsInFilter.includes(tag) : false;
  }

  onLink(link: string, id: number) {
    const routes = [link];
    if (id) {
      routes.push(String(id));
    }
    this.route.navigate(routes);
  }

  reservationPlace() {
    this.reservation.emit();
  }
}
