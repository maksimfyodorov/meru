import {CommonFunction} from '@core/types/function.type';

export function ArgLowercase(
  target: object,
  propertyKey: string | symbol,
  parameterIndex: number
): void {
  const descriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
  const originalMethod: CommonFunction = descriptor.value;


  if (typeof originalMethod !== 'function') return;

  descriptor.value = function newMethod(...args: unknown[]): any {
    debugger
    const argValue: unknown = args[parameterIndex];

    if (typeof argValue === 'string') {
      args[parameterIndex] = argValue.toLocaleLowerCase();
    }

    return originalMethod.apply(this, args);
  };

  Object.defineProperty(target, propertyKey, descriptor);
}
