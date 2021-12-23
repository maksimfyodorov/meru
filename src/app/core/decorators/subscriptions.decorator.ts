import { Subscription } from 'rxjs';
import {isFunction} from 'rxjs/internal-compatibility';

const DESTROY_METHOD: string = 'ngOnDestroy';
/*const DESTROY_IVY_METHOD: string = 'onDestroy';
const ECMP: string = 'ɵcmp';*/

export function Subscriptions(destroyMethodName: string = DESTROY_METHOD): any {
  return (target: any, key: string) => {
    const subscriptionsSymbol: symbol = Symbol('__subscriptions');
    const originalOnDestroy: () => void | null = target[destroyMethodName];

    Object.defineProperty(target, key, {
      configurable: false,
      get(): Subscription[] {
        return this[subscriptionsSymbol] || [];
      },
      set(newSub: Subscription): void {
        if (!this[subscriptionsSymbol]) {
          this[subscriptionsSymbol] = [];
        }

        this[subscriptionsSymbol].push(newSub);
      }
    });

    target[destroyMethodName] = function(...args: any[]): void {
      if (originalOnDestroy && isFunction(originalOnDestroy)) {
        originalOnDestroy.apply(this, args);
      }

      if (this[subscriptionsSymbol]?.length) {
        this[subscriptionsSymbol].splice(0).forEach(sub => sub.unsubscribe());
      }
    };
  };
}
