import { NzSelectOptionInterface } from 'ng-zorro-antd/select/select.types';
import { NzCheckBoxOptionInterface } from 'ng-zorro-antd/checkbox';

export interface IFilterOptions extends Array<IFilterOption> {
}

export interface IFilterOption extends NzSelectOptionInterface {
  [key: string]: any;
}

export interface IFilterCheckboxGroups extends Array<IFilterCheckboxGroup> {
}

export interface IFilterCheckboxGroup extends NzCheckBoxOptionInterface {
  indeterminate: boolean;
  options: Array<IFilterCheckBoxOption>;
  value: any;
}

export interface IFilterCheckBoxOptions extends Array<IFilterCheckBoxOption> {
}

export interface IFilterCheckBoxOption extends NzCheckBoxOptionInterface {
  value: any;
  [key: string]: any;
}
