import { useNodesState as useRFNodesState } from '@xyflow/react';

export const useNodesState = (
  ...args: Parameters<typeof useRFNodesState>
): ReturnType<typeof useRFNodesState> => {
  return useRFNodesState(...args);
};
