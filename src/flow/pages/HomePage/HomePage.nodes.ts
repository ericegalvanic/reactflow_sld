import { RFEdge, RFNode } from '@/common/entities';
import { edge, node } from '@/common/utils';
import { nodeType } from '@/flow/entities';

export const initialNodes: RFNode[] = [
  node({
    id: '1',
    type: nodeType.ResizableNode,
    position: { x: 100, y: 50 },
    data: { label: 'ASSET 1' },
  }),
  node({
    id: '2',
    type: nodeType.ResizableNode,
    position: { x: 100, y: 150 },
    data: { label: 'ASSET 2' },
  }),
];

export const initialEdges: RFEdge[] = [
  edge({ id: 'e1-2', source: '1', target: '2' }),
];
