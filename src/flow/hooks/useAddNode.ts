import { CreateRFNodeDTO, Position, RFNode } from '@/common/entities';
import { SetState } from '@/common/types';
import { useCallback } from 'react';
import { node } from '@/flow/utils';
import { defaultTopLevelNodeCode, defaultTopLevelNodeType } from '../constants';

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
        const { data: overriddenData, type: overridenType } =
          overriddenDefaultNodeCreateOptions;
        newNode.type = overridenType ?? defaultTopLevelNodeType;
        newNode.data.label =
          overriddenData?.label ?? `NEW ASSET ${nodes.length + 1}`;
        newNode.data.code = overriddenData?.code ?? defaultTopLevelNodeCode;
        return [...nodes, newNode];
      });
      return newNode;
    },
    [setNodes]
  );
};
