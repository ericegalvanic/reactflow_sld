import { RFNode } from '../entities';

export const isSubNode = (node: RFNode) => !!node.parentId;
