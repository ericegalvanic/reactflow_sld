export const safeNumber = <
  N extends number | undefined | null,
  F extends number = 0
>(
  number: N,
  fallback: F = 0 as F
) => (number ?? fallback) as N extends {} ? N & {} : F;
