import { RFNode } from '@/common/entities';
import { useStateWithHistory } from './useStateWithHistory';
import { useCallback } from 'react';
import { applyNodeChanges, NodeChange } from '@xyflow/react';

export const useNodesStateWithHistory = (initialNodes: RFNode[]) => {
  const [nodes, setNodes, stateHistory] = useStateWithHistory(initialNodes);

  const onNodesChange = useCallback(
    (changes: NodeChange<RFNode>[]) =>
      setNodes((nodes) => applyNodeChanges(changes, nodes)),
    [setNodes]
  );

  return [nodes, setNodes, onNodesChange, stateHistory] as const;
};
