import { RFNode } from '../../common/entities';

export const nodeColor = (node: RFNode): string | undefined =>
  node.style?.background as string;
