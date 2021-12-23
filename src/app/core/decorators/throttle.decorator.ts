import { CommonFunction } from '../types/function.type';

export function Throttle(timeFrame: number = 500): MethodDecorator {
  let lastTime: number = 0;

  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor => {
    const originalMethod: CommonFunction = descriptor.value;
    const now: number = (new Date()).getTime();

    if (now - lastTime < timeFrame) {
      return;
    }

    descriptor.value = function newMethod(...args) {
      lastTime = (new Date()).getTime();
      originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
