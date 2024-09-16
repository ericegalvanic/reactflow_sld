declare const brand: unique symbol;

export type Brand<E, B extends string> = E & { [brand]: B };
