import { Intersection } from './Intersection';

export type LastConstituent<U> = Intersection<
  U extends U ? (x: U) => 0 : never
> extends (x: infer L) => 0
  ? L
  : never;
