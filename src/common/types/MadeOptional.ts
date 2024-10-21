import { Retyped } from './Retyped';

export type MadeOptional<
  T,
  TProp extends keyof T,
  TOptional extends boolean = true
> = Retyped<T, TProp, T[TProp], TOptional>;
