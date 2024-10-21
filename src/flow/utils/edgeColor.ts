import { RFEdge } from '../../common/entities';

export const edgeColor = (edge: RFEdge): string | undefined =>
  edge.style?.stroke;
