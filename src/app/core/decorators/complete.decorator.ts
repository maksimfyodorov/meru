import { Subject } from 'rxjs';
import { CommonFunction } from '../types/function.type';

export function Complete(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const { name } = target?.constructor || {};

  const originalMethod: CommonFunction = descriptor.value;
  if (typeof originalMethod !== 'function') {
    console.error(`Complete decorator error: The property '${propertyKey} of ${name} is not a function`);
    return;
  }

  descriptor.value = function newMethod(...args) {
    try {
      Object.values(this)
        .filter((prop) => prop instanceof Subject)
        .forEach((subject: Subject<any>) => subject?.complete());
    } catch (e) {
      console.error(`Complete decorator error: Can't complete some subjects of ${name}`);
      console.error(e.message);
    }

    originalMethod.apply(this, args);
  };

  return descriptor;
}
