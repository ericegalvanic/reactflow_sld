import { RFEdge, RFNode } from '@/common/entities';
import { useCallback } from 'react';
import { edge, parent } from '../utils';
import { SetState } from '@/common/types';
import { NodeData, subNodeArchetype, SubNodeArchetype } from '../entities';
import { formattedId } from '@/common/utils';
import { invisibleEdgeStyle } from '../ui/style';

export const useInvisibleEdge = (setEdges: SetState<RFEdge[]>) => {
  return useCallback(
    (
      node: RFNode & NodeData<{ archetype: SubNodeArchetype }>,
      nodes: RFNode[],
      edges: RFEdge[]
    ) => {
      const thisNode = node;
      const electricalParent = parent(thisNode, nodes);
      const archetype = node.data.archetype;
      const hasTopHandle = archetype === subNodeArchetype.lineSide;
      const hasBottomHandle = archetype === subNodeArchetype.loadSide;

      if (!electricalParent) {
        return;
      }

      const isThisSource = hasTopHandle;
      const isThisTarget = hasBottomHandle;
      const thisId = formattedId(thisNode.id);
      const parentId = formattedId(electricalParent.id);
      const edgeId = isThisSource
        ? `${thisId}-${parentId}`
        : `${parentId}-${thisId}`;

      const doesThisEdgeExist = edges.some((edge) => edge.id === edgeId);

      if (doesThisEdgeExist) {
        return;
      }

      const invisibleEdge = edge({
        source: isThisSource ? thisNode.id : electricalParent.id,
        target: isThisTarget ? thisNode.id : electricalParent.id,
        id: edgeId,
        style: invisibleEdgeStyle,
      });

      setEdges((previous) => [...previous, invisibleEdge]);
    },
    [setEdges]
  );
};
