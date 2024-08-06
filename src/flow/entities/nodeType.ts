import { ObjectValues } from '@/common/types';
import ResizableNode from '../ui/ResizableNode';

export const nodeType = {
  ResizableNode: 'ResizableNode',
} as const satisfies Record<string, string>;

export type NodeType = ObjectValues<typeof nodeType>;

export const nodeTypeMap = {
  ResizableNode: ResizableNode,
} as const satisfies Record<NodeType, React.FC<never>>;
