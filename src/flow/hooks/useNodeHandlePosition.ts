import { RFPosition } from '@/common/entities';
import { useFlow } from '../context';
import { flowDirection as flowDirectionEnum } from '../entities';

export const useNodeHandlePosition = (): {
  sourceNodePosition: RFPosition;
  targetPosition: RFPosition;
} => {
  const { flowDirection } = useFlow();

  return {
    sourceNodePosition:
      flowDirection === flowDirectionEnum.vertical
        ? RFPosition.Bottom
        : RFPosition.Right,
    targetPosition:
      flowDirection === flowDirectionEnum.vertical
        ? RFPosition.Top
        : RFPosition.Left,
  };
};
