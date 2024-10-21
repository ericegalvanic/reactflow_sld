import { Position } from '@/common/entities';

export type HelperLineInfoObject = {
  horizontal?: number;
  vertical?: number;
  snapPosition: Partial<Position>;
};
