import { Colorable } from '@/common/entities';

export const defaultNodeBackgroundColor = '#ededed';
export const defaultNodeBorderColor = '#ededed';

export const defaultNodeColor = (
  nodeColor: Partial<Colorable> = {}
): Colorable => ({
  background: nodeColor.background ?? defaultNodeBackgroundColor,
  border: defaultNodeBorderColor,
});
