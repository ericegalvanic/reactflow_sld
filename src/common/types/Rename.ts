export type Rename<
  T extends Record<PropertyKey, unknown>,
  TProp extends keyof T,
  TNewName extends number | string | symbol = TProp,
  TNewType = T[TProp],
  TOptional extends boolean = false
> = Omit<T, TProp> &
  (TOptional extends false
    ? { [R in TNewName]: TNewType }
    : { [R in TNewName]?: TNewType });
