import { CSS, Position } from '@/common/entities';

export type ContextMenu = {
  position: Position;
} & Pick<CSS, 'top' | 'bottom' | 'left' | 'right'>;
