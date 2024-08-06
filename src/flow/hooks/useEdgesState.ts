import { useEdgesState as useRFEdgesState } from '@xyflow/react';

export const useEdgesState = (
  ...args: Parameters<typeof useRFEdgesState>
): ReturnType<typeof useRFEdgesState> => {
  return useRFEdgesState(...args);
};
