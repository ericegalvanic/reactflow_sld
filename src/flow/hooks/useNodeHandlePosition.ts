import { RFPosition } from '@/common/entities';
import { useFlow } from '../context';
import { flowDirection as flowDirectionEnum } from '../entities';

export const useNodeHandlePosition = (): {
  sourceHandlePosition: RFPosition;
  targetHandlePosition: RFPosition;
} => {
  const { flowDirection } = useFlow();

  return {
    sourceHandlePosition:
      flowDirection === flowDirectionEnum.vertical
        ? RFPosition.Bottom
        : RFPosition.Right,
    targetHandlePosition:
      flowDirection === flowDirectionEnum.vertical
        ? RFPosition.Top
        : RFPosition.Left,
  };
};
