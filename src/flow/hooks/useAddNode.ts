import { CreateRFNodeDTO, Position, RFNode } from '@/common/entities';
import { SetState } from '@/common/types';
import { useCallback } from 'react';
import { node } from '@/common/utils';

export const useAddNode = (setNodes: SetState<RFNode[]>) => {
  return useCallback(
    (
      where: Position,
      overriddenDefaultNodeCreateOptions: Omit<CreateRFNodeDTO, 'position'> = {}
    ) => {
      const newNode = node({
        position: where,
        ...overriddenDefaultNodeCreateOptions,
      });
      setNodes((nodes) => {
        const { data: overriddenData } = overriddenDefaultNodeCreateOptions;
        newNode.data['label'] =
          overriddenData?.['label'] ?? `NEW ASSET ${nodes.length + 1}`;
        return [...nodes, newNode];
      });
      return newNode;
    },
    [setNodes]
  );
};
