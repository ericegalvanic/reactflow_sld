import { RFNode } from '@/common/entities';
import { SetState } from '@/common/types';
import { useCallback } from 'react';

export const useUpdateNode = (setNodes: SetState<RFNode[]>) => {
  return useCallback(
    (updatedNode: RFNode) => {
      setNodes((nodes) =>
        nodes.map((node) => (node.id !== updatedNode.id ? node : updatedNode))
      );
    },
    [setNodes]
  );
};
