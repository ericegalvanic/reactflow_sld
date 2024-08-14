import FlowPane, { FlowPaneProps } from '../../ui/FlowPane';
import {
  useNodesState,
  useEdgesState,
  usePaneContextMenu,
  useAddNode,
  useNodeContextMenu,
  useDeleteNode,
  useNodeEditDrawer,
  useUpdateNode,
} from '@/flow/hooks';
import { ElementRef, useCallback, useRef, useState } from 'react';
import { addEdge } from '@xyflow/react';
import { NodeContextMenu, PaneContextMenu, nodeTypeMap } from '@/flow/entities';
import { initialEdges, initialNodes } from './HomePage.nodes';
import { Nullable } from '@/common/types';
import { snapGrid } from '@/flow/constants';
import PaneDrawer from '@/flow/ui/PaneDrawer';
import NodeEditForm, { NodeEditFormProps } from '@/flow/ui/NodeEditForm';
import { useEdgeEditModal } from '@/flow/ui/EdgeEditModal';

const HomePage: React.FC = () => {
  const [appNodes, setNodes, onAppNodesChange] = useNodesState(initialNodes);
  const [appEdges, setEdges, onAppEdgesChange] = useEdgesState(initialEdges);
  const [paneMenu, setPaneMenu] = useState<Nullable<PaneContextMenu>>(null);
  const [nodeMenu, setNodeMenu] = useState<Nullable<NodeContextMenu>>(null);
  const {
    open: drawerOpen,
    closeDrawer,
    openDrawer,
    nodeToEdit,
  } = useNodeEditDrawer();

  const { invokeModal: invokeEdgeEditModal } = useEdgeEditModal();

  const paneRef = useRef<ElementRef<typeof FlowPane>>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onAppEdgesConnect = useCallback(
    ((connection) =>
      setEdges((edges) =>
        addEdge(connection, edges)
      )) satisfies FlowPaneProps['onConnect'],
    []
  );

  const { openMenu: openPaneMenu, closeMenu: closePaneMenu } =
    usePaneContextMenu(paneRef, setPaneMenu);

  const { openMenu: openNodeMenu, closeMenu: closeNodeMenu } =
    useNodeContextMenu(paneRef, setNodeMenu);

  const createNode = useAddNode(setNodes);
  const deleteNode = useDeleteNode(setNodes);
  const updateNode = useUpdateNode(setNodes);

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

  const handleNodeClick: NonNullable<FlowPaneProps['onNodeClick']> = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event,
    node
  ) => {
    openDrawer(node);
  };

  const handleEdgeClick: NonNullable<FlowPaneProps['onEdgeClick']> = () => {
    invokeEdgeEditModal({});
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
