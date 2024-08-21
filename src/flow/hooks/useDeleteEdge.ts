import { RFEdge } from '@/common/entities';
import { SetState } from '@/common/types';
import { useCallback } from 'react';

export const useDeleteEdge = (setEdges: SetState<RFEdge[]>) => {
  const deleteEdge = useCallback(
    (edgeId: string) => {
      setEdges((edges) => edges.filter((edge) => edge.id !== edgeId));
    },
    [setEdges]
  );

  return deleteEdge;
};
