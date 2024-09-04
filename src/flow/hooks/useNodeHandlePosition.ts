import { RFPosition } from '@/common/entities';
import { useFlow } from '../context';

export const useNodeHandlePosition = (): {
  sourceNodePosition: RFPosition;
  targetPosition: RFPosition;
} => {
  const { flowDirection } = useFlow();

  return {
    sourceNodePosition:
      flowDirection === 'TB' ? RFPosition.Bottom : RFPosition.Right,
    targetPosition: flowDirection === 'TB' ? RFPosition.Top : RFPosition.Left,
  };
};
