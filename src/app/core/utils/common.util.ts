import { SUCCESS_KEY } from '@shared/http/utils/constants.util';

export function isEmpty(value: any): boolean {
  return value === ''
    || value === null
    || !isDefined(value);
}

export function isDefined(value: any): boolean {
  return typeof value !== 'undefined';
}

export function objectsEquals(
  source?: Object,
  target?: Object,
  strict: boolean = true
): boolean {
  if (!source) { source = {}; }
  if (!target) { target = {}; }

  return Object.entries(source).every(([ key, value ]) =>
    (strict && target[key] === value) || target[key] == value
  );
}

export function processSuccessResponseObject<T = any>(source: any): T | null {
  if (!source || typeof source !== 'object') {
    return null;
  }

  const successValue = source[SUCCESS_KEY];
  delete source[SUCCESS_KEY];

  const keys = Object.keys(source);
  if (keys.length === 1) {
    const firstKey: string = keys.shift();
    return !firstKey ? null : source[firstKey];
  } else {
    return {
      ...source,
      [SUCCESS_KEY]: successValue
    };
  }
}
