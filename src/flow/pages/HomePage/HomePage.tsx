import FlowPane, { FlowPaneProps } from '../../ui/FlowPane';
import {
  usePaneContextMenu,
  useAddNode,
  useNodeContextMenu,
  useDeleteNode,
  useNodeEditDrawer,
  useUpdateNode,
  useUpdateEdge,
} from '@/flow/hooks';
import { ElementRef, useCallback, useRef, useState } from 'react';
import { addEdge } from '@xyflow/react';
import { NodeContextMenu, PaneContextMenu, nodeTypeMap } from '@/flow/entities';
import { Nullable } from '@/common/types';
import { snapGrid } from '@/flow/constants';
import PaneDrawer from '@/flow/ui/PaneDrawer';
import NodeEditForm, { NodeEditFormProps } from '@/flow/ui/NodeEditForm';
import { EdgeEditModalProps, useEdgeEditModal } from '@/flow/ui/EdgeEditModal';
import { useFlow } from '@/flow/context';

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

  const createNode = useAddNode(setNodes);
  const deleteNode = useDeleteNode(setNodes);
  const updateNode = useUpdateNode(setNodes);
  const updateEdge = useUpdateEdge(setEdges);

  const handleNodeCreate = () => {
    if (paneMenu) {
      const node = createNode(paneMenu.position);
      closePaneMenu();
      openDrawer(node);
    }
  };

  const handleNodeDelete = (nodeId: string) => {
    if (nodeMenu) {
      deleteNode(nodeId);
      closeNodeMenu();
    }
  };

  const handlePaneClick = () => {
    if (paneMenu) {
      closePaneMenu();
    }
    if (nodeMenu) {
      closeNodeMenu();
    }
    closeDrawer();
  };

  const handleNodeContextMenu: typeof openNodeMenu = (event, node) => {
    if (paneMenu) {
      closePaneMenu();
    }
    openNodeMenu(event, node);
  };

  const handlePaneContextMenu: typeof openPaneMenu = (event) => {
    if (nodeMenu) {
      closeNodeMenu();
    }
    openPaneMenu(event);
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
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        paneMenu={paneMenu}
        nodeMenu={nodeMenu}
        onNodeCreate={handleNodeCreate}
        onNodeDelete={handleNodeDelete}
        onEdgeClick={handleEdgeClick}
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
