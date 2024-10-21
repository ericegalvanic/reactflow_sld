import { RFNode } from '../../common/entities';

export const children = (ofNode: RFNode, nodes: RFNode[]) =>
  nodes.filter((node) => node.parentId === ofNode.id);
