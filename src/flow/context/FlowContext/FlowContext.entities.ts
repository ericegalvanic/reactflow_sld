import { RFEdge, RFNode } from '@/common/entities';
import { SetState } from '@/common/types';
import { OnEdgesChange, OnNodesChange } from '@/flow/hooks';

export type FlowContextData = {
  nodes: RFNode[];
  edges: RFEdge[];
  setNodes: SetState<RFNode[]>;
  setEdges: SetState<RFEdge[]>;
  onNodesChange: OnNodesChange<RFNode>;
  onEdgesChange: OnEdgesChange<RFEdge>;
};
