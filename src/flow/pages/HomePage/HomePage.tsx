import FlowPane, { FlowPaneProps } from '../../ui/FlowPane';
import {
  usePaneContextMenu,
  useAddNode,
  useNodeContextMenu,
  useDeleteNode,
  useNodeEditDrawer,
  useUpdateNode,
  useUpdateEdge,
  useEdgeContextMenu,
  useDeleteEdge,
  useAddEdge,
  useAddSubNode,
} from '@/flow/hooks';
import { ElementRef, useCallback, useRef, useState } from 'react';
import { addEdge } from '@xyflow/react';
import {
  EdgeContextMenu,
  NodeContextMenu,
  PaneContextMenu,
  nodeType,
  nodeTypeMap,
} from '@/flow/entities';
import { Nullable } from '@/common/types';
import { snapGrid } from '@/flow/constants';
import PaneDrawer from '@/flow/ui/PaneDrawer';
import NodeEditForm, { NodeEditFormProps } from '@/flow/ui/NodeEditForm';
import { EdgeEditModalProps, useEdgeEditModal } from '@/flow/ui/EdgeEditModal';
import { useFlow } from '@/flow/context';
import { RFNode } from '@/common/entities';
import { getDownstreamNodePosition } from '@/flow/utils';
import { isSubNode } from '@/common/utils';

const HomePage: React.FC = () => {
  const {
    nodes: appNodes,
    edges: appEdges,
    setNodes,
    setEdges,
    onNodesChange: onAppNodesChange,
    onEdgesChange: onAppEdgesChange,
  } = useFlow();
  const [paneMenu, setPaneMenu] = useState<Nullable<PaneContextMenu>>(null);
  const [nodeMenu, setNodeMenu] = useState<Nullable<NodeContextMenu>>(null);
  const [edgeMenu, setEdgeMenu] = useState<Nullable<EdgeContextMenu>>(null);

  const {
    open: drawerOpen,
    closeDrawer,
    openDrawer,
    nodeToEdit,
  } = useNodeEditDrawer();

  const { invokeModal: invokeEdgeEditModal, closeModal: closeEdgeEditModal } =
    useEdgeEditModal();

  const paneRef = useRef<ElementRef<typeof FlowPane>>(null);

  const onAppEdgesConnect = useCallback<
    NonNullable<FlowPaneProps['onConnect']>
  >(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const { openMenu: openPaneMenu, closeMenu: closePaneMenu } =
    usePaneContextMenu(paneRef, setPaneMenu);

  const { openMenu: openNodeMenu, closeMenu: closeNodeMenu } =
    useNodeContextMenu(paneRef, setNodeMenu);

  const { openMenu: openEdgeMenu, closeMenu: closeEdgeMenu } =
    useEdgeContextMenu(paneRef, setEdgeMenu);

  const createNode = useAddNode(setNodes);
  const deleteNode = useDeleteNode(setNodes);
  const updateNode = useUpdateNode(setNodes);
  const updateEdge = useUpdateEdge(setEdges);
  const createEdge = useAddEdge(setEdges);
  const deleteEdge = useDeleteEdge(setEdges);
  const createSubNode = useAddSubNode(setNodes);

  const handleNodeCreate = () => {
    if (paneMenu) {
      const node = createNode(paneMenu.position);
      closePaneMenu();
      openDrawer(node);
    }
  };

  const handleSubNodeCreate = (parentNode: RFNode) => {
    if (nodeMenu) {
      const subNode = createSubNode(parentNode);
      closeNodeMenu();
      openDrawer(subNode);
    }
  };

  const handleCreateDownstreamAsset = (upstreamNode: RFNode) => {
    if (nodeMenu) {
      const isUpstreamASubNode = isSubNode(upstreamNode);

      const downstreamNode = createNode(
        getDownstreamNodePosition(upstreamNode.position),
        {
          type: isUpstreamASubNode
            ? nodeType.ResizableSubNode
            : nodeType.ResizableNode,
          data: {
            label: `SC ${appNodes.length + 1}`,
          },
        }
      );
      createEdge(upstreamNode, downstreamNode);
      closeNodeMenu();
      openDrawer(downstreamNode);
    }
  };

  const handleNodeDelete = (nodeId: string) => {
    if (nodeMenu) {
      deleteNode(nodeId);
      closeNodeMenu();
    }
  };

  const handleEdgeDelete = (edgeId: string) => {
    if (edgeMenu) {
      deleteEdge(edgeId);
      closeEdgeMenu();
    }
  };

  const handlePaneClick = () => {
    if (paneMenu) {
      closePaneMenu();
    }
    if (nodeMenu) {
      closeNodeMenu();
    }
    if (edgeMenu) {
      closeEdgeMenu();
    }
    closeDrawer();
  };

  const handlePaneContextMenu: typeof openPaneMenu = (event) => {
    if (nodeMenu) {
      closeNodeMenu();
      return;
    }
    openPaneMenu(event);
  };

  const handleNodeContextMenu: typeof openNodeMenu = (event, node) => {
    if (paneMenu) {
      closePaneMenu();
      return;
    }
    openNodeMenu(event, node);
  };

  const handleEdgeContextMenu: typeof openEdgeMenu = (event, edge) => {
    if (edgeMenu) {
      closeEdgeMenu();
      return;
    }
    openEdgeMenu(event, edge);
  };

  const handleNodeEditSave: NonNullable<NodeEditFormProps['onSave']> = (
    updatedNode
  ) => {
    updateNode(updatedNode);
    closeDrawer();
  };

  const handleEdgeEditSave: EdgeEditModalProps['onSave'] = (edge) => {
    updateEdge(edge);
    closeEdgeEditModal();
  };

  const handleNodeClick: NonNullable<FlowPaneProps['onNodeClick']> = (
    event,
    node
  ) => {
    openDrawer(node);
  };

  const handleEdgeClick: NonNullable<FlowPaneProps['onEdgeClick']> = (
    event,
    edge
  ) => {
    invokeEdgeEditModal({ edge, onSave: handleEdgeEditSave });
  };

  return (
    <>
      <FlowPane
        ref={paneRef}
        nodes={appNodes}
        edges={appEdges}
        setNodes={setNodes}
        setEdges={setEdges}
        onNodesChange={onAppNodesChange}
        onEdgesChange={onAppEdgesChange}
        onConnect={onAppEdgesConnect}
        nodeTypes={nodeTypeMap}
        onContextMenu={handlePaneContextMenu}
        onNodeContextMenu={handleNodeContextMenu}
        onEdgeContextMenu={handleEdgeContextMenu}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        paneMenu={paneMenu}
        nodeMenu={nodeMenu}
        edgeMenu={edgeMenu}
        onNodeCreate={handleNodeCreate}
        onNodeDelete={handleNodeDelete}
        onEdgeDelete={handleEdgeDelete}
        onEdgeClick={handleEdgeClick}
        onCreateDownstreamAsset={handleCreateDownstreamAsset}
        onSubNodeCreate={handleSubNodeCreate}
        snapToGrid
        snapGrid={snapGrid}
      />
      <PaneDrawer className="nowheel nodrag nopan" open={drawerOpen}>
        {nodeToEdit && (
          <NodeEditForm node={nodeToEdit} onSave={handleNodeEditSave} />
        )}
      </PaneDrawer>
    </>
  );
};

export default HomePage;
