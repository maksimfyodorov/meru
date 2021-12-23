import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCardFormControl]'
})
export class CardFormControlDirective {
  @Input("appCardFormControl") name: string = "";

  constructor(public templateRef: TemplateRef<unknown>) { }

}
