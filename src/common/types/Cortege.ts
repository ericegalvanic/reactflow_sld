import { LastConstituent } from './LastConstituent';

export type Cortege<U, L = LastConstituent<U>> = [U] extends [never]
  ? []
  : [...Cortege<Exclude<U, L>>, L];
