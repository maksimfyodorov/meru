import { Injectable, Injector } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FilterService {
  protected _formGroup: FormGroup = new FormGroup({});

  constructor(
    protected injector: Injector
  ) {
  }

  public set formGroup(formGroup: FormGroup) {
    this._formGroup = formGroup;
  }

  public getFormControlByName(name: string): FormControl {
    return this._formGroup.controls[name] as FormControl;
  }
}
