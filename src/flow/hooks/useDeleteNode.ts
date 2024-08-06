import { RFNode } from '@/common/entities';
import { SetState } from '@/common/types';
import { useCallback } from 'react';

export const useDeleteNode = (setNodes: SetState<RFNode[]>) => {
  const deleteNode = useCallback(
    (nodeId: string) => {
      setNodes((nodes) => nodes.filter((node) => node.id !== nodeId));
    },
    [setNodes]
  );

  return deleteNode;
};
