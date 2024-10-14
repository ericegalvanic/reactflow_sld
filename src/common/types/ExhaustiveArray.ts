import { CountedTo } from './CountedTo';
import { UnionLength } from './UnionLength';

export type ExhaustiveArray<U, L = UnionLength<U>> = Array<U> & {
  length: L;
} & (L extends number ? Record<CountedTo<L>, U> : never);
