export function assertExistence<E>(
  entity: E
): asserts entity is NonNullable<E> {
  if (entity === null || entity === undefined) {
    throw new TypeError(`Entity ${entity} is either null or undefined`);
  }
}
