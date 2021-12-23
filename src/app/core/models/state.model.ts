import { State } from '../types/state.type';

export interface IState<T, U> extends Record<string, any> {
  error?: U;
  data?: T;
  state: State;
}
