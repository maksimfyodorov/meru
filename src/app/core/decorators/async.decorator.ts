import { ChangeDetectorRef, ViewRef } from '@angular/core';
import { CommonFunction } from '../types/function.type';
import { detectCdr } from '@core/utils/decorators.utils';

export const MarkForCheck: (target: any, key: string, descriptor?: PropertyDescriptor) => void = asyncDecoratorFactory('markForCheck');
export const DetectChanges: (target: any, key: string, descriptor?: PropertyDescriptor) => void = asyncDecoratorFactory('markForCheck');

function asyncDecoratorFactory(checkType: 'markForCheck' | 'detectChanges' = 'markForCheck') {
  return (target: any, key: string, descriptor?: PropertyDescriptor): void => {
    let originalMethod: CommonFunction;
    let cdr: ChangeDetectorRef | null;

    if (!descriptor) {
      const valueSymbol: symbol = Symbol(key);

      delete target[key];

      Object.defineProperty(target, key, {
        get(): any {
          return this[valueSymbol];
        },
        set(value: any) {
          if (!cdr) {
            cdr = detectCdr(this);
          }

          this[valueSymbol] = value;
          check(checkType);
        }
      });

      return;
    }

    if ('value' in descriptor) {
      originalMethod = descriptor.value;
      descriptor.value = newMethod;
    } else if (!!descriptor.set) {
      originalMethod = descriptor.set;
      descriptor.set = newMethod;
    } else {
      console.error(`Can't apply '${checkType}' decorator for property '${key}' of '${target.constructor?.name}'. Absent setter or original method for '${key}'`);
      return;
    }

    function newMethod(...args: any[]): void {
      try {
        originalMethod.apply(this, args);
        check(checkType);
      } catch (e) {
        console.error(`Can't use original method or setter for property '${key}' of '${target.constructor.name}' in '${checkType}' decorator`);
      }
    }

    function check(checkType: 'markForCheck' | 'detectChanges'): void {
      if (cdr) {
        switch (checkType) {
          case 'detectChanges':
            cdr.detectChanges();
            break;

          case 'markForCheck':
            cdr.markForCheck();
        }
      }
    }
  }
}
