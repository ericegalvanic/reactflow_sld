import { CountedTo } from './CountedTo';
import { UnionLength } from './UnionLength';

export type ExhaustiveArray<U> = Array<U> & {
  length: UnionLength<U>;
} & (UnionLength<U> extends number
    ? Record<CountedTo<UnionLength<U>>, U>
    : never);
