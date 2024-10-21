import { Position, RFNode } from '../../common/entities';

export const nodeCenter = (node: RFNode): Position => ({
  x: node.position.x + (node.width ?? 0) / 2,
  y: node.position.y + (node.height ?? 0) / 2,
});
