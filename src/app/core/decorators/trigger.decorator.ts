import { CommonFunction } from '../types/function.type';

export function Trigger(method: string, type: 'before' | 'after' = 'after'): MethodDecorator {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor => {
    const originalMethod: CommonFunction = descriptor.value;

    descriptor.value = function newMethod(...args) {
      const calledMethod: CommonFunction = this[method];
      if (type === 'before' && calledMethod) {
        calledMethod.call(this);
      }

      originalMethod.apply(this, args);

      if (type === 'after' && calledMethod) {
        calledMethod.call(this);
      }
    };

    return descriptor;
  };
}
