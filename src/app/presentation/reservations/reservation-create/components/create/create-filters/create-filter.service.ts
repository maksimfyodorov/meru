import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getListFilterFieldsByType } from '@presentation/reservations/reservation-create/components/create/create-filters/create-filter.utils';
import { ReservationType } from '@shared/http/models/meta.model';

@Injectable()
export class CreateFilterService {
  private _formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public createFormGroup(type: ReservationType): void {
    this.clearFormGroup();
    this.addFormGroupControls(type);
  }

  public clear(formGroup: FormGroup): void {
    Object.values(this.formGroup.controls).forEach((control) => {
      if (control.value instanceof Array) {
        control.setValue([]);
        return;
      }
      if (control.value && typeof control.value.getMonth === 'function') {
        return;
      }

      control.setValue(null);
    });
  }

  private clearFormGroup(): void {
    Object.keys(this._formGroup.controls).forEach((key) => this._formGroup.removeControl(key));
  }

  private addFormGroupControls(type: ReservationType): void {
    if (!type) {
      this._formGroup = new FormGroup({});
      return;
    }

    Object.entries(getListFilterFieldsByType(type)).forEach(([name, state]) =>
      this._formGroup.addControl(name, this.formBuilder.control(state)),
    );
  }
}
