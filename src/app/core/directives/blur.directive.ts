import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[blur]'
})
export class BlurDirective {
  constructor(private elRef: ElementRef) {
  }

  @HostListener('click')
  public click(): void {
    this.elRef.nativeElement.blur();
  }
}
