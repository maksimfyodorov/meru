import {ConditionType} from '../types/condition.type';

export interface ICondition {
  expression: string | boolean;
  type?: ConditionType;
  url?: string;
}

export interface IConditionResult {
  result: boolean;
  preflight: string;
}
