import { nodeType } from '@/flow/entities';
import { CreateRFNodeDTO, RFNode } from '../../common/entities';
import { id } from '../../common/utils/id';
import { defaultNodeStyle } from '@/flow/constants';

const nodeStyles = defaultNodeStyle();

export const node = (dto: CreateRFNodeDTO): RFNode => ({
  ...dto,
  type: dto.type ?? nodeType.ResizableNode,
  data: dto.data ?? { label: 'NEW ASSET' },
  id: dto.id ?? id(),
  style: dto.style ?? nodeStyles,
});
