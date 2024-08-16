import { RFEdge } from '@/common/entities';
import { SetState } from '@/common/types';
import { useCallback } from 'react';

export const useUpdateEdge = (setEdges: SetState<RFEdge[]>) => {
  return useCallback(
    (updatedEdge: RFEdge) => {
      setEdges((edges) =>
        edges.map((edge) => (edge.id !== updatedEdge.id ? edge : updatedEdge))
      );
    },
    [setEdges]
  );
};
