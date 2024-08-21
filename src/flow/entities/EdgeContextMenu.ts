import { CSSPosition, Position, RFEdge } from '@/common/entities';

export type EdgeContextMenu = {
  id: string;
  position: Position;
  targetEdge: RFEdge;
} & CSSPosition;
