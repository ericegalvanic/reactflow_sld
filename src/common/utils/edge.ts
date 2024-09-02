import { CreateRFEDgeDTO, EdgeType, RFEdge } from '../entities';
import { id } from './id';

export const edge = (dto: CreateRFEDgeDTO): RFEdge => ({
  ...dto,
  id: dto.id ?? id(),
  type: dto.type ?? EdgeType.Step,
});
