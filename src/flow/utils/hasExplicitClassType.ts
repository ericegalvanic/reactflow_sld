import { NodeClassType } from '@/flow/entities';
import { RFNode } from '../../common/entities';
import { Retyped } from '../../common/types';

export const hasExplicitClassType = (
  node: RFNode
): node is Retyped<RFNode, 'data', RFNode['data'] & { class: NodeClassType }> =>
  'class' in node.data && typeof node.data['class'] === 'string';
