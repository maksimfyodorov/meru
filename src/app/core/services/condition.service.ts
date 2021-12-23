import { Inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { UrlService } from './url.service';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IEntry } from '../models/common.model';
import { IConditionResult } from '../models/condition.model';
import { isEmpty } from '../utils/instanceOf.utilI';
import { UserService } from './user.service';

const EXPRESSION_FUNCTION_ARGS: Array<any> = [empty, equals, pluck];
const EXPRESSION_FUNCTION_ARGS_LIST: string[] = ['value', 'response', 'empty', 'equals', 'pluck', 'currentUser'];
const OPERATORS: RegExp = /(!==|===|!=|==|<=|>=|<|>|\+|-|\*\*|\*|\/|&&|\|\|)/g;

@Injectable()
export class ConditionService {
  constructor(@Inject(HttpService) private $http: HttpService, private $url: UrlService, private $user: UserService) {}

  public check(e: string, d: IEntry<any>, r?: boolean, v?: any): boolean;
  public check(e: string, d: IEntry<any>, r?: boolean, v?: any, p?: boolean): IConditionResult;
  public check(
    expression: string,
    data: IEntry<any>,
    defaultResult: boolean = false,
    value: any,
    preFlight: boolean = false,
  ): boolean | IConditionResult {
    try {
      return this.checkExpression(expression, data, defaultResult, value, preFlight);
    } catch (e) {
      return defaultResult;
    }
  }

  public checkAsync(e: string, d: IEntry<any>, u: string | null, r?: boolean, v?: any): Observable<boolean>;
  public checkAsync(e: string, d: IEntry<any>, u: string | null, r?: boolean, v?: any, p?: boolean): Observable<IConditionResult>;
  public checkAsync(
    expression: string,
    data: IEntry<any>,
    url: string | null = null,
    defaultResult: boolean = false,
    value: any,
    preFlight: boolean = false,
  ): Observable<boolean | IConditionResult> {
    return of(this.$url.createUrl(url, data)).pipe(
      switchMap((_url) =>
        !_url ? of(null) : this.$http.get(_url).pipe(map(({ success, data: _data }) => (success ? _data : defaultResult))),
      ),
      map((responseData) => this.checkExpression(expression, data, defaultResult, value, preFlight, responseData)),
      catchError(() => of(defaultResult)),
    );
  }

  private checkExpression(
    expression: string,
    data: IEntry<any>,
    defaultResult: any,
    value: any,
    hasPreFlight: boolean = false,
    response: any = null,
  ): boolean | IConditionResult {
    const result: boolean = this.calcExpression(expression, data, value, response, defaultResult);
    const operands: string[] = expression.split(OPERATORS).map((o) => o.trim());

    if (!hasPreFlight) {
      return result;
    }

    if (operands) {
      operands.forEach((operand) => (expression = expression.replace(operand, this.calcExpression(operand, data, value, response))));
    }

    return { result, preflight: expression };
  }

  private calcExpression(expression: string, data: IEntry<any>, value: any, response: any = null, defaultResult: any = null): any {
    const argsList: string[] = [...EXPRESSION_FUNCTION_ARGS_LIST, ...Object.keys(data), `return ${expression}`];
    const argsValues: any[] = [value, response, ...EXPRESSION_FUNCTION_ARGS, this.$user.info.id, ...Object.values(data)];
    try {
      return Function(...argsList)(...argsValues);
    } catch (e) {
      return defaultResult;
    }
  }
}

function empty(value: any): boolean {
  return isEmpty(value);
}

function equals(a, b): boolean {
  return a === b;
}

function pluck(obj: any, keys: string[]): any | null;
function pluck(obj: any, keys: string, ...anyKeys: string[]): any | null;
function pluck(obj: any, keys: string | string[], ...anyKeys: string[]): any | null {
  if (typeof obj !== 'object' || !obj) {
    return null;
  }

  if (typeof keys === 'string') {
    keys = anyKeys.concat(keys);
  }

  return keys.reduce((_obj: {} | null, key: string): {} | null => (_obj ? _obj[key] : null), obj);
}
