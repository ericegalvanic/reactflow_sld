import { ObjectValues } from '@/common/types';
import ResizableNode from '../ui/ResizableNode';
import ResizableSubNode from '../ui/ResizableSubNode';

export const nodeType = {
  ResizableNode: 'ResizableNode',
  ResizableSubNode: 'ResizableSubNode',
} as const satisfies Record<string, string>;

export type NodeType = ObjectValues<typeof nodeType>;

export const nodeTypeMap = {
  ResizableNode: ResizableNode,
  ResizableSubNode: ResizableSubNode,
} as const satisfies Record<NodeType, React.FC<never>>;
