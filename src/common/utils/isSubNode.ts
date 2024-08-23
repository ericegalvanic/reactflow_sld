import { RFNode } from '../entities';
import { Retype } from '../types';

export const isSubNode = (
  node: RFNode
): node is Retype<RFNode, 'parentId', string, false> => !!node.parentId;
