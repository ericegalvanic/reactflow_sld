import { CSSPosition, Position } from '@/common/entities';

export type NodeContextMenu = {
  id: string;
  position: Position;
} & CSSPosition;
