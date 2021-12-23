import { CommonFunction } from '../types/function.type';

export function Debounce(delay: number = 300): MethodDecorator {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor => {
    const timeoutMap: WeakMap<any, any> = new WeakMap<any, any>();
    const originalMethod: CommonFunction = descriptor.value;

    descriptor.value = function newMethod(...args): any {
      clearTimeout(timeoutMap.get(this));
      timeoutMap.set(
        this,
        setTimeout(() => {
          originalMethod.apply(this, args);
          timeoutMap.delete(this);
        }, delay)
      );
    };

    return descriptor;
  };
}
