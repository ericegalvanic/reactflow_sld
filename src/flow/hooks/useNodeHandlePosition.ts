import { RFPosition } from '@/common/entities';

export const useNodeHandlePosition = (): {
  sourceNodePosition: RFPosition;
  targetPosition: RFPosition;
} => {
  return {
    sourceNodePosition: RFPosition.Bottom,
    targetPosition: RFPosition.Top,
  };
};
