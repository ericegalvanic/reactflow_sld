export type Intersection<U> = (U extends U ? (x: U) => 0 : never) extends (
  x: infer I
) => 0
  ? I
  : never;
