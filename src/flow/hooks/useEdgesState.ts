import { RFEdge } from '@/common/entities';
import {
  useEdgesState as useRFEdgesState,
  OnEdgesChange as OnRFEdgesChange,
} from '@xyflow/react';

export type OnEdgesChange<E extends RFEdge = RFEdge> = OnRFEdgesChange<E>;

export const useEdgesState = (
  ...args: Parameters<typeof useRFEdgesState>
): ReturnType<typeof useRFEdgesState> => {
  return useRFEdgesState(...args);
};
