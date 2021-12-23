import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ReservationType } from '@shared/http/models/meta.model';
import { getTeamReservationsFilterFieldsByType } from '@presentation/team/team-reservations/team-reservations-filters/team-reservations-filters.utils';

@Injectable()
export class TeamReservationsFiltersService {
  private _formGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public createFormGroup(type: ReservationType): void {
    this.clearFormGroup();
    this.addFormGroupControls(type);
  }

  public clear(formGroup: FormGroup = this.formGroup): void {
    Object
      .entries(formGroup.controls)
      .filter(this.clearControlValue);
  }

  private clearFormGroup(): void {
    Object.keys(this._formGroup.controls)
      .forEach(key => this._formGroup.removeControl(key));
  }

  private addFormGroupControls(type: ReservationType): void {
    if (!type) {
      this._formGroup = new FormGroup({});
      return;
    }

    Object
      .entries(getTeamReservationsFilterFieldsByType(type))
      .forEach(([ name, state ]) =>
        this._formGroup.addControl(
          name,
          this.formBuilder.control(state)
        )
      )
  }

  private clearControlValue([ name, control ]: [ string, AbstractControl ]): void {
    switch (name) {
      case 'labelGroupId':
        return;

      case 'labelIds':
        control.setValue('*');
        return;

      default:
        control.setValue(control.value instanceof Array ? [] : null);
    }
  }
}
