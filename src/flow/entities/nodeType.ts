import { ObjectValues } from '@/common/types';

export const nodeType = {
  ResizableNode: 'ResizableNode',
} as const satisfies Record<string, string>;

export type NodeType = ObjectValues<typeof nodeType>;
