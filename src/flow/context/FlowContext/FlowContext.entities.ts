import { RFEdge, RFNode } from '@/common/entities';
import { SetState } from '@/common/types';
import {
  FlowEditMode,
  FlowDirection,
  FlowViewMode,
  HelperLine,
} from '@/flow/entities';
import { OnEdgesChange, OnNodesChange } from '@/flow/hooks';

export type FlowContextData = {
  nodes: RFNode[];
  edges: RFEdge[];
  flowDirection: FlowDirection;
  viewMode: FlowViewMode;
  editMode: FlowEditMode;
  changesEnabled: boolean;
  horizontalHelperLine: HelperLine;
  verticalHelperLine: HelperLine;
  setNodes: SetState<RFNode[]>;
  setEdges: SetState<RFEdge[]>;
  setFlowDirection: SetState<FlowDirection>;
  setViewMode: SetState<FlowViewMode>;
  setEditMode: SetState<FlowEditMode>;
  setHorizontalHelperLine: SetState<HelperLine>;
  setVerticalHelperLine: SetState<HelperLine>;
  onNodesChange: OnNodesChange<RFNode>;
  onEdgesChange: OnEdgesChange<RFEdge>;
  onLayout: (direction: FlowDirection) => void;
  takeSnapshot: () => void;
};
