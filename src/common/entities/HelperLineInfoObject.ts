import { Position } from './Position';

export type HelperLineInfoObject = {
  horizontal?: number;
  vertical?: number;
  snapPosition: Partial<Position>;
};
