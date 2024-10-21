import { ObjectValues } from '@/common/types';

export const flowEditMode = {
  locked: 'LOCKED',
  unlocked: 'UNLOCKED',
} as const satisfies Record<string, string>;

export type FlowEditMode = ObjectValues<typeof flowEditMode>;

export const flowEditModeNameMap = {
  [flowEditMode.locked]: 'Locked',
  [flowEditMode.unlocked]: 'Unlocked',
} as const satisfies Record<FlowEditMode, string>;
