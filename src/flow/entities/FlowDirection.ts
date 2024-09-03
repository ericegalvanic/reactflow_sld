import { ObjectValues } from '@/common/types';

export const flowDirection = {
  vertical: 'TB',
  horizontal: 'LR',
} as const satisfies Record<string, string>;

export type FlowDirection = ObjectValues<typeof flowDirection>;

export const flowDirectionNameMap: Record<FlowDirection, string> = {
  [flowDirection.vertical]: 'Vertical',
  [flowDirection.horizontal]: 'Horizontal',
};
