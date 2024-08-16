import { RFEdge } from '../entities';

export const edgeColor = (edge: RFEdge): string | undefined =>
  edge.style?.stroke;
