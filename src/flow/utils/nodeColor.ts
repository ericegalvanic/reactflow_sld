import { Colorable, RFNode } from '../../common/entities';

export const nodeColor = (node: RFNode): Colorable => ({
  background: node.data?.background,
  border: node.data?.border,
});
