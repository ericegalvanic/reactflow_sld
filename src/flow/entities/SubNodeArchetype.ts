import { ObjectValues } from '@/common/types';

export const subNodeArchetype = {
  lineSide: 'line-side',
  loadSide: 'load-side',
} as const satisfies Record<string, string>;

export type SubNodeArchetype = ObjectValues<typeof subNodeArchetype>;
