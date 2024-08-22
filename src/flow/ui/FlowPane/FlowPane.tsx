import { Nullable, SetState } from '@/common/types';
import Background from '@/common/ui/Background';
import Minimap from '@/common/ui/Minimap';
import ReactFlow, { ReactFlowProps } from '@/common/ui/ReactFlow';
import {
  EdgeContextMenu as EdgeContextMenuType,
  NodeContextMenu as NodeContextMenuType,
  PaneContextMenu as PaneContextMenuType,
} from '@/flow/entities';
import { ElementRef, ForwardedRef, forwardRef } from 'react';
import PaneContextMenu from '../PaneContextMenu';
import { RFEdge, RFNode } from '@/common/entities';
import NodeContextMenu from '../NodeContextMenu';
import { snapGrid } from '@/flow/constants';
import EdgeContextMenu from '../EdgeContextMenu';

export type FlowPaneProps = {
  paneMenu: Nullable<PaneContextMenuType>;
  nodeMenu: Nullable<NodeContextMenuType>;
  edgeMenu: Nullable<EdgeContextMenuType>;
  nodes: RFNode[];
  edges: RFEdge[];
  setNodes: SetState<RFNode[]>;
  setEdges: SetState<RFEdge[]>;
  onNodeCreate?: () => void;
  onNodeDelete?: (nodeId: string) => void;
  onCreateDownstreamAsset?: (upstreamNode: RFNode) => void;
  onEdgeDelete?: (edgeId: string) => void;
  onSubNodeCreate?: (parentNode: RFNode) => void;
} & ReactFlowProps;

const FlowPane = forwardRef(
  (
    {
      paneMenu,
      onNodeCreate,
      nodeMenu,
      onNodeDelete,
      edgeMenu,
      onEdgeDelete,
      onCreateDownstreamAsset,
      onSubNodeCreate,
      ...rfProps
    }: FlowPaneProps,
    ref: ForwardedRef<ElementRef<typeof ReactFlow>>
  ) => {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow ref={ref} {...rfProps}>
          <Background gap={snapGrid} />
          <Minimap />
          {paneMenu && (
            <PaneContextMenu onNodeCreate={onNodeCreate} {...paneMenu} />
          )}
          {nodeMenu && (
            <NodeContextMenu
              onNodeDelete={onNodeDelete}
              onCreateDownstreamAsset={onCreateDownstreamAsset}
              onSubNodeCreate={onSubNodeCreate}
              {...nodeMenu}
            />
          )}
          {edgeMenu && (
            <EdgeContextMenu onEdgeDelete={onEdgeDelete} {...edgeMenu} />
          )}
        </ReactFlow>
      </div>
    );
  }
);

export default FlowPane;
