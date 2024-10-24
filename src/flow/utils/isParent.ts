import { RFNode } from '../../common/entities';

export const isParent = (targetNode: RFNode, nodes: RFNode[]) =>
  nodes.some((node) => node.parentId === targetNode.id);
