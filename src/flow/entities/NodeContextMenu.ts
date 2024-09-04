import { CSSPosition, Position, RFNode } from '@/common/entities';

export type NodeContextMenu = {
  id: string;
  position: Position;
  targetNode: RFNode;
} & CSSPosition;
