import { Position, RFNode } from '@/common/entities';
import { safeNumber } from '@/common/utils';

const downstreamYOffsetPx = 100;

const downstreamYOffsetWithNodeWidthPx = 40;

export const getDownstreamNodePosition = (upstreamNode: RFNode): Position => {
  return {
    x: upstreamNode.position.x,
    y:
      upstreamNode.position.y +
      Math.max(
        downstreamYOffsetPx,
        safeNumber(upstreamNode.height) + downstreamYOffsetWithNodeWidthPx
      ),
  };
};
