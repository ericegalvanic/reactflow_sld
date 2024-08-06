import { RFNode } from '../entities';

export const nodeName = (node: RFNode): string | undefined =>
  ('label' in node.data &&
    typeof node.data['label'] === 'string' &&
    node.data['label']) ||
  undefined;
