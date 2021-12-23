import { Directive, ElementRef } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Directive({
  selector: '[appScroll]',
})
export class PerfectScrollDirective {
  public ps;
  public container;

  constructor(private element: ElementRef) {
    this.container = element.nativeElement;
    this.container.style.position = 'relative';

    setTimeout(() => {
      this.ps = new PerfectScrollbar(this.container, {
        wheelPropagation: true,
      });
    });
  }
}
