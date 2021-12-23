import { Observable, Subscription } from 'rxjs';
import { IEntry } from '../models/common.model';
import { CommonFunction } from '@core/types/function.type';

type SubscriptionFactory = <T>(observable: Observable<T>, callback: Function) => Subscription;

export function destroy(subscriptions: Subscription | IEntry<Subscription> | Array<Subscription>): void;
export function destroy(...subscriptions: Array<Subscription>);
export function destroy(...subscriptions: any) {
  if (subscriptions instanceof Subscription) {
    subscriptions.unsubscribe();
    return;
  }

  try {
    subscriptions = subscriptions instanceof Array ? subscriptions : Object.values(subscriptions);
    subscriptions.forEach(destroy);
  } catch (e) {
  }
}


export const Subscribe: SubscriptionFactory = <T>(
  observable: Observable<T>,
  callback: CommonFunction<T, void>
): Subscription => {
  return observable.subscribe(callback);
}

