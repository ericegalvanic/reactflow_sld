import { Nullable, SetState } from '@/common/types';
import Background from '@/common/ui/Background';
import Minimap from '@/common/ui/Minimap';
import ReactFlow, { ReactFlowProps } from '@/common/ui/ReactFlow';
import {
  EdgeContextMenu as EdgeContextMenuType,
  flowDirection,
  flowDirectionNameMap,
  FlowViewMode,
  flowViewModeNameMap,
  NodeContextMenu as NodeContextMenuType,
  PaneContextMenu as PaneContextMenuType,
} from '@/flow/entities';
import {
  ChangeEventHandler,
  ElementRef,
  ForwardedRef,
  forwardRef,
  MouseEventHandler,
  useRef,
} from 'react';
import PaneContextMenu from '../PaneContextMenu';
import { RFEdge, RFNode } from '@/common/entities';
import NodeContextMenu from '../NodeContextMenu';
import { snapGrid } from '@/flow/constants';
import EdgeContextMenu from '../EdgeContextMenu';
import Button from '@/common/ui/Button';
import { FileInputStyled, FlowPanelStyled } from './FlowPane.styles';

export type FlowPaneProps = {
  paneMenu: Nullable<PaneContextMenuType>;
  nodeMenu: Nullable<NodeContextMenuType>;
  edgeMenu: Nullable<EdgeContextMenuType>;
  nodes: RFNode[];
  edges: RFEdge[];
  viewMode: FlowViewMode;
  setNodes: SetState<RFNode[]>;
  setEdges: SetState<RFEdge[]>;
  onNodeCreate?: () => void;
  onNodeDelete?: (nodeId: string) => void;
  onCreateDownstreamAsset?: (upstreamNode: RFNode) => void;
  onEdgeDelete?: (edgeId: string) => void;
  onSubNodeCreate?: (parentNode: RFNode) => void;
  onHorizontalClick?: MouseEventHandler<HTMLButtonElement>;
  onVerticalClick?: MouseEventHandler<HTMLButtonElement>;
  onToggleViewMode?: MouseEventHandler<HTMLButtonElement>;
  onExportFlow?: MouseEventHandler<HTMLButtonElement>;
  onImportFlow?: ChangeEventHandler<HTMLInputElement>;
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
      viewMode,
      onCreateDownstreamAsset,
      onSubNodeCreate,
      onHorizontalClick,
      onVerticalClick,
      onToggleViewMode,
      onExportFlow,
      onImportFlow,
      ...rfProps
    }: FlowPaneProps,
    ref: ForwardedRef<ElementRef<typeof ReactFlow>>
  ) => {
    const fileInputRef = useRef<ElementRef<'input'>>(null);

    const handleImportFlow: MouseEventHandler<HTMLButtonElement> = () => {
      fileInputRef.current?.click();
    };

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
            <FlowPanelStyled
              position="top-right"
              style={{ display: 'flex', gap: 4 }}
            >
              {onVerticalClick && (
                <Button onClick={onVerticalClick} variant="contained">
                  {flowDirectionNameMap[flowDirection.vertical]}
                </Button>
              )}
              {onHorizontalClick && (
                <Button onClick={onHorizontalClick} variant="contained">
                  {flowDirectionNameMap[flowDirection.horizontal]}
                </Button>
              )}
            </FlowPanelStyled>
          )}
          {(onToggleViewMode || onExportFlow || onImportFlow) && (
            <FlowPanelStyled
              position="bottom-left"
              style={{ display: 'flex', gap: 4 }}
            >
              {onToggleViewMode && (
                <Button variant="contained" onClick={onToggleViewMode}>
                  {flowViewModeNameMap[viewMode]}
                </Button>
              )}
              {onExportFlow && (
                <Button variant="contained" onClick={onExportFlow}>
                  Export
                </Button>
              )}
              {onImportFlow && (
                <Button variant="contained" onClick={handleImportFlow}>
                  <FileInputStyled
                    type="file"
                    ref={fileInputRef}
                    onChange={onImportFlow}
                  />
                  Import
                </Button>
              )}
            </FlowPanelStyled>
          )}
        </ReactFlow>
      </div>
    );
  }
);

export default FlowPane;
