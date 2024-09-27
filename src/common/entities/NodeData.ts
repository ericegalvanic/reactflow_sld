import { ImageNodeData } from '@/flow/ui/ImageNode';
import { ImageSubNodeData } from '@/flow/ui/ImageSubNode';
import { ResizableNodeData } from '@/flow/ui/ResizableNode';
import { ResizableSubNodeData } from '@/flow/ui/ResizableSubNode';

export type NodeData = ResizableNodeData &
  ResizableSubNodeData &
  ImageNodeData &
  ImageSubNodeData;
