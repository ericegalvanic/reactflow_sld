import { HasColor } from '@/common/entities';

export const defaultNodeBackgroundColor = '#ededed';
export const defaultNodeBorderColor = '#ededed';

export const defaultNodeColor = (
  nodeColor: Partial<HasColor> = {}
): HasColor => ({
  background: nodeColor.background ?? defaultNodeBackgroundColor,
  border: defaultNodeBorderColor,
});
