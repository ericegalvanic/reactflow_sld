import { RFEdge, RFNode } from '@/common/entities';
import { edge, node } from '@/flow/utils';
import { nodeClassCode, nodeType } from '@/flow/entities';

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
  node({
    id: '3',
    type: nodeType.SwitchNode,
    position: { x: 100, y: 250 },
    data: {
      code: nodeClassCode.AMCB,
      label: 'AUX SWITCH',
    },
  }),
];

export const initialEdges: RFEdge[] = [
  edge({ id: 'e1-2', source: '1', target: '2' }),
  edge({ id: 'e2-3', source: '2', target: '3' }),
];
