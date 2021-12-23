import {TrackByFunction} from '@angular/core';
import {IEntry} from '../models/common.model';

/*
 * Check empty utils
 */
export function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}

export function isEmpty(value: any = null, checkArray: boolean = false): boolean {
  return (
    isUndefined(value) ||
    value === null ||
    String(value).trim() === '' ||
    (checkArray && isEmptyArray(value))
  );
}

export function isEmptyArray(value: Array<any>): boolean {
  return (
    Array.isArray(value) &&
    (
      value.length === 0 ||
      value.every((item) =>
        isEmpty(item, true)
      )
    )
  );
}

export function checkEmpty(value: any, whenEmpty: string = '') {
  return !isEmpty(value) ? value : whenEmpty;
}

/*
 * Check date utils
 */
export function isDate(value: any): value is Date {
  return value instanceof Date;
}

export function isDateArray(arr: any[], strict: boolean = false): arr is Array<Date> {
  return strict
    ? arr.every(item => isDate(item))
    : arr.some(item => isDate(item));
}

export function toString(value: any): string {
  if (value === null) {
    return '';
  }

  if (isDate(value)) {
    return dateToString(value);
  }

  if (Array.isArray(value)) {
    return value
      .map(item =>
        toString(item)
      )
      .join(',');
  }

  return String(value);
}

export function dateToString(date: Date): string {
  return date.toISOString();
}

/*
 * Check object of interface implementation
 */
export function instanceOfI<T>(obj: any, props: Array<string>): obj is T;
export function instanceOfI<T>(obj: any, props: IEntry<any>, strict?: boolean): obj is T;
export function instanceOfI<T>(obj: any, ...props: Array<string>): obj is T;
export function instanceOfI<T>(obj: any, ...props: any[]): obj is T {
  const strict: boolean = typeof props[1] === 'boolean' && props[1];

  if (typeof props[0] === 'object') {
    props = props[0];
  }

  if (Array.isArray(props)) {
    return props.every(key => key in obj);
  }

  return Object.entries(props).every(([key, value]) =>
    strict ? obj[key] === value : key in obj
  );
}

/*
 * Common track by function for *ngFor-directive
 */
export function trackByFactory<T = any, R = any>(property: string | null = null): TrackByFunction<T> {
  return function trackByFunction(index: number, item: T): R {
    return property ? item[property] : item;
  };
}

/*
 * Take first from object
 */
export function takeFirstFromObject(obj: object): [string, any] {
  return Object.entries(obj).shift();
}
