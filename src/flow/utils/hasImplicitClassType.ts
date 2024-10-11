import { RFNode } from '@/common/entities';
import { Retype } from '@/common/types';
import { nodeTypeNodeClassMap, NodeTypeWithImplicitClass } from '../entities';

export const hasImplicitClassType = (
  node: RFNode
): node is Retype<RFNode, 'type', NodeTypeWithImplicitClass> =>
  Object.keys(nodeTypeNodeClassMap).some((nodeType) => nodeType === node.type);
