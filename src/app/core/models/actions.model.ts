import {ICondition} from './condition.model';
import {NzButtonType} from 'ng-zorro-antd/button';
import {NzSizeLDSType} from 'ng-zorro-antd/core/types';
import {IHttpResponseNotificationMessages} from '@core/models/http.model';

export type ActionMethod = 'get' | 'post' | 'put' | 'delete';
export type ActionParams = IActionRequestParams | IActionNavigateParams;

export interface IActions extends Array<IAction> {
}

export interface IAction {
  label?: string;
  buttonType?: NzButtonType;
  suffixIcon?: string;
  prefixIcon?: string;
  isDanger?: boolean;
  isGhost?: boolean;
  size?: NzSizeLDSType;
  title?: string;
  id?: string;
  condition?: ICondition;
  params: ActionParams;
}

export interface IActionParams extends Record<string, any> {
  id: string;
}

export interface IActionRequestParams extends IActionParams {
  method: ActionMethod;
  url: string;
  messages?: IHttpResponseNotificationMessages;
  body?: IActionRequestParamsBody;
}

export interface IActionNavigateParams extends IActionParams {
  route: string;
  relativeRoute?: boolean;
}

export interface IActionRequestParamsBody {
  [key: string]: string | IActionRequestParamsBodyField;
}

export interface IActionRequestParamsBodyField {
  field: string;
  convertTo: 'string' | 'integer' | 'float' | 'boolean';
}

