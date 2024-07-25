import { Retype } from './Retype';

export type Optional<
  T extends Record<PropertyKey, unknown>,
  TProp extends keyof T,
  TOptional extends boolean = true
> = Retype<T, TProp, T[TProp], TOptional>;
