import { RFNode } from '../../common/entities';
import { Retyped } from '../../common/types';

export const isSubNode = (
  node: RFNode
): node is Retyped<RFNode, 'parentId', string, false> => !!node.parentId;
