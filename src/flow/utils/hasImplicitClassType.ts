import { RFNode } from '@/common/entities';
import { Retyped } from '@/common/types';
import { nodeTypeNodeClassMap, NodeTypeWithImplicitClass } from '../entities';

export const hasImplicitClassType = (
  node: RFNode
): node is Retyped<RFNode, 'type', NodeTypeWithImplicitClass> =>
  Object.keys(nodeTypeNodeClassMap).some((nodeType) => nodeType === node.type);
