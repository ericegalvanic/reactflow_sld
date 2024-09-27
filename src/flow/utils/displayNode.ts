import { RFNode } from '../../common/entities';
import { formattedId } from '../../common/utils/id';
import { nodeName } from './nodeName';

export const displayNode = (node: RFNode) =>
  nodeName(node) ?? formattedId(node.id) ?? node.id;
