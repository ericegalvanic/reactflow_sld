import { RFNode } from '../../common/entities';

export const parent = (ofNode: RFNode, nodes: RFNode[]) =>
  nodes.find((node) => node.id === ofNode.parentId);
