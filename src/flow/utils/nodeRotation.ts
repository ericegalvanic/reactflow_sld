import { RFNode } from '../../common/entities';

export const nodeRotation = (node: RFNode): number | undefined =>
  ('rotation' in node.data &&
    typeof node.data['rotation'] === 'number' &&
    node.data['rotation']) ||
  undefined;
