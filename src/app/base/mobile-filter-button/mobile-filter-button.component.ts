import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-filter-button',
  templateUrl: './mobile-filter-button.component.html',
  styleUrls: ['./mobile-filter-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileFilterButtonComponent implements OnInit {
  @Output() showModal: EventEmitter<null> = new EventEmitter(null);
  constructor() {}

  ngOnInit(): void {}

  onShowModal() {
    this.showModal.emit();
  }
}
