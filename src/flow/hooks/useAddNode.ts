import { Position, RFNode } from '@/common/entities';
import { SetState } from '@/common/types';
import { useCallback } from 'react';
import { node } from '@/common/utils';

export const useAddNode = (setNodes: SetState<RFNode[]>) => {
  return useCallback(
    (where: Position) => {
      setNodes((nodes) => [...nodes, node({ position: where })]);
    },
    [setNodes]
  );
};
