import { RFNode } from '../entities';
import { formattedId } from './id';
import { nodeName } from './nodeName';

export const displayNode = (node: RFNode) =>
  nodeName(node) ?? formattedId(node.id) ?? node.id;
