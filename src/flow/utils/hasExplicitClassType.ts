import { NodeClassType } from '@/flow/entities';
import { RFNode } from '../../common/entities';
import { Retype } from '../../common/types';

export const hasExplicitClassType = (
  node: RFNode
): node is Retype<RFNode, 'data', RFNode['data'] & { class: NodeClassType }> =>
  'class' in node.data && typeof node.data['class'] === 'string';
