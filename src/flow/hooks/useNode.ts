import { RFNode, UpdateRFNodeDTO } from '@/common/entities';
import { useFlow } from '../context';
import { useCallback, useMemo } from 'react';

export type FoundNodeData = {
  node: RFNode;
  updateNode: (dto: UpdateRFNodeDTO) => void;
};

export type NotFoundNodeData = {
  node: undefined;
  updateNode: null;
};

export type FoundNodeDataUnion = FoundNodeData | NotFoundNodeData;

export const useNode = (nodeId: string): FoundNodeDataUnion => {
  const { nodes, setNodes } = useFlow();

  const targetNode = useMemo(
    () => nodes.find((node) => node.id === nodeId),
    [nodeId, nodes]
  );

  const updateNode = useCallback(
    (dto: UpdateRFNodeDTO) => {
      setNodes((previousNodes) =>
        previousNodes.map((node) => (node.id === targetNode?.id ? dto : node))
      );
    },
    [setNodes, targetNode]
  );

  if (!targetNode) {
    return {
      node: undefined,
      updateNode: null,
    };
  }

  return {
    node: targetNode,
    updateNode,
  };
};
