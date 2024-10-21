import { FoundNodeDataUnion, useNode } from './useNode';
import { parent } from '../utils';
import { useFlow } from '../context';
import { useCallback, useMemo } from 'react';
import { UpdateRFNodeDTO } from '@/common/entities';

export const useParentNode = (nodeId: string): FoundNodeDataUnion => {
  const { nodes, setNodes } = useFlow();
  const { node: currentNode } = useNode(nodeId);

  const parentNode = useMemo(
    () => (currentNode ? parent(currentNode, nodes) : undefined),
    [currentNode, nodes]
  );

  const updateParentNode = useCallback(
    (dto: UpdateRFNodeDTO) =>
      setNodes((previousNodes) =>
        previousNodes.map((node) =>
          parentNode ? (parentNode.id === node.id ? dto : node) : node
        )
      ),
    [parentNode, setNodes]
  );

  return parentNode
    ? {
        node: parentNode,
        updateNode: updateParentNode,
      }
    : {
        node: undefined,
        updateNode: null,
      };
};
