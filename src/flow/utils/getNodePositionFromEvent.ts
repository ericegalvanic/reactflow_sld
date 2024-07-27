import { Position } from '@/common/entities';

export const getNodePositionFromEvent = (event: {
  clientX: number;
  clientY: number;
}): Position => ({ x: event.clientX, y: event.clientY });
