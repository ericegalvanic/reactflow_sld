export function assertIsObject(entity: unknown): asserts entity is object {
  if (!entity || typeof entity !== 'object') {
    throw new TypeError('Passed json is not an object');
  }
}
