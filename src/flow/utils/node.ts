import { nodeType } from '@/flow/entities';
import { CreateRFNodeDTO, RFNode } from '../../common/entities';
import { id } from '../../common/utils/id';
import { defaultNodeColor, defaultNodeStyle } from '@/flow/constants';

const nodeStyles = defaultNodeStyle();

export const node = (dto: CreateRFNodeDTO): RFNode => {
  const { background, border } = defaultNodeColor();

  return {
    ...dto,
    type: dto.type ?? nodeType.ResizableNode,
    data: dto.data
      ? {
          ...dto.data,
          background: dto.data?.background ?? background,
          border: dto.data?.border ?? border,
        }
      : {
          label: 'NEW ASSET',
          background: background,
          border: border,
        },
    id: dto.id ?? id(),
    style: dto.style ?? nodeStyles,
  };
};
