import { Nullable, SetState } from '@/common/types';
import Background from '@/common/ui/Background';
import Minimap from '@/common/ui/Minimap';
import ReactFlow, { ReactFlowProps } from '@/common/ui/ReactFlow';
import { ContextMenu } from '@/flow/entities';
import { ElementRef, ForwardedRef, forwardRef } from 'react';
import PaneContextMenu from '../PaneContextMenu';
import { RFEdge, RFNode } from '@/common/entities';

export type FlowPaneProps = {
  paneMenu: Nullable<ContextMenu>;
  nodes: RFNode[];
  edges: RFEdge[];
  setNodes: SetState<RFNode[]>;
  setEdges: SetState<RFEdge[]>;
  onNodeCreate?: () => void;
} & ReactFlowProps;

const FlowPane = forwardRef(
  (
    { paneMenu, onNodeCreate, ...rfProps }: FlowPaneProps,
    ref: ForwardedRef<ElementRef<typeof ReactFlow>>
  ) => {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow ref={ref} {...rfProps}>
          <Background />
          <Minimap />
          {paneMenu && (
            <PaneContextMenu onNodeCreate={onNodeCreate} {...paneMenu} />
          )}
        </ReactFlow>
      </div>
    );
  }
);

export default FlowPane;
