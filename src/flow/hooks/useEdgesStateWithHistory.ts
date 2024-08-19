import { RFEdge } from '@/common/entities';
import { useStateWithHistory } from './useStateWithHistory';
import { useCallback } from 'react';
import { applyEdgeChanges, EdgeChange } from '@xyflow/react';

export const useEdgesStateWithHistory = (initialEdges: RFEdge[]) => {
  const [edges, setEdges, stateHistory] = useStateWithHistory(initialEdges);

  const onEdgesChange = useCallback(
    (changes: EdgeChange<RFEdge>[]) =>
      setEdges((edges) => applyEdgeChanges(changes, edges)),
    [setEdges]
  );

  return [edges, setEdges, onEdgesChange, stateHistory] as const;
};
