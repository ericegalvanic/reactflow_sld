import { RFNode } from '@/common/entities';
import {
  useNodesState as useRFNodesState,
  OnNodesChange as OnRFNodesChange,
} from '@xyflow/react';

export type OnNodesChange<N extends RFNode = RFNode> = OnRFNodesChange<N>;

export const useNodesState = (
  ...args: Parameters<typeof useRFNodesState>
): ReturnType<typeof useRFNodesState> => {
  return useRFNodesState(...args);
};
