import { CreateRFNodeDTO, RFNode } from '@/common/entities';
import { Optional, SetState } from '@/common/types';
import { useCallback } from 'react';
import { node, parentNodeCenter } from '@/flow/utils';
import { nodeType } from '../entities';
import { defaultSubnodeHeightPx, defaultSubnodeWidthPx } from '../constants';

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
        position: overriddenPosition ?? parentNodeCenter(parentNode),
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
        newNode.width = overriddenWidth ?? defaultSubnodeWidthPx;
        newNode.height = overriddenHeight ?? defaultSubnodeHeightPx;
        return [...nodes, newNode];
      });
      return newNode;
    },
    [setNodes]
  );
};
