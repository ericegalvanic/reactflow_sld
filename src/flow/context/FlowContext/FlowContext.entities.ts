import { RFEdge, RFNode } from '@/common/entities';
import { SetState } from '@/common/types';
import { FlowDirection } from '@/flow/entities';
import { OnEdgesChange, OnNodesChange } from '@/flow/hooks';

export type FlowContextData = {
  nodes: RFNode[];
  edges: RFEdge[];
  flowDirection: FlowDirection;
  setNodes: SetState<RFNode[]>;
  setEdges: SetState<RFEdge[]>;
  setFlowDirection: SetState<FlowDirection>;
  onNodesChange: OnNodesChange<RFNode>;
  onEdgesChange: OnEdgesChange<RFEdge>;
  onLayout: (direction: FlowDirection) => void;
};
