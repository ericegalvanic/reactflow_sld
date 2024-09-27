import { RFNode } from '../../common/entities';
import { Retype } from '../../common/types';

export const isSubNode = (
  node: RFNode
): node is Retype<RFNode, 'parentId', string, false> => !!node.parentId;
