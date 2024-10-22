import { CreateRFNodeDTO, RFNode, SubNode } from '@/common/entities';
import { MadeOptional, SetState } from '@/common/types';
import { useCallback } from 'react';
import { node, parentNodeCenter } from '@/flow/utils';
import {
  defaultSubLevelNodeArchetype,
  defaultSubLevelNodeCode,
  defaultSubLevelNodeType,
} from '../constants';
import { SubNodeArchetype } from '../entities';

export const useAddSubNode = (setNodes: SetState<RFNode[]>) => {
  return useCallback(
    (
      parentNode: RFNode,
      {
        position: overriddenPosition,
        type: overriddenType,
        ...overriddenDefaultNodeCreateOptions
      }: MadeOptional<Omit<CreateRFNodeDTO, 'parentId'>, 'position'> & {
        data?: { archetype: SubNodeArchetype };
      } = {}
    ) => {
      const newNode = node({
        parentId: parentNode.id,
        extent: 'parent',
        type: overriddenType ?? defaultSubLevelNodeType,
        position: overriddenPosition ?? parentNodeCenter(parentNode),
        ...overriddenDefaultNodeCreateOptions,
      });
      setNodes((nodes) => {
        const { data: overriddenData } = overriddenDefaultNodeCreateOptions;
        newNode.data.label = overriddenData?.label ?? `SC ${nodes.length + 1}`;
        newNode.data.code = defaultSubLevelNodeCode;
        newNode.data.archetype =
          overriddenData?.archetype ?? defaultSubLevelNodeArchetype;
        return [...nodes, newNode];
      });
      return newNode as SubNode;
    },
    [setNodes]
  );
};
