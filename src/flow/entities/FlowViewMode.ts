import { ObjectValues } from '@/common/types';

export const flowViewMode = {
  standard: 'standard',
  enhanced: 'enhanced',
} as const satisfies Record<string, string>;

export type FlowViewMode = ObjectValues<typeof flowViewMode>;

export const flowViewModeNameMap = {
  [flowViewMode.standard]: 'Standard',
  [flowViewMode.enhanced]: 'Enhanced',
} as const satisfies Record<FlowViewMode, string>;
