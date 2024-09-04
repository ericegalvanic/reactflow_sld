import { RFEdge, RFNode } from '@/common/entities';
import { SetState } from '@/common/types';
import { useCallback } from 'react';
import { edge } from '@/common/utils';

export const useAddEdge = (setEdges: SetState<RFEdge[]>) => {
  return useCallback(
    (source: RFNode, target: RFNode) => {
      const newEdge = edge({
        source: source.id,
        target: target.id,
      });
      setEdges((edges) => {
        return [...edges, newEdge];
      });
      return newEdge;
    },
    [setEdges]
  );
};
