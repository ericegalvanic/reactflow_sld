import { NodeClassType } from '@/flow/entities';
import { RFNode } from '../entities';
import { Retype } from '../types';

export const hasClassType = (
  node: RFNode
): node is Retype<
  RFNode,
  'data',
  Record<string, unknown> & { class: NodeClassType }
> => 'class' in node.data && typeof node.data['class'] === 'string';
