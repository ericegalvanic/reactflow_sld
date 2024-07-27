import FlowPane, { FlowPaneProps } from '../../ui/FlowPane';
import {
  useNodesState,
  useEdgesState,
  usePaneContextMenu,
  useAddNode,
} from '@/flow/hooks';
import { ElementRef, useCallback, useRef, useState } from 'react';
import { addEdge } from '@xyflow/react';
import { ContextMenu, nodeTypeMap } from '@/flow/entities';
import { initialEdges, initialNodes } from './HomePage.nodes';
import { Nullable } from '@/common/types';

const HomePage: React.FC = () => {
  const [appNodes, setNodes, onAppNodesChange] = useNodesState(initialNodes);
  const [appEdges, setEdges, onAppEdgesChange] = useEdgesState(initialEdges);
  const [paneMenu, setPaneMenu] = useState<Nullable<ContextMenu>>(null);

  const paneRef = useRef<ElementRef<typeof FlowPane>>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onAppEdgesConnect = useCallback(
    ((connection) =>
      setEdges((edges) =>
        addEdge(connection, edges)
      )) satisfies FlowPaneProps['onConnect'],
    []
  );

  const { openMenu, closeMenu } = usePaneContextMenu(paneRef, setPaneMenu);

  const createNode = useAddNode(setNodes);

  const handleNodeCreate = () => {
    if (paneMenu) {
      createNode(paneMenu.position);
      closeMenu();
    }
  };

  return (
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
      onContextMenu={openMenu as unknown as FlowPaneProps['onContextMenu']}
      onPaneClick={closeMenu}
      paneMenu={paneMenu}
      onNodeCreate={handleNodeCreate}
    />
  );
};

export default HomePage;
