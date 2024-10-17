import { Nullable, SetState } from '@/common/types';
import Background from '@/common/ui/Background';
import Minimap from '@/common/ui/Minimap';
import ReactFlow, { ReactFlowProps } from '@/common/ui/ReactFlow';
import {
  EdgeContextMenu as EdgeContextMenuType,
  FlowEditMode,
  flowEditModeNameMap,
  flowDirection,
  flowDirectionNameMap,
  FlowViewMode,
  flowViewModeNameMap,
  NodeContextMenu as NodeContextMenuType,
  PaneContextMenu as PaneContextMenuType,
  flowEditMode,
  HelperLine,
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
import HelperLines from '../HelperLines';

export type FlowPaneProps = {
  paneMenu: Nullable<PaneContextMenuType>;
  nodeMenu: Nullable<NodeContextMenuType>;
  edgeMenu: Nullable<EdgeContextMenuType>;
  nodes: RFNode[];
  edges: RFEdge[];
  horizontalHelperLine: HelperLine;
  verticalHelperLine: HelperLine;
  viewMode: FlowViewMode;
  editMode: FlowEditMode;
  setNodes: SetState<RFNode[]>;
  setEdges: SetState<RFEdge[]>;
  onNodeCreate?: () => void;
  onNodeDelete?: (nodeId: string) => void;
  onCreateDownstreamAsset?: (upstreamNode: RFNode) => void;
  onEdgeDelete?: (edgeId: string) => void;
  onLineSideSubNodeCreate?: (parentNode: RFNode) => void;
  onLoadSideSubNodeCreate?: (parentNode: RFNode) => void;
  onHorizontalClick?: MouseEventHandler<HTMLButtonElement>;
  onVerticalClick?: MouseEventHandler<HTMLButtonElement>;
  onToggleViewMode?: MouseEventHandler<HTMLButtonElement>;
  onExportFlow?: MouseEventHandler<HTMLButtonElement>;
  onImportFlow?: ChangeEventHandler<HTMLInputElement>;
  onToggleEditMode?: MouseEventHandler<HTMLButtonElement>;
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
      editMode,
      horizontalHelperLine,
      verticalHelperLine,
      onCreateDownstreamAsset,
      onLineSideSubNodeCreate,
      onLoadSideSubNodeCreate,
      onHorizontalClick,
      onVerticalClick,
      onToggleViewMode,
      onExportFlow,
      onImportFlow,
      onToggleEditMode,
      ...rfProps
    }: FlowPaneProps,
    ref: ForwardedRef<ElementRef<typeof ReactFlow>>
  ) => {
    const fileInputRef = useRef<ElementRef<'input'>>(null);

    const changesEnabled = editMode === flowEditMode.unlocked;

    const handleImportFlow: MouseEventHandler<HTMLButtonElement> = () => {
      fileInputRef.current?.click();
    };

    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow ref={ref} {...rfProps}>
          <Background gap={snapGrid} />
          <Minimap />
          <HelperLines
            horizontal={horizontalHelperLine}
            vertical={verticalHelperLine}
          />
          {paneMenu && changesEnabled && (
            <PaneContextMenu onNodeCreate={onNodeCreate} {...paneMenu} />
          )}
          {nodeMenu && changesEnabled && (
            <NodeContextMenu
              onNodeDelete={onNodeDelete}
              onCreateDownstreamAsset={onCreateDownstreamAsset}
              onLineSideSubNodeCreate={onLineSideSubNodeCreate}
              onLoadSideSubNodeCreate={onLoadSideSubNodeCreate}
              {...nodeMenu}
            />
          )}
          {edgeMenu && changesEnabled && (
            <EdgeContextMenu onEdgeDelete={onEdgeDelete} {...edgeMenu} />
          )}
          {(onHorizontalClick || onVerticalClick) && (
            <FlowPanelStyled position="top-right">
              {onVerticalClick && (
                <Button onClick={onVerticalClick} variant="contained">
                  {flowDirectionNameMap[flowDirection.vertical]}
                </Button>
              )}
            </FlowPanelStyled>
          )}
          {(onToggleViewMode ||
            onExportFlow ||
            onImportFlow ||
            onToggleEditMode) && (
            <FlowPanelStyled position="bottom-left">
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
              {onToggleEditMode && (
                <Button variant="contained" onClick={onToggleEditMode}>
                  {flowEditModeNameMap[editMode]}
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
