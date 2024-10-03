import { RFEdge, RFNode } from '@/common/entities';
import { SetState } from '@/common/types';
import { FlowEditMode, FlowViewMode, HelperLine } from '@/flow/entities';
import { OnEdgesChange, OnNodesChange } from '@/flow/hooks';

export type FlowContextData = {
  nodes: RFNode[];
  edges: RFEdge[];
  viewMode: FlowViewMode;
  editMode: FlowEditMode;
  changesEnabled: boolean;
  horizontalHelperLine: HelperLine;
  verticalHelperLine: HelperLine;
  setNodes: SetState<RFNode[]>;
  setEdges: SetState<RFEdge[]>;
  setViewMode: SetState<FlowViewMode>;
  setEditMode: SetState<FlowEditMode>;
  setHorizontalHelperLine: SetState<HelperLine>;
  setVerticalHelperLine: SetState<HelperLine>;
  onNodesChange: OnNodesChange<RFNode>;
  onEdgesChange: OnEdgesChange<RFEdge>;
  takeSnapshot: () => void;
};
