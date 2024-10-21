import { RFEdge, RFNode } from '@/common/entities';
import { Nullable } from '@/common/types';

export const nodeClosestParent = (
  node: RFNode,
  nodes: RFNode[],
  edges: RFEdge[]
): Nullable<RFNode> => {
  const edgeThatConnectsTheNode = edges.find((edge) => edge.target === node.id);

  if (!edgeThatConnectsTheNode) {
    return null;
  }

  return (
    nodes.find((node) => node.id === edgeThatConnectsTheNode.source) ?? null
  );
};
