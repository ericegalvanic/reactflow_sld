import { Renamed } from './Renamed';

export type Retyped<
  T,
  TProp extends keyof T,
  TNewType = T[TProp],
  TOptional extends boolean = false
> = Renamed<T, TProp, TProp, TNewType, TOptional>;
