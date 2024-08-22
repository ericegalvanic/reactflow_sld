import { CreateRFNodeDTO, RFNode } from '@/common/entities';
import { Optional, SetState } from '@/common/types';
import { useCallback } from 'react';
import { node, nodeCenter } from '@/common/utils';
import { nodeType } from '../entities';

export const useAddSubNode = (setNodes: SetState<RFNode[]>) => {
  return useCallback(
    (
      parentNode: RFNode,
      {
        position: overriddenPosition,
        type: overriddenType,
        ...overriddenDefaultNodeCreateOptions
      }: Optional<Omit<CreateRFNodeDTO, 'parentId'>, 'position'> = {}
    ) => {
      const newNode = node({
        parentId: parentNode.id,
        extent: 'parent',
        type: overriddenType ?? nodeType.ResizableSubNode,
        position: overriddenPosition ?? nodeCenter(parentNode),
        ...overriddenDefaultNodeCreateOptions,
      });
      setNodes((nodes) => {
        const {
          data: overriddenData,
          width: overriddenWidth,
          height: overriddenHeight,
        } = overriddenDefaultNodeCreateOptions;
        newNode.data['label'] =
          overriddenData?.['label'] ?? `SC ${nodes.length + 1}`;
        newNode.width = overriddenWidth ?? 48;
        newNode.height = overriddenHeight ?? 48;
        return [...nodes, newNode];
      });
      return newNode;
    },
    [setNodes]
  );
};
