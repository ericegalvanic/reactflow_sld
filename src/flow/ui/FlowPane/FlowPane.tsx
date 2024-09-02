import { Nullable, SetState } from '@/common/types';
import Background from '@/common/ui/Background';
import Minimap from '@/common/ui/Minimap';
import ReactFlow, { ReactFlowProps } from '@/common/ui/ReactFlow';
import {
  EdgeContextMenu as EdgeContextMenuType,
  NodeContextMenu as NodeContextMenuType,
  PaneContextMenu as PaneContextMenuType,
} from '@/flow/entities';
import { ElementRef, ForwardedRef, forwardRef, MouseEventHandler } from 'react';
import PaneContextMenu from '../PaneContextMenu';
import { RFEdge, RFNode } from '@/common/entities';
import NodeContextMenu from '../NodeContextMenu';
import { snapGrid } from '@/flow/constants';
import EdgeContextMenu from '../EdgeContextMenu';
import Panel from '@/common/ui/Panel';
import Button from '@/common/ui/Button';

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
  onHorizontalClick?: MouseEventHandler<HTMLButtonElement>;
  onVerticalClick?: MouseEventHandler<HTMLButtonElement>;
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
      onHorizontalClick,
      onVerticalClick,
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
          {(onHorizontalClick || onVerticalClick) && (
            <Panel position="top-right">
              {onVerticalClick && (
                <Button
                  onClick={onVerticalClick}
                  variant="contained"
                  sx={{ marginRight: 1 }}
                >
                  Vertical
                </Button>
              )}
              {onHorizontalClick && (
                <Button onClick={onHorizontalClick} variant="contained">
                  Horizontal
                </Button>
              )}
            </Panel>
          )}
        </ReactFlow>
      </div>
    );
  }
);

export default FlowPane;
