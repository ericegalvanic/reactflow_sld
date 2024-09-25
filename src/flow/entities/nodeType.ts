import { ObjectValues } from '@/common/types';
import ResizableNode from '../ui/ResizableNode';
import ResizableSubNode from '../ui/ResizableSubNode';
import ImageNode from '../ui/ImageNode';
import ImageSubNode from '../ui/ImageSubNode';

export const nodeType = {
  ResizableNode: 'ResizableNode',
  ResizableSubNode: 'ResizableSubNode',
  ImageNode: 'ImageNode',
  ImageSubNode: 'ImageSubNode',
} as const satisfies Record<string, string>;

export type NodeType = ObjectValues<typeof nodeType>;

export const nodeTypeMap = {
  ResizableNode: ResizableNode,
  ResizableSubNode: ResizableSubNode,
  ImageNode: ImageNode,
  ImageSubNode: ImageSubNode,
} as const satisfies Record<NodeType, React.FC<never>>;
