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
import { addEdge, NodeTypes } from '@xyflow/react';
import {
  EdgeContextMenu,
  NodeContextMenu,
  PaneContextMenu,
  flowEditMode,
  flowViewMode,
  nodeType,
  nodeTypeMap,
} from '@/flow/entities';
import { Nullable } from '@/common/types';
import { snapGrid } from '@/flow/constants';
import PaneDrawer from '@/flow/ui/PaneDrawer';
import NodeEditForm, { NodeEditFormProps } from '@/flow/ui/NodeEditForm';
import { EdgeEditModalProps, useEdgeEditModal } from '@/flow/ui/EdgeEditModal';
import { useFlow } from '@/flow/context';
import { EdgeType, FlowSave, RFNode } from '@/common/entities';
import { generateFlowSaveName, getDownstreamNodePosition } from '@/flow/utils';
import { assertIsFlowSave, downloadFile, isSubNode } from '@/common/utils';
import { JSON_MIME_TYPE } from '@/common/constants';

const HomePage: React.FC = () => {
  const {
    nodes: appNodes,
    edges: appEdges,
    viewMode: appViewMode,
    editMode: appEditMode,
    horizontalHelperLine,
    verticalHelperLine,
    changesEnabled,
    setNodes,
    setEdges,
    setViewMode,
    setEditMode,
    onNodesChange: onAppNodesChange,
    onEdgesChange: onAppEdgesChange,
    onLayout,
    takeSnapshot,
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
    if (paneMenu && changesEnabled) {
      takeSnapshot();
      const node = createNode(paneMenu.position);
      closePaneMenu();
      openDrawer(node);
    }
  };

  const handleSubNodeCreate = (parentNode: RFNode) => {
    if (nodeMenu && changesEnabled) {
      takeSnapshot();
      const subNode = createSubNode(parentNode);
      closeNodeMenu();
      openDrawer(subNode);
    }
  };

  const handleCreateDownstreamAsset = (upstreamNode: RFNode) => {
    if (nodeMenu && changesEnabled) {
      takeSnapshot();
      const isUpstreamASubNode = isSubNode(upstreamNode);

      const downstreamNode = createNode(
        getDownstreamNodePosition(upstreamNode),
        {
          type: isUpstreamASubNode
            ? nodeType.ResizableSubNode
            : nodeType.ResizableNode,
          data: {
            label: `ASSET ${appNodes.length + 1}`,
          },
        }
      );
      createEdge(upstreamNode, downstreamNode);
      closeNodeMenu();
      openDrawer(downstreamNode);
    }
  };

  const handleNodeDelete = (nodeId: string) => {
    if (nodeMenu && changesEnabled) {
      takeSnapshot();
      deleteNode(nodeId);
      closeNodeMenu();
    }
  };

  const handleEdgeDelete = (edgeId: string) => {
    if (edgeMenu && changesEnabled) {
      takeSnapshot();
      deleteEdge(edgeId);
      closeEdgeMenu();
    }
  };

  const handlePaneClick = () => {
    if (paneMenu && changesEnabled) {
      closePaneMenu();
    }
    if (nodeMenu && changesEnabled) {
      closeNodeMenu();
    }
    if (edgeMenu && changesEnabled) {
      closeEdgeMenu();
    }
    closeDrawer();
  };

  const handlePaneContextMenu: typeof openPaneMenu = (event) => {
    if (nodeMenu && changesEnabled) {
      closeNodeMenu();
      return;
    }
    openPaneMenu(event);
  };

  const handleNodeContextMenu: typeof openNodeMenu = (event, node) => {
    if (paneMenu && changesEnabled) {
      closePaneMenu();
      return;
    }
    openNodeMenu(event, node);
  };

  const handleEdgeContextMenu: typeof openEdgeMenu = (event, edge) => {
    if (edgeMenu && changesEnabled) {
      closeEdgeMenu();
      return;
    }
    openEdgeMenu(event, edge);
  };

  const handleNodeEditSave: NonNullable<NodeEditFormProps['onSave']> = (
    updatedNode
  ) => {
    if (!changesEnabled) {
      return;
    }

    takeSnapshot();
    updateNode(updatedNode);
    closeDrawer();
  };

  const handleEdgeEditSave: EdgeEditModalProps['onSave'] = (edge) => {
    if (!changesEnabled) {
      return;
    }

    takeSnapshot();
    updateEdge(edge);
    closeEdgeEditModal();
  };

  const handleNodeClick: NonNullable<FlowPaneProps['onNodeClick']> = (
    event,
    node
  ) => {
    if (!changesEnabled) {
      return;
    }

    openDrawer(node);
  };

  const handleEdgeClick: NonNullable<FlowPaneProps['onEdgeClick']> = (
    event,
    edge
  ) => {
    if (!changesEnabled) {
      return;
    }

    invokeEdgeEditModal({ edge, onSave: handleEdgeEditSave });
  };

  const onVerticalClick = () => {
    onLayout('TB');
  };

  const onHorizontalClick = () => {
    onLayout('LR');
  };

  const toggleViewMode: NonNullable<FlowPaneProps['onToggleViewMode']> = () => {
    setViewMode((v) => {
      if (v === flowViewMode.standard) {
        return flowViewMode.enhanced;
      }

      return flowViewMode.standard;
    });
  };

  const handleExportFlow: NonNullable<FlowPaneProps['onExportFlow']> = () => {
    const preparedToBeExported: FlowSave = {
      nodes: appNodes,
      edges: appEdges,
    };

    const preparedJson = JSON.stringify(preparedToBeExported);

    const flowBlob = new Blob([preparedJson], { type: JSON_MIME_TYPE });

    const temporaryDownloadUrl = URL.createObjectURL(flowBlob);

    downloadFile(temporaryDownloadUrl, { filename: generateFlowSaveName() });

    URL.revokeObjectURL(temporaryDownloadUrl);
  };

  const handleImportFlow: NonNullable<FlowPaneProps['onImportFlow']> = (
    event
  ) => {
    const file = event.target.files?.[0];

    if (!file || file.type !== JSON_MIME_TYPE) {
      return alert('Please upload a JSON file');
    }

    const reader = new FileReader();

    reader.onload = (readEvent) => {
      const readFile = readEvent.target?.result;

      if (!readFile) {
        return alert('Failed to read the file');
      }

      if (typeof readFile !== 'string') {
        return alert('File is not a string');
      }

      const importedFlow = JSON.parse(readFile);

      assertIsFlowSave(importedFlow);

      setNodes(importedFlow.nodes);
      setEdges(importedFlow.edges);
    };

    reader.readAsText(file);
  };

  const handleNodeDragStart: NonNullable<
    FlowPaneProps['onNodeDragStart']
  > = () => {
    takeSnapshot();
  };

  const handleNodeConnectStart: NonNullable<
    FlowPaneProps['onConnectStart']
  > = () => {
    takeSnapshot();
  };

  const handleToggleEditMode: NonNullable<
    FlowPaneProps['onToggleEditMode']
  > = () => {
    setEditMode((previous) => {
      if (previous === flowEditMode.locked) {
        return flowEditMode.unlocked;
      }

      return flowEditMode.locked;
    });
  };

  return (
    <>
      <FlowPane
        nodesDraggable={changesEnabled}
        edgesReconnectable={changesEnabled}
        ref={paneRef}
        nodes={appNodes}
        edges={appEdges}
        viewMode={appViewMode}
        editMode={appEditMode}
        setNodes={setNodes}
        setEdges={setEdges}
        horizontalHelperLine={horizontalHelperLine}
        verticalHelperLine={verticalHelperLine}
        onNodesChange={onAppNodesChange}
        onEdgesChange={onAppEdgesChange}
        onConnect={onAppEdgesConnect}
        nodeTypes={nodeTypeMap as unknown as NodeTypes}
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
        onVerticalClick={onVerticalClick}
        onHorizontalClick={onHorizontalClick}
        onToggleViewMode={toggleViewMode}
        onExportFlow={handleExportFlow}
        onImportFlow={handleImportFlow}
        onNodeDragStart={handleNodeDragStart}
        onConnectStart={handleNodeConnectStart}
        onToggleEditMode={handleToggleEditMode}
        connectionLineType={EdgeType.Step}
        defaultEdgeOptions={{
          type: EdgeType.Step,
        }}
      />
      <PaneDrawer className="nowheel nodrag nopan" open={drawerOpen}>
        {nodeToEdit && changesEnabled && (
          <NodeEditForm node={nodeToEdit} onSave={handleNodeEditSave} />
        )}
      </PaneDrawer>
    </>
  );
};

export default HomePage;
