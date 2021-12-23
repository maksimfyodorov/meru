import { AbstractControl, FormGroup } from '@angular/forms';
import { IUser } from '@shared/http/models/database.model';

export type UserCardFormControls = { [key in keyof Partial<IUser>]: AbstractControl };
export type UserCardFormGroup = FormGroup & { value: Partial<IUser>, controls: UserCardFormControls };
