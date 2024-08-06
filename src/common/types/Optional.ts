import { Retype } from './Retype';

export type Optional<
  T,
  TProp extends keyof T,
  TOptional extends boolean = true
> = Retype<T, TProp, T[TProp], TOptional>;
