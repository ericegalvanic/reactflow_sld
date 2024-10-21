import { Reversible } from '../entities';
import { ReverselyMapped } from '../types';

export const reverseObjectEntries = <O extends Reversible>(
  object: O
): ReverselyMapped<O> => {
  return Object.entries(object).reduce(
    (reversed, entry) => ({ ...reversed, [entry[1]]: entry[0] }),
    {} as ReverselyMapped<O>
  );
};
