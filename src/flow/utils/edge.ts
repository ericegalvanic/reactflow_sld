import { CreateRFEDgeDTO, EdgeType, RFEdge } from '../../common/entities';
import { id } from '../../common/utils/id';

export const edge = (dto: CreateRFEDgeDTO): RFEdge => ({
  ...dto,
  id: dto.id ?? id(),
  type: dto.type ?? EdgeType.Step,
});
