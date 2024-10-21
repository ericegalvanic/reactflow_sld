export type CountedTo<
  N extends number,
  R extends number[] = []
> = R['length'] extends N ? R[number] : CountedTo<N, [...R, R['length']]>;
