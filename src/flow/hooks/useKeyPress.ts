import { useKeyPress as useKeyPressFromRF } from '@xyflow/react';

export const useKeyPress = (...args: Parameters<typeof useKeyPressFromRF>) =>
  useKeyPressFromRF(...args);
