import { RFNode } from '../../common/entities';

export const nodeWithName = (node: RFNode): boolean =>
  'label' in node.data && typeof node.data['string'] === 'string';
