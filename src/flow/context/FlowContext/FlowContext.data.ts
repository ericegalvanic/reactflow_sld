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
      code: nodeClassCode.LISW,
      label: 'AUX SWITCH',
    },
  }),
  node({
    id: '4',
    type: nodeType.CapacitorNode,
    position: { x: 100, y: 300 },
    data: {
      code: nodeClassCode.PCAP,
      label: 'CAPACITOR 1',
    },
  }),
  node({
    id: '5',
    type: nodeType.TransformerNode,
    position: { x: 100, y: 350 },
    data: {
      code: nodeClassCode.OFTR,
      label: 'TRANSF 1',
    },
  }),
  node({
    id: '6',
    type: nodeType.TransferSwitchNode,
    position: { x: 100, y: 400 },
    data: {
      code: nodeClassCode['ATSW-MV'],
      label: 'ATS-400',
    },
  }),
  node({
    id: '7',
    type: nodeType.ElectricalPanelNode,
    position: { x: 100, y: 450 },
    data: {
      code: nodeClassCode.PANL,
      label: 'PANL-15',
    },
  }),
  node({
    id: '8',
    type: nodeType.MiscNode,
    position: { x: 100, y: 500 },
    data: {
      code: nodeClassCode.Other,
      label: 'MISC',
    },
  }),
  node({
    id: '9',
    type: nodeType.MotorNode,
    position: { x: 100, y: 550 },
    data: {
      code: nodeClassCode.MVSC,
      label: 'MOTOR',
    },
  }),
  node({
    id: '10',
    type: nodeType.GeneratorNode,
    position: { x: 100, y: 600 },
    data: {
      code: nodeClassCode.GENR,
      label: 'GENERATOR',
    },
  }),
  node({
    id: '11',
    type: nodeType.RelayNode,
    position: { x: 100, y: 650 },
    data: {
      code: nodeClassCode.EMRE,
      label: 'RELAY',
    },
  }),
  node({
    id: '12',
    type: nodeType.UPSSystemNode,
    position: { x: 100, y: 700 },
    data: {
      code: nodeClassCode.UPSS,
      label: 'UPS-1',
    },
  }),
];

export const initialEdges: RFEdge[] = [
  edge({ id: 'e1-2', source: '1', target: '2' }),
  edge({ id: 'e2-3', source: '2', target: '3' }),
  edge({ id: 'e3-4', source: '3', target: '4' }),
  edge({ id: 'e4-5', source: '4', target: '5' }),
];
