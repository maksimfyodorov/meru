import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, TemplateRef, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-dialog-contentscroll',
  templateUrl: './mobile-dialog-contentscroll.component.html',
  styleUrls: ['./mobile-dialog-contentscroll.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileDialogContentscrollComponent implements OnInit {
  @Input() nzVisible = false;
  @Input()
  contentTpl: TemplateRef<any> | null = null;
  @Input()
  footerTpl: TemplateRef<any> | null = null;
  @Output() handleCancel: EventEmitter<null> = new EventEmitter(null);
  @Output() handleOk: EventEmitter<null> = new EventEmitter(null);

  @ViewChild('footer') footer: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onHandleCancel() {
    this.handleCancel.emit();
  }
  onHandleOk() {
    this.handleOk.emit();
  }

  get contentHeight() {
    let str = 'calc(100vh - ';
    if (this.footer && this.footer.nativeElement) {
      str += `${this.footer.nativeElement.offsetHeight + 140}px)`;
    } else {
      str += `140px)`;
    }
    return str;
  }
}
