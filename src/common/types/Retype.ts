import { Rename } from './Rename';

export type Retype<
  T extends Record<PropertyKey, unknown>,
  TProp extends keyof T,
  TNewType = T[TProp],
  TOptional extends boolean = false
> = Rename<T, TProp, TProp, TNewType, TOptional>;
