import { Observable, Subscription } from 'rxjs';
import { CommonFunction } from '../types/function.type';
import { ChangeDetectorRef, ViewRef } from '@angular/core';
import { detectCdr } from '@core/utils/decorators.utils';

const DESTROY_METHOD: string = 'ngOnDestroy';
/*const DESTROY_IVY_METHOD: string = 'onDestroy';
const ECMP: string = 'ɵcmp';*/


export function Subscribe<T = any>(destroyMethodName: string = DESTROY_METHOD): any {
  return (target: Function, key: string, descriptor?: PropertyDescriptor) => {
    const instance = target.constructor.prototype;
    const originalOnDestroy: () => void | null = instance[destroyMethodName];
    const currentValue: symbol = Symbol('currentValue');
    const currentSubscription: symbol = Symbol('currentSubscription');
    const currentObservable: symbol = Symbol('currentObservable');

    if (!originalOnDestroy){
      console.error(`${target.constructor.name} is using Subscriptions decorator but doesn't implement ${destroyMethodName}`)
    }

    instance[destroyMethodName] = function newDestroyMethod(this: CommonFunction) {
      dispose(this);

      if (!!originalOnDestroy) {
        originalOnDestroy.apply(this);
      }
    };

    if (!descriptor) {
      Object.defineProperty(target, key, {
        configurable: true,
        get: getterFactory<T>(),
        set: setterFactory()
      });
      return;
    }

    if (descriptor.set) {
      descriptor.set = setterFactory(descriptor.set);
    }

    if (descriptor.get) {
      descriptor.get = getterFactory<T>(descriptor.get);
    }

    function subscribe<T>(target: Function, observable: Observable<T>, originalSetter?: Function): void {
      const cdr: ChangeDetectorRef = detectCdr(target);

      if (target[currentObservable] !== observable) {
        dispose(target);
      }

      if (!(observable instanceof Observable)) {
        target[currentObservable] = null;
        target[currentValue] = observable;
        return;
      }

      target[currentObservable] = observable;
      target[currentSubscription] = observable.subscribe(newValue => {
        if (originalSetter) {
          originalSetter.call(target, newValue);
        } else {
          target[currentValue] = newValue;
        }

        check(cdr);
      });
    }

    function dispose(target: Function): void {
      if (target[currentSubscription] instanceof Subscription) {
        target[currentSubscription].unsubscribe();
      }
    }

    function getterFactory<T>(originalGetter?: Function): () => T {
      return function get(): T {
        if (originalGetter) {
          return originalGetter.call(this);
        }

        return this[currentValue];
      };
    }

    function setterFactory<T>(originalSetter?: Function): (observable: any) => void {
      return function set(observable: Observable<T>) {
        subscribe<T>(this, observable, originalSetter);
      };
    }
  };
}

function check(cdr: ChangeDetectorRef, checkType: 'markForCheck' | 'detectChanges' = 'markForCheck'): void {
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
