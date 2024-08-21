import { Position } from '@/common/entities';

const downstreamYOffsetPx = 100;

export const getDownstreamNodePosition = (
  upstreamNodePosition: Position
): Position => {
  return {
    x: upstreamNodePosition.x,
    y: upstreamNodePosition.y + downstreamYOffsetPx,
  };
};
