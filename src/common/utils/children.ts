import { RFNode } from '../entities';

export const children = (ofNode: RFNode, nodes: RFNode[]) =>
  nodes.filter((node) => node.parentId === ofNode.id);
